import React, { useEffect, useReducer , useRef, useMemo, memo, useState} from 'react'

function Footer({word, getWord}) { 
  console.log("footer is rendered")
  return (
    <div>
      <span>word is {word}</span>
      <button className='ml-4 bg-slate-500' onClick={()=> getWord()}>{getWord()}</button>
    </div>
  )
}

export default memo(Footer)