import ProductsContainer from "../components/ProductsContainer";
import Card from "../components/Card";
import Button from "../components/Button";

import { useState } from "react";

const Home = () => {

let[logueado, setLogueado] = useState(false);

let mensaje = logueado == true ? 'Bienvenido' : 'iniciar sesión';
// const [users, setUsers] = useState([]);
// useEffect(()=>{
// const getUsers = async () =>{
// const endPoint = 'http://127.0.0.1:3000/api/users';
// const resp = await fetch(endPoint);
// const users = await resp.json();
// setUsers(users)
// console.log(users);
// }

// getUsers();
// }, [])

let nombre = "Jose";
const productos = [
{id: 1, nombre: 'mate', precio: 500},
{id: 2, nombre: 'galletitas', precio: 100},
{id: 3, nombre: 'zapatillas', precio: 2500}
]
const cursos = ['HTML', 'JS', 'React'];
let titulo = <h2>esto es un titulo what</h2>;
const login = () => {
console.log('fn iniciado en login')
setLogueado(true);
}

const logout = () =>{
setLogueado(false);
}

console.log('se renderizó el componente ala toilet')


return(
<>
    <h2>Inicio</h2>
    {titulo}
    <h4> {mensaje} </h4>
    <Button color="red" text="ejemplo" />

    <hr />
    <button onClick={ login } type='button'> login </button>
    <button onClick={ logout } type='button'> logout </button>
    {
    logueado == true ? (
    <>

        <h4 className='verde'>hola {nombre}</h4>

        <ProductsContainer>

            {
            productos.map(producto => (
            <Card
            key={producto.id} 
            id={producto.id}
            texto={producto.nombre} 
            precio={producto.precio} 
            />
            ))
            }

        </ProductsContainer>
    </>
    ) :
    (
    <h4> iniciá sesión <a href='q'>Login</a> </h4>
    )

    }
</>
)
}

export default Home;
