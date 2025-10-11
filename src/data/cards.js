// Card data for singles
import blackChocobo from '../assets/images/magicSingles/black-chocobo.avif';
import chainsOfMephistopheles from '../assets/images/magicSingles/chains-of-mephistopheles.jpg';
import counterspell from '../assets/images/magicSingles/counterspell.avif';
import gaea from '../assets/images/magicSingles/gaea.jpg';
import moxSapphire from '../assets/images/magicSingles/mox-saphire.avif';
import pactOfNegation from '../assets/images/magicSingles/pact of negation.jpg';
import rhysticStudy from '../assets/images/magicSingles/Rhystic Study.avif';
import theOneRingScroll from '../assets/images/magicSingles/the-one-ring-scroll.jpg';
import ugin from '../assets/images/magicSingles/ugin.avif';
import volcanicIsland from '../assets/images/magicSingles/volcanic-Island.avif';

import latiasYLatios from '../assets/images/pokemonSingles/latias y latias.jpg';
import mew from '../assets/images/pokemonSingles/mew.jpg';
import pikachu from '../assets/images/pokemonSingles/Pikachu.jpg';
import shinyTyranitar from '../assets/images/pokemonSingles/shiny tyranitar.jpg';
import umbreon from '../assets/images/pokemonSingles/umbreon.jpg';

import darkMagicianOfChaos from '../assets/images/yugiohSingles/Dark-Magician-Of-Chaos.jpg';
import darkMagician from '../assets/images/yugiohSingles/Dark-Magician.webp';
import drollAndLockBird from '../assets/images/yugiohSingles/Droll-&-Lock-Bird.jpg';
import fiendsmithEngraver from '../assets/images/yugiohSingles/Fiendsmith-Engraver.jpg';

export const magicCards = [
  { id: 'magic-black-chocobo', name: 'Black Chocobo', image: blackChocobo, game: 'magic', rarity: 'rara', price: 10 },
  { id: 'magic-chains-of-mephistopheles', name: 'Chains of Mephistopheles', image: chainsOfMephistopheles, game: 'magic', rarity: 'rara', price: 15 },
  { id: 'magic-counterspell', name: 'Counterspell', image: counterspell, game: 'magic', rarity: 'comun', price: 5 },
  { id: 'magic-gaea', name: 'Gaea', image: gaea, game: 'magic', rarity: 'rara', price: 20 },
  { id: 'magic-mox-sapphire', name: 'Mox Sapphire', image: moxSapphire, game: 'magic', rarity: 'rara', price: 100 },
  { id: 'magic-pact-of-negation', name: 'Pact of Negation', image: pactOfNegation, game: 'magic', rarity: 'rara', price: 25 },
  { id: 'magic-rhystic-study', name: 'Rhystic Study', image: rhysticStudy, game: 'magic', rarity: 'rara', price: 30 },
  { id: 'magic-the-one-ring-scroll', name: 'The One Ring Scroll', image: theOneRingScroll, game: 'magic', rarity: 'rara', price: 50 },
  { id: 'magic-ugin', name: 'Ugin', image: ugin, game: 'magic', rarity: 'rara', price: 40 },
  { id: 'magic-volcanic-island', name: 'Volcanic Island', image: volcanicIsland, game: 'magic', rarity: 'rara', price: 35 },
];

export const pokemonCards = [
  { id: 'pokemon-latias-y-latios', name: 'Latias y Latios', image: latiasYLatios, game: 'pokemon', rarity: 'rara', price: 12 },
  { id: 'pokemon-mew', name: 'Mew', image: mew, game: 'pokemon', rarity: 'rara', price: 50 },
  { id: 'pokemon-pikachu', name: 'Pikachu', image: pikachu, game: 'pokemon', rarity: 'comun', price: 8 },
  { id: 'pokemon-shiny-tyranitar', name: 'Shiny Tyranitar', image: shinyTyranitar, game: 'pokemon', rarity: 'rara', price: 30 },
  { id: 'pokemon-umbreon', name: 'Umbreon', image: umbreon, game: 'pokemon', rarity: 'rara', price: 15 },
];

export const yugiohCards = [
  { id: 'yugioh-dark-magician-of-chaos', name: 'Dark Magician of Chaos', image: darkMagicianOfChaos, game: 'yugioh', rarity: 'rara', price: 20 },
  { id: 'yugioh-dark-magician', name: 'Dark Magician', image: darkMagician, game: 'yugioh', rarity: 'rara', price: 25 },
  { id: 'yugioh-droll-and-lock-bird', name: 'Droll & Lock Bird', image: drollAndLockBird, game: 'yugioh', rarity: 'rara', price: 18 },
  { id: 'yugioh-fiendsmith-engraver', name: 'Fiendsmith Engraver', image: fiendsmithEngraver, game: 'yugioh', rarity: 'rara', price: 22 },
];

export const allCards = [...magicCards, ...pokemonCards, ...yugiohCards];
