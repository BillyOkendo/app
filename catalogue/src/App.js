import {  Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Catalogue from './components/Catalogue';


function App() {



  
  return (
    <div className="app">
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/catalogue" element={<Catalogue />} />
        
      </Routes>
      
     
    </div>
  );
}

export default App;
