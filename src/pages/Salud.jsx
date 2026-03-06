import './Salud.css';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';
import hidratacionImg from '../assets/hidratacion.png';
import mascarillaImg from '../assets/mascarilla.png';
import suenoImg from '../assets/sueno.png';
import antioxidantesImg from '../assets/antioxidantes.png';

const consejos = [
  { img: hidratacionImg, title: 'Hidratación diaria', desc: 'Beber 1.5L de agua al día mejora la piel, circulación y elimina toxinas.', blogId: 'hidratacion', badge: '💧 Esencial' },
  { img: mascarillaImg, title: 'Mascarilla facial natural', desc: 'Miel, avena y yogur para una piel exfoliada, suave y radiante.', blogId: 'mascarilla-avena', badge: '✨ Belleza' },
  { img: suenoImg, title: 'Sueño reparador', desc: 'Dormir 7-8 horas regenera tu piel y mejora tu bienestar general.', blogId: null, badge: '🌙 Descanso' },
  { img: antioxidantesImg, title: 'Antioxidantes naturales', desc: 'Frutas rojas, té verde y verduras combaten el envejecimiento.', blogId: null, badge: '🍓 Juventud' },
];

export default function Salud() {
  return (
    <div className="page-container">
      <Helmet>
        <title>Salud y Belleza | SerenaViaFit</title>
        <meta name="description" content="Consejos de salud y belleza natural: hidratación, mascarillas caseras, sueño reparador y antioxidantes para tu bienestar integral." />
      </Helmet>

      <FadeInSection>
        <h1 className="page-title">Salud y Belleza</h1>
        <p className="page-subtitle">Hábitos simples que transforman tu bienestar desde dentro.</p>
      </FadeInSection>

      <div className="card-grid">
        {consejos.map((c, i) => (
          <AnimatedCard
            key={c.title}
            img={c.img}
            alt={c.title}
            title={c.title}
            desc={c.desc}
            link={c.blogId ? `/blog/${c.blogId}` : null}
            linkText="Leer artículo →"
            delay={i * 0.1}
            badge={c.badge}
          />
        ))}
      </div>

      <FadeInSection>
        <section className="wellness-section">
          <div className="wellness-text">
            <h2>Bienestar integral</h2>
            <p>La verdadera belleza nace del equilibrio entre cuerpo y mente. Cuidar tu salud se refleja en tu energía y autoestima.</p>
            <p>Adopta hábitos simples que nutran tu bienestar desde dentro hacia fuera. Tu cuerpo te lo agradecerá.</p>
          </div>
          <motion.img
            src={require('../assets/bienestar.png')}
            alt="Bienestar integral"
            className="wellness-image"
            loading="lazy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </section>
      </FadeInSection>
    </div>
  );
}