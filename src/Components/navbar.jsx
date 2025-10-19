import "../styles/home.css"; // Import styles for nav
import { Link } from "react-router-dom";
import logoAcople from "../assets/images/logo_acople.png";

export default function AppNavbar() {
  return (
    <header role="banner">
      <div className="brand">
        <img src={logoAcople} alt="Logo Acople TCG" className="logo" />
        <p className="tagline">Mercado de cartas MTG y Pokémon</p>
      </div>

      <nav aria-label="Navegación principal">
        <ul>
          <li><Link to="/" data-nav>Inicio</Link></li>
          <li><Link to="/#singles" data-nav>Singles</Link></li>
          <li><Link to="/all-products" data-nav>Productos</Link></li>
          <li><Link to="/blog" data-nav>Guía & Estrategias</Link></li>
          <li><Link to="/login" data-nav>Ingresar</Link></li>
        </ul>
      </nav>
    </header>
  );
}
