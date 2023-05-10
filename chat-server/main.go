package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool { // allow all connections by default
		return true
	},
}

type Client struct {
	conn *websocket.Conn
	hub  *Hub
	send chan Message
}

type Hub struct {
	clients    map[*Client]bool
	broadcast  chan Message
	unregister chan *Client
	register   chan *Client
}

type Message struct {
	Event string `json:"event"`
	Data  string `json:"data"`
}

func (h *Hub) run() {
	for {
		select {
		case client := <-h.unregister:
			delete(h.clients, client)
		case message := <-h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		case client := <-h.register:
			h.clients[client] = true
			for client := range h.clients {
				select {
				case client.send <- Message{Event: "newUser", Data: "new user joined"}:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}

func (c *Client) handleMessage() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()

	for {
		message := Message{}
		err := c.conn.ReadJSON(&message)
		if err != nil {
			log.Printf("error: %v", err)
			return
		}
		c.hub.broadcast <- message
	}
}

func (c *Client) handleSend() {
	ticker := time.NewTicker(5 * time.Second)
	for {
		select {
		case mes, ok := <-c.send:
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}
			c.conn.WriteJSON(mes)
		case <-ticker.C:
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func main() {
	hub := Hub{
		clients:    make(map[*Client]bool),
		broadcast:  make(chan Message),
		unregister: make(chan *Client),
		register:   make(chan *Client),
	}

	go hub.run()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		conn, err := upgrader.Upgrade(w, r, nil)

		if err != nil {
			fmt.Println(err)
			return
		}

		client := &Client{conn: conn, hub: &hub, send: make(chan Message, 256)}

		hub.register <- client

		go client.handleMessage()
		go client.handleSend()
	})

	http.ListenAndServe(":8080", nil)
}
