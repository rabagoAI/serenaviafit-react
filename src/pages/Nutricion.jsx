import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Nutricion.css';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../components/TextReveal';
import recetas from '../data/recetas';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';
import { useFavoritos } from '../hooks/useFavoritos';

const CATEGORIAS = ['Todos', 'Desayuno', 'Almuerzo', 'Cena', 'Snack'];

export default function Nutricion() {
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const { toggleFavorito, esFavorito } = useFavoritos();

  const recetasFiltradas = recetas.filter((r) => {
    const coincideCategoria = filtro === 'Todos' || r.categoria === filtro;
    const q = busqueda.trim().toLowerCase();
    const coincideBusqueda = !q || r.titulo.toLowerCase().includes(q) || r.descripcion.toLowerCase().includes(q);
    return coincideCategoria && coincideBusqueda;
  });

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

        {/* Buscador */}
        <div className="buscador-wrapper">
          <span className="buscador-icon">🔍</span>
          <input
            type="text"
            className="buscador-input"
            placeholder="Buscar receta..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button className="buscador-clear" onClick={() => setBusqueda('')} aria-label="Limpiar búsqueda">✕</button>
          )}
        </div>

        {/* Filtros */}
        <div className="filtros-bar">
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              className={`filtro-btn${filtro === cat ? ' filtro-btn--active' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {filtro === cat && (
                <motion.span
                  layoutId="filtro-pill"
                  className="filtro-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="filtro-label">{cat}</span>
            </button>
          ))}
        </div>

        {/* Contador resultados */}
        <AnimatePresence>
          {(busqueda || filtro !== 'Todos') && (
            <motion.p
              className="resultados-count"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {recetasFiltradas.length === 0
                ? 'Sin resultados'
                : `${recetasFiltradas.length} receta${recetasFiltradas.length !== 1 ? 's' : ''}`}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Grid de recetas */}
        <motion.div className="card-grid" layout>
          <AnimatePresence mode="popLayout">
            {recetasFiltradas.map((receta) => (
              <motion.div
                key={receta.slug}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <AnimatedCard
                  img={receta.imagen}
                  alt={receta.titulo}
                  title={receta.titulo}
                  desc={receta.descripcion}
                  link={`/receta/${receta.slug}`}
                  linkText="Ver receta completa →"
                  badge={receta.categoria}
                  slug={receta.slug}
                  esFavorito={esFavorito(receta.slug)}
                  onToggleFavorito={toggleFavorito}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
