import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para fijar (pin) una sección durante el scroll mientras 
 * ocurre alguna animación (por ejemplo, escalar un video, mover laterales, etc).
 */
export const usePinnedSection = ({ pinSpacing = true, triggerStart = 'top top' } = {}) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: triggerStart,
      end: '+=100%', // Fija la sección por 100% de la altura de la ventana
      pin: true,
      pinSpacing,
    });
  }, { scope: ref });

  return ref;
};
