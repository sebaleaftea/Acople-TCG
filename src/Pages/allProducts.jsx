import React, { useState } from "react";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import ProductPreview from "../Components/ProductPreview";
import { allProducts } from "../data/products";
import '../styles/magicSingles.css';

const AllProducts = () => {
  const [filtered, setFiltered] = useState(allProducts);

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
        <h1>Todos los Productos</h1>
      </header>
      <main className="page-singles">
        <aside className="filter-sidebar filters">
          <Filter onFilter={handleFilter} mode="all" showSearch={true} />
        </aside>
        <section className="results">
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
      <footer>
        <p>© 2025 Acople TCG. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AllProducts;
