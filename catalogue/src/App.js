import React, { useState, useEffect } from "react";
import ProductsContainer from "./components/ProductsContainer";


function App() {




const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

 

      function addProducts(product){
        setProducts([...products,product])
      }



  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={formShowing}>Show/hide new poem form</button>
      {isOpen?<NewProductForm addProducts={addProducts}/>:null}
      </div>
      <ProductsContainer products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
