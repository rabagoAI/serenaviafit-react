import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-fit.png'; // Ajusta la ruta según tu estructura

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Bienvenida a SerenaViaFit</h1>
          <p>Tu espacio para transformar tu estilo de vida con nutrición, entrenamiento y bienestar real.</p>
          <Link to="/nutricion" className="hero-button">Empieza ahora</Link>
        </div>
      </section>

      <section className="destacados">
        <h2>Explora nuestras secciones</h2>
        <div className="destacado-grid">
          <Link to="/nutricion" className="card acceso-nutricion">
            <h3>🥗 Nutrición</h3>
            <p>Recetas saludables, batidos, comidas energéticas y consejos para comer mejor.</p>
          </Link>

          <Link to="/deporte" className="card acceso-deporte">
            <h3>💪 Deporte</h3>
            <p>Rutinas funcionales para todos los niveles: HIIT, fuerza, yoga y más.</p>
          </Link>

          <Link to="/salud" className="card acceso-salud">
            <h3>💆 Salud y Belleza</h3>
            <p>Trucos, descanso, cuidado de la piel y bienestar emocional diario.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}