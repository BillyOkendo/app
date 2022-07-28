import Product from "./Product";
import { useState } from "react";

function ProductsContainer({ products, setProducts }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  function updateProducts(data) {
    const updatedProducts = products.map((product) => {
      if (product.id === data.id) {
        return data;
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  const filteredProducts = products.filter((product) => {
    if (selectedOption === "All") {
      return product;
    }
    return product.favourite === true && selectedOption === "favourite";
  });

  const showProducts = filteredProducts.map((product) => {
    return (
      <Product
        favorite={product.favourite}
        
        key={product.id}
        id={product.id}
        name={product.name}
        content={product.content}
        description={product.description}
        updateProducts={updateProducts}
      />
    );
  });

  return (
    <div className="poems-container">
      <select onChange={handleSelect} value={selectedOption}>
        <option value="All">All Products</option>
        <option value="favourite">My Cart</option>
      </select>

      {showProducts}
    </div>
  );
}

export default ProductsContainer;
