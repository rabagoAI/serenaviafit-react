import './RecetaDetalle.css';

export default function RecetaDetalle({
  titulo,
  imagen,
  nutricion,
  beneficios,
  ingredientes,
  pasos
}) {
  return (
    <div className="receta-container">
      <h2>{titulo}</h2>
      <img src={imagen} alt={titulo} className="receta-img" />

      <section>
        <h3>🧾 Información Nutricional (aprox.)</h3>
        <ul>
          <li>Calorías: {nutricion.calorias} kcal</li>
          <li>Carbohidratos: {nutricion.carbohidratos} g</li>
          <li>Fibra: {nutricion.fibra} g</li>
          <li>Proteínas: {nutricion.proteinas} g</li>
          <li>Grasas: {nutricion.grasas} g</li>
        </ul>
      </section>

      <section>
        <h3>❤️ Beneficios para la salud</h3>
        <ul>
          {beneficios.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h3>🥗 Ingredientes</h3>
        <ul>
          {ingredientes.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h3>👩‍🍳 Preparación paso a paso</h3>
        <ol>
          {pasos.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      </section>
    </div>
  );
}
