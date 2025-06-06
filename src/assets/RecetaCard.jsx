// src/components/RecetaCard.jsx
import React from 'react';
import './RecetaCard.css';

export default function RecetaCard({ img, title, desc }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
