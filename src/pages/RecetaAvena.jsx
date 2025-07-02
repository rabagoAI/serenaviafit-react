import RecetaDetalle from '../components/RecetaDetalle';
import avenaImg from '../assets/avena.png';

export default function RecetaAvena() {
  return (
    <RecetaDetalle
      titulo="Bowl de Avena con Frutas y Semillas"
      imagen={avenaImg}
      nutricion={{
        calorias: 280,
        carbohidratos: 45,
        fibra: 8,
        proteinas: 7,
        grasas: 6
      }}
      beneficios={[
        "Regula el tránsito intestinal por su alto contenido en fibra",
        "Proporciona energía sostenida durante toda la mañana",
        "Contribuye a la salud cardiovascular",
        "Rica en antioxidantes naturales y beta-glucanos"
      ]}
      ingredientes={[
        "1/2 taza de copos de avena",
        "1 taza de bebida vegetal (almendra, soja, avena...)",
        "1/2 plátano maduro en rodajas",
        "Un puñado de frutos rojos (fresas, arándanos, frambuesas)",
        "1 cucharada de semillas de chía o linaza",
        "Canela en polvo (opcional)"
      ]}
      pasos={[
        "Calienta la bebida vegetal en un cazo hasta que esté caliente (sin hervir).",
        "Añade la avena y cocina durante 5-7 minutos removiendo.",
        "Sirve en un bowl y decora con el plátano, frutos rojos y semillas.",
        "Espolvorea un poco de canela por encima si lo deseas.",
        "Disfrútalo caliente o déjalo enfriar y guárdalo en la nevera como desayuno para llevar."
      ]}
    />
  );
}
