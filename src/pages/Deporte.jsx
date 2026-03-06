import './Deporte.css';
import { Helmet } from 'react-helmet-async';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';
import TextReveal from '../components/TextReveal';
import { useScrollStagger } from '../hooks/useScrollReveal';

import hiitImg from '../assets/hiit-casa.png';
import yogaImg from '../assets/yoga-principiantes.png';
import fuerzaImg from '../assets/fuerza-sin-pesas.png';
import estiramientoImg from '../assets/estiramientos.png';

const ejercicios = [
  { img: hiitImg, title: 'Rutina HIIT en casa', desc: 'Entrenamiento de alta intensidad en solo 20 minutos. Sin equipamiento.', link: '/rutina/hiit-en-casa', badge: '🔥 Intenso' },
  { img: yogaImg, title: 'Yoga para Principiantes', desc: 'Estira, relaja y fortalece tu cuerpo y mente. Ideal para empezar el día.', link: '/rutina/yoga-principiantes', badge: '🧘 Calma' },
  { img: fuerzaImg, title: 'Fuerza sin pesas', desc: 'Flexiones, sentadillas, planchas y más usando solo tu cuerpo.', link: '/rutina/fuerza-sin-pesas', badge: '💪 Fuerza' },
  { img: estiramientoImg, title: 'Estiramientos diarios', desc: 'Cuida tus músculos y previene lesiones con una rutina de estiramientos.', link: '/rutina/estiramientos-diarios', badge: '🌅 Diario' },
];

export default function Deporte() {
  const gridRef = useScrollStagger({ selector: '.stagger-item', stagger: 0.15, y: 40 });

  return (
    <div className="deporte-dark-bg">
      <div className="page-container">
        <Helmet>
          <title>Entrenamientos Funcionales | SerenaViaFit</title>
        <meta name="description" content="Rutinas de ejercicio funcional en casa: HIIT, yoga, fuerza sin pesas y estiramientos. Sin equipamiento, a tu ritmo." />
      </Helmet>

      <FadeInSection>
        <TextReveal as="h1" className="page-title" text="Entrenamientos Funcionales" />
        <p className="page-subtitle">Rutinas adaptadas a ti, sin excusas ni equipamiento.</p>
      </FadeInSection>

      <div className="card-grid" ref={gridRef}>
        {ejercicios.map((ej, i) => (
          <AnimatedCard
            key={ej.link}
            img={ej.img}
            alt={ej.title}
            title={ej.title}
            desc={ej.desc}
            link={ej.link}
            linkText="Ver rutina →"
            delay={i * 0.1}
            badge={ej.badge}
          />
        ))}
      </div>
    </div>
    </div>
  );
}