import { useEffect, useState } from 'react';

export interface ParallaxValue {
  x: number;
  y: number;
  scale: number;
}

export const useParallax = (intensity: number = 0.5): ParallaxValue => {
  const [values, setValues] = useState<ParallaxValue>({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax values based on scroll position
      const scrollProgress = Math.min(scrollY / windowHeight, 1);
      
      setValues({
        x: scrollProgress * intensity * 50,
        y: scrollProgress * intensity * 100,
        scale: 1 + scrollProgress * intensity * 0.1
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return values;
};