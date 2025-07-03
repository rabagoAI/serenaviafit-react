import { useParams } from 'react-router-dom';
import posts from '../posts';

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Artículo no encontrado.</p>;

  return (
    <div className="page-container">
      <h2>{post.title}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
    </div>
  );
}

