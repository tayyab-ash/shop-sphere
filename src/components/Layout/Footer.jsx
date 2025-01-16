import React, { useEffect, useReducer , useRef, useMemo, memo, useState, useTransition, } from 'react'

// const ACTIONS = {
//   INPUT: "input",
//   NEW_LIST: "new_list",

// }
// const reducer = (state, action) => {
//   switch (action.type){
//     case ACTIONS.INPUT:
//       return {...state, input: action.payload}
//       case ACTIONS.NEW_LIST:
//         return {...state, list: action.payload}
//       default:
//         return state
//   } 
// }

function Footer() { 
  const [isPending, startTransition] = useTransition()
  // const [state, dispatch] = useReducer(reducer, {input: "", list: []})
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const LIST_SIZE =20000

  const handleChanges = (e) => {
    // dispatch({type:ACTIONS.INPUT, payload: e.target.value})
    setInput(e.target.value)
    startTransition(() => {
      const newList = []
      for (let i = 0; i < LIST_SIZE; i++){
      newList.push(e.target.value)
    }
    setList(newList)
    // dispatch({type: ACTIONS.NEW_LIST, payload: newList})
  })
}

  return (
    <div>
      <input className='m-4 p-2 border border-black' type="text" value={input} onChange={handleChanges} />
      { isPending ? "Loading..." : 
        list.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }
    </div>
  )
}

export default memo(Footer)