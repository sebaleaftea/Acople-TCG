import React, { useState } from "react";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import ProductPreview from "../Components/ProductPreview";
import { allProducts } from "../data/products";
import '../styles/magicSingles.css';

const AllProducts = () => {
  const [filtered, setFiltered] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (filters) => {
    let items = allProducts;

    // Tipo de producto
    if (filters.productType && filters.productType !== 'all') {
      items = items.filter(i => i.productType === filters.productType);
    }

    // Juego para singles
    if (filters.game && filters.game !== 'all') {
      items = items.filter(i => (i.productType === 'single') && (i.game === filters.game));
    }

    // Categoría para accesorios
    if (filters.category && filters.category !== 'all') {
      items = items.filter(i => (i.productType === 'accesorio') && (i.category === filters.category));
    }

    // Rareza en singles
    if (filters.rarity && filters.rarity !== 'all') {
      items = items.filter(i => {
        const r = i.rareza || i.rarity;
        return i.productType === 'single' && r && r.toLowerCase() === filters.rarity.toLowerCase();
      });
    }

    // Búsqueda por nombre
    if (filters.query) {
      const q = filters.query.toLowerCase();
      items = items.filter(i => {
        const name = (i.nombre || i.name || '').toLowerCase();
        return name.includes(q);
      });
    }

    // Precios
    if (filters.minPrice !== undefined) {
      items = items.filter(i => (i.precio ?? i.price ?? 0) >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      items = items.filter(i => (i.precio ?? i.price ?? 0) <= filters.maxPrice);
    }

    // Orden
    if (filters.priceOrder === 'asc') {
      items = [...items].sort((a, b) => (a.precio ?? a.price ?? 0) - (b.precio ?? b.price ?? 0));
    } else if (filters.priceOrder === 'desc') {
      items = [...items].sort((a, b) => (b.precio ?? b.price ?? 0) - (a.precio ?? a.price ?? 0));
    }

    setFiltered(items);
  };

  return (
    <div>
      <header>
        <h2>Todos los Productos</h2>
      </header>
      <main className="page-singles">
        <aside className="filter-sidebar filters">
          <Filter onFilter={handleFilter} mode="all" showSearch={true} />
        </aside>
        <section className="results">
          <button
            className="mobile-filter-toggle"
            onClick={() => setShowFilters(true)}
          >
            Mostrar Filtros
          </button>
          <h2>Resultados</h2>
          <div className="cards-grid">
            {filtered.map(item => (
              item.productType === 'single' ? (
                <CardPreview key={item.id} card={item} />
              ) : (
                <ProductPreview key={item.id} product={item} />
              )
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="mobile-filter-modal-overlay" onClick={() => setShowFilters(false)}>
          <div className="mobile-filter-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-filter-header">
              <h3>Filtros</h3>
              <button
                className="mobile-filter-close"
                onClick={() => setShowFilters(false)}
              >
                ✕
              </button>
            </div>
            <div className="mobile-filter-content">
              <Filter onFilter={handleFilter} mode="all" showSearch={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
