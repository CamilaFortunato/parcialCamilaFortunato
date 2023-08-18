import { useState } from "react";

function Form ({onSubmit}){
    const [nombre,setNombre] = useState("");
    const [materia,setMateria] = useState("");
   
    const handleSubmit = (e) =>{
        e.preventDefault();

        onSubmit({nombre, materia});
    }
    
    return(
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>      
        <div>
            <input type="text" placeholder="Ingrese su materia favorita" value={materia} onChange={(e) => setMateria(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
        </form>
        
    )
}
export default Form;

