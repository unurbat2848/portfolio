import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(options.initialVisible || false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollPos = window.scrollY;
        const scrollingDown = currentScrollPos > prevScrollPos;

        if (entry.isIntersecting && scrollingDown) {
          setIsVisible(true);
        } else if (!entry.isIntersecting && !scrollingDown) {
          setIsVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
      },
      {
        threshold: 0.2,
        ...options,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [prevScrollPos]);

  return [elementRef, isVisible];
};
