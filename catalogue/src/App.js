import {  Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import { useState } from "react";


function App() {
  const [products, setProducts] = useState([]);

  function updateProducts(product) {
    setProducts([...products, product]);
  }


  
  return (
    <div className="app">
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/catalogue" element={<Catalogue updateProducts={updateProducts}/>} />
        
      </Routes>
      
     
    </div>
  );
}

export default App;
