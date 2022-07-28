
import React, { useState, useEffect } from "react";
import ProductsContainer from "./ProductsContainer"

function Catalogue() {

    function updateProducts(product) {
        setProducts([...products, product]);
      }
    
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
    <div className='cata'>
 <ProductsContainer products={products} setProducts={setProducts} />
    </div>
  )
}

export default Catalogue