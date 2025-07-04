import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-fit.png'; // Ajusta la ruta según tu estructura
import batidoImg from '../assets/batido-verde.png';
import aguacateImg from '../assets/aguacate.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-optimizada" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="hero-titulo">Bienvenida a SerenaViaFit</h1>
        <p className="hero-subtitulo">Nutrición real, movimiento funcional y bienestar auténtico.</p>
      </div>

      <section className="intro">
        <h2>¿Por qué SerenaViaFit?</h2>
        <ul>
          <li><strong>Nutrición Consciente:</strong> Recetas fáciles, equilibradas y con ingredientes reales. Sin complicaciones.</li>
          <li><strong>Entrenamiento Funcional:</strong> Rutinas adaptadas a tu ritmo, estilo y tiempo. En casa o en el gym.</li>
          <li><strong>Bienestar Real:</strong> Cuida tu salud física y mental con consejos sencillos y prácticos.</li>
        </ul>
      </section>

      <h2 className="recetas-titulo">Recetas destacadas</h2>
      <div className="recetas-destacadas">
        <div className="receta">
          <img src={batidoImg} alt="Batido Verde Detox" />
          <h3>Batido Verde Detox</h3>
          <p>Refrescante y lleno de nutrientes para empezar tu día con energía.</p>
        </div>
        <div className="receta">
          <img src={aguacateImg} alt="Tostada con Aguacate y Huevo" />
          <h3>Tostada con Aguacate y Huevo</h3>
          <p>Nutritiva, saciante y perfecta para el desayuno o cena ligera.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;