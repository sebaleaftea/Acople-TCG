import React from 'react';
import { Link } from 'react-router-dom';

const CardPreview = ({ card }) => {
  return (
    <div className="card-preview">
      <img src={card.image} alt={card.name} className="card-image" />
      <h3>{card.name}</h3>
      <p>Rareza: {card.rarity}</p>
      <p>Precio: ${card.price}</p>
      <Link to={`/detalle-carta/${card.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default CardPreview;
