import React from 'react';
import { useCart } from '../contexts/CartContext';

const ProductPreview = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(`${product.name} (${product.category})`, product.price);
  };

  return (
    <div className="card-preview">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductPreview;
