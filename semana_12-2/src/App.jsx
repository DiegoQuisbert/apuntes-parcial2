import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import ProductContainer from './components/ProductsContainer';

import './App.css';
import './components/Card';
import Card from './components/Card';
import Button from './components/Button';
import Home from './views/Home';
import Login from './views/Login';
import Details from './views/Details';
import Contact from './views/Contact';

import NotFound from './views/NotFound';

import { Routes, Route, NavLink, Link } from 'react-router-dom';

// import User from './User';

import {useState} from 'react';


function App() {


return (
<div>
    <h1>apps híbridas</h1>
    <hr />
    <nav>
      <ul>
        <li>
          <NavLink to="/" >Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/Login" >login</NavLink>
        </li>
        <li>
          <NavLink to="/details" >Detalles</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" >Contactos</NavLink>
        </li>
      </ul>
    </nav>
{/* El área donde se van a mostrar los componentes o views*/}
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/details/:id' element={<Details/>} />
  <Route path='*' element={ <NotFound/> }></Route>
</Routes>

    

</div>
)
}

export default App
