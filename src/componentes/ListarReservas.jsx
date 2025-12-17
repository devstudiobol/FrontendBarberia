import React, { useEffect, useState, useRef } from "react";
import '../hojas-de-estilo/Reservas.css'
import { getFirestore, collection, addDoc, getDocs, orderBy } from 'firebase/firestore';
import Icono from '../imagenes/Navbar-img/ico.png'
import firebaseApp from '../FireBase/FireBase';
import jsPDF from 'jspdf';

const db = getFirestore(firebaseApp);

function Reserva() {
    const valorInicial = { nombre: '', hora: '', descripcion: '' };
    const [user, setUser] = useState(valorInicial);
    const [reservas, setReservas] = useState([]);
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
            setReservas([...reservas, nuevaReserva]);
        } catch (error) {
            console.log(error);
        }
        setUser({ ...valorInicial });
    };

    const generarPDF = () => {
        const doc = new jsPDF(); // Crear instancia sin especificar tamaño y orientación
    
        doc.text(30, 30, `Lista de Citas`);
        let posY = 40;
        reservas.forEach((reserva) => {
            doc.text(5, posY, `Nombre: ${reserva.nombre}`);
            doc.text(5, posY + 10, `Hora: ${reserva.hora}`);
            doc.text(5, posY + 20, `Descripcion: ${reserva.descripcion}`);
            posY += 30;
        });
    
        doc.save("Listareservas.pdf");
    };
    

    const obtenerReservas = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Reservas'), orderBy('fecha', 'desc'));
            const reservasArray = [];
            querySnapshot.forEach((doc) => {
                reservasArray.push({ id: doc.id, ...doc.data() });
            });
            setReservas(reservasArray);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        obtenerReservas();
    }, []);

    return (
        <div className="contenedorPrincipal">
            <div >
         
               
                <div className="Formulario">
                    <div ref={pdfRef}>
                        <h2 style={{color:'#ffff', textAlign:'Center'}}>Lista de Citas</h2>
                        <br />
                        {reservas.map((reserva) => (
                            <div key={reserva.id} className="cita" style={{color:'#ffff'}}>
                                <p>Nombre: {reserva.nombre}</p>
                                <p>Hora: {reserva.hora}</p>
                                <p>Descripcion: {reserva.descripcion}</p>
                                <hr />
                                <br />
                            </div>
                        ))}
                    </div>
                    <button className="boton-Imprimir" onClick={generarPDF}>Generar PDF</button>
                </div>
            </div>
        </div>
    );
}

export default Reserva;
