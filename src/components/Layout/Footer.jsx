import React, { useEffect, useReducer , useRef, useState} from 'react'



function Footer() {
  const [first, setfirst] = useState(0)
  let a = 0;
  let b = useRef(0);
  let btnRef =useRef()

  function handleClick() {
    setfirst(first + 1);
    
  }
  useEffect(() => {
    console.log(`Rendering.... ${a++} ... and ${b.current++}`)
    btnRef.current.style.backgroundColor = 'red'
  })
  

  return (
    <div>
      <span>{first}</span>
        <button ref={btnRef} onClick={handleClick}>Counter</button>
    </div>
  )
}

export default Footer