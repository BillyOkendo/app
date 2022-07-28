
import ProductsContainer from "./ProductsContainer";

function Catalogue({products,setProducts}) {
  return (
    <div className="cata">
      <ProductsContainer products={products} setProducts={setProducts} />
    </div>
  );
}

export default Catalogue;
