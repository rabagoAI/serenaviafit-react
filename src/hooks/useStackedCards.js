import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para efecto de tarjetas que se apilan una sobre otra.
 * Ideal para listas de features o pasos a paso.
 */
export const useStackedCards = ({ cardSelector = '.stacked-card' } = {}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const cards = gsap.utils.toArray(cardSelector, containerRef.current);
    
    if (cards.length === 0) return;

    cards.forEach((card, i) => {
      // Configuramos el pinning y scale down simulando apilado
      ScrollTrigger.create({
        trigger: card,
        start: 'top 15%', // Margen desde arriba donde se apilan
        end: () => `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        animation: gsap.to(card, {
          scale: 1 - ((cards.length - i) * 0.05),
          opacity: 1 - ((cards.length - i) * 0.1),
          ease: 'none'
        }),
        scrub: true,
      });
    });
  }, { scope: containerRef });

  return containerRef;
};
