import "./Navbar.css"
// import logo from "../../img/MegaMart.png"
// import menu from "../../img/Rectangulo 3.png"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "../../Redux/features/themeSlice";

function Navbar() {
    const theme = useSelector((state) => state.theme.theme);
    const valueTheme = useSelector((state) => state.theme.value);
    const usedispatch = useDispatch();

    console.log('Tema :' + theme);


    return (
        <nav>
            <section className={`nav-section-2 ${theme}`}>


                <div className="container-logo">
                    <button className="menu-left"><i className="ri-menu-line "></i></button>
                    <Link to={'/*'}><h1 className="logo-text">FoxTechnology</h1> </Link>
                </div>



                <div className="">

                    <label htmlFor="" className="input-search">
                        <i className="ri-search-line"></i>
                        <input type="search" placeholder="Buscar producto.." />
                        <i className="ri-list-check"></i>
                    </label>


                    <i className={valueTheme ? "ri-sun-line" : "ri-moon-line"}
                        onClick={() => usedispatch(changeTheme())}
                    ></i>



                    <i className="ri-user-3-line"></i>

                    <strong>

                        <Link to={'/login'}>
                            Iniciar Sesion  </Link>
                        /
                        <Link to={'/register'}>
                            Registrarme
                        </Link>

                    </strong>

                    <a href="#" className="header__search--cart cart"><i className="ri-shopping-cart-line" />
                    </a>
                </div>
            </section>



        </nav>
    )
}

export default Navbar
