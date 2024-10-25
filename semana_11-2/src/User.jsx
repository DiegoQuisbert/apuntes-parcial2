import React from 'react';
import './App.css'

function User ( {name, email} ){
    // const precio = props.precio;

    console.log(name, email);
    // const name = props.name;
    // const email = props.email;
    
    return(
        <div className='user'>
            <h4> {name} </h4>
            <hr />
            <p>Email: {email}</p>
        </div>    
    )
}


export default User;