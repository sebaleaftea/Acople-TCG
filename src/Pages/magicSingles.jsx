import React, { useState } from "react";
import Filter from "../Components/Filter";
import CardPreview from "../Components/CardPreview";
import { magicCards } from "../data/cards";

const MagicSingles = () => {
  const [filteredCards, setFilteredCards] = useState(magicCards);

  const handleFilter = (filters) => {
    let filtered = magicCards;

    if (filters.rarity !== 'all') {
      filtered = filtered.filter(item => item.rarity === filters.rarity);
    }

    if (filters.minPrice !== null) {
      filtered = filtered.filter(item => item.price >= filters.minPrice);
    }

    if (filters.maxPrice !== null) {
      filtered = filtered.filter(item => item.price <= filters.maxPrice);
    }

    // Category is fixed to magic, so ignore category filter
    setFilteredCards(filtered);
  };

  return (
    <div>
      <h1>Magic Singles</h1>
      <Filter onFilter={handleFilter} />
      <div className="cards-grid">
        {filteredCards.map(card => (
          <CardPreview key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default MagicSingles;
