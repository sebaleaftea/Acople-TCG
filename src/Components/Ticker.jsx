import React from 'react';

// Efecto ticker (marquee) nativo sin dependencias
// Duplica los children para crear un loop infinito con CSS animation
export default function Ticker({ children, ariaLabel = 'Destacados' }) {
  const slides = React.Children.toArray(children);
  return (
    <section className="ticker" aria-label={ariaLabel}>
      <div className="ticker-viewport">
        <div className="ticker-track">
          {slides.map((child, i) => (
            <div className="ticker-item" key={`a-${i}`}>{child}</div>
          ))}
          {slides.map((child, i) => (
            <div className="ticker-item" key={`b-${i}`}>{child}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
