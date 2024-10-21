import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Card'
import Card from './Card';
import User from './User';

import {useState, useEffect} from 'react';

function App() {

  const [users, setUsers] = useState([]);

useEffect(()=>{
  const getUsers = async () =>{
    const endPoint = 'http://127.0.0.1:3000/api/users';
    const resp = await fetch(endPoint);
    const users = await resp.json();
    setUsers(users)
    console.log(users);
  }

  getUsers();
}, [])

  let nombre = "Jose";
  let edad = 21;
  const cursos = ['HTML', 'JS', 'React'];
  let titulo = <h2>esto es un titulo what</h2>;
  const userData = {
    name: 'Juan',
    email: 'juan@gmail.com'
  }
  
  return (
    <div>
      <h1>apps híbridas</h1>
      <User 
      name={userData.name}
      email={userData.email}
      />
      {titulo}
      <Card texto="Termo" precio={3000}/>
      <Card texto="Mate" precio={5000} />

      <p className='verde'>hola {nombre} </p>
      <p> {edad + 2} </p>
      <p>{cursos[2]}</p>
    </div>
  )
}

export default App
