import batidoImg from '../assets/batido-verde.png';
import avenaImg from '../assets/avena.png';
import aguacateImg from '../assets/aguacate.png';
import ensaladaImg from '../assets/ensalada-mediterranea.png';
import hummusImg from '../assets/hummus-casero.png';
import salmonImg from '../assets/salmon.png';
import sopaCalabazaImg from '../assets/sopa-calabaza.png';
import buddhaBowlImg from '../assets/buddha-bowl.png';
import yogurImg from '../assets/yogur-frutos-rojos.png';
import sopaLentejasImg from '../assets/sopa-lentejas.png';
import polloImg from '../assets/pollo-salteado.jpeg';
import bolasImg from '../assets/bolas-energia.png';



// 🖼️ Imágenes pendientes: añade tus fotos en src/assets/ y actualiza estos imports:
// sopa-lentejas.png, pollo-verduras.png, bolas-energia.png




const recetas = [
    // ─── RECETAS ORIGINALES ────────────────────────────────────────────────────
    {
        slug: 'batido-verde-detox',
        titulo: 'Batido Verde Detox',
        imagen: batidoImg,
        descripcion: 'Refrescante y lleno de nutrientes para empezar tu día con energía.',
        nutricion: { calorias: 110, carbohidratos: 20, fibra: 5, proteinas: 3, grasas: 1 },
        beneficios: [
            'Depurativo natural para el hígado y los riñones',
            'Alto contenido en fibra y antioxidantes',
            'Favorece la digestión y reduce la inflamación',
            'Ideal como desayuno ligero o post-entreno',
        ],
        ingredientes: [
            '1 taza de espinacas frescas',
            '1 manzana verde',
            '1 plátano maduro',
            '1 trozo pequeño de jengibre',
            '1 taza de agua o bebida vegetal',
            '1 cucharada de semillas de chía (opcional)',
        ],
        pasos: [
            'Lava bien todos los ingredientes.',
            'Corta la manzana y el plátano en trozos.',
            'Agrega todo a la batidora junto con el agua.',
            'Bate hasta que quede una mezcla homogénea.',
            'Sirve frío. Puedes añadir hielo si lo deseas.',
        ],
    },
    {
        slug: 'avena',
        titulo: 'Bowl de Avena',
        imagen: avenaImg,
        descripcion: 'Avena con bebida vegetal, frutas rojas y semillas de chía.',
        nutricion: { calorias: 280, carbohidratos: 45, fibra: 8, proteinas: 9, grasas: 6 },
        beneficios: [
            'Rica en fibra soluble que reduce el colesterol',
            'Proporciona energía sostenida durante horas',
            'Fuente de proteínas vegetales',
            'Perfecta para el desayuno o merienda',
        ],
        ingredientes: [
            '80g de copos de avena',
            '250ml de bebida vegetal (avena o almendra)',
            '1 puñado de frutas rojas (fresas, arándanos)',
            '1 cucharada de semillas de chía',
            '1 cucharadita de miel o sirope de agave',
            'Canela al gusto',
        ],
        pasos: [
            'Calienta la bebida vegetal en un cazo a fuego medio.',
            'Añade los copos de avena y remueve durante 5 minutos.',
            'Retira del fuego y vierte en un bol.',
            'Añade las frutas rojas, las semillas de chía y la miel.',
            'Espolvorea canela al gusto y sirve caliente.',
        ],
    },
    {
        slug: 'aguacate',
        titulo: 'Tostada de Aguacate',
        imagen: aguacateImg,
        descripcion: 'Pan integral con aguacate, huevo poché y semillas de sésamo.',
        nutricion: { calorias: 320, carbohidratos: 28, fibra: 7, proteinas: 14, grasas: 18 },
        beneficios: [
            'Grasas saludables monoinsaturadas del aguacate',
            'Proteína completa del huevo',
            'Fibra del pan integral para la digestión',
            'Saciante y nutritiva para el desayuno',
        ],
        ingredientes: [
            '2 rebanadas de pan integral',
            '1 aguacate maduro',
            '2 huevos',
            '1 cucharada de semillas de sésamo',
            'Zumo de medio limón',
            'Sal, pimienta y pimentón al gusto',
        ],
        pasos: [
            'Tuesta el pan hasta que esté dorado.',
            'Aplasta el aguacate con un tenedor y añade el zumo de limón, sal y pimienta.',
            'Pocha los huevos en agua con un chorrito de vinagre durante 3 minutos.',
            'Extiende el aguacate sobre las tostadas.',
            'Coloca el huevo pochado encima y espolvorea sésamo y pimentón.',
        ],
    },
    {
        slug: 'ensalada',
        titulo: 'Ensalada Mediterránea',
        imagen: ensaladaImg,
        descripcion: 'Garbanzos, pepino, tomate cherry, y aceite de oliva virgen extra.',
        nutricion: { calorias: 240, carbohidratos: 30, fibra: 9, proteinas: 10, grasas: 9 },
        beneficios: [
            'Alta en proteínas vegetales gracias a los garbanzos',
            'Antioxidantes del tomate y el aceite de oliva',
            'Muy hidratante por el pepino y el tomate',
            'Ideal como plato principal o guarnición',
        ],
        ingredientes: [
            '200g de garbanzos cocidos',
            '1 pepino',
            '200g de tomates cherry',
            '1/2 cebolla morada',
            '50g de aceitunas negras',
            '3 cucharadas de aceite de oliva virgen extra',
            'Zumo de limón, orégano, sal y pimienta',
        ],
        pasos: [
            'Escurre y aclara los garbanzos.',
            'Corta el pepino, los tomates y la cebolla en trozos pequeños.',
            'Mezcla todos los ingredientes en un bol grande.',
            'Aliña con aceite de oliva, zumo de limón, orégano, sal y pimienta.',
            'Refrigera 15 minutos antes de servir para que los sabores se integren.',
        ],
    },
    {
        slug: 'hummus',
        titulo: 'Hummus Casero',
        imagen: hummusImg,
        descripcion: 'Crema suave y saludable de garbanzos ideal como snack o entrante.',
        nutricion: { calorias: 170, carbohidratos: 18, fibra: 5, proteinas: 7, grasas: 8 },
        beneficios: [
            'Fuente de proteínas y fibra vegetal',
            'Grasas saludables del tahini y el aceite de oliva',
            'Sin gluten y apto para veganos',
            'Versátil: ideal con verduras, pan pita o tostadas',
        ],
        ingredientes: [
            '400g de garbanzos cocidos',
            '2 cucharadas de tahini (pasta de sésamo)',
            '2 dientes de ajo',
            'Zumo de 1 limón',
            '3 cucharadas de aceite de oliva',
            'Sal, comino y pimentón ahumado',
        ],
        pasos: [
            'Escurre los garbanzos reservando un poco del líquido.',
            'Tritura los garbanzos con el tahini, el ajo y el zumo de limón.',
            'Añade el aceite de oliva y tritura hasta obtener una crema suave.',
            'Si queda muy espeso, añade un poco del líquido reservado.',
            'Sirve con un hilo de aceite de oliva y pimentón ahumado.',
        ],
    },
    {
        slug: 'salmon',
        titulo: 'Salmón al Horno con Verduras',
        imagen: salmonImg,
        descripcion: 'Salmón al horno rico en Omega 3, acompañado de verduras de temporada.',
        nutricion: { calorias: 380, carbohidratos: 12, fibra: 4, proteinas: 38, grasas: 20 },
        beneficios: [
            'Alto contenido en Omega 3 para el corazón y el cerebro',
            'Proteína de alta calidad y fácil digestión',
            'Vitaminas D y B12 esenciales',
            'Bajo en carbohidratos, ideal para dietas equilibradas',
        ],
        ingredientes: [
            '2 filetes de salmón fresco',
            '1 calabacín',
            '1 pimiento rojo',
            '1 cebolla',
            '2 dientes de ajo',
            'Aceite de oliva, limón, eneldo, sal y pimienta',
        ],
        pasos: [
            'Precalienta el horno a 200°C.',
            'Corta las verduras en trozos y colócalas en una bandeja con aceite y sal.',
            'Hornea las verduras 15 minutos.',
            'Coloca el salmón sobre las verduras, aliña con limón y eneldo.',
            'Hornea 12-15 minutos más hasta que el salmón esté en su punto.',
        ],
    },
    {
        slug: 'sopa-calabaza',
        titulo: 'Sopa de Calabaza y Jengibre',
        imagen: sopaCalabazaImg,
        descripcion: 'Sopa cremosa y reconfortante, ideal para el control de peso.',
        nutricion: { calorias: 140, carbohidratos: 22, fibra: 4, proteinas: 3, grasas: 5 },
        beneficios: [
            'Muy baja en calorías y alta en fibra',
            'El jengibre tiene propiedades antiinflamatorias',
            'Rica en betacarotenos y vitamina A',
            'Perfecta para depurar y nutrir en invierno',
        ],
        ingredientes: [
            '600g de calabaza pelada y troceada',
            '1 cebolla',
            '2 dientes de ajo',
            '1 trozo de jengibre fresco (2cm)',
            '600ml de caldo de verduras',
            '2 cucharadas de aceite de oliva',
            'Sal, pimienta y cúrcuma',
        ],
        pasos: [
            'Sofríe la cebolla y el ajo en aceite de oliva a fuego medio.',
            'Añade la calabaza troceada y el jengibre rallado.',
            'Vierte el caldo de verduras y cocina 20 minutos.',
            'Tritura con una batidora hasta obtener una crema suave.',
            'Ajusta la sal y añade cúrcuma. Sirve caliente con un hilo de aceite.',
        ],
    },

    // ─── NUEVAS RECETAS ────────────────────────────────────────────────────────

    {
        slug: 'buddha-bowl-quinoa',
        titulo: 'Buddha Bowl de Quinoa',
        imagen: buddhaBowlImg,
        descripcion: 'Bol completo con quinoa, garbanzos asados, aguacate y aliño de tahini. Nutritivo y saciante.',
        nutricion: { calorias: 420, carbohidratos: 48, fibra: 12, proteinas: 18, grasas: 16 },
        beneficios: [
            'Proteína completa gracias a la quinoa (todos los aminoácidos esenciales)',
            'Grasas saludables del aguacate y el tahini',
            'Alto contenido en fibra para la saciedad',
            'Apto para veganos y sin gluten',
        ],
        ingredientes: [
            '150g de quinoa',
            '200g de garbanzos cocidos',
            '1 aguacate maduro',
            '1 puñado de tomates cherry',
            '1/2 pepino',
            '1/4 de col lombarda rallada',
            '2 cucharadas de tahini',
            'Zumo de limón, ajo en polvo, pimentón, sal',
        ],
        pasos: [
            'Cuece la quinoa en agua con sal durante 15 minutos. Escurre y reserva.',
            'Mezcla los garbanzos con aceite, pimentón y ajo en polvo. Hornea a 200°C 20 minutos.',
            'Prepara el aliño: mezcla tahini, zumo de limón, un diente de ajo y agua hasta obtener una crema.',
            'Monta el bol: quinoa de base, garbanzos, aguacate en láminas, tomates, pepino y col.',
            'Riega con el aliño de tahini y sirve inmediatamente.',
        ],
    },
    {
        slug: 'yogur-frutos-rojos',
        titulo: 'Yogur con Frutos Rojos y Granola',
        imagen: yogurImg,
        descripcion: 'Desayuno rápido y delicioso: yogur griego, granola crujiente y frutos rojos frescos.',
        nutricion: { calorias: 220, carbohidratos: 28, fibra: 4, proteinas: 14, grasas: 5 },
        beneficios: [
            'Probióticos del yogur griego para la salud intestinal',
            'Antioxidantes de los frutos rojos',
            'Calcio y proteínas de alta calidad',
            'Listo en 2 minutos, ideal para días con prisa',
        ],
        ingredientes: [
            '200g de yogur griego natural',
            '40g de granola sin azúcar añadido',
            '1 puñado de fresas y arándanos frescos',
            '1 cucharadita de miel',
            'Menta fresca para decorar (opcional)',
        ],
        pasos: [
            'Vierte el yogur griego en un bol o vaso.',
            'Añade la granola por encima para que quede crujiente.',
            'Coloca los frutos rojos lavados sobre la granola.',
            'Rocía con un hilo de miel.',
            'Decora con unas hojas de menta y sirve inmediatamente.',
        ],
    },
    {
        slug: 'sopa-lentejas',
        titulo: 'Sopa de Lentejas con Cúrcuma',
        imagen: sopaLentejasImg,
        descripcion: 'Sopa reconfortante de lentejas rojas con especias antiinflamatorias. Lista en 30 minutos.',
        nutricion: { calorias: 260, carbohidratos: 38, fibra: 11, proteinas: 16, grasas: 5 },
        beneficios: [
            'Las lentejas son una de las mejores fuentes de proteína vegetal',
            'La cúrcuma y el comino tienen potentes propiedades antiinflamatorias',
            'Alto contenido en hierro y ácido fólico',
            'Económica, saciante y muy fácil de preparar',
        ],
        ingredientes: [
            '200g de lentejas rojas',
            '1 cebolla',
            '2 dientes de ajo',
            '1 zanahoria',
            '1 tomate maduro',
            '1 litro de caldo de verduras',
            '1 cucharadita de cúrcuma',
            '1 cucharadita de comino',
            'Aceite de oliva, sal, pimienta y zumo de limón',
        ],
        pasos: [
            'Sofríe la cebolla, el ajo y la zanahoria en aceite de oliva 5 minutos.',
            'Añade el tomate troceado, la cúrcuma y el comino. Cocina 2 minutos más.',
            'Incorpora las lentejas lavadas y el caldo de verduras.',
            'Lleva a ebullición y cocina a fuego medio 20-25 minutos hasta que las lentejas estén tiernas.',
            'Tritura parcialmente para una textura cremosa. Añade zumo de limón y ajusta la sal.',
        ],
    },
    {
        slug: 'pollo-salteado-verduras',
        titulo: 'Pollo Salteado con Verduras',
        imagen: polloImg,
        descripcion: 'Salteado de pollo con brócoli, pimiento y zanahoria. Alto en proteínas y listo en 20 minutos.',
        nutricion: { calorias: 340, carbohidratos: 18, fibra: 5, proteinas: 42, grasas: 10 },
        beneficios: [
            'Proteína magra de alta calidad del pollo',
            'Vitaminas C y K del brócoli y el pimiento',
            'Bajo en grasas saturadas',
            'Ideal para después del entrenamiento',
        ],
        ingredientes: [
            '300g de pechuga de pollo en tiras',
            '1 brócoli pequeño en ramilletes',
            '1 pimiento rojo en tiras',
            '2 zanahorias en rodajas',
            '2 dientes de ajo',
            '2 cucharadas de salsa de soja baja en sodio',
            '1 cucharada de aceite de sésamo',
            'Semillas de sésamo para decorar',
        ],
        pasos: [
            'Calienta el aceite de sésamo en un wok o sartén grande a fuego alto.',
            'Saltea el pollo en tiras 5-6 minutos hasta que esté dorado. Reserva.',
            'En la misma sartén, saltea el ajo, la zanahoria y el brócoli 4 minutos.',
            'Añade el pimiento y el pollo reservado. Vierte la salsa de soja.',
            'Saltea 2 minutos más. Sirve con arroz integral o solo. Decora con sésamo.',
        ],
    },
    {
        slug: 'bolas-energia',
        titulo: 'Bolas de Energía de Avena y Dátiles',
        imagen: bolasImg,
        descripcion: 'Snack saludable sin horno: avena, dátiles, mantequilla de cacahuete y chocolate negro.',
        nutricion: { calorias: 95, carbohidratos: 14, fibra: 2, proteinas: 3, grasas: 4 },
        beneficios: [
            'Energía rápida y sostenida gracias a los dátiles y la avena',
            'Sin azúcar refinado ni horneado',
            'Fáciles de preparar y de llevar como snack',
            'Personalizables: añade coco, semillas o cacao',
        ],
        ingredientes: [
            '150g de copos de avena',
            '100g de dátiles Medjool sin hueso',
            '3 cucharadas de mantequilla de cacahuete natural',
            '2 cucharadas de pepitas de chocolate negro',
            '1 cucharada de semillas de chía',
            '1 cucharada de coco rallado (opcional)',
            'Una pizca de sal',
        ],
        pasos: [
            'Tritura los dátiles en un procesador hasta obtener una pasta.',
            'Mezcla en un bol la pasta de dátiles, la avena, la mantequilla de cacahuete, las semillas de chía y la sal.',
            'Incorpora las pepitas de chocolate y mezcla bien con las manos.',
            'Forma bolitas del tamaño de una nuez (salen unas 16-18 unidades).',
            'Reboza en coco rallado si lo deseas. Refrigera 30 minutos antes de servir. Conserva en nevera hasta 1 semana.',
        ],
    },
];

export default recetas;
