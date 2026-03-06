import './Nutricion.css';
import { Helmet } from 'react-helmet-async';
import { useScrollStagger } from '../hooks/useScrollReveal';
import TextReveal from '../components/TextReveal';
import recetas from '../data/recetas';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';

export default function Nutricion() {
  const gridRef = useScrollStagger({ selector: '.stagger-item', y: 40, stagger: 0.15 });

  return (
    <div className="nutricion-dark-bg">
      <div className="page-container">
        <Helmet>
          <title>Recetas Saludables | SerenaViaFit</title>
        <meta name="description" content="Descubre recetas saludables y fáciles: batidos, ensaladas, bowls de avena, hummus y más. Nutrición real para tu día a día." />
      </Helmet>

      <FadeInSection>
        <TextReveal as="h1" className="page-title" text="Recetas Saludables" />
        <p className="page-subtitle">Ingredientes reales, sabor auténtico y fáciles de preparar.</p>
      </FadeInSection>

      <div className="card-grid" ref={gridRef}>
        {recetas.map((receta) => (
          <AnimatedCard
            key={receta.slug}
            img={receta.imagen}
            alt={receta.titulo}
            title={receta.titulo}
            desc={receta.descripcion}
            link={`/receta/${receta.slug}`}
            linkText="Ver receta completa →"
          />
        ))}
      </div>
    </div>
    </div>
  );
}
