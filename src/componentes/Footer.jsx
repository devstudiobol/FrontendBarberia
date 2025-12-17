import React from "react";
import '../hojas-de-estilo/Footer.css';
import Facebook from '../imagenes/Footer-img/facebook.png'
import Instagram from '../imagenes/Footer-img/instagram.png'
import WhatsApp from '../imagenes/Footer-img/whatsApp.png'
function Footer(){
    return(
    <footer>
        <div className="texto">
            <br/>
            <h3>Sigue en nuestras Redes:</h3>
        </div>
        <div className="imagenes">
            <img src={Facebook} alt="" />
    
            <img src={Instagram} alt="" />
            <img src={WhatsApp} alt="" />
        </div>
        
        <div className="derecho">
        <p>Todos los derechos Reservados 2024 LMP</p>
        </div>
    </footer>);
}

export default Footer