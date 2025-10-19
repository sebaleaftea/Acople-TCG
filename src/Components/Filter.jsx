import React, { useMemo, useState } from "react";

// Flexible filter supporting Singles + Accesorios
// Props:
// - onFilter(filters)
// - mode: 'all' | 'singles' | 'accesorios' (optional; default: 'all')
// - showSearch: boolean (optional)
// - showGame: boolean (optional; default true when singles visible)
// - showCategory: boolean (optional; default true when accesorios visibles)
const Filter = ({ onFilter, mode = 'all', showSearch = false, showGame, showCategory }) => {
  const normalizeMode = (m) => {
    if (m === 'singles') return 'single';
    if (m === 'accesorios') return 'accesorio';
    return m;
  };
  const initialType = normalizeMode(mode) === 'all' ? 'all' : normalizeMode(mode);
  const [productType, setProductType] = useState(initialType);
  const [game, setGame] = useState('all');
  const [category, setCategory] = useState('all');
  const [rarity, setRarity] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [priceOrder, setPriceOrder] = useState('');
  const [query, setQuery] = useState('');

  const m = normalizeMode(mode);
  const isSingles = productType === 'single' || (productType === 'all' && m !== 'accesorio');
  const isAccesorios = productType === 'accesorio' || (productType === 'all' && m !== 'single');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      productType,
      game,
      category,
      rarity,
      minPrice: minPrice === '' ? undefined : Number(minPrice),
      maxPrice: maxPrice === '' ? undefined : Number(maxPrice),
      priceOrder,
      query: query.trim() || undefined,
    });
  };

  const rarityOptions = useMemo(() => ([
    { value: 'all', label: 'Todas las rarezas' },
    { value: 'Común', label: 'Común' },
    { value: 'Infrecuente', label: 'Infrecuente' },
    { value: 'Rara', label: 'Rara' },
    { value: 'Mitica', label: 'Mítica' },
    { value: 'Secreta', label: 'Secreta' },
  ]), []);

  return (
    <div className="filters">
      <h2>Filtros</h2>
      <form onSubmit={handleSubmit}>
        {mode === 'all' && (
          <fieldset>
            <legend>Tipo de producto</legend>
            <select value={productType} onChange={(e) => setProductType(e.target.value)}>
              <option value="all">Todos</option>
              <option value="single">Singles</option>
              <option value="accesorio">Accesorios</option>
            </select>
          </fieldset>
        )}

        {isSingles && (
          <>
            <fieldset>
              <legend>Juego</legend>
              {showGame === false ? (
                <p style={{ fontStyle: 'italic', color: '#666' }}>Filtrando singles</p>
              ) : (
                <select value={game} onChange={(e) => setGame(e.target.value)}>
                  <option value="all">Todos</option>
                  <option value="magic">Magic</option>
                  <option value="pokemon">Pokémon</option>
                  <option value="yugioh">Yu-Gi-Oh!</option>
                </select>
              )}
            </fieldset>
            <fieldset>
              <legend>Rareza</legend>
              <select value={rarity} onChange={(e) => setRarity(e.target.value)}>
                {rarityOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </fieldset>
          </>
        )}

        {isAccesorios && (
          <fieldset>
            <legend>Categoría</legend>
            {showCategory === false ? (
              <p style={{ fontStyle: 'italic', color: '#666' }}>Filtrando accesorios</p>
            ) : (
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">Todas</option>
                <option value="carpetas">Carpetas</option>
                <option value="dados">Dados</option>
                <option value="playmat">Playmat</option>
                <option value="portamazos">Portamazos</option>
                <option value="protectores">Protectores</option>
              </select>
            )}
          </fieldset>
        )}

        <fieldset>
          <legend>Precio</legend>
          <div style={{ display: 'flex', gap: 8 }}>
            <input type="number" min="0" placeholder="Mín" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type="number" min="0" placeholder="Máx" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Ordenar por precio</legend>
          <select value={priceOrder} onChange={(e) => setPriceOrder(e.target.value)}>
            <option value="">Sin orden</option>
            <option value="asc">De menor a mayor</option>
            <option value="desc">De mayor a menor</option>
          </select>
        </fieldset>

        {showSearch && (
          <fieldset>
            <legend>Búsqueda</legend>
            <input type="text" placeholder="Buscar por nombre" value={query} onChange={(e) => setQuery(e.target.value)} />
          </fieldset>
        )}

        <button type="submit">Aplicar filtros</button>
      </form>
    </div>
  );
};

export default Filter;
