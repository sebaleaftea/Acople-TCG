import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import ProductPreview from "../Components/ProductPreview";
import Pagination from "../Components/Pagination";
import { allProducts } from "../data/products";
import '../styles/magicSingles.css'; // Reutilizar estilos similares

const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Inicializar filtros desde URL
  const initialFilters = useMemo(() => ({
    productType: searchParams.get('productType') || 'all',
    game: searchParams.get('game') || 'all',
    category: searchParams.get('category') || 'all',
    rarity: searchParams.get('rarity') || 'all',
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    priceOrder: searchParams.get('priceOrder') || '',
    query: searchParams.get('query') || '',
  }), [searchParams]);

  // Aplicar filtros
  useEffect(() => {
    let filtered = allProducts;

    // Tipo de producto
    if (initialFilters.productType !== 'all') {
      filtered = filtered.filter(p => p.productType === initialFilters.productType);
    }

    // Juego (solo para singles)
    if (initialFilters.game !== 'all' && initialFilters.productType !== 'accesorio') {
      filtered = filtered.filter(p => p.game === initialFilters.game);
    }

    // Categoría (solo para accesorios)
    if (initialFilters.category !== 'all' && initialFilters.productType !== 'single') {
      filtered = filtered.filter(p => p.category === initialFilters.category);
    }

    // Rareza (solo para singles)
    if (initialFilters.rarity !== 'all' && initialFilters.productType !== 'accesorio') {
      filtered = filtered.filter(p => (p.rarity || '').toLowerCase() === initialFilters.rarity.toLowerCase());
    }

    // Precio mínimo
    if (initialFilters.minPrice !== undefined) {
      filtered = filtered.filter(p => (p.price ?? 0) >= initialFilters.minPrice);
    }

    // Precio máximo
    if (initialFilters.maxPrice !== undefined) {
      filtered = filtered.filter(p => (p.price ?? 0) <= initialFilters.maxPrice);
    }

    // Orden por precio
    if (initialFilters.priceOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (initialFilters.priceOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    // Búsqueda por nombre
    if (initialFilters.query) {
      const query = initialFilters.query.toLowerCase();
      filtered = filtered.filter(p => (p.name || '').toLowerCase().includes(query));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [initialFilters]);

  const handleFilter = (filters) => {
    // Actualizar URL con los filtros
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== 'all') {
        newParams.set(key, value.toString());
      }
    });
    setSearchParams(newParams);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <h1>Tienda</h1>
      </header>
      <main className="page-singles">
        <aside className="filter-sidebar filters">
          <Filter
            onFilter={handleFilter}
            mode="all"
            showSearch={true}
            showGame={true}
            showCategory={true}
          />
        </aside>
        <section className="results">
          <h2>Resultados ({filteredProducts.length})</h2>
          <div className="cards-grid">
            {currentProducts.map(product => (
              product.productType === 'single' ? (
                <CardPreview key={product.id} card={product} />
              ) : (
                <ProductPreview key={product.id} product={product} />
              )
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </main>
      <footer>
        <p>© 2025 Acople TCG. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Tienda;
