import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/useCart";

// Vista de producto genérico pensada para Accesorios
// Acepta `product` o `producto`
const ProductPreview = (props) => {
  const { addToCart } = useCart();

  const item = props.product || props.producto || {};

  const nombre = item.nombre || item.name || "Sin nombre";
  const imagen = item.imagen || item.image || "";
  const precio = item.precio ?? item.price ?? 0;
  const categoria = item.category || item.categoria || (item.productType === 'accesorio' ? (item.category || 'accesorio') : undefined);

  // Dummy discount logic: if category is 'dados' or 'portamazos', show discount
  const hasDiscount = categoria && (categoria === 'dados' || categoria === 'portamazos');
  const discountPercent = hasDiscount ? 15 : 0;
  const oldPrice = hasDiscount ? Math.round(precio * 1.18) : null;
  const currentPrice = precio;

  const handleAddToCart = () => {
    const displayName = categoria ? `${nombre} (${categoria})` : nombre;
    addToCart(displayName, Number(currentPrice) || 0, imagen);
  };

  const isAccessory = (item.productType || item.type) === 'accesorio' || (!!categoria && categoria !== 'single');
  const categoryClass = categoria ? `card--cat-${categoria}` : '';

  return (
    <article className={`card ${isAccessory ? 'card--accessory' : ''} ${categoryClass}`}>
      {hasDiscount && <div className="discount-badge">Save {discountPercent}%</div>}
      <Link
        to={`/detalle-carta/${item.id}`}
        className="card-link"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="card-media">
          <img src={imagen} alt={nombre} loading="lazy" decoding="async" />
        </div>
        <h3>{nombre}</h3>
      </Link>
      {categoria && <p>Categoría: {categoria}</p>}
      <div className="price">
        <span className="current">${currentPrice ? Number(currentPrice).toLocaleString() : "-"}</span>
        {oldPrice && <span className="old">${oldPrice.toLocaleString()}</span>}
      </div>
      <div className="stars">★★★★☆</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </article>
  );
};

export default ProductPreview;
