

function Product({ id, name, description, image,favorite,updateProducts }) {
 
  

  
        
     

  function addToFavourite(){
    fetch(`http://localhost:3000/products${id}`,{
      method:"PATCH",
      headers:{
        'Content-Type':"Application/json",
        'Accept':'Application/json'
      },
      body:JSON.stringify({favourite:!favorite})
    })
    .then(response=>response.json())
    .then(data=>updateProducts(data))
    
    .catch(error=>console.log(error))
  }



  return (
    <div id={id}>
      <h3>{name}</h3>
      <img src={image} alt="product"/>
      <p>
        <strong>{description}</strong>
      </p>

      <button onClick={addToFavourite}>
        {favorite? "Remove Favourite":"Add Favourite"}</button>
        
        
     
    </div>
  );
}

export default Product;

