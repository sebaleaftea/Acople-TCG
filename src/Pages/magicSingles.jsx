import React, { useState } from "react";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import { magicCards } from "../data/cards";
import '../styles/magicSingles.css';

const MagicSingles = () => {
  const [filteredCards, setFilteredCards] = useState(magicCards);

  const handleFilter = (filters) => {
    let filtered = magicCards;
    if (filters.rarity && filters.rarity !== 'all') {
      filtered = filtered.filter(item => (item.rareza || item.rarity || '').toLowerCase() === filters.rarity.toLowerCase());
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(i => (i.precio ?? i.price ?? 0) >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(i => (i.precio ?? i.price ?? 0) <= filters.maxPrice);
    }
    if (filters.priceOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => (a.precio ?? a.price ?? 0) - (b.precio ?? b.price ?? 0));
    } else if (filters.priceOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => (b.precio ?? b.price ?? 0) - (a.precio ?? a.price ?? 0));
    }
    setFilteredCards(filtered);
  };

  return (
    <div>
      <header>
        <h1>Magic Singles</h1>
      </header>
      <main className="page-singles">
        <aside className="filter-sidebar filters">
          <Filter onFilter={handleFilter} mode="singles" showGame={false} />
        </aside>
        <section className="results">
          <h2>Resultados</h2>
          <div className="cards-grid">
            {filteredCards.map(card => (
              <CardPreview key={card.id} card={card} />
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

export default MagicSingles;
