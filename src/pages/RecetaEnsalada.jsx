import RecetaDetalle from '../components/RecetaDetalle';
import ensaladaImg from '../assets/ensalada-mediterranea.png';

export default function RecetaEnsalada() {
  return (
    <RecetaDetalle
      titulo="Ensalada Mediterránea de Garbanzos"
      imagen={ensaladaImg}
      nutricion={{
        calorias: 350,
        carbohidratos: 30,
        fibra: 10,
        proteinas: 12,
        grasas: 18
      }}
      beneficios={[
        "Rica en fibra, ideal para el sistema digestivo",
        "Fuente de proteína vegetal gracias a los garbanzos",
        "Grasas saludables del aceite de oliva virgen extra",
        "Alto contenido en vitaminas y antioxidantes naturales"
      ]}
      ingredientes={[
        "1 taza de garbanzos cocidos",
        "1/2 pepino en cubos",
        "1/2 pimiento rojo en tiras finas",
        "1/2 cebolla morada en juliana",
        "10-12 tomates cherry cortados por la mitad",
        "Unas hojas de perejil o menta",
        "2 cucharadas de aceite de oliva virgen extra",
        "Zumo de medio limón o vinagre balsámico",
        "Sal y pimienta al gusto"
      ]}
      pasos={[
        "Enjuaga y escurre bien los garbanzos cocidos.",
        "Corta los vegetales y colócalos en un bol grande.",
        "Añade los garbanzos, el perejil o menta y mezcla.",
        "Aliña con el aceite, el zumo de limón, sal y pimienta.",
        "Deja reposar 10 minutos para que se integren los sabores y sirve fresca."
      ]}
    />
  );
}
