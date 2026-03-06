import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para efecto parallax en fondos o imágenes decorativas.
 * @param {number} speed - Multiplicador de velocidad (positivo o negativo)
 */
export const useParallax = ({ speed = 1, start = 'top bottom', end = 'bottom top' } = {}) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      yPercent: speed * 30, // Ajusta el multiplicador base según necesites
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub: true,
      },
    });
  }, { scope: ref });

  return ref;
};
