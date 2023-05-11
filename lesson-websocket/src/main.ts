document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="websocket"></div>
`

// MEMO: WebSocketのメッセージの型
type Message = {
  event: string
  data: string
}

// TODO: 以下のコードを完成させる

// TODO: チャットアプリのUIを作成する関数を実装する
//       以下の要素を作成し、引数で渡された要素に追加する
//       - ul要素(id: chat-list)
//       - input要素(id: chat-input, type: text)
//       - button要素(id: chat-button, textContent: 送信)
function setup(elem: HTMLDivElement){
  // implement here
}

// MEMO: websocketサーバと接続している
const ws = new WebSocket('ws://localhost:8080')

// TODO: WebSocketのイベントリスナーを設定する
//       - メッセージを受信したら、以下の要素を作成し、chat-listに追加する
//         - li要素(textContent: 受信したメッセージ)
//       - #chat-buttonをクリックしたら、#chat-inputの値を送信する
//         - 送信するデータは、以下の形式のJSON文字列
//           - {event: "message", data: "送信するメッセージ"}
// TODO: メッセージの送信に関しては自分で調べること
//       参考になりそうなurl: https://developer.mozilla.org/ja/docs/Web/API/WebSocket
//                         https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
function addListener(ws: WebSocket){
  // implement here
}
// HINT: chatサーバからメッセージを受け取った際に呼び出されるハンドラは以下のように定義できる
//       ws.onmessage = (e) => { 任意の処理 }
// HINT: 受信したメッセージは以下のように取得できる
//       const message = JSON.parse(e.data)
//       加えて、型を指定することで、messageの型を指定できる
//       const message = JSON.parse(e.data) as Message


// MEMO: 以下のコードは変更しない
setup(document.querySelector<HTMLDivElement>('#websocket')!);
addListener(ws);