
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../styles/home.css";
import blackLotus from "../assets/images/black-lotus.webp";
import theOneRing from "../assets/images/the-one-ring.jpg";
import timeWalk from "../assets/images/time-walk.webp";
import charizardEx from "../assets/images/Charizard-ex.webp";
import pikachuIllustrator from "../assets/images/Pokémon_Illustrator.png";
import mewtwo from "../assets/images/mewtwo.jpg";
import blueEyes from "../assets/images/blue-eyes-dragon.jpg";
import darkMagician from "../assets/images/dark-magician.jpg";
import magicIcon from "../assets/images/magic-icon.png";
import pokemonIcon from "../assets/images/pokemon-icon.png";
import yugiohIcon from "../assets/images/yugioh-icon.png";

const Home = () => {
  const { cart, getTotal, getQuantity, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <main id="contenido" tabIndex="-1">
      {/* Botón flotante de carrito */}
      <button
        id="btn-mini-carrito"
        aria-label="Ver carrito"
        onClick={toggleCart}
        style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1001, background: '#CC2936', color: '#fff', border: 'none', borderRadius: '50%', width: '56px', height: '56px', boxShadow: '0 2px 8px #0002', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        🛒
        <span id="mini-carrito-cantidad" style={{ position: 'absolute', top: '8px', right: '8px', background: '#fff', color: '#CC2936', borderRadius: '50%', padding: '2px 7px', fontSize: '0.9rem', fontWeight: 'bold' }}>{getQuantity()}</span>
      </button>

      {/* Mini-carrito sidebar */}
      <aside id="mini-carrito" style={{ position: 'fixed', top: '0', right: isCartOpen ? '0' : '-400px', width: '340px', height: '100vh', background: '#fff', boxShadow: '-4px 0 16px #0002', zIndex: 1002, transition: 'right 0.3s', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0', fontSize: '1.2rem', color: '#08415C' }}>Carrito</h2>
          <button id="cerrar-mini-carrito" aria-label="Cerrar" onClick={toggleCart} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#CC2936' }}>&times;</button>
        </header>
        <div id="mini-carrito-lista" style={{ flex: '1', overflowY: 'auto', padding: '1rem' }}>
          {cart.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', background: '#f9f9f9', borderRadius: '6px', padding: '0.7rem 0.5rem' }}>
              <div>
                <strong style={{ color: '#08415C', fontSize: '1.05rem' }}>{item.nombre}</strong>
                <small style={{ color: '#388697', fontSize: '0.95rem' }}>x{item.cantidad}</small>
                <div style={{ color: '#388697', fontSize: '0.97rem', marginLeft: '2px', display: 'block' }}>${item.precio} c/u</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => decreaseQuantity(idx)} style={{ background: '#f0f0f0', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', marginRight: '5px' }}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => increaseQuantity(idx)} style={{ background: '#f0f0f0', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', marginLeft: '5px' }}>+</button>
                <button onClick={() => removeFromCart(idx)} title="Eliminar" style={{ background: '#CC2936', color: '#fff', border: 'none', borderRadius: '50%', width: '28px', height: '28px', fontSize: '1.2rem', cursor: 'pointer', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
              </div>
            </div>
          ))}
        </div>
        <footer style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
          <strong id="mini-carrito-total">Total: ${getTotal().toLocaleString()}</strong>
        </footer>
      </aside>

    {/* Pantalla 1: HOME / LANDING */}
    <section id="home" className="screen" aria-labelledby="home-title">
      <h2 id="home-title">Bienvenido</h2>
      <p>Explora, colecciona y construye tu mazo ideal.</p>

      {/* Buscador de cartas */}
      <form aria-label="Buscador de cartas" data-screen="home">
        <label htmlFor="q">¿Qué carta buscas hoy?</label>
        <input id="q" name="q" type="search" placeholder="Black Lotus, Charizard, Planeswalker" />
        <button type="submit">Buscar</button>
      </form>

      {/* Cartas destacadas */}
      <section aria-labelledby="home-destacados-title">
        <h3 id="home-destacados-title">Cartas destacadas de hoy</h3>
        <ul className="cards-gallery" data-test-id="home-destacados">
          {/* Magic: The Gathering */}
          <li className="card-tcg">
            <img src={blackLotus} alt="MTG: Black Lotus" className="card-img" />
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
            <img src={theOneRing} alt="MTG: The One Ring" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">The One Ring Scroll Edition</div>
                <div className="card-meta">Magic: The Gathering</div>
                <div className="card-desc">La carta más icónica de la expansión de LOTR está aquí.</div>
              </div>
              <Link to="/detalle-carta/the-one-ring" className="card-link" data-action="ver-detalle" data-id="C03">Ver detalle</Link>
            </div>
          </li>
          <li className="card-tcg">
            <img src={timeWalk} alt="MTG: Time Walk" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Time Walk</div>
                <div className="card-meta">Magic: The Gathering</div>
                <div className="card-desc">Permite tomar un turno extra, carta de poder histórico.</div>
              </div>
              <Link to="/detalle-carta/time-walk" className="card-link" data-action="ver-detalle" data-id="C04">Ver detalle</Link>
            </div>
          </li>

          {/* Pokémon */}
          <li className="card-tcg">
            <img src={charizardEx} alt="Pokémon: Shiny Charizard GX" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Shiny Charizard GX</div>
                <div className="card-meta">Pokémon</div>
                <div className="card-desc">Una de las cartas más buscadas y valiosas de Pokémon.</div>
              </div>
              <Link to="/detalle-carta/charizard-ex" className="card-link" data-action="ver-detalle" data-id="P01">Ver detalle</Link>
            </div>
          </li>
          <li className="card-tcg">
            <img src={pikachuIllustrator} alt="Pokémon: Pikachu Illustrator" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Pikachu Illustrator</div>
                <div className="card-meta">Pokémon</div>
                <div className="card-desc">La carta más rara y exclusiva de Pokémon.</div>
              </div>
              <Link to="/detalle-carta/pikachu-illustrator" className="card-link" data-action="ver-detalle" data-id="P02">Ver detalle</Link>
            </div>
          </li>
          <li className="card-tcg">
            <img src={mewtwo} alt="Pokémon: Mewtwo EX" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Mewtwo EX</div>
                <div className="card-meta">Pokémon</div>
                <div className="card-desc">Poderoso Pokémon legendario, favorito de muchos fans.</div>
              </div>
              <Link to="/detalle-carta/mewtwo" className="card-link" data-action="ver-detalle" data-id="P03">Ver detalle</Link>
            </div>
          </li>

          {/* Yu-Gi-Oh! */}
          <li className="card-tcg">
            <img src={blueEyes} alt="Yu-Gi-Oh!: Blue-Eyes White Dragon" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Blue-Eyes White Dragon</div>
                <div className="card-meta">Yu-Gi-Oh!</div>
                <div className="card-desc">El dragón más famoso y poderoso del universo Yu-Gi-Oh!.</div>
              </div>
              <Link to="/detalle-carta/blue-eyes" className="card-link" data-action="ver-detalle" data-id="Y01">Ver detalle</Link>
            </div>
          </li>
          <li className="card-tcg">
            <img src={darkMagician} alt="Yu-Gi-Oh!: Dark Magician" className="card-img" />
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">Dark Magician</div>
                <div className="card-meta">Yu-Gi-Oh!</div>
                <div className="card-desc">El mago emblemático de la serie y pieza clave en duelos.</div>
              </div>
              <Link to="/detalle-carta/dark-magician" className="card-link" data-action="ver-detalle" data-id="Y02">Ver detalle</Link>
            </div>
          </li>
        </ul>
      </section>
    </section>

    {/* Pantalla 2: Singles */}
    <section id="singles" className="screen" aria-labelledby="singles-title">
      <h2 id="singles-title">Compra de Singles</h2>
      <div className="tcg-icons">
        <Link to="/magic-singles" aria-label="Magic: The Gathering">
          <img src={magicIcon} alt="Magic: The Gathering" />
        </Link>
        <Link to="/pokemon-singles" aria-label="Pokémon">
          <img src={pokemonIcon} alt="Pokémon" />
        </Link>
        <Link to="/yugioh-singles" aria-label="Yu-Gi-Oh!">
          <img src={yugiohIcon} alt="Yu-Gi-Oh!" />
        </Link>
      </div>
    </section>
  </main>
  );
};

export default Home;
