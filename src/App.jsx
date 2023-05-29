//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
      <div>
        <Router>
        <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<Photos />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </Router>
      </div>
    );
}

export default App
