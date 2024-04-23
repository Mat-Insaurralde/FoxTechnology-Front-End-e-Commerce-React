
import { useSelector } from "react-redux"
import CarouselCategories from "../CarouselCategories/CarouselCategories"
import CarouselProducts from "../CarouselProducts/CarouselProducts"
import "./main.css";
import Banners from "../Banners/Banners";

function Main() {
  const user =  useSelector((state) => state.user.user)

console.log(user);

  return (



    <main>

      <Banners/>
      <CarouselProducts />
      <CarouselCategories />

    </main>



  )
}

export default Main
