import './Deporte.css';

export default function Deporte() {
  return (
    <div className="page-container">
      <h2 className="page-title">Entrenamientos Funcionales</h2>

      <div className="card-grid">
        <div className="card">
          <img
            src="/img/serena-abdominales.jpg"
            alt="HIIT en casa"
          />
          <h3>Rutina HIIT en casa</h3>
          <p>Entrenamiento de alta intensidad en solo 20 minutos. Sin equipamiento.</p>
        </div>

        <div className="card">
          <img
            src="/img/serena-yoga.jpg"
            alt="Yoga"
          />
          <h3>Yoga para Principiantes</h3>
          <p>Estira, relaja y fortalece tu cuerpo y mente. Ideal para empezar el día.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07a"
            alt="Fuerza sin pesas"
          />
          <h3>Entrenamiento de fuerza sin pesas</h3>
          <p>Flexiones, sentadillas, planchas y más usando solo tu cuerpo.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            alt="Estiramientos"
          />
          <h3>Estiramientos diarios</h3>
          <p>Cuida tus músculos y previene lesiones con una rutina de estiramientos.</p>
        </div>
      </div>
    </div>
  );
}
