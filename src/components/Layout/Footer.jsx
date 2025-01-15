import React, { useReducer , useState} from 'react'
import Todo from './Todo'

export const ACTIONS = { 
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'

}

function reducer(todos, action) {
   switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
      
   }

}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false } 
}

function Footer() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => { 
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }
  
  console.log(todos)
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" className='border-gray-950 border-2 mt-4 ml-4 outline-none p-2' value={name} onChange={e =>  setName(e.target.value)} />
        </form>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
    </div>
  )
}

export default Footer