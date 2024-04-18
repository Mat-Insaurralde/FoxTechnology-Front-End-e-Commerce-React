import { useForm } from "react-hook-form";
import "./login.css";
import { cookieUserRequest, loginRequest } from "../../Services/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/features/userSlice";





function Login() {
    const usedispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();





    const onSubmit = handleSubmit(async (values) => {

        loginRequest(values);

        const user = await cookieUserRequest()

        if (user != undefined) {

            usedispatch(setUser(user));

            navigate('/*');
        }

    } )








    return (
        <div className="container-login">

            <h3>Iniciar sesion</h3>

            <form onSubmit={onSubmit}>

                <label htmlFor="email">Email: </label>
                <input type="email" {...register('email', { required: true })} />

                <label htmlFor="password">Contraseña</label>
                <input type="password" {...register('password', { required: true })} />


                <input type="submit" value="Iniciar Sesion" />

            </form>

        </div>
    )
}

export default Login
