import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import firebaseApp from '../FireBase/FireBase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../hojas-de-estilo/Login.css';

const auth = getAuth(firebaseApp);

const LoginRoot = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateUserEmail } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    try {
      // Verificar si el correo y la contraseña son válidos
      if (correo === 'miki@gmail.com' && contraseña === 'miki123456789') {
        updateUserEmail(correo); // Actualiza el email en el contexto
        navigate('/homeRoot');
      } else {
        alert('Tu usuario no es administrador');
      }
    } catch (error) {
      alert('Tu usuario no es administrador');
    }
  };

  return (
    <div className="contenedorPrincipal">
      <div className="container">
        <h1>Inicia Sesión</h1>
        <form onSubmit={handleSubmit} id="contactoForm">
          <div className="usuario">
            <label>Email:</label>
            <input type="email" className="form-control" id="email" placeholder='Ingrese email' required />
          </div>
          <div className="usuario">
            <label>Contraseña:</label>
            <input type="password" className="form-control" id="contraseña" placeholder='Ingrese Contraseña' required />
          </div>
          <button className="btn btn-primary btn-transparent" type="submit">Inicia Sesión</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginRoot;
