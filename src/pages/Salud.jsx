import './Salud.css';
import ConsejoCard from '../assets/ConsejoCard';
import hidratacionImg from '../assets/hidratacion.png';
import mascarillaImg from '../assets/mascarilla.png';
import suenoImg from '../assets/sueno.png';
import antioxidantesImg from '../assets/antioxidantes.png';

export default function Salud() {
  return (
    <div className="page-container">
      <h2 className="page-title">Salud y Belleza</h2>

      <div className="card-grid">
        <ConsejoCard
          img={hidratacionImg}
          title="Hidratación diaria"
          desc="Beber 1.5L de agua al día mejora la piel, circulación y elimina toxinas."
        />
        
        <ConsejoCard
          img={mascarillaImg}
          title="Mascarilla facial natural"
          desc="Miel, avena y yogur para una piel exfoliada, suave y radiante."
        />
        <ConsejoCard
          img={suenoImg}
          title="Sueño reparador"
          desc="Dormir 7-8 horas regenera tu piel y mejora tu bienestar general."
        />
        <ConsejoCard
          img={antioxidantesImg}
          title="Antioxidantes naturales"
          desc="Frutas rojas, té verde y verduras combaten el envejecimiento."
        />
      </div>

      <section className="wellness-section">
  <div className="wellness-text">
    <h2>Bienestar integral</h2>
    <p>
      La verdadera belleza nace del equilibrio entre cuerpo y mente. Cuidar tu salud se refleja en tu energía y autoestima.
    </p>
    <p>
      Adopta hábitos simples que nutran tu bienestar desde dentro hacia fuera. Tu cuerpo te lo agradecerá.
    </p>
  </div>
  <img
    src={require('../assets/bienestar.png')}
    alt="Bienestar"
    className="wellness-image"
  />
</section>

    </div>
  );
}