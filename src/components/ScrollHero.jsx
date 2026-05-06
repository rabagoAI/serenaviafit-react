import React, { useEffect, useRef } from 'react';
import './ScrollHero.css';
import heroImage from '../assets/hero-fit.png';

export default function ScrollHero() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const productRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const hintRef = useRef(null);

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  // eslint-disable-next-line
  const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sceneRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollDistance = containerHeight - windowHeight;
      let t = (0 - containerTop) / scrollDistance;
      t = clamp(t, 0, 1);
      
      const product = productRef.current;
      const tLeft = textLeftRef.current;
      const tRight = textRightRef.current;
      const tTop = textTopRef.current;
      const tBottom = textBottomRef.current;
      const hint = hintRef.current;

      if (!product || !tLeft || !tRight || !tTop || !tBottom || !hint) return;

      if (window.scrollY > 60) {
        hint.style.opacity = '0';
      } else {
        hint.style.opacity = '0.5';
      }

      if (t <= 0.25) {
        // Fase 1
        const p = t / 0.25;
        const y = lerp(80, 0, p);
        const scale = lerp(0.7, 1, p);
        product.style.transform = `translate(-50%, -50%) translateY(${y}px) scale(${scale})`;
        product.style.opacity = lerp(0, 1, p);

        tLeft.style.transform = `translateY(-50%) translateX(${lerp(-120, 0, p)}px)`;
        tLeft.style.opacity = lerp(0, 1, p);

        tRight.style.transform = `translateY(-50%) translateX(${lerp(120, 0, p)}px)`;
        tRight.style.opacity = lerp(0, 1, p);

        tTop.style.transform = `translateX(-50%) translateY(${lerp(-40, 0, p)}px)`;
        tTop.style.opacity = lerp(0, 1, p);

        tBottom.style.transform = `translateX(-50%) translateY(${lerp(40, 0, p)}px)`;
        tBottom.style.opacity = lerp(0, 1, p);

      } else if (t <= 0.5) {
        // Fase 2
        const p = (t - 0.25) / 0.25;
        const x = lerp(0, -180, p);
        const rotateY = lerp(0, -25, p);
        product.style.transform = `translate(-50%, -50%) translateX(${x}px) rotateY(${rotateY}deg)`;
        product.style.opacity = '1';

        tLeft.style.transform = `translateY(-50%) translateX(0px)`;
        tLeft.style.opacity = '1';

        tRight.style.transform = `translateY(-50%) translateX(${lerp(0, 80, p)}px)`;
        tRight.style.opacity = lerp(1, 0, p);

        tTop.style.transform = `translateX(-50%) translateY(${lerp(0, -40, p)}px)`;
        tTop.style.opacity = lerp(1, 0, p);

        tBottom.style.transform = `translateX(-50%) translateY(${lerp(0, 40, p)}px)`;
        tBottom.style.opacity = lerp(1, 0, p);

      } else if (t <= 0.75) {
        // Fase 3
        const p = (t - 0.5) / 0.25;
        const x = lerp(-180, 180, p);
        const rotateY = lerp(-25, 25, p);
        product.style.transform = `translate(-50%, -50%) translateX(${x}px) rotateY(${rotateY}deg)`;
        product.style.opacity = '1';

        tLeft.style.transform = `translateY(-50%) translateX(${lerp(0, -80, p)}px)`;
        tLeft.style.opacity = lerp(1, 0, p);

        tRight.style.transform = `translateY(-50%) translateX(${lerp(80, 0, p)}px)`;
        tRight.style.opacity = lerp(0, 1, p);

        tTop.style.transform = `translateX(-50%) translateY(-40px)`;
        tTop.style.opacity = '0';

        tBottom.style.transform = `translateX(-50%) translateY(${lerp(40, 0, p)}px)`;
        tBottom.style.opacity = lerp(0, 1, p);

      } else {
        // Fase 4
        const p = (t - 0.75) / 0.25;
        const scale = lerp(1, 1.2, p);
        const x = lerp(180, 0, p);
        const rotateY = lerp(25, 0, p);
        
        // Todo fade out al final (hacia p=1)
        const finalOpacity = lerp(1, 0, p);
        
        product.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`;
        product.style.opacity = finalOpacity;

        tLeft.style.transform = `translateY(-50%) translateX(-80px)`;
        tLeft.style.opacity = '0';

        tRight.style.transform = `translateY(-50%) translateX(0px)`;
        tRight.style.opacity = finalOpacity;

        // textTop vuelve y luego se desvanece
        tTop.style.transform = `translateX(-50%) translateY(${lerp(-40, 0, p)}px)`;
        // Fade in al principio de la fase 4, fade out al final:
        tTop.style.opacity = p < 0.5 ? lerp(0, 1, p * 2) : lerp(1, 0, (p - 0.5) * 2);

        tBottom.style.transform = `translateX(-50%) translateY(0px)`;
        tBottom.style.opacity = finalOpacity;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Llamada inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="sticky-scene" ref={sceneRef}>
        <div className="scene-bg" />
        
        <div className="scene-product" ref={productRef}>
          <img src={heroImage} alt="SerenaViaFit" />
        </div>
        
        <div className="scene-text left" ref={textLeftRef}>
          <span className="text-label">Alimentación</span>
          <h3 className="text-heading">Nutrición<br/>Consciente</h3>
          <p className="text-body">Recetas reales, fáciles y equilibradas para tu día a día.</p>
        </div>
        
        <div className="scene-text right" ref={textRightRef}>
          <span className="text-label">Movimiento</span>
          <h3 className="text-heading">Entrena<br/>en casa</h3>
          <p className="text-body">Rutinas funcionales adaptadas a tu ritmo y tiempo.</p>
        </div>
        
        <div className="scene-text center-top" ref={textTopRef}>
          <span className="text-label">Bienvenida</span>
          <h3 className="text-heading">Transforma<br/>tu vida</h3>
          <p className="text-body">Equilibrio real entre mente, cuerpo y bienestar.</p>
        </div>
        
        <div className="scene-text center-bottom" ref={textBottomRef}>
          <span className="text-label">Únete</span>
          <h3 className="text-heading">Empieza hoy</h3>
          <p className="text-body">Tu versión más saludable te está esperando.</p>
        </div>
        
        <div className="scroll-hint" ref={hintRef}>
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </div>
    </div>
  );
}
