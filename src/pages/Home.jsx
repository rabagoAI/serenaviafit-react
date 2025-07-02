import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-fit.png'; // Ajusta la ruta según tu estructura
import batidoImg from '../assets/batido-verde.png';
import aguacateImg from '../assets/aguacate.png';

export default function Home() {
  return (
    <div className="home-page">
      <section
        className="hero-optimizada"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`
        }}
      >
        <div className="hero-contenido">
          <h1 className="hero-titulo">Bienvenida a SerenaViaFit</h1>
          <p className="hero-subtitulo">Nutrición consciente. Ejercicio funcional. Bienestar real.</p>
          <Link to="/nutricion" className="hero-boton">
            Empieza tu cambio
          </Link>
        </div>
      </section>

      <section className="beneficios-home">
          <h2>¿Por qué SerenaViaFit?</h2>
          <div className="beneficios-grid">
          <div className="beneficio">
          <span className="icono">🥗</span>
          <h3>Nutrición Consciente</h3>
          <p>Recetas fáciles, equilibradas y con ingredientes reales. Sin complicaciones.</p>
          </div>
    <div className="beneficio">
      <span className="icono">🏋️‍♀️</span>
      <h3>Entrenamiento Funcional</h3>
      <p>Rutinas adaptadas a tu ritmo, nivel y tiempo. En casa o en el gym.</p>
    </div>
    <div className="beneficio">
      <span className="icono">🧘</span>
      <h3>Bienestar Real</h3>
      <p>Cuida tu salud física y mental con consejos sencillos y prácticos.</p>
    </div>
  </div>
</section>

<section className="recetas-home">
  <h2>Recetas destacadas</h2>
  <div className="recetas-grid">
    <div className="receta-card">
      <img src={batidoImg} alt="Batido Verde Detox" />
      <h3>Batido Verde Detox</h3>
      <p>Refrescante y lleno de nutrientes para empezar tu día con energía.</p>
      <Link to="/receta/batido-verde-detox" className="btn-receta">
        Ver receta →
      </Link>
    </div>

    <div className="receta-card">
      <img src={aguacateImg} alt="Tostada de Aguacate" />
      <h3>Tostada de Aguacate</h3>
      <p>Ideal para desayunos rápidos, sanos y saciantes. ¡Todo un clásico!</p>
      <Link to="/receta/aguacate" className="btn-receta">
        Ver receta →
      </Link>
    </div>
  </div>

  <Link to="/nutricion" className="btn-ver-todas">
    Ver todas las recetas →
  </Link>
</section>

    </div>
  );
}