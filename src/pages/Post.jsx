import { useParams, Link } from 'react-router-dom';
import posts from '../posts';
import { useStackedCards } from '../hooks/useStackedCards';
import AnimatedCard from '../components/AnimatedCard';
import TextReveal from '../components/TextReveal';
import FadeInSection from '../components/FadeInSection';
import './Post.css';

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  // Usamos nuestro hook de cartas apiladas (GSAP)
  const stackedCardsRef = useStackedCards({ cardSelector: '.stacked-card' });

  if (!post) return <div className="page-container"><p>Artículo no encontrado.</p></div>;

  return (
    <div className="post-layout-wrapper">
      <div className="page-container post-single-column">
        <header className="post-header">
          <FadeInSection>
            <TextReveal as="h1" className="post-title" text={post.title} />
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Link to="/blog" className="btn-back">← Volver al Blog</Link>
          </FadeInSection>
        </header>

        <main className="post-body-stacked" ref={stackedCardsRef}>
          {post.content.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
            <div key={idx} className="stacked-card text-card">
              <p>{paragraph}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

