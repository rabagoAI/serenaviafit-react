import './Home.css';
import { Link } from 'react-router-dom';
import portadaImg from '../assets/portada-fit.jpg';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <img src={portadaImg} alt="Portada SerenaViaFit" className="hero-img" />
        <div className="hero-text">
          <h1>Bienvenida a SerenaViaFit</h1>
          <p>
            Vive saludable, siéntete fuerte y cuídate por dentro y por fuera. Descubre hábitos, rutinas y consejos que transformarán tu bienestar.
          </p>
          <Link to="/nutricion" className="btn-principal">Empieza ahora</Link>
        </div>
      </section>

      <section className="secciones">
        <Link to="/nutricion" className="seccion-box nutricion">
          <h3>🥗 Nutrición</h3>
          <p>Recetas y hábitos alimenticios para nutrirte sin complicaciones.</p>
        </Link>
        <Link to="/deporte" className="seccion-box deporte">
          <h3>🏋️‍♀️ Deporte</h3>
          <p>Rutinas accesibles para mantenerte activa, en casa o en el gym.</p>
        </Link>
        <Link to="/salud" className="seccion-box salud">
          <h3>💆 Salud y Belleza</h3>
          <p>Consejos simples para sentirte y verte bien cada día.</p>
        </Link>
      </section>
      <section className="blog-preview">
      <h2>📝 Últimos artículos</h2>
      <p>Descubre consejos prácticos sobre bienestar, motivación y salud.</p>
      <Link to="/blog" className="btn-principal">Ir al Blog</Link>
      </section>



    </div>
  );
}
