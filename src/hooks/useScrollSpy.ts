import { useState, useEffect } from 'react';

export interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useScrollSpy = (elementIds: string[], options: ScrollSpyOptions = {}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const { rootMargin = '-80px 0px -80% 0px', threshold = 0.1 } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Get the entry with the highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin, threshold }
    );

    // Observe all elements
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elementIds, options.rootMargin, options.threshold]);

  return activeId;
};