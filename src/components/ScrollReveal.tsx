'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)').forEach((el) =>
        io.observe(el)
      );
    };

    observe();
    const t = setTimeout(observe, 100);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
