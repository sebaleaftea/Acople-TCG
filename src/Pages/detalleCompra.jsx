import React from "react";
import { useCart } from "../contexts/useCart";
import { Link } from "react-router-dom";
import "../styles/home.css";

const DetalleCompra = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, getTotal } = useCart();

    const total = getTotal();

    return (
        <main className="carrito-main" aria-labelledby="titulo-carrito">
            <h1 id="titulo-carrito">Tu carrito</h1>

            <section className="carrito-lista" aria-live="polite">
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío. <Link to="/" style={{ color: '#286D8D', fontWeight: 600 }}>Volver a comprar</Link></p>
                ) : (
                    cart.map((item, idx) => (
                        <div key={item?.id ?? `${item.nombre}-${idx}`} className="carrito-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                                {item.imagen && (
                                    <img src={item.imagen} alt={item.nombre} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }} />
                                )}
                                <div style={{ minWidth: 0 }}>
                                    <strong style={{ display: 'block', color: '#08415C', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: 260 }}>{String(item.nombre)}</strong>
                                    <small style={{ color: '#388697' }}>${Number(item.precio || 0).toLocaleString()} c/u</small>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <button onClick={() => decreaseQuantity(idx)} title="Disminuir" aria-label="Disminuir cantidad" className="mini-carrito-qty-btn">-</button>
                                <span className="mini-carrito-qty">{Number(item.cantidad) || 0}</span>
                                <button onClick={() => increaseQuantity(idx)} title="Aumentar" aria-label="Aumentar cantidad" className="mini-carrito-qty-btn">+</button>
                                <button onClick={() => removeFromCart(idx)} title="Eliminar" aria-label="Eliminar del carrito" className="mini-carrito-remove-btn">×</button>
                            </div>
                        </div>
                    ))
                )}

                <strong style={{ marginTop: '1rem', display: 'block' }}>Total: ${total.toLocaleString()}</strong>
            </section>

            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                {cart.length > 0 && (
                    <button onClick={() => window.confirm('¿Vaciar carrito?') && clearCart()} className="mini-carrito-btn-outline" style={{ flex: 1 }}>Vaciar carrito</button>
                )}
                <Link to="/" className="mini-carrito-btn-secundario" style={{ textDecoration: 'none', textAlign: 'center', padding: '10px 14px', borderRadius: 8 }}>Seguir comprando</Link>
                <button className="mini-carrito-ver-carrito" style={{ flex: 1 }}>Pagar</button>
            </div>
        </main>
    );
};

export default DetalleCompra;