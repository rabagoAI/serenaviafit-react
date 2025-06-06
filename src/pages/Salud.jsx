import './Salud.css';

export default function Salud() {
  return (
    <div className="page-container">
      <h2 className="page-title">Salud y Belleza</h2>

      <div className="card-grid">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            alt="Ejercicio integral"
          />
          <h3>Consejo: Hidratación diaria</h3>
          <p>Beber al menos 1.5L de agua al día mejora la circulación, la piel y elimina toxinas.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
            alt="Mascarilla facial natural"
          />
          <h3>Truco: Mascarilla natural</h3>
          <p>Miel, yogur y avena: una receta casera para exfoliar y nutrir tu rostro de forma natural.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
            alt="Sueño reparador"
          />
          <h3>Tip: Sueño reparador</h3>
          <p>Dormir 7-8 horas ayuda a regenerar células, mejorar la piel y el bienestar emocional.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1506629905607-92902ab23966"
            alt="Antioxidantes naturales"
          />
          <h3>Consejo: Antioxidantes naturales</h3>
          <p>Incluye frutos rojos, té verde y vegetales en tu dieta para combatir el envejecimiento.</p>
        </div>
      </div>
    </div>
  );
}
