import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para revelar elementos al hacer scroll (fade + slide up)
 * Útil para títulos, imágenes solas o contenedores genéricos.
 */
export const useScrollReveal = ({
  y = 50,
  x = 0,
  opacity = 0,
  duration = 1,
  ease = 'power3.out',
  delay = 0,
  start = 'top 85%',
  toggleActions = 'play none none reverse',
} = {}) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y,
      x,
      opacity,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions,
      },
    });
  }, { scope: ref });

  return ref;
};

/**
 * Hook para animar elementos hijos de forma escalonada (Stagger).
 * Útil para grids de tarjetas, listas de iconos, etc.
 */
export const useScrollStagger = ({
  selector = '.stagger-item',
  y = 40,
  x = 0,
  opacity = 0,
  duration = 0.8,
  stagger = 0.15,
  ease = 'power2.out',
  start = 'top 80%',
} = {}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll(selector);
    if (items.length === 0) return;

    gsap.from(items, {
      y,
      x,
      opacity,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return containerRef;
};
