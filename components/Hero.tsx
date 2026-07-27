'use client';

import { useEffect, useRef } from 'react';
import Terminal from './Terminal';

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gridRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="grid-overlay" ref={gridRef}></div>
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">Available for projects</p>
          <h1 className="hero-name">
            Sohaib<br /><span className="accent">Asif.</span>
          </h1>
          <p className="hero-title">Web &amp; Android Developer</p>
          <p className="hero-desc">
            I build performant, accessible, and visually precise web and mobile experiences. Obsessed with the details that make software feel effortless.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View my work</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
