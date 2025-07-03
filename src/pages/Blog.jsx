import { Link } from 'react-router-dom';
import posts from '../posts';
import './Blog.css';

export default function Blog() {
  return (
    <div className="page-container">
      <h2 className="page-title">Blog SerenaViaFit</h2>

      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>Leer más →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

