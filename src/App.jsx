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
  return (
    <>
    <Router>
        <Header/>
        <Footer />
    </Router>
    </>
  )
}

export default App
