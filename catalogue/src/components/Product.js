

function Product({ id, name, author, image,favorite,updateProducts }) {
 
  

  
        
     

  function addToFavourite(){
    fetch(`http://localhost:8004/poems/${id}`,{
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
      <p>{image}</p>
      <p>
        <strong>- By {author}</strong>
      </p>

      <button onClick={addToFavourite}>
        {favorite? "Remove Favourite":"Add Favourite"}</button>
        
        
     
    </div>
  );
}

export default Product;

