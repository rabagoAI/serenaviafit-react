import { useState, useCallback } from 'react';

const KEY = 'svf_favoritos';

function leer() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY)) || []);
  } catch {
    return new Set();
  }
}

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState(leer);

  const toggleFavorito = useCallback((slug) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      localStorage.setItem(KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const esFavorito = useCallback((slug) => favoritos.has(slug), [favoritos]);

  return { favoritos, toggleFavorito, esFavorito };
}
