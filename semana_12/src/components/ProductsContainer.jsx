import React from 'react';
import {useState} from 'react';
import '../App.css'
import Button from './Button';


const ProductsContainer = (props) => {
    
    const [count, setCount] = useState(0);
    
    function sumarProductos(cant){
        console.log('sumar')
        setCount(count + 1);
    }

    function restarProductos(cant){
        setCount(count - 1);
    }


    return (
        <div className="bg-blue">
            <h2>Lista de productos</h2>
            <p>Carrito {count}</p>
            <hr />

            <Button text="sumar" handleClick={sumarProductos}/>
            <Button color="red" handleClick={restarProductos} text="restar"/>
            <Button count={count} text="otro"/>

            <div className='row'>
            {props.children}
            </div>
        </div>
    )
}

export default ProductsContainer