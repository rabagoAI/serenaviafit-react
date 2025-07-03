import { Link } from 'react-router-dom';

export default function EjercicioCard({ img, title, desc, link }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{desc}</p>
      {link && <Link to={link}>Ver rutina →</Link>}
    </div>
  );
}
