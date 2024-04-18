import "./carouselCategories.css"
import { getCategories } from "../../Services/ApiEcommerce";
import { useEffect, useState } from "react";


function CarouselCategories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories().then((response) => {
            setCategories(response);
        })
    }, [])





    return (
        <section className="section-2">
            <h3>Compre en las categorias <span>principales</span></h3>

            <div className="carousel-categories" >
                {/* {categories.map((category) => {
            // console.log( category.category);
           
                
                })} */}

            </div>

        </section>
    )
}

export default CarouselCategories
