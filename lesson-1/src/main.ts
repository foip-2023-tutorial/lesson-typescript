import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="todo"></div>
  </div>
`

function setupTodoList(elem: HTMLDivElement){
  elem.innerHTML = `<p>TODO: implement me!!</p>`
}

setupTodoList(document.querySelector<HTMLDivElement>('#todo')!)
