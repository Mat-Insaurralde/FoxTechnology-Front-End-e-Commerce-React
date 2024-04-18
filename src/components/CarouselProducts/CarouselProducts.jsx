import { useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./carouselProducts.css";
import { useEffect } from "react";
import { getProducts } from "../../Services/ApiEcommerce";

function CarouselCard() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts().then((response) => {
            setProductos(response.payload.docs);
        })
    }, [])





    return (

        <section className="section-1">

            <h3>Consegui el mejor precio en <span>Smartphones</span></h3>
    
                <div className="carousel-card">
                <i className="ri-arrow-left-s-line"></i>
               
                   {productos.map(producto => (
                    <CardProduct key={producto.id} product={producto} />
                   )
                      )
                     }
             <i className="ri-arrow-right-s-line"></i>
         
                </div>

        </section>




    )
}

export default CarouselCard

