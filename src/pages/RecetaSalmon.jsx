import RecetaDetalle from "../components/RecetaDetalle";
import salmonImg from "../assets/salmon.png";

export default function RecetaSalmon() {
  return (
    <RecetaDetalle
      titulo="Salmón al horno con verduras"
      imagen={salmonImg}
      nutricion={{
        calorias: 300,
        carbohidratos: 15,
        fibra: 5,
        proteinas: 25,
        grasas: 18,
      }}
      beneficios={[
        "Rico en omega-3 para la salud cardiovascular",
        "Alto contenido de proteínas para el mantenimiento muscular",
        "Bajo en carbohidratos, ideal para dietas balanceadas",
        "Verduras aportan vitaminas y minerales esenciales",
      ]}
      ingredientes={[
        "1 filete de salmón (150 g)",
        "1 taza de brócoli en floretes",
        "1 zanahoria cortada en rodajas",
        "1/2 calabacín en rodajas",
        "1 cucharada de aceite de oliva virgen extra",
        "1 diente de ajo picado",
        "Zumo de 1/2 limón",
        "1 cucharadita de hierbas provenzales",
        "Sal y pimienta al gusto",
      ]}
      pasos={[
        "Precalienta el horno a 200°C.",
        "Coloca el salmón y las verduras en una bandeja para horno.",
        "Rocía con aceite de oliva, zumo de limón, ajo, hierbas, sal y pimienta.",
        "Hornea durante 15-20 minutos o hasta que el salmón esté cocido y las verduras tiernas.",
        "Sirve caliente, acompañado de una ensalada verde si lo deseas.",
      ]}
    />
  );
}
