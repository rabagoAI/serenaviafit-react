import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Ajusta la ruta si es necesario

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="Logo SerenaViaFit" className="logo" />
        <h1>SerenaViaFit</h1>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nutricion">Nutrición</Link>
        <Link to="/deporte">Deporte</Link>
        <Link to="/salud">Salud y Belleza</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}
