import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import firebaseApp from '../FireBase/FireBase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../hojas-de-estilo/Login.css';


const auth = getAuth(firebaseApp);

const Login = () => {
  const [registro, setRegistro] = useState(false);
  const navigate = useNavigate();
  const { updateUserEmail } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      alert("Creado");
    } else {
      await signInWithEmailAndPassword(auth, correo, contraseña);
      updateUserEmail(correo); // Actualiza el email en el contexto
      navigate('/homeRegistro');
    }
  };

  return (
    <div className="contenedorPrincipal">
      <div className="container">
    <h1>{registro ? 'Regístrate' : 'Inicia Sesión'}</h1>
    <form onSubmit={handleSubmit} id="contactoForm">
      <div className="usuario">
        <label>Email:</label>
        <input type="email" className="form-control" id="email" placeholder='Ingrese email' required />
      </div>
      <div className="usuario">
        <label>Contraseña:</label>
        <input type="password" className="form-control" id="contraseña" placeholder='Ingrese Contraseña' required />
      </div>
      <button className="btn btn-primary btn-transparent" type="submit">{registro ? 'Regístrate' : 'Inicia Sesión'}</button>
    </form>
    <div>
      <button className="btn btn-primary btn-transparent" onClick={() => setRegistro(!registro)}>
        {registro ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
    </div>
  </div>
    </div>
);
};

export default Login;