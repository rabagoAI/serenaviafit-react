import React from 'react';
import './EjercicioCard.css';

export default function EjercicioCard({ img, title, desc }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
