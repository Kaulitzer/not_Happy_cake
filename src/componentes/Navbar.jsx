import React from 'react';
import { Link } from 'react-router-dom';
import iconoImagen from '../assets/happycake_icon.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <div className="logo">
        <img src={iconoImagen} alt="Icono" className="icon" />
        Happy Cake
      </div>
    </nav>
  );
}

export default Navbar;
