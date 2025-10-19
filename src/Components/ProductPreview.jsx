import React from "react";
import { useCart } from "../contexts/useCart";

// Vista de producto genérico pensada para Accesorios
// Acepta `product` o `producto`
const ProductPreview = (props) => {
  const { addToCart } = useCart();

  const item = props.product || props.producto || {};

  const nombre = item.nombre || item.name || "Sin nombre";
  const imagen = item.imagen || item.image || "";
  const precio = item.precio ?? item.price ?? 0;
  const categoria = item.category || item.categoria || item.productType === 'accesorio' ? (item.category || 'accesorio') : undefined;

  const handleAddToCart = () => {
    const displayName = categoria ? `${nombre} (${categoria})` : nombre;
    addToCart(displayName, Number(precio) || 0, imagen);
  };

  return (
    <article className="card">
      <div className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
      </div>
      {categoria && <p>Categoría: {categoria}</p>}
      <p>Precio: ${precio ? Number(precio).toLocaleString() : "-"}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </article>
  );
};

export default ProductPreview;
