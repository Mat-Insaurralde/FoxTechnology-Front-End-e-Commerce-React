import "./footer.css";
import mask from "../../img/Mask group.png";
import imgPlayStore from "../../img/Footer-google-play.png";
import imgAppleStore from "../../img/Footer-App-store.png"


function Footer() {



  return (
    <footer>
      <img className="mask" src={mask} alt="" />


      <div className="conteiner-lists" >


        <div className="lista-1">

           <h1 className="logo-footer">FoxTechnology</h1>

          <p>Contacta con nosotros</p>

          <p>WhatsApp <i className="ri-whatsapp-line"> </i> <br />+1 202-918-2132  </p>
          <p>Telefono   <i className="ri-smartphone-line"></i> <br />+1 202-918-2132</p>

          <p>Descargar la aplicación</p>
          <img src={imgAppleStore} alt="" />
          <img src={imgPlayStore} alt="" />


        </div>

        <div className="lista-2">

          <p>Categorías más populares</p>
          <ul>
            <li>Smartphones</li>
            <li>SmartTv</li>
            <li>Tablets</li>
            <li>PC Gamer</li>
            <li>Perifericos</li>
            <li>Auriculares
            </li>
            <li>Cargadores
            </li>
          </ul>

        </div>

        <div className="lista-3">

          <p>Servicios al cliente</p>
          <ul>
            <li>Sobre nosotros</li>
            <li>Términos y condiciones</li>
            <li>Preguntas más frecuentes</li>
            <li>política de privacidad</li>
            <li>Política de residuos electrónicos</li>
            <li>Política de cancelación y devolución</li>

          </ul>

        </div>


      </div>

<div className="reserved">  <p>© {new Date().getFullYear()} Developer web Javier Insaurralde </p>     </div>
 

    </footer>
  )
}

export default Footer
