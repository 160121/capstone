//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header'
import Cart from "./pages/cart"
import Photos from "./pages/images"

function App() {    
    return (
      <div>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/">
              <Photos />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App
