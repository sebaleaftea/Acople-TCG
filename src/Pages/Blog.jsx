import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="screen">
      {/* Blog Header */}
      <div className="blog-header">
        <h1 className="blog-title">Blog Acople TCG</h1>
        <p className="blog-subtitle">
          Descubre consejos, estrategias y noticias del mundo de los juegos de cartas coleccionables
        </p>
        <div className="blog-divider"></div>
      </div>

      {/* Blog Sections */}
      <div className="blog-section">
        <h2 className="blog-section-title">Nuestros temas generales</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="/src/assets/images/blog-magic.webp" alt="Magic: The Gathering" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Estrategias Avanzadas en Magic: The Gathering</h3>
              <p className="blog-card-desc">
                Aprende técnicas avanzadas para dominar el formato Standard y sorprender a tus oponentes con jugadas inesperadas.
              </p>
              <button onClick={() => handleReadMore('magic')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
          <div className="blog-card">
            <img src="/src/assets/images/blog-ninos.webp" alt="Juegos para niños" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">¿Por qué los adultos deberían jugar con niños?</h3>
              <p className="blog-card-desc">
                Descubre los beneficios emocionales y sociales de compartir juegos con los más pequeños de la casa.
              </p>
              <button onClick={() => handleReadMore('ninos')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
          <div className="blog-card">
            <img src="/src/assets/images/blog-zombies.webp" alt="Zombies" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Reseña: Marvel Zombies en Hydra Resurrection</h3>
              <p className="blog-card-desc">
                Análisis completo de la nueva expansión de Zombicide que trae de vuelta a los héroes de Marvel como no muertos.
              </p>
              <button onClick={() => handleReadMore('zombies')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
          <div className="blog-card">
            <img src="/src/assets/images/blog-magicTMNT.webp" alt="Magic TMNT" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Cruzando Universos: Magic y Teenage Mutant Ninja Turtles</h3>
              <p className="blog-card-desc">
                Explora la colaboración entre Magic: The Gathering y las Tortugas Ninja, con estrategias y reseñas de las cartas.
              </p>
              <button onClick={() => handleReadMore('magicTMNT')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <h2 className="blog-section-title">Juegos de mesa y próximos lanzamientos</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="/src/assets/images/blog-hoth.webp" alt="Star Wars: La Batalla de Hoth" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Guía para La Batalla de Hoth</h3>
              <p className="blog-card-desc">
                Estrategias completas para el juego de miniaturas de Star Wars, desde construcción de ejército hasta tácticas avanzadas.
              </p>
              <button onClick={() => handleReadMore('hoth')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
          <div className="blog-card">
            <img src="/src/assets/images/blog-sonic.webp" alt="Sonic" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Nuevos lanzamientos: Sonic en los juegos de mesa</h3>
              <p className="blog-card-desc">
                Explora los últimos juegos de mesa inspirados en el erizo azul más rápido del mundo.
              </p>
              <button onClick={() => handleReadMore('sonic')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
          <div className="blog-card">
            <img src="/src/assets/images/blog-nextsets.webp" alt="Próximos sets" className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">Anticipando los Próximos Sets de TCG</h3>
              <p className="blog-card-desc">
                Rumores y expectativas sobre las próximas expansiones de Magic, Pokémon y Yu-Gi-Oh!.
              </p>
              <button onClick={() => handleReadMore('nextsets')} className="blog-card-cta">Leer más</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Community Section */}
      <div className="tips-section">
        <h2 className="tips-title">Tips y Comunidad</h2>
        <ul className="tips-list">
          <li className="tips-item">
            <span className="tips-item-icon">🎯</span>
            <p className="tips-item-text">Mantén tus cartas en perfectas condiciones usando fundas protectoras de alta calidad.</p>
          </li>
          <li className="tips-item">
            <span className="tips-item-icon">🤝</span>
            <p className="tips-item-text">Únete a nuestra comunidad en Discord para compartir estrategias y hacer nuevos amigos.</p>
          </li>
          <li className="tips-item">
            <span className="tips-item-icon">📚</span>
            <p className="tips-item-text">Lee las reglas oficiales antes de cada partida para evitar confusiones y disfrutar más.</p>
          </li>
          <li className="tips-item">
            <span className="tips-item-icon">🏆</span>
            <p className="tips-item-text">Practica regularmente y analiza tus partidas para mejorar constantemente tus habilidades.</p>
          </li>
          <li className="tips-item">
            <span className="tips-item-icon">💡</span>
            <p className="tips-item-text">Experimenta con diferentes mazos y estrategias para encontrar tu estilo de juego único.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
