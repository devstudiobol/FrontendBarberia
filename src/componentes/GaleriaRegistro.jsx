import React from "react";
import '../hojas-de-estilo/galeria.css'
import NavBarRegistro from "./NavBarRegistro";
import Footer from './Footer';
export default function Galeria() {
    return (
        
        <div className="Contenedor">
            <NavBarRegistro/>
            <div className="titulo">
                <h2>Galeria de Cortes</h2>
            </div>
            <div className="galeria">
                <div className="fila1">
                    <img src="img/galeria/ga1.png" alt="" />
                    <img src="img/galeria/ga2.png" alt="" />
                    <img src="img/galeria/ga3.png" alt="" />
                    <img src="img/galeria/ga4.png" alt="" />

                </div>
                <div className="fila2">
                    <img src="img/galeria/ga5.png" alt="" />
                    <img src="img/galeria/ga6.png" alt="" />
                    <img src="img/galeria/ga7.png" alt="" />
                    <img src="img/galeria/ga8.png" alt="" />
                </div>

                <div className="fila3">
                    <img src="img/galeria/ga9.png" alt="" />
                    <img src="img/galeria/ga10.png" alt="" />
                    <img src="img/galeria/ga11.png" alt="" />
                    <img src="img/galeria/ga12.png" alt="" />
                </div>

                <div className="fila4">
                    <img src="img/galeria/ga13.png" alt="" />
                    <img src="img/galeria/ga14.png" alt="" />
                    <img src="img/galeria/ga15.png" alt="" />
                    <img src="img/galeria/ga16.png" alt="" />
                </div>
                <div className="fila5">
                    <img src="img/galeria/ga17.png" alt="" />
                    <img src="img/galeria/ga18.png" alt="" />
                    <img src="img/galeria/ga19.png" alt="" />
                    <img src="img/galeria/ga20.png" alt="" />
                </div>
                <div className="fila5">
                    <img src="img/galeria/ga21.png" alt="" />
                    <img src="img/galeria/ga22.png" alt="" />
                    <img src="img/galeria/ga23.png" alt="" />
                    <img src="img/galeria/ga24.png" alt="" />
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}