import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Componente que divide un string en palabras y las revela una por una
 * con una animación de aparición (fade up).
 */
export default function TextReveal({ text, as: Component = 'h2', className }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const words = gsap.utils.toArray('.reveal-word', containerRef.current);
    if (!words.length) return;

    gsap.from(words, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  // Prevenir que el texto final se rompa, agrupando espacios
  const segments = text.split(' ');

  return (
    <Component ref={containerRef} className={className} style={{ overflow: 'hidden' }}>
      {segments.map((word, i) => (
        <span 
          key={i} 
          className="reveal-word" 
          style={{ display: 'inline-block', whiteSpace: 'pre', overflow: 'hidden' }}
        >
          {word}{i !== segments.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Component>
  );
}
