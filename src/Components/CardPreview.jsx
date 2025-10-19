import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/useCart";

const CardPreview = ({ card }) => {
  const { addToCart } = useCart();
  // Soporta ambos formatos de objeto
  const nombre = card.nombre || card.name || "Sin nombre";
  const imagen = card.imagen || card.image || "";
  const precio = card.precio || card.price || 0;
  const rareza = card.rareza || card.rarity || "-";
  const edicion = card.edicion || card.edition || "-";

  const handleAddToCart = () => {
    // Para distinguir por juego si existe
    const categoria = card.game || card.category;
    const displayName = categoria ? `${nombre} (${categoria})` : nombre;
    addToCart(displayName, Number(precio) || 0, imagen);
  };

  return (
    <article className="card">
      <Link
        to={`/detalle-carta/${card.id}`}
        className="card-link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
      </Link>
      <p>Edición: {edicion}</p>
      <p>Rareza: {rareza}</p>
  <p>Precio: ${precio ? precio.toLocaleString() : "-"}</p>
  <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
    </article>
  );
};

export default CardPreview;
