// Accessory products data
import cactuarCarpeta from '../assets/images/productos/carpetas/cactuar carpeta.webp';
import carpetaNegraDragonshield from '../assets/images/productos/carpetas/carpeta negra dragonshield.webp';
import carpetaPikachu from '../assets/images/productos/carpetas/Carpeta Pikachu.webp';
import carpetaRojaDragonshield from '../assets/images/productos/carpetas/carpeta roja dragonshield.webp';
import carpetaVerdeDragonshield from '../assets/images/productos/carpetas/carpeta verde dragonshield.webp';

import dadosCelestesDragon from '../assets/images/productos/dados/dados celestes dragon.avif';
import dadosGryffindor from '../assets/images/productos/dados/dados gryffindor.jpg';
import dadosLotr from '../assets/images/productos/dados/dados lotr.avif';
import dadosMoradoDorado from '../assets/images/productos/dados/dados morado dorado.avif';
import dadosRunas from '../assets/images/productos/dados/dados runas.avif';


import charmanderPlaymat from '../assets/images/productos/playmat/charmander playmat.webp';
import demonHuntersPlaymat from '../assets/images/productos/playmat/demon hunters playmat.webp';
import dyrkottrPlaymat from '../assets/images/productos/playmat/Dyrkottr; Dragon of Curiosity.webp';
import fierceGuardianshipPlaymat from '../assets/images/productos/playmat/fierce-guardianship playmat.webp';
import rayquazaPlaymat from '../assets/images/productos/playmat/rayquaza playmat.webp';
import wrennPlaymat from '../assets/images/productos/playmat/wrenn playmat.webp';

import dragonshieldDarkGrey from '../assets/images/productos/portamazos/dragonshield dark grey.webp';
import portamazoCharmander from '../assets/images/productos/portamazos/portamazo charmander.webp';
import portamazoMorado from '../assets/images/productos/portamazos/portamazo morado.webp';
import sephirothPortamazo from '../assets/images/productos/portamazos/sephiroth portamazo.webp';
import tarkirPortamazo from '../assets/images/productos/portamazos/tarkir protamazo.webp';

import sleeveCharmander from '../assets/images/productos/protectores/sleeve charmander.webp';
import sleeveKnightsOfRound from '../assets/images/productos/protectores/sleeve knights of round.webp';
import sleevesLapras from '../assets/images/productos/protectores/sleeves lapras.webp';
import sleeveBahamut from '../assets/images/productos/protectores/slevee bahamut.webp';
import sleeveOdin from '../assets/images/productos/protectores/slevee odin.webp';

import { magicCards, pokemonCards, yugiohCards } from './cards.js';

export const carpetasProducts = [
  { id: 'carpeta-cactuar', name: 'Cactuar Carpeta', image: cactuarCarpeta, category: 'carpetas', price: 15 },
  { id: 'carpeta-negra-dragonshield', name: 'Carpeta Negra Dragonshield', image: carpetaNegraDragonshield, category: 'carpetas', price: 20 },
  { id: 'carpeta-pikachu', name: 'Carpeta Pikachu', image: carpetaPikachu, category: 'carpetas', price: 18 },
  { id: 'carpeta-roja-dragonshield', name: 'Carpeta Roja Dragonshield', image: carpetaRojaDragonshield, category: 'carpetas', price: 20 },
  { id: 'carpeta-verde-dragonshield', name: 'Carpeta Verde Dragonshield', image: carpetaVerdeDragonshield, category: 'carpetas', price: 20 },
];

export const dadosProducts = [
  { id: 'dados-celestes-dragon', name: 'Dados Celestes Dragon', image: dadosCelestesDragon, category: 'dados', price: 10 },
  { id: 'dados-gryffindor', name: 'Dados Gryffindor', image: dadosGryffindor, category: 'dados', price: 12 },
  { id: 'dados-lotr', name: 'Dados LOTR', image: dadosLotr, category: 'dados', price: 14 },
  { id: 'dados-morado-dorado', name: 'Dados Morado Dorado', image: dadosMoradoDorado, category: 'dados', price: 11 },
  { id: 'dados-runas', name: 'Dados Runas', image: dadosRunas, category: 'dados', price: 13 },
];

export const playmatProducts = [
  { id: 'playmat-charmander', name: 'Charmander Playmat', image: charmanderPlaymat, category: 'playmat', price: 25 },
  { id: 'playmat-demon-hunters', name: 'Demon Hunters Playmat', image: demonHuntersPlaymat, category: 'playmat', price: 30 },
  { id: 'playmat-dyrkottr', name: 'Dyrkottr Playmat', image: dyrkottrPlaymat, category: 'playmat', price: 28 },
  { id: 'playmat-fierce-guardianship', name: 'Fierce Guardianship Playmat', image: fierceGuardianshipPlaymat, category: 'playmat', price: 27 },
  { id: 'playmat-rayquaza', name: 'Rayquaza Playmat', image: rayquazaPlaymat, category: 'playmat', price: 26 },
  { id: 'playmat-wrenn', name: 'Wrenn Playmat', image: wrennPlaymat, category: 'playmat', price: 29 },
];

export const portamazosProducts = [
  { id: 'portamazo-dragonshield-dark-grey', name: 'Dragonshield Dark Grey Portamazo', image: dragonshieldDarkGrey, category: 'portamazos', price: 8 },
  { id: 'portamazo-charmander', name: 'Portamazo Charmander', image: portamazoCharmander, category: 'portamazos', price: 9 },
  { id: 'portamazo-morado', name: 'Portamazo Morado', image: portamazoMorado, category: 'portamazos', price: 8 },
  { id: 'portamazo-sephiroth', name: 'Sephiroth Portamazo', image: sephirothPortamazo, category: 'portamazos', price: 10 },
  { id: 'portamazo-tarkir', name: 'Tarkir Portamazo', image: tarkirPortamazo, category: 'portamazos', price: 9 },
];

export const protectoresProducts = [
  { id: 'protector-charmander', name: 'Sleeve Charmander', image: sleeveCharmander, category: 'protectores', price: 5 },
  { id: 'protector-knights-of-round', name: 'Sleeve Knights of Round', image: sleeveKnightsOfRound, category: 'protectores', price: 6 },
  { id: 'protector-lapras', name: 'Sleeves Lapras', image: sleevesLapras, category: 'protectores', price: 5 },
  { id: 'protector-bahamut', name: 'Sleeve Bahamut', image: sleeveBahamut, category: 'protectores', price: 7 },
  { id: 'protector-odin', name: 'Sleeve Odin', image: sleeveOdin, category: 'protectores', price: 6 },
];

export const allProducts = [
  // Enriquecer singles con metadatos para filtros unificados y campos adicionales
  ...magicCards.map(c => ({
    ...c,
    productType: 'single',
    game: 'magic',
    stock: Math.floor(Math.random() * 50) + 1, // Simular stock aleatorio
    grado: 'NM', // Near Mint por defecto
    expansion: c.edicion,
    name: c.nombre, // Estandarizar nombre
    image: c.imagen,
    price: c.precio,
    rarity: c.rareza,
    edition: c.edicion,
    description: c.descripcion
  })),
  ...pokemonCards.map(c => ({
    ...c,
    productType: 'single',
    game: 'pokemon',
    stock: Math.floor(Math.random() * 50) + 1,
    grado: 'NM',
    expansion: c.edicion,
    name: c.nombre,
    image: c.imagen,
    price: c.precio,
    rarity: c.rareza,
    edition: c.edicion,
    description: c.descripcion
  })),
  ...yugiohCards.map(c => ({
    ...c,
    productType: 'single',
    game: 'yugioh',
    stock: Math.floor(Math.random() * 50) + 1,
    grado: 'NM',
    expansion: c.edicion,
    name: c.nombre,
    image: c.imagen,
    price: c.precio,
    rarity: c.rareza,
    edition: c.edicion,
    description: c.descripcion
  })),
  // Enriquecer accesorios con metadatos y campos adicionales
  ...carpetasProducts.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 100) + 10,
    grado: 'Nuevo',
    expansion: null,
    rarity: null,
    edition: null
  })),
  ...dadosProducts.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 100) + 10,
    grado: 'Nuevo',
    expansion: null,
    rarity: null,
    edition: null
  })),
  ...playmatProducts.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 50) + 5,
    grado: 'Nuevo',
    expansion: null,
    rarity: null,
    edition: null
  })),
  ...portamazosProducts.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 200) + 20,
    grado: 'Nuevo',
    expansion: null,
    rarity: null,
    edition: null
  })),
  ...protectoresProducts.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 500) + 50,
    grado: 'Nuevo',
    expansion: null,
    rarity: null,
    edition: null
  })),
];

// Utilidades para el filtrado/selector
export const ACCESSORY_CATEGORIES = ['carpetas', 'dados', 'playmat', 'portamazos', 'protectores'];
export const GAMES = ['magic', 'pokemon', 'yugioh'];
