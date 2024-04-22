import axios  from "./axios";


export  function  getProducts() {

const response = axios.get("/products")

.then( (respuesta) => {

 
    return respuesta.data;
  })

  .catch( (error) => {
   
    console.error(error);
  });

return response;
}



export  function  getCategories() {

  const response = axios.get("/products/find/categories")
  
  .then( (respuesta) => {
  
      console.log(respuesta.data.payload);
      return respuesta.data.payload;
    })
  
    .catch( (error) => {
     
      console.error(error);
    });
  
  return response;
  }