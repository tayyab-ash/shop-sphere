import { useCallback, useState } from 'react';
import './App.css'
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(1);
  const [word, setWord] = useState("good")

  // const getWord = () => { 
  //   return "another" + count; 
  // } 

  const getWord = useCallback(() => { 
    return "another" + count; 
  } ,[count]) 

  return (
    <>
    <Router>
        <Header/>
        <Footer word={"good"} getWord={getWord} />
    </Router>
    <button className='mr-4' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <span>{count}</span>
    </>
  )
}

export default App
