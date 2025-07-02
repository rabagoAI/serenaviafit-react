import RecetaDetalle from '../components/RecetaDetalle';
import batidoImg from '../assets/batido-verde.png';

export default function RecetaBatido() {
  return (
    <RecetaDetalle
      titulo="Batido Verde Detox"
      imagen={batidoImg}
      nutricion={{
        calorias: 110,
        carbohidratos: 20,
        fibra: 5,
        proteinas: 3,
        grasas: 1
      }}
      beneficios={[
        "Depurativo natural para el hígado y los riñones",
        "Alto contenido en fibra y antioxidantes",
        "Favorece la digestión y reduce la inflamación",
        "Ideal como desayuno ligero o post-entreno"
      ]}
      ingredientes={[
        "1 taza de espinacas frescas",
        "1 manzana verde",
        "1 plátano maduro",
        "1 trozo pequeño de jengibre",
        "1 taza de agua o bebida vegetal",
        "1 cucharada de semillas de chía (opcional)"
      ]}
      pasos={[
        "Lava bien todos los ingredientes.",
        "Corta la manzana y el plátano en trozos.",
        "Agrega todo a la batidora junto con el agua.",
        "Bate hasta que quede una mezcla homogénea.",
        "Sirve frío. Puedes añadir hielo si lo deseas."
      ]}
    />
  );
}
