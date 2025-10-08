
import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import yugiohIcon from "../styles/yugioh-icon.png";

const Home = () => (
  <main id="contenido" tabIndex="-1">
    {/* Botón flotante de carrito */}
    <button
      id="btn-mini-carrito"
      aria-label="Ver carrito"
    >
      🛒
      <span id="mini-carrito-cantidad">0</span>
    </button>

    {/* Mini-carrito sidebar */}
    <aside id="mini-carrito">
      <header>
        <h2>Carrito</h2>
        <button id="cerrar-mini-carrito" aria-label="Cerrar">&times;</button>
      </header>
      <div id="mini-carrito-lista"></div>
      <footer>
        <strong id="mini-carrito-total">Total: $0</strong>
      </footer>
    </aside>

    {/* Pantalla 1: HOME / LANDING */}
    <section id="home" className="screen" aria-labelledby="home-title">
      <h1 id="home-title">Bienvenido a Acople TCG</h1>
      <p>Explora, colecciona y construye tu mazo ideal.</p>

      {/* Buscador de cartas */}
      <form aria-label="Buscador de cartas" data-screen="home">
        <label htmlFor="q">¿Qué carta buscas hoy?</label>
        <input id="q" name="q" type="search" placeholder="Black Lotus, Charizard, Planeswalker" />
        <button type="submit">Buscar</button>
      </form>

      {/* Cartas destacadas */}
      <section aria-labelledby="home-destacados-title">
        <h2 id="home-destacados-title">Cartas destacadas de hoy</h2>
        <ul className="cards-gallery" data-test-id="home-destacados">
          {/* Magic: The Gathering */}
          <li className="card-tcg">
            <img src="/images/black-lotus.webp" alt="MTG: Black Lotus" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Black Lotus</div>
                <div className="card-meta">Magic: The Gathering</div>
                <div className="card-desc">La carta más icónica y valiosa de MTG.</div>
              </div>
              <Link to="/detalle-carta/black-lotus" className="card-link" data-action="ver-detalle" data-id="C01">Ver detalle</Link>
            </div>
          </li>
          <li className="card-tcg">
            <img src="/images/the-one-ring.jpg" alt="MTG: The One Ring" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">The One Ring Scroll Edition</div>
                <div className="card-meta">Magic: The Gathering</div>
                <div className="card-desc">La carta más icónica de la expansión de LOTR está aquí.</div>
              </div>
              <Link to="/detalle-carta/the-one-ring" className="card-link" data-action="ver-detalle" data-id="C03">Ver detalle</Link>
            </div>
          </li>
          {/* Add other cards similarly */}
        </ul>
      </section>
    </section>

    {/* Pantalla 2: Singles */}
    <section id="singles" className="screen" aria-labelledby="singles-title">
      <h2 id="singles-title">Compra de Singles</h2>
      <div className="tcg-icons">
        <Link to="/magic-singles" aria-label="Magic: The Gathering">
          <img src="styles/images/magic-icon.png" alt="Magic: The Gathering" />
        </Link>
        <Link to="/pokemon-singles" aria-label="Pokémon">
          <img src="styles/images/pokemon-icon.png" alt="Pokémon" />
        </Link>
        <Link to="/yugioh-singles" aria-label="Yu-Gi-Oh!">
          <img src={yugiohIcon}alt="Yu-Gi-Oh!" />
        </Link>
      </div>
    </section>

    <footer>
      <p>© 2025 Acople TCG. Todos los derechos reservados.</p>
    </footer>
  </main>
);

export default Home;