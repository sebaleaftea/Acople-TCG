import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import ProductPreview from "../Components/ProductPreview";
import { allProducts } from "../data/products";
import '../styles/magicSingles.css';

const normalizeType = (t) => {
  const v = (t || '').toLowerCase();
  if (v === 'single' || v === 'singles') return 'single';
  if (v === 'accesorio' || v === 'accesorios' || v === 'accessory') return 'accesorio';
  if (v === 'all' || v === 'todos') return 'all';
  return 'all';
};

const getItemType = (item) => (item?.productType || item?.type || '').toLowerCase();
const getItemPrice = (p) => Number(p.precio ?? p.price ?? 0);
const getItemGame = (p) => (p.game ?? '').toString().toLowerCase();
const getItemCategory = (p) => (p.category ?? p.categoria ?? '').toString().toLowerCase();
const getItemRarity = (p) => (p.rareza ?? p.rarity ?? '').toString().toLowerCase();
const getItemText = (p) => [p.nombre, p.name, p.descripcion, p.description, p.category, p.categoria, p.game]
  .filter(Boolean).map(String).join(' ').toLowerCase();

const AllProducts = () => {
  const [filtered, setFiltered] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();

  const handleFilter = (filters) => {
    let items = allProducts.slice();

    // Tipo de producto
    const t = normalizeType(filters.productType || 'all');
    if (t !== 'all') {
      items = items.filter(i => getItemType(i) === t);
    }

    // Juego para singles
    if (filters.game && filters.game !== 'all') {
      const g = (filters.game || '').toLowerCase();
      items = items.filter(i => (getItemType(i) === 'single') && (getItemGame(i) === g));
    }

    // Categoría para accesorios
    if (filters.category && filters.category !== 'all') {
      const c = (filters.category || '').toLowerCase();
      items = items.filter(i => (getItemType(i) === 'accesorio') && (getItemCategory(i) === c));
    }

    // Rareza en singles
    if (filters.rarity && filters.rarity !== 'all') {
      const rfil = (filters.rarity || '').toLowerCase();
      items = items.filter(i => getItemType(i) === 'single' && getItemRarity(i) === rfil);
    }

    // Búsqueda libre (nombre/desc/categoría/juego)
    if (filters.query) {
      const q = (filters.query || '').toLowerCase();
      items = items.filter(i => getItemText(i).includes(q));
    }

    // Precios
    if (filters.minPrice !== undefined && filters.minPrice !== '') {
      items = items.filter(i => getItemPrice(i) >= Number(filters.minPrice));
    }
    if (filters.maxPrice !== undefined && filters.maxPrice !== '') {
      items = items.filter(i => getItemPrice(i) <= Number(filters.maxPrice));
    }

    // Orden
    if (filters.priceOrder === 'asc') {
      items = [...items].sort((a, b) => getItemPrice(a) - getItemPrice(b));
    } else if (filters.priceOrder === 'desc') {
      items = [...items].sort((a, b) => getItemPrice(b) - getItemPrice(a));
    }

    setFiltered(items);
  };

  // Reaccionar a cambios en URL (soporta Home -> /all-products?query=...)
  const urlFilters = useMemo(() => {
    const productType = normalizeType(searchParams.get('productType') || 'all');
    const game = (searchParams.get('game') || 'all').toLowerCase();
    const category = (searchParams.get('category') || 'all').toLowerCase();
    const rarity = (searchParams.get('rarity') || 'all').toLowerCase();
    const minPrice = searchParams.get('minPrice') ?? '';
    const maxPrice = searchParams.get('maxPrice') ?? '';
    const priceOrder = (searchParams.get('priceOrder') || '').toLowerCase();
    const query = (searchParams.get('query') || '').toLowerCase();
    return { productType, game, category, rarity, minPrice, maxPrice, priceOrder, query };
  }, [searchParams]);

  useEffect(() => {
    handleFilter(urlFilters);
  }, [urlFilters]);

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
