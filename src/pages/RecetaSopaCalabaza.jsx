import RecetaDetalle from "../components/RecetaDetalle";
import sopaCalabazaImg from "../assets/sopa-calabaza.png";

export default function RecetaSopaCalbaza() {
    return (
        <RecetaDetalle
            titulo="Sopa de calabaza y jengibre"
            imagen={sopaCalabazaImg}
            nutricion={{
                calorias: 140,
                carbohidratos: 20,
                fibra: 5,
                proteinas: 3,
                grasas: 5
            }}
            beneficios={[
                "Rica en vitamina A para la salud ocular",
                "Propiedades antiinflamatorias del jengibre",
                "Baja en calorías, ideal para dietas de control de peso",
                "Ayuda a reforzar el sistema inmunológico"
            ]}
            ingredientes={[
                "2 tazas de calabaza en cubos",
                "1/2 cebolla picada",
                "1 cucharadita de jengibre fresco rallado",
                "1 diente de ajo picado",
                "2 tazas de caldo de verduras bajo en sodio",
                "1 cucharada de aceite de coco",
                "1/4 taza de leche de coco (opcional, para cremosidad)",
                "Sal y pimienta al gusto",
                "Semillas de calabaza tostadas para decorar"
            ]}
            pasos={[
                "En una olla, calienta el aceite de coco y sofríe la cebolla, ajo y jengibre por 3 minutos.",
                "Añade la calabaza y el caldo de verduras. Cocina a fuego medio hasta que la calabaza esté tierna (15-20 minutos).",
                "Tritura la mezcla con una licuadora de inmersión o en una licuadora hasta obtener una textura suave.",
                "Regresa la sopa a la olla, añade la leche de coco si la usas, y ajusta la sazón con sal y pimienta.",
                "Sirve caliente, decorada con semillas de calabaza tostadas."
            ]}
        />
    );
}