import React, { useEffect } from "react";
import { useCart } from "../contexts/useCart";
import { Link } from "react-router-dom";

const MiniCart = () => {
  const {
    cart,
    getTotal,
    getQuantity,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isCartOpen,
    toggleCart,
    closeCart,
    toast,
    closeToast,
  } = useCart();

  // Cerrar con tecla Escape cuando está abierto
  useEffect(() => {
    if (!isCartOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isCartOpen, closeCart]);

  return (
    <>
      {/* Overlay de fondo */}
      {isCartOpen && (
        <div className="mini-cart-overlay" aria-hidden="true" onClick={closeCart} />
      )}

      {/* Toast */}
      {toast?.visible && (
        <div role="status" aria-live="polite" onClick={closeToast} className="mini-cart-toast">
          {toast.message}
        </div>
      )}

      {/* Botón flotante de carrito */}
      <button
        id="btn-mini-cart"
        aria-label="Ver carrito"
        onClick={toggleCart}
        className="mini-cart-btn"
      >
        🛒
        <span id="mini-cart-cantidad" className="mini-cart-cantidad">{getQuantity()}</span>
      </button>

      {/* Mini-cart dropdown */}
      <div
        id="mini-cart"
        className={`mini-cart-dropdown ${isCartOpen ? 'abierto' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mini-cart-title"
      >
        <div className="mini-cart-header">
          <h2 id="mini-cart-title">Carrito</h2>
          <button id="cerrar-mini-cart" aria-label="Cerrar" onClick={toggleCart} className="mini-cart-cerrar">&times;</button>
        </div>

        <div id="mini-cart-lista" className="mini-cart-lista">
          {cart.length === 0 ? (
            <p className="empty-cart">Tu carrito está vacío.</p>
          ) : (
            cart.map((item, idx) => (
              <div key={item?.id ?? idx} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="item-details">
                  <h4 className="item-name">{String(item.nombre)}</h4>
                  <span className="item-price">${Number(item.precio || 0).toLocaleString()} CLP</span>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(idx)} className="qty-btn">-</button>
                    <span className="qty">{Number(item.cantidad) || 0}</span>
                    <button onClick={() => increaseQuantity(idx)} className="qty-btn">+</button>
                    <button onClick={() => removeFromCart(idx)} className="remove-btn">🗑️</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <p className="total-price">Total: ${getTotal().toLocaleString()} CLP</p>
          <div className="cart-actions">
            <Link to="/detalle-compra" onClick={closeCart} className="view-cart">
              View Cart
            </Link>
            <Link to="/detalle-compra" onClick={closeCart} className="checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
