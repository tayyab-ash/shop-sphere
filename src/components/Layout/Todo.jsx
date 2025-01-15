import React from 'react'
import { ACTIONS } from './Footer'

function Todo({todo, dispatch}) {
  return (
    <div > 
        <span className='ml-4 mr-4' style={{color: todo.complete? '#AAA': '#000'}}>{todo.name}</span>
        <button onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload:{id: todo.id} })} className='bg-slate-500' >Toggle</button>
        <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload:{id: todo.id} })} className='bg-red-500 m-2' >Delete</button>
    </div>
  )
}

export default Todo