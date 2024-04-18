import "./cardProduct.css"
import imgPrueba from "../../img/image 3.png"

function CardProduct({ product }) {

    return (

        <div className="conteiner-card" >

            <div className="conteiner-img-product">

                <img src={imgPrueba} alt="" />

            </div>


            <div className="info-product">

                <p>{product.title} </p>
                <p>${product.price} </p>

                <p className={product.stock==0 ? "red" : "green"}>
                {product.stock == 0 ? "Sin stock" : "En Stock"}</p>
                
                



            </div>




        </div>
    )
}

export default CardProduct
