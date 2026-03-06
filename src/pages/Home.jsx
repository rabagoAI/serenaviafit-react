import './Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollStagger } from '../hooks/useScrollReveal';
import ScrollHero from '../components/ScrollHero';
import batidoImg from '../assets/batido-verde.png';
import aguacateImg from '../assets/aguacate.png';
import ensaladaImg from '../assets/ensalada-mediterranea.png';
import avenaImg from '../assets/avena.png';
import FormularioSuscripcion from '../components/FormularioSuscripcion';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';

const recetasDestacadas = [
  { img: batidoImg, titulo: 'Batido Verde Detox', desc: 'Refrescante y lleno de nutrientes para empezar tu día con energía.', slug: 'batido-verde-detox', badge: '⚡ Energía' },
  { img: aguacateImg, titulo: 'Tostada con Aguacate', desc: 'Nutritiva, saciante y perfecta para el desayuno o cena ligera.', slug: 'aguacate', badge: '🥑 Favorita' },
  { img: ensaladaImg, titulo: 'Ensalada Mediterránea', desc: 'Garbanzos, pepino, tomate cherry y aceite de oliva virgen extra.', slug: 'ensalada', badge: '🌿 Ligera' },
  { img: avenaImg, titulo: 'Bowl de Avena', desc: 'Avena con bebida vegetal, frutas rojas y semillas de chía.', slug: 'avena', badge: '🌾 Saciante' },
];

const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const introItems = [
  { icon: '🥗', label: 'Nutrición Consciente', desc: 'Recetas fáciles, equilibradas y con ingredientes reales. Sin complicaciones.' },
  { icon: '🏃‍♀️', label: 'Entrenamiento Funcional', desc: 'Rutinas adaptadas a tu ritmo, estilo y tiempo. En casa o en el gym.' },
  { icon: '💚', label: 'Bienestar Real', desc: 'Cuida tu salud física y mental con consejos sencillos y prácticos.' },
];

const Home = () => {
  const introGridRef = useScrollStagger({ selector: '.intro-card', y: 30, stagger: 0.15 });
  const recetasGridRef = useScrollStagger({ selector: '.stagger-item', y: 40, stagger: 0.15 });

  return (
    <>
      <Helmet>
        <title>Inicio | SerenaViaFit</title>
        <meta name="description" content="Bienvenida a SerenaViaFit: nutrición real, entrenamientos funcionales y bienestar auténtico para tu día a día." />
      </Helmet>

      {/* HERO */}
      <ScrollHero />

      <div className="home-container">
      {/* INTRO */}
      <FadeInSection>
        <section className="intro">
          <h2>¿Por qué SerenaViaFit?</h2>
          <div className="intro-grid" ref={introGridRef}>
            {introItems.map((item) => (
              <div
                key={item.label}
                className="intro-card"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} 
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span className="intro-icon">{item.icon}</span>
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* RECETAS DESTACADAS */}
      <FadeInSection>
        <h2 className="recetas-titulo">Recetas destacadas</h2>
      </FadeInSection>
      <div className="recetas-destacadas" ref={recetasGridRef}>
        {recetasDestacadas.map((r, i) => (
          <AnimatedCard
            key={r.slug}
            img={r.img}
            alt={r.titulo}
            title={r.titulo}
            desc={r.desc}
            link={`/receta/${r.slug}`}
            linkText="Ver receta →"
            delay={i * 0.1}
            badge={r.badge}
          />
        ))}
      </div>

      <FadeInSection>
        <div 
          style={{ display: 'inline-block', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        >
          <Link to="/nutricion" className="btn-ver-todas">Ver todas las recetas →</Link>
        </div>
      </FadeInSection>

      <FadeInSection>
        <section className="suscripcion">
          <FormularioSuscripcion />
        </section>
      </FadeInSection>
      </div>
    </>
  );
};

export default Home;