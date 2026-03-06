import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import posts from '../posts';
import AnimatedCard from '../components/AnimatedCard';
import FadeInSection from '../components/FadeInSection';
import './Blog.css';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'salud', label: 'Salud y Belleza' },
  { id: 'nutricion', label: 'Nutrición' },
  { id: 'deporte', label: 'Deporte' },
  { id: 'bienestar', label: 'Bienestar' },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-dark-bg">
      <div className="page-container">
        <Helmet>
          <title>Blog | SerenaViaFit</title>
        <meta name="description" content="Artículos sobre nutrición, salud, bienestar y ejercicio. Consejos prácticos para tu vida saludable." />
      </Helmet>

      <FadeInSection>
        <h1 className="page-title">Blog SerenaViaFit</h1>
        <p className="page-subtitle">Artículos con ciencia, corazón y propósito.</p>
      </FadeInSection>

      <div className="filters-container">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredPosts.map((post, i) => (
          <AnimatedCard
            key={post.id}
            img={post.image}
            alt={post.title}
            title={post.title}
            desc={post.excerpt}
            link={`/blog/${post.id}`}
            linkText="Leer más →"
            delay={i * 0.1}
            badge={CATEGORIES.find(c => c.id === post.category)?.label}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
