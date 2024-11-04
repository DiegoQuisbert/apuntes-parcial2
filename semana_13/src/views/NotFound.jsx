import { Link } from "react-router-dom";

const NotFound = () => {

    return(
        <>
            <h2>NotFound</h2>
            <p>Ostras tú q no he encontrao na</p>
            <Link to='/'>Regresar al inicio</Link>
        </>
    )
}

export default NotFound;