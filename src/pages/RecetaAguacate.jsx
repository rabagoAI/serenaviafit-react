import RecetaDetalle from '../components/RecetaDetalle';
import aguacateImg from '../assets/aguacate.png';

export default function RecetaAguacate() {
  return (
    <RecetaDetalle
      titulo="Tostada de Aguacate con Huevo y Semillas"
      imagen={aguacateImg}
      nutricion={{
        calorias: 320,
        carbohidratos: 25,
        fibra: 6,
        proteinas: 12,
        grasas: 18
      }}
      beneficios={[
        "Grasas saludables que favorecen la salud del corazón",
        "Aporta proteínas de alta calidad gracias al huevo",
        "Ideal para desayunos saciantes o cenas ligeras",
        "Rica en potasio, vitamina E y antioxidantes"
      ]}
      ingredientes={[
        "1 rebanada de pan integral (preferiblemente de masa madre)",
        "1/2 aguacate maduro",
        "1 huevo (poché, duro o a la plancha)",
        "Semillas de sésamo o chía (opcional)",
        "Sal marina y pimienta al gusto",
        "Un chorrito de limón (opcional)"
      ]}
      pasos={[
        "Tuesta la rebanada de pan hasta que esté crujiente.",
        "Machaca el aguacate con un tenedor y añade sal, pimienta y unas gotas de limón.",
        "Extiende el aguacate sobre el pan caliente.",
        "Cocina el huevo al gusto (poché, duro o a la plancha) y colócalo encima.",
        "Espolvorea con semillas y sirve al momento."
      ]}
    />
  );
}
