import React, { useState } from 'react'

function Home() {
    const [Admin, setAdmin] = useState(false)
    const sum = (a,b) => {
        return a+b
    }
  return (
    <div className='ml-4 mt-2'>
        <h1 className='text-4xl font-bold'>Home</h1>
        <button className='bg-slate-200 p-2 border border-gray-900 rounded-sm' onClick={()=>alert(sum(2,2))}>Add 2+2</button>
        <button className='rounded-sm ml-2 border border-gray-900 bg-slate-200 p-2' onClick={()=> {setAdmin(prev => !prev)}}>Toggle Admin</button>
        <h2 className='text-3xl font-bold'>{Admin? 'Admin': 'You are not an Admin'}</h2>
    </div>
  )
}

export default Home