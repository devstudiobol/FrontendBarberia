import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
         <img className='imagen-testimonio'
            src={require(`../imagenes/image${props.imagen}.png`)}
            alt='carrusel'/>
        </div>
    );
}

export default Testimonio;