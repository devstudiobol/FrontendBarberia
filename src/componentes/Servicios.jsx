import React from "react";
import json from '../json/Servicios.json';
import '../hojas-de-estilo/Servicios.css';
import NavBar from "./NavBar";
import Footer from './Footer';
import ubicacion from '../imagenes/Ubicacion-img/image.png';

export default function NuestrosServicios() {
    return (
        <div className="Contenedor">
            <NavBar />
            
            <header className="titulo">
                <h2>Nuestros Servicios</h2>
            </header>

            <section className="filas-container">
                {json.map((valor, index) => (
                    <div className="fila" key={index}>
                        <div className="caja-imagen">
                            <img
                                src={valor.img}
                                alt={valor.title}
                            />
                        </div>
                        <div className="contenido">
                            <p className="servicio-titulo">{valor.title}</p>
                            <div className="dato">
                                <p>{valor.datos}</p>
                            </div>
                            <a 
                                href={'https://linktr.ee/BARBER_RONALD'} 
                                className="btn-reserva-servicio"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Agendar Cita
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            <div className="TituloGps">
                <p>Estamos ubicados en:</p>
            </div>
            
            <div className="Ubicacion">
                <a href="https://maps.app.goo.gl/S3rAnN8BjHv7dXTb6">
                    <img src={ubicacion} alt="Gps de la barbería" />
                </a>
            </div>

            <Footer />
        </div>
    );
}