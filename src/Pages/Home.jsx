import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import blackLotus from "../assets/images/magicSingles/black-lotus.webp";
import theOneRing from "../assets/images/magicSingles/the-one-ring-scroll.jpg";
import timeWalk from "../assets/images/magicSingles/time-walk.webp";
import charizardEx from "../assets/images/pokemonSingles/Charizard-ex.webp";
import pikachuIllustrator from "../assets/images/pokemonSingles/pikachu_Illustrator.png";
import mewtwo from "../assets/images/pokemonSingles/mewtwo.jpg";
import blueEyes from "../assets/images/yugiohSingles/blue-eyes-dragon.jpg";
import darkMagician from "../assets/images/yugiohSingles/dark-magician.jpg";
import magicIcon from "../assets/images/magic-icon.png";
import pokemonIcon from "../assets/images/pokemon-icon.png";
import yugiohIcon from "../assets/images/yugioh-icon.png";
import Ticker from "../Components/Ticker";

const Home = () => {

  return (
    <main id="contenido" tabIndex="-1">
      {/* MiniCarrito global ya se renderiza desde App.js */}

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

      {/* Cartas destacadas - efecto ticker */}
      <section aria-labelledby="home-destacados-title">
        <h3 id="home-destacados-title">Cartas destacadas de hoy</h3>
        <Ticker ariaLabel="Cartas destacadas de hoy">
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
                <div className="card-title">The One Ring</div>
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
        </Ticker>
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
