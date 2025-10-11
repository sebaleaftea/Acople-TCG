import React, { useState } from "react";
import { allProducts } from "../data/products";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import ProductPreview from "../Components/ProductPreview";
import "../styles/home.css";

const Productos = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilter = (filters) => {
    let filtered = allProducts;

    if (filters.category !== 'all') {
      if (filters.category === 'magic' || filters.category === 'pokemon' || filters.category === 'yugioh') {
        filtered = filtered.filter(item => item.game === filters.category);
      } else {
        filtered = filtered.filter(item => item.category === filters.category);
      }
    }

    if (filters.rarity !== 'all') {
      filtered = filtered.filter(item => item.rarity === filters.rarity);
    }

    if (filters.minPrice !== null) {
      filtered = filtered.filter(item => item.price >= filters.minPrice);
    }

    if (filters.maxPrice !== null) {
      filtered = filtered.filter(item => item.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <main className="otros-productos">
      {/* Botón flotante de carrito */}
      <button
        id="btn-mini-carrito"
        aria-label="Ver carrito"
        style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1001, background: '#CC2936', color: '#fff', border: 'none', borderRadius: '50%', width: '56px', height: '56px', boxShadow: '0 2px 8px #0002', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        🛒
        <span id="mini-carrito-cantidad" style={{ position: 'absolute', top: '8px', right: '8px', background: '#fff', color: '#CC2936', borderRadius: '50%', padding: '2px 7px', fontSize: '0.9rem', fontWeight: 'bold' }}>0</span>
      </button>

      {/* Mini-carrito sidebar */}
      <aside id="mini-carrito" style={{ position: 'fixed', top: '0', right: '-400px', width: '340px', height: '100vh', background: '#fff', boxShadow: '-4px 0 16px #0002', zIndex: 1002, transition: 'right 0.3s', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0', fontSize: '1.2rem', color: '#08415C' }}>Carrito</h2>
          <button id="cerrar-mini-carrito" aria-label="Cerrar" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#CC2936' }}>&times;</button>
        </header>
        <div id="mini-carrito-lista" style={{ flex: '1', overflowY: 'auto', padding: '1rem' }}></div>
        <footer style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
          <strong id="mini-carrito-total">Total: $0</strong>
        </footer>
      </aside>

      <header>
        <h1>Otros Productos</h1>
      </header>

      {/* Filtros */}
      <Filter onFilter={handleFilter} />

      {/* Resultados de búsqueda */}
      <section className="results">
        <h2>Resultados</h2>
        <div className="playmat-grid">
          {filteredProducts.map((item, idx) => (
            item.game ? (
              <CardPreview key={idx} card={item} />
            ) : (
              <ProductPreview key={idx} product={item} />
            )
          ))}
        </div>
      </section>
    </main>
  );
};

export default Productos;
