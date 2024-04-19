import "./header.css"
import banner from "../../img/banner.jpg";


function Header() {
  return (
    <header>
        
         <div className="content-banner">

         <img src={banner} className="banner" alt="" />

         </div>
      
    </header>
  )
}

export default Header

