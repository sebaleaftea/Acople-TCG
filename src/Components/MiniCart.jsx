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
    clearCart,
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
        <div className="mini-carrito-overlay" aria-hidden="true" onClick={closeCart} />
      )}

      {/* Toast */}
      {toast?.visible && (
        <div role="status" aria-live="polite" onClick={closeToast} className="mini-carrito-toast">
          {toast.message}
        </div>
      )}
      {/* Botón flotante de carrito */}
      <button
        id="btn-mini-carrito"
        aria-label="Ver carrito"
        onClick={toggleCart}
        className="mini-carrito-btn"
      >
        🛒
        <span id="mini-carrito-cantidad" className="mini-carrito-cantidad">{getQuantity()}</span>
      </button>

      {/* Mini-carrito sidebar */}
      <aside
        id="mini-carrito"
        className={`mini-carrito-sidebar ${isCartOpen ? 'abierto' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mini-carrito-title"
      >
        <header className="mini-carrito-header">
          <h2 id="mini-carrito-title">Carrito</h2>
          <button id="cerrar-mini-carrito" aria-label="Cerrar" onClick={toggleCart} className="mini-carrito-cerrar">&times;</button>
        </header>
        <div id="mini-carrito-lista" className="mini-carrito-lista">
          {cart.length === 0 ? (
            <p style={{ color: '#666' }}>Tu carrito está vacío.</p>
          ) : cart.map((item, idx) => (
            <div key={item?.id ?? idx} className="mini-carrito-item">
              <div className="mini-carrito-item-izq">
                {item.imagen && (
                  <img className="mini-carrito-thumb" src={item.imagen} alt={item.nombre} />
                )}
                <div className="mini-carrito-info">
                  <strong className="mini-carrito-item-nombre">{String(item.nombre)}</strong>
                  <small className="mini-carrito-item-cantidad">x{Number(item.cantidad) || 0}</small>
                  <span className="mini-carrito-item-precio-unitario">${Number(item.precio || 0).toLocaleString()} c/u</span>
                </div>
              </div>
              <div className="mini-carrito-item-controles">
                <button onClick={() => decreaseQuantity(idx)} title="Disminuir" aria-label="Disminuir cantidad" className="mini-carrito-qty-btn">-</button>
                <span className="mini-carrito-qty">{Number(item.cantidad) || 0}</span>
                <button onClick={() => increaseQuantity(idx)} title="Aumentar" aria-label="Aumentar cantidad" className="mini-carrito-qty-btn">+</button>
                <button onClick={() => removeFromCart(idx)} title="Eliminar" aria-label="Eliminar del carrito" className="mini-carrito-remove-btn">×</button>
              </div>
            </div>
          ))}
        </div>
        <footer className="mini-carrito-footer">
          <div className="mini-carrito-resumen">
            <strong id="mini-carrito-total">Total: ${getTotal().toLocaleString()}</strong>
            <button onClick={closeCart} className="mini-carrito-btn-secundario">Seguir comprando</button>
          </div>
          <div className="mini-carrito-acciones">
            <button onClick={() => window.confirm('¿Vaciar carrito?') && clearCart()} className="mini-carrito-btn-outline">Vaciar carrito</button>
            <Link to="/detalle-compra" onClick={closeCart} className="mini-carrito-ver-carrito">
              Ir al carrito / Pagar
            </Link>
          </div>
        </footer>
      </aside>
    </>
  );
};

export default MiniCart;
