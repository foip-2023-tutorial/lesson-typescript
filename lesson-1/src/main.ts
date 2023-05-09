import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div id="todo"></div>`

// ここから下にコードを書いていきましょう。

// TODO: 初めに#todoの要素の中にul要素を追加してください。
//       ul要素のidはtodo-listにしてください。
function setupTodoList(elem: HTMLDivElement){
  
}
// HINT: この関数の実行後、以下のようなHTMLができればOKです。
//      <div id="todo">
//        <ul id="todo-list"></ul>
//      </div>
// HINT: 要素にidを付与するには、setAttributeメソッドを使います。
//       例: element.setAttribute('id', '好きなid名')
// HINT: 引数のelemは、#todoの要素を指します。
//       setupTodoInputに関しても同様です。


// TODO: 初めに#todoの要素の中にinput要素とbutton要素を追加してください。
//       input要素のtypeはtextにしてください。
//       button要素のテキストはaddにしてください。
//       button要素のクリックイベントを追加してください。
//       最後にinput要素とbutton要素を#todoの要素の子要素として追加してください。
//       button要素がクリックされたら、input要素の値を取得して、addTodoList関数を呼び出してください。
function setupTodoInput(elem: HTMLDivElement){
  
}
// HINT: この関数の実行後、以下のようなHTMLができればOKです。
//      <div id="todo">
//        <ul id="todo-list"></ul>
//        <input type="text">
//        <button>add</button>
//      </div>
// HINT: 要素のテキストを設定するには、innerTextプロパティを使います。
// HINT: 要素のクリックイベントを追加するには、addEventListenerメソッドを使います。
//       例: element.addEventListener('click', () => { ... })

// TODO: 以下の関数を完成させてください。
//       引数で受け取ったテキストでli要素を作成して、#todo-listの子要素として追加してください。
//       また、li要素の中にbutton要素を作成して、クリックイベントを追加してください。
//       button要素がクリックされたら、#todo-listの子要素から追加されたli要素を削除してください。
const addTodoList = (text: string)=>{
  
}
// HINT: この関数の実行後にtodoを追加後、以下のようなHTMLができればOKです。
//      <div id="todo">
//        <ul id="todo-list">
//          <li>テキスト<button>done</button></li>
//        </ul>
//        <input type="text">
//        <button>add</button>
//      </div>
// HINT: 要素を取得するためには、querySelectorメソッドを使います。
//       例: document.querySelector('好きなセレクタ')


// ここから下は変更しないでください。

setupTodoList(document.querySelector<HTMLDivElement>('#todo')!)
setupTodoInput(document.querySelector<HTMLDivElement>('#todo')!)
