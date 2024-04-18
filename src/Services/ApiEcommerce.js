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

  const response = axios.get("/products")
  
  .then( (respuesta) => {
  
   
      return respuesta.data.payload.docs;
    })
  
    .catch( (error) => {
     
      console.error(error);
    });
  
  return response;
  }