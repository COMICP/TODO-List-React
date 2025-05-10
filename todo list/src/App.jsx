import { useState } from "react"
import "./style.css"

export default function App() {

  const [newitem, setNewItem] = useState("")
  const[todos, setTodos] = useState([])
  function handleSub(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title: newitem, completed: false},
      ]
    })
  }

  return <>
  <form onSubmit={handleSub} className = "new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newitem}
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item" />
    </div>
    <button className="butt">add</button>
  </form>
  <h1 className="Header">Todo List</h1> 
  <ul className="list">
    {todos.map(todo=> {
      return(
        <li key={todo.id}>
          <label htmlFor="">
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      )
    })}
  </ul>
  </>
}