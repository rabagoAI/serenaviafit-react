import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './RecetaDetalle.css';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const NUTRICION_LABELS = [
  { key: 'calorias',      label: 'Calorías',      unit: 'kcal', color: '#e8734a' },
  { key: 'proteinas',     label: 'Proteínas',     unit: 'g',    color: '#4a90e8' },
  { key: 'carbohidratos', label: 'Carbos',        unit: 'g',    color: '#e8c44a' },
  { key: 'grasas',        label: 'Grasas',        unit: 'g',    color: '#7bc67e' },
  { key: 'fibra',         label: 'Fibra',         unit: 'g',    color: '#9b7de8' },
];

export default function RecetaDetalle({ titulo, imagen, descripcion, categoria, nutricion, beneficios, ingredientes, pasos }) {
  const statsRef = useRef(null);

  useGSAP(() => {
    const nums = statsRef.current?.querySelectorAll('.rd-stat__num');
    if (!nums) return;
    nums.forEach((el) => {
      const target = parseFloat(el.textContent);
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.4,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });
  }, { scope: statsRef });

  return (
    <div className="rd-page">

      {/* ── Hero ────────────────────────────────────────── */}
      <div className="rd-hero">
        <img src={imagen} alt={titulo} className="rd-hero__img" />
        <div className="rd-hero__overlay" />
        <div className="rd-hero__content">
          <Link to="/nutricion" className="rd-back">← Todas las recetas</Link>
          {categoria && <span className="rd-badge">{categoria}</span>}
          <motion.h1 className="rd-titulo" {...fadeUp(0.1)}>{titulo}</motion.h1>
          {descripcion && <motion.p className="rd-descripcion" {...fadeUp(0.2)}>{descripcion}</motion.p>}
        </div>
      </div>

      {/* ── Cuerpo ──────────────────────────────────────── */}
      <div className="rd-body">

        {/* Stats nutricionales */}
        <motion.div className="rd-stats" ref={statsRef} {...fadeUp(0.15)}>
          {NUTRICION_LABELS.map(({ key, label, unit, color }) => (
            <div className="rd-stat" key={key} style={{ '--stat-color': color }}>
              <span className="rd-stat__num">{nutricion[key]}</span>
              <span className="rd-stat__unit">{unit}</span>
              <span className="rd-stat__label">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Ingredientes + Beneficios */}
        <motion.div className="rd-cols" {...fadeUp(0.2)}>
          <section className="rd-section">
            <h2 className="rd-section__title">Ingredientes</h2>
            <ul className="rd-ingredients">
              {ingredientes.map((item, i) => (
                <li key={i} className="rd-ingredients__item">
                  <span className="rd-ingredients__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rd-section">
            <h2 className="rd-section__title">Beneficios</h2>
            <ul className="rd-benefits">
              {beneficios.map((item, i) => (
                <li key={i} className="rd-benefits__item">
                  <span className="rd-benefits__icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>

        {/* Pasos */}
        <motion.section className="rd-section rd-steps-section" {...fadeUp(0.25)}>
          <h2 className="rd-section__title">Preparación</h2>
          <ol className="rd-steps">
            {pasos.map((paso, i) => (
              <li key={i} className="rd-step">
                <div className="rd-step__num">{i + 1}</div>
                <p className="rd-step__text">{paso}</p>
              </li>
            ))}
          </ol>
        </motion.section>

      </div>
    </div>
  );
}
