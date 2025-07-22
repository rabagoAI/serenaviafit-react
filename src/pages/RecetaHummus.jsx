import RecetaDetalle from '../components/RecetaDetalle';
import hummusImg from '../assets/hummus-casero.png';

export default function RecetaHummus() {
  return (
    <RecetaDetalle
      titulo="Hummus Casero"
      imagen={hummusImg}
      nutricion={{
        calorias: 170,
        carbohidratos: 14,
        fibra: 4,
        proteinas: 6,
        grasas: 10
      }}
      beneficios={[
        "Fuente de proteína vegetal",
        "Rico en fibra que mejora la digestión",
        "Contribuye a controlar el apetito",
        "Contiene grasas saludables del aceite de oliva"
      ]}
      ingredientes={[
        "1 taza de garbanzos cocidos",
        "2 cucharadas de tahini (pasta de sésamo)",
        "1 diente de ajo",
        "Zumo de 1/2 limón",
        "2 cucharadas de aceite de oliva virgen extra",
        "1/2 cucharadita de comino en polvo",
        "Sal al gusto",
        "Agua (para ajustar la textura)"
      ]}
      pasos={[
        "Coloca todos los ingredientes en una batidora o procesador de alimentos.",
        "Tritura hasta obtener una textura suave y cremosa.",
        "Si queda muy espeso, añade un poco de agua hasta alcanzar la consistencia deseada.",
        "Sirve en un bol, rocía con un chorrito de aceite de oliva y espolvorea pimentón si lo deseas.",
        "Acompaña con palitos de zanahoria, pepino o pan integral."
      ]}
    />
  );
}
