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

       
      
      
    </div>
  );
}