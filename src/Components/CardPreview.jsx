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

  // Dummy discount logic: if id contains 'black' or 'blue', show discount
  const hasDiscount = card.id && (card.id.includes('black') || card.id.includes('blue'));
  const discountPercent = hasDiscount ? 20 : 0;
  const oldPrice = hasDiscount ? Math.round(precio * 1.25) : null;
  const currentPrice = precio;

  const handleAddToCart = () => {
    // Para distinguir por juego si existe
    const categoria = card.game || card.category;
    const displayName = categoria ? `${nombre} (${categoria})` : nombre;
    addToCart(displayName, Number(currentPrice) || 0, imagen);
  };

  return (
    <article className="card">
      {hasDiscount && <div className="discount-badge">Save {discountPercent}%</div>}
      <Link
        to={`/detalle-carta/${card.id}`}
        className="card-link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card-media">
          <img src={imagen} alt={nombre} loading="lazy" decoding="async" />
        </div>
        <h3>{nombre}</h3>
      </Link>
      <p>Edición: {edicion}</p>
      <p>Rareza: {rareza}</p>
      <div className="price">
        <span className="current">${currentPrice ? currentPrice.toLocaleString() : "-"}</span>
        {oldPrice && <span className="old">${oldPrice.toLocaleString()}</span>}
      </div>
      <div className="stars">★★★★☆</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </article>
  );
};

export default CardPreview;
