import React from 'react'
import ProductsContainer from './ProductsContainer'

function Home({setProducts,products}) {
  return (
    <div>
       <ProductsContainer products={products} setProducts={setProducts} />
    </div>
  )
}

export default Home