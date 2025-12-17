import React from "react";
import json from '../json/Servicios.json';
import '../hojas-de-estilo/Servicios.css'

import Footer from './Footer'
import ubicacion from '../imagenes/Ubicacion-img/image.png'
import NavBarRegistro from "./NavBarRegistro";
export default function ServicioRegistro() {
    return (
        
        <div className="Contenedor">
            <NavBarRegistro/>
            <div className="titulo">
                <h2>Nuestros Servicios</h2>
            </div>
            <div className="filas-container">
                {json.map((valor, index) => (
                    <div className="fila" key={index}>
                        <div className="caja1">
                            <img
                                src={valor.img}
                                alt="servicio1"
                            />
                        </div>
                        <div className="contenido">
                            <p>{valor.title}</p>
                            <p>{valor.datos}</p>
                            <a href={'/reserva'}>{valor.url}</a>
                        </div>
                    </div>
                ))}

            </div>
            <div className="TituloGps">
                <p>Estamos ubicados en:</p>
            </div>
            <div className="Ubicacion">
                    <a href="https://maps.app.goo.gl/S3rAnN8BjHv7dXTb6">< img src={ubicacion} alt="Gps" /></a>
                </div>
            <Footer/>
        </div>
        
    );
}

