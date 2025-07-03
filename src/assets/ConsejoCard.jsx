import React from 'react';
import './ConsejoCard.css';

export default function ConsejoCard({ img, title, desc }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
