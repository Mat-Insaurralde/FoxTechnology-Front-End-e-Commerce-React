import "./carouselCategories.css"
import { getCategories } from "../../Services/ApiEcommerce";
import { useEffect, useState } from "react";
import CardCategory from './../CardCategory/CardCategory';


function CarouselCategories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories().then((response) => {
            
            setCategories(response);
            
        }).catch((error) => {
            console.log(error);
        })
    }, [])





    return (
        <section className="section-2">
            <h3>Compre en las categorias <span>principales</span></h3>

            <div className="carousel-categories" >
            {
  categories.map((category) => (
    <CardCategory key={category.id} category={category} />
  ))
}




            </div>

        </section>
    )
}

export default CarouselCategories
