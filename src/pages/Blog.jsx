import { Link } from 'react-router-dom';
import hidratacionImg from '../assets/hidratacion.png';
import mascarillaImg from '../assets/mascarilla.png';
import posts from '../posts';
import './Blog.css';

export default function Blog() {
  return (
    <div className="page-container">
  <h2 className="page-title">Blog SerenaViaFit</h2>

  <div className="card-grid">
    {posts.map((post) => (
      <div className="card" key={post.id}>
        {post.image && (
          <img src={post.image} alt={post.title} className="card-image" />
        )}
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`}>Leer más →</Link>
      </div>
    ))}
      </div>
      {/*<div className="blog-card">
  <img src={hidratacionImg} alt="Hidratación saludable" />
  <h3>Hidratación diaria</h3>
  <p>Beber agua es clave para la piel, el sistema digestivo y la energía.</p>
  <Link to="/blog/hidratacion">Leer más →</Link>
</div>

<div className="blog-card">
  <img src={mascarillaImg} alt="Mascarilla facial de avena" />
  <h3>Mascarilla facial de avena</h3>
  <p>Nutre tu piel con esta receta casera de avena, yogur y miel. Natural y efectiva.</p>
  <Link to="/blog/mascarilla-avena">Leer más →</Link>
</div>*/}
    </div>
  );
}

