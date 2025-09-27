
import React from "react";
import { Link } from "react-router-dom";


const Home = () => (
  <main id="contenido" tabIndex="-1">
    {/* Botón flotante de carrito */}
    <button
      id="btn-mini-carrito"
      aria-label="Ver carrito"
      style={{position:'fixed',bottom:32,right:32,zIndex:1001,background:'#CC2936',color:'#fff',border:'none',borderRadius:'50%',width:56,height:56,boxShadow:'0 2px 8px #0002',fontSize:'2rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}
    >
      🛒
      <span
        id="mini-carrito-cantidad"
        style={{position:'absolute',top:8,right:8,background:'#fff',color:'#CC2936',borderRadius:'50%',padding:'2px 7px',fontSize:'0.9rem',fontWeight:'bold'}}
      >
        0
      </span>
    </button>
    {/* Mini-carrito sidebar */}
    <aside
      id="mini-carrito"
      style={{position:'fixed',top:0,right:-400,width:340,height:'100vh',background:'#fff',boxShadow:'-4px 0 16px #0002',zIndex:1002,transition:'right 0.3s',display:'flex',flexDirection:'column'}}
    >
      <header style={{padding:'1rem',borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{margin:0,fontSize:'1.2rem',color:'#08415C'}}>Carrito</h2>
        <button id="cerrar-mini-carrito" aria-label="Cerrar" style={{background:'none',border:'none',fontSize:'1.5rem',cursor:'pointer',color:'#CC2936'}}>&times;</button>
      </header>
      <div id="mini-carrito-lista" style={{flex:1,overflowY:'auto',padding:'1rem'}}></div>
      <footer style={{padding:'1rem',borderTop:'1px solid #eee'}}>
        <strong id="mini-carrito-total">Total: $0</strong>
      </footer>
    </aside>

    {/* Pantalla 1: HOME / LANDING */}
    <section id="home" className="screen" aria-labelledby="home-title">
      <h2 id="home-title">Bienvenido</h2>
      <p>Explora, colecciona y construye tu mazo ideal.</p>

      <form aria-label="Buscador de cartas" data-screen="home">
        <label htmlFor="q">¿Qué carta buscas hoy?</label>
        <input id="q" name="q" type="search" placeholder="Black Lotus, Charizard, Planeswalker" />
        <button type="submit">Buscar</button>
      </form>

      <section aria-labelledby="home-destacados-title">
        <h3 id="home-destacados-title">Cartas destacadas de hoy</h3>
        <ul className="cards-gallery" data-test-id="home-destacados">
          {/* Magic: The Gathering */}
          <li className="card-tcg">
            <img src="/images/black-lotus.webp" alt="MTG: Black Lotus" className="card-img" />
            <div className="card-title">Black Lotus</div>
            <div className="card-meta">Magic: The Gathering</div>
            <div className="card-desc">La carta más icónica y valiosa de MTG.</div>
            <Link to="/detalle-carta/black-lotus" className="card-link" data-action="ver-detalle" data-id="C01">Ver detalle</Link>
          </li>
          <li className="card-tcg">
            <img src="/images/the-one-ring.jpg" alt="MTG: The One ring " className="card-img" />
            <div className="card-title">The One Ring Scroll Edition</div>
            <div className="card-meta">Magic: The Gathering</div>
            <div className="card-desc">La carta mas iconica de la expansion de LOTR esta aqui!</div>
            <Link to="/detalle-carta/the-one-ring" className="card-link" data-action="ver-detalle" data-id="C03">Ver detalle</Link>
          </li>
          <li className="card-tcg">
            <img src="/images/time-walk.webp" alt="MTG: Time Walk" className="card-img" />
            <div className="card-title">Time Walk</div>
            <div className="card-meta">Magic: The Gathering</div>
            <div className="card-desc">Permite tomar un turno extra, carta de poder histórico.</div>
            <Link to="/detalle-carta/time-walk" className="card-link" data-action="ver-detalle" data-id="C04">Ver detalle</Link>
          </li>
          {/* Pokémon */}
          <li className="card-tcg">
            <img src="/images/Charizard-ex.webp" alt="Pokémon: Shiny Charizard GX" className="card-img" />
            <div className="card-title">Shiny Charizard GX</div>
            <div className="card-meta">Pokémon</div>
            <div className="card-desc">Una de las cartas más buscadas y valiosas de Pokémon.</div>
            <Link to="/detalle-carta/charizard-ex" className="card-link" data-action="ver-detalle" data-id="P01">Ver detalle</Link>
          </li>
          <li className="card-tcg">
            <img src="/images/Pokémon_Illustrator.png" alt="Pokémon: Pikachu Illustrator" className="card-img" />
            <div className="card-title">Pikachu Illustrator</div>
            <div className="card-meta">Pokémon</div>
            <div className="card-desc">La carta más rara y exclusiva de Pokémon.</div>
            <Link to="/detalle-carta/pikachu-illustrator" className="card-link" data-action="ver-detalle" data-id="P02">Ver detalle</Link>
          </li>
          <li className="card-tcg">
            <img src="/images/mewtwo.jpg" alt="Pokémon: Mewtwo EX" className="card-img" />
            <div className="card-title">Mewtwo EX</div>
            <div className="card-meta">Pokémon</div>
            <div className="card-desc">Poderoso Pokémon legendario, favorito de muchos fans.</div>
            <Link to="/detalle-carta/mewtwo-ex" className="card-link" data-action="ver-detalle" data-id="P03">Ver detalle</Link>
          </li>
          {/* Yu-Gi-Oh! */}
          <li className="card-tcg">
            <img src="/images/blue-eyes-dragon.jpg" alt="Yu-Gi-Oh!: Blue-Eyes White Dragon" className="card-img" />
            <div className="card-title">Blue-Eyes White Dragon</div>
            <div className="card-meta">Yu-Gi-Oh!</div>
            <div className="card-desc">El dragón más famoso y poderoso del universo Yu-Gi-Oh!.</div>
            <Link to="/detalle-carta/blue-eyes-dragon" className="card-link" data-action="ver-detalle" data-id="Y01">Ver detalle</Link>
          </li>
          <li className="card-tcg">
            <img src="/images/dark-magician.jpg" alt="Yu-Gi-Oh!: Dark Magician" className="card-img" />
            <div className="card-title">Dark Magician</div>
            <div className="card-meta">Yu-Gi-Oh!</div>
            <div className="card-desc">El mago emblemático de la serie y pieza clave en duelos.</div>
            <Link to="/detalle-carta/dark-magician" className="card-link" data-action="ver-detalle" data-id="Y02">Ver detalle</Link>
          </li>
        </ul>
      </section>
    </section>

    {/* Pantalla 2: Singles */}
    <section id="singles" className="screen" aria-labelledby="singles-title">
      <h2 id="singles-title">Compra de Singles</h2>
      <div className="tcg-icons">
        <Link to="/magic-singles" aria-label="Magic: The Gathering">
          <img src="/images/magic-icon.png" alt="Magic: The Gathering" />
        </Link>
        <Link to="/pokemon-singles" aria-label="Pokémon">
          <img src="/images/pokemon-icon.png" alt="Pokémon" />
        </Link>
        <Link to="/yugioh-singles" aria-label="Yu-Gi-Oh!">
          <img src="/images/yugioh-icon.png" alt="Yu-Gi-Oh!" />
        </Link>
      </div>
    </section>
  </main>
);

export default Home;