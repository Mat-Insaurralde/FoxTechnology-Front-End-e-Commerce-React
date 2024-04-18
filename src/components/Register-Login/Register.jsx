import "./register.css";
import { registerRequest } from './../../Services/Auth';
import{useForm} from 'react-hook-form'

function RegisterUser() {
const {register, handleSubmit} = useForm();




  return (
    <div className="container-singin">


      <h2>Registrarse</h2>


      <form onSubmit={handleSubmit(values=>{registerRequest(values)})}>

        <label htmlFor="nombre">Nombre: </label>
        <input type="text" {...register('first_name',{required:true})} />

        <label htmlFor="apellido">Apellido: </label>
        <input type="text" {...register('last_name',{required:true})}  />

        <label htmlFor="edad">Edad: </label>
        <input type="number" {...register('age',{required:true}) } />

        <label htmlFor="email">Email: </label>
        <input type="email" {...register('email',{required:true})}  />

        <label htmlFor="password">Contraseña: </label>
        <input type="text" {...register('password',{required:true})} />



        <input type="submit" value="Registrarme" />

      </form>



    </div>
  )
}

export default RegisterUser
