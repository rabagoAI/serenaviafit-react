import './Nutricion.css';

export default function Nutricion() {
  return (
    <div className="page-container">
      <h2 className="page-title">Recetas Saludables</h2>

      <div className="card-grid">
        <div className="card">
          <img
            src="/img/batido-detox.png"
            alt="Batido verde detox"
          />
          <h3>Batido Verde Detox</h3>
          <p>Espinaca, plátano, manzana y jengibre para un desayuno energético.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1613145998576-d93b5552a8f4"
            alt="Ensalada mediterránea"
          />
          <h3>Ensalada Mediterránea</h3>
          <p>Garbanzos, pepino, tomate cherry, y aceite de oliva virgen extra.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
            alt="Tostada de aguacate"
          />
          <h3>Tostada de Aguacate</h3>
          <p>Pan integral con aguacate, huevo poché y semillas de sésamo.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1584270354949-1d75a6d8f7d3"
            alt="Bowl de avena"
          />
          <h3>Bowl de Avena</h3>
          <p>Avena con bebida vegetal, frutas rojas y semillas de chía.</p>
        </div>
      </div>
    </div>
  );
}
