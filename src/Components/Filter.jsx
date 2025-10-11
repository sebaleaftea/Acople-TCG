import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('all');
  const [rarity, setRarity] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilter({
      category,
      rarity,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
    });
  };

  // Trigger filter on change
  React.useEffect(() => {
    handleFilterChange();
  }, [category, rarity, minPrice, maxPrice]);

  return (
    <div className="filter-container">
      <label>
        Categoría:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Todas</option>
          <option value="magic">Magic</option>
          <option value="pokemon">Pokemon</option>
          <option value="yugioh">Yu-Gi-Oh</option>
          <option value="carpetas">Carpetas</option>
          <option value="dados">Dados</option>
          <option value="playmat">Playmat</option>
          <option value="portamazos">Portamazos</option>
          <option value="protectores">Protectores</option>
        </select>
      </label>
      <label>
        Rareza:
        <select value={rarity} onChange={(e) => setRarity(e.target.value)}>
          <option value="all">Todas</option>
          <option value="comun">Común</option>
          <option value="infrecuente">Infrecuente</option>
          <option value="rara">Rara</option>
        </select>
      </label>
      <label>
        Precio Mínimo:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="0"
        />
      </label>
      <label>
        Precio Máximo:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="100"
        />
      </label>
    </div>
  );
};

export default Filter;
