import { useParams } from "react-router-dom";

const Details = () => {

    const {id} = useParams;

    return(
        <>
            <h2>Detalle de {id} </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, excepturi suscipit asperiores dicta cum reiciendis, ut error accusamus quos quia amet laudantium ex a nihil, minima est harum voluptatibus incidunt.</p>
        </>
    )
}

export default Details;