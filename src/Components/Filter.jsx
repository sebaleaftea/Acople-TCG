import React, { useMemo, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

// Reducer for filter state management
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, [action.key]: action.value };
    case 'RESET':
      return action.initialState;
    default:
      return state;
  }
};

// Flexible filter supporting Singles + Accesorios with URL persistence
// Props:
// - onFilter(filters)
// - mode: 'all' | 'singles' | 'accesorios' (optional; default: 'all')
// - showSearch: boolean (optional)
// - showGame: boolean (optional; default true when singles visible)
// - showCategory: boolean (optional; default true when accesorios visibles)
const Filter = ({ onFilter, mode = 'all', showSearch = false, showGame, showCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const normalizeMode = (m) => {
    if (m === 'singles') return 'single';
    if (m === 'accesorios') return 'accesorio';
    return m;
  };

  // Initialize state from URL params
  const initialState = useMemo(() => ({
    productType: searchParams.get('productType') || (normalizeMode(mode) === 'all' ? 'all' : normalizeMode(mode)),
    game: searchParams.get('game') || 'all',
    category: searchParams.get('category') || 'all',
    rarity: searchParams.get('rarity') || 'all',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    priceOrder: searchParams.get('priceOrder') || '',
    query: searchParams.get('query') || '',
  }), [searchParams, mode]);

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // Update URL when filters change
  useEffect(() => {
    const newParams = new URLSearchParams();
    Object.entries(state).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  }, [state, setSearchParams]);

  const m = normalizeMode(mode);
  const isSingles = state.productType === 'single' || (state.productType === 'all' && m !== 'accesorio');
  const isAccesorios = state.productType === 'accesorio' || (state.productType === 'all' && m !== 'single');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      productType: state.productType,
      game: state.game,
      category: state.category,
      rarity: state.rarity,
      minPrice: state.minPrice === '' ? undefined : Number(state.minPrice),
      maxPrice: state.maxPrice === '' ? undefined : Number(state.maxPrice),
      priceOrder: state.priceOrder,
      query: state.query.trim() || undefined,
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
    <div className="filters" style={{
      position: 'sticky',
      top: '80px', // Adjust based on navbar height
      background: 'rgba(15, 10, 30, 0.8)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1.5rem 1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <h2 style={{ color: '#fff' }}>Filtros</h2>
      <form onSubmit={handleSubmit}>
        {mode === 'all' && (
          <fieldset>
            <legend>Tipo de producto</legend>
            <select value={state.productType} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'productType', value: e.target.value })}>
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
                <select value={state.game} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'game', value: e.target.value })}>
                  <option value="all">Todos</option>
                  <option value="magic">Magic</option>
                  <option value="pokemon">Pokémon</option>
                  <option value="yugioh">Yu-Gi-Oh!</option>
                </select>
              )}
            </fieldset>
            <fieldset>
              <legend>Rareza</legend>
              <select value={state.rarity} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'rarity', value: e.target.value })}>
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
              <select value={state.category} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'category', value: e.target.value })}>
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
            <input type="number" min="0" placeholder="Mín" value={state.minPrice} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'minPrice', value: e.target.value })} />
            <input type="number" min="0" placeholder="Máx" value={state.maxPrice} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'maxPrice', value: e.target.value })} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Ordenar por precio</legend>
          <select value={state.priceOrder} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'priceOrder', value: e.target.value })}>
            <option value="">Sin orden</option>
            <option value="asc">De menor a mayor</option>
            <option value="desc">De mayor a menor</option>
          </select>
        </fieldset>

        {showSearch && (
          <fieldset>
            <legend>Búsqueda</legend>
            <input type="text" placeholder="Buscar por nombre" value={state.query} onChange={(e) => dispatch({ type: 'SET_FILTER', key: 'query', value: e.target.value })} />
          </fieldset>
        )}

        <button type="submit">Aplicar filtros</button>
      </form>
    </div>
  );
};

export default Filter;
