import {useState} from "react";

const Register = () => {
    
    //defino los estados
    const [formData, setFormData] = useState({name : '', email : '', password : ''});

    const HandlerChange = (event) => {
        const {name, value} = event.target
        
        // console.log(name, value);

        setFormData( {...formData, [name]: value} )
    }

    //evitamos la recarga (ostia como en el fortnite)
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log('enviando formulario');
            console.log(formData);
            
            const endPoint = "http://127.0.0.1:3000/api/users/"

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            }

            const response = await fetch(endPoint, config);
            if(! response.ok){
                console.error(response);
            }
            
            const data = await response.json();

            console.log(data);

            setFormData({
                name: '',
                email: '',
                password: '',
            })

        }
        catch (error) {
            console.log(error);
            alert('error a la burger');
        }
    }

    return(
        <div className="container">
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit} className="card p-4">
                <label htmlFor="" >Nombre</label>
                <input className="" type="text" name="name" onChange={HandlerChange} value={formData.nombre}></input>
                
                <label htmlFor="" >Email</label>
                <input type="email" name="email" onChange={HandlerChange} value={formData.email}></input>
                
                <label htmlFor="" >Contraseña</label>
                <input type="password" name="password" onChange={HandlerChange} value={formData.password}></input>
                
                <button type="submit">Registrarse</button>
                
                {/* <label htmlFor="" ></label>
                <input className="" type="text"></input>     */}
            </form>
        </div>
    )
}

export default Register;