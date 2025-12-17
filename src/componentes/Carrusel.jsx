import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../hojas-de-estilo/Carrusel.css'; 
import imagen1 from '../imagenes/inicio/img1.png';
import imagen2 from '../imagenes/inicio/img2.png';
import imagen3 from '../imagenes/inicio/img3.png';
import imagen4 from '../imagenes/inicio/img4.png';
import imagen5 from '../imagenes/inicio/img5.png';
import imagen6 from '../imagenes/inicio/img6.png';
import fachaImage from '../imagenes/inicio/facha2.png';

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  const images = [
    { original: imagen1 },
    { original: imagen2 },
    { original: imagen3 },
    { original: imagen4 },
    { original: imagen5 },
    { original: imagen6 },
  ];

  return (
    <div className="carrusel-container">
      <div className="overlay"></div> {/* Capa overlay */}
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={1000}
        useBrowserFullscreen={true}
        onSlide={handleSlide}
        renderItem={(item, index) => (
          <div
            className={`image-container ${
              index === currentIndex ? 'fade-in' : 'fade-out'
            }`}
          >
            <img src={item.original} alt={item.original} className="image" style={{  width: '100%' }} />
          </div>
        )}
      />
      <div className="overlay-container">
        <img src={fachaImage} alt="Facha" className="facha-overlay" />
        <div className="texto1">
          Hola, Bienvenidos a “La Facheria”. Contamos con Barberos Profesionales y un buen ambiente, Te brindamos lo mejor en asesoria de imagen, Cortes de cabello, barba segun tu estilo de vida
          <br /><br /><br /><p>
          Estamos ubicados en: La Cruceta Block 50 Dpto. 101 - Surco
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;