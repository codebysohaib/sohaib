'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || '0';
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, parseInt(delay, 10));
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(
      '.reveal, .stat, .skill-card, .project-card, .contact-glow'
    );
    elements.forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String((i % 4) * 80);
      observer.observe(el);
    });

    document.querySelectorAll('.skill-card').forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 80}ms`;
    });
    document.querySelectorAll('.project-card').forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 100}ms`;
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
