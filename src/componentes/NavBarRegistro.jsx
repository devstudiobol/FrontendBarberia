
import '../hojas-de-estilo/NavBar.css'; // Importa el archivo CSS de estilos
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../FireBase/FireBase';
import  { useContext } from 'react';
import { AuthContext } from './AuthContext';
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/NavBar.css';
import icono from '../imagenes/Navbar-img/ico.png';
import { Link, useLocation } from 'react-router-dom';

const auth= getAuth(firebaseApp)
const links2 = [{ href: "/serviciosRegistro" }];
const links3 = [{ href: "/homeRegistro" }]; // Enlace para Inicio
const links4 = [{ href: "/galeriaRegistro" }]; // Enlace para Galería de Cortes


function NavBarRegistro() {
  const { userEmail } = useContext(AuthContext);
  const [selected, setSelected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú responsive
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/serviciosRegistro' || location.pathname === '/' || location.pathname === '/galeriaRegistro') {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [location]);

  return (
    <nav>
    <div className="nav-left">
      <img src={icono} alt="Icon" />
    </div>
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      &#9776; {/* Icono de menú hamburguesa */}
    </div>
    <ul className={`nav-right ${menuOpen ? 'show' : ''}`}>
      <li>
        <Link
          className={selected && location.pathname === '/homeRegistro' ? 'servicio2 selected' : 'servicio'}
          style={{ textDecoration: 'none', color: '#fff' }}
          to={links3[0].href}
        >
          <span>Inicio</span>
        </Link>
      </li>
      {links2.map((x, index) => (
        <li key={index}>
          <Link
            className={selected && location.pathname === '/serviciosRegistro' ? 'servicio2 selected' : 'servicio2'}
            style={{ textDecoration: 'none', color: '#fff' }}
            to={x.href}
          >
            <span>Nuestros servicios</span>
          </Link>
        </li>
      ))}
      <li>
        <Link
          className={selected && location.pathname === '/galeriaRegistro' ? 'servicio2 selected' : 'servicio2'}
          style={{ textDecoration: 'none', color: '#fff' }}
          to={links4[0].href}
        >
          <span>Galeria de Cortes</span>
        </Link>
      </li>



        
        <div className='email'style={{color: 'white'}}>
        <li >Bienvenido {userEmail}</li>
       </div>

      </ul>
    </nav>
  );
}

export default NavBarRegistro;

