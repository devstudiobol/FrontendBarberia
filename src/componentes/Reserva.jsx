import React, { useEffect, useState, useRef } from "react";
import '../hojas-de-estilo/Reservas.css'
import { getFirestore, collection, addDoc, getDocs, orderBy, limit } from 'firebase/firestore';
import Icono from '../imagenes/Navbar-img/ico.png'
import firebaseApp from '../FireBase/FireBase';
import jsPDF from 'jspdf';

const db = getFirestore(firebaseApp);

function Reserva() {
    const valorInicial = { nombre: '', hora: '', descripcion: '' };
    const [user, setUser] = useState(valorInicial);
    const [ultimaReserva, setUltimaReserva] = useState(null);
    const pdfRef = useRef(null);

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const guardarDatos = async (e) => {
        e.preventDefault();
        try {
            const nuevaReservaRef = await addDoc(collection(db, 'Reservas'), { ...user });
            const nuevaReserva = { id: nuevaReservaRef.id, ...user };
            setUltimaReserva(nuevaReserva);
        } catch (error) {
            console.log(error);
        }
        setUser({ ...valorInicial });
    };

    const generarPDF = () => {
        
        const doc = new jsPDF({
            unit: 'mm', // Unidad de medida: milímetros
            format: [80, 80], // Tamaño personalizado para el ticket (ancho x alto)
            orientation: 'portrait', // Orientación: vertical

        });
        // Agregar un rectángulo de fondo negro
        doc.setFillColor('black');
        doc.rect(0, 0, 80, 80, 'F'); // Rectángulo desde (0, 0) hasta (80, 80)
    
        // Agregar el contenido del ticket
        doc.setTextColor('white');
        doc.addImage(Icono, 'PNG',10, 0, 60, 20); // (imagen, formato, x, y, ancho, alto)

        // Agregar los textos
        doc.text(30, 30, `Cita`);
        doc.text(5, 40, `Nombre: ${ultimaReserva.nombre}`);
        doc.text(5, 50, `Hora: ${ultimaReserva.hora}`);
        doc.text(5, 60, `Descripcion: ${ultimaReserva.descripcion}`);
        
        // Guardar el PDF
        doc.save("reserva.pdf");
    };
    

    const getUltimaReserva = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Reservas'), orderBy('fecha', 'desc'), limit(1));
            querySnapshot.forEach((doc) => {
                setUltimaReserva({ id: doc.id, ...doc.data() });
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUltimaReserva();
    }, []);

    return (
        <div className="contenedorPrincipa">
        <div className="Formulario">
            <h1>Reservacion:</h1>
            <form onSubmit={guardarDatos}>
                <div className="Nombre">
                    <label>Nombre: </label>
                    <input type="text" name="nombre" onChange={capturarInputs} value={user.nombre} />
                </div>
                <div className="Hora">
                    <label>Hora: </label>
                    <input type="time" name="hora" onChange={capturarInputs} value={user.hora} />
                </div>
                <div className="Descripcion">
                    <label>Descripcion: </label>
                    <br />
                    <textarea name="descripcion" rows="12" cols="65" onChange={capturarInputs} value={user.descripcion}></textarea>
                </div>
                <button className="boton-guardar">Guardar</button>
            </form>
            <div className="ListaReservas">
                <div ref={pdfRef}>
                    <h2>Última Cita</h2>
                    {ultimaReserva && (
                        <div id="ultima-cita">
                            <p>Nombre: {ultimaReserva.nombre}</p>
                            <p>Hora: {ultimaReserva.hora}</p>
                            <p>Descripcion: {ultimaReserva.descripcion}</p>
                        </div>
                    )}
                </div>
                <button className="boton-Imprimir" onClick={generarPDF}>Generar PDF</button>
            </div>
        </div>
        </div>
    );
}

export default Reserva;
