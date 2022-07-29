import {  Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import { useState,useEffect } from "react";
import Reviews from "./components/Reviews";

function App() {
  const [products, setProducts] = useState([]);

  function updateProducts(product) {
    setProducts([...products, product]);
  }

    
  useEffect(() => {
    fetch("https://damp-journey-46873.herokuapp.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);


  
  return (
    <div className="app">
         <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
         <Route path="/catalogue" element={<Catalogue updateProducts={updateProducts} setProducts={setProducts} products={products}/>} />
         <Route path="/reviews" element={<Reviews setProducts={setProducts} products={products} />} />
      </Routes>
      
     
    </div>
  );
}

export default App;
