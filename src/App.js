import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Servicio from './componentes/Servicios';
import Reserva from './componentes/Reserva';
import HomeRegistro from './componentes/HomeRegistro';
import ServicioRegistro from './componentes/ServicioRegistro';
import Galeria from './componentes/Galeria';
import GaleriaRegistro from './componentes/GaleriaRegistro';
import HomeRoot from './componentes/HomeRoot';
import LoginRoot from './componentes/LoginRoot'
import Listar from './componentes/ListarReservas'
function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/servicios' element={ <Servicio /> } />
          <Route path='/serviciosRegistro' element={ <ServicioRegistro /> } />
          <Route path='/homeRegistro' element={<HomeRegistro />} />
          <Route path='/homeRoot' element={<HomeRoot />} />
          <Route path='/reserva' element={<Reserva />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/galeriaRegistro' element={<GaleriaRegistro />} />
          <Route path='/loginRoot' element={<LoginRoot />} />
          <Route path='/listarReserva' element={<Listar/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
