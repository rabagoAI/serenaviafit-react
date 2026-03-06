import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="header-inner">
        <NavLink to="/" className="header-brand" onClick={cerrarMenu}>
          <img src={logo} alt="Logo SerenaViaFit" className="logo" loading="lazy" />
          <span className="header-nombre">SerenaViaFit</span>
        </NavLink>

        {/* Botón hamburguesa */}
        <button
          className={`hamburger ${menuAbierto ? 'hamburger--activo' : ''}`}
          onClick={() => setMenuAbierto(o => !o)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuAbierto ? 'nav--abierto' : ''}`} aria-label="Navegación principal">
          {[
            { to: '/', label: 'Inicio', end: true },
            { to: '/nutricion', label: 'Nutrición' },
            { to: '/deporte', label: 'Deporte' },
            { to: '/blog', label: 'Blog' },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={cerrarMenu}
              className={({ isActive }) => isActive ? 'nav-link nav-link--activo' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
