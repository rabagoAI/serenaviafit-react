import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FormularioSuscripcion from '../components/FormularioSuscripcion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Columna 1: Marca */}
          <div className="footer-col">
            <h3 className="footer-brand">SerenaViaFit</h3>
            <p className="footer-tagline">Nutrición real, movimiento funcional y bienestar auténtico para tu día a día.</p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="footer-col">
            <h4>Explorar</h4>
            <nav className="footer-nav" aria-label="Navegación del pie de página">
              <Link to="/nutricion">Recetas</Link>
              <Link to="/deporte">Entrenamientos</Link>
              <Link to="/salud">Salud y Belleza</Link>
              <Link to="/blog">Blog</Link>
            </nav>
          </div>

          {/* Columna 3: Suscripción */}
          <div className="footer-col footer-col--suscripcion">
            <FormularioSuscripcion />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SerenaViaFit · Salud con propósito</p>
        </div>
      </div>
    </footer>
  );
}
