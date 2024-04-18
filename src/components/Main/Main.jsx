
import { useSelector } from "react-redux"
import CarouselCategories from "../CarouselCategories/CarouselCategories"
import CarouselProducts from "../CarouselProducts/CarouselProducts"


function Main() {
  const user =  useSelector((state) => state.user.user)

console.log(user);

  return (



    <main>

      <CarouselProducts />
      <CarouselCategories />

    </main>



  )
}

export default Main
