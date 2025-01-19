import { lazy, Suspense, useCallback, useState } from "react";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './components/Layout/Home';
import Store from "./components/Layout/Store";
import About from "./components/Layout/About";


// will load the component only when it is needed i.e when clicked on the link, but wont display the compnent for that we have to use suspense.
const Home = lazy(() => import("./components/Layout/Home"));

function App() {
  return (
    <>
      <Router>
        <Header />
        {<NavWrapper />}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
    </>
  );
}

export default App;
