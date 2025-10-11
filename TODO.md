# TODO: Transferir estructura, estilos y HTML de vanilla a React

## Información Recopilada
- Repositorio vanilla (temp-repo): index.html con header (logo/tagline), nav, búsqueda, cartas destacadas, íconos singles, mini-carrito, footer; style.css con estilos globales, tarjetas, nav, etc.; carrito.js con lógica de carrito localStorage; productos-acople.html con filtros y grid de productos; carpeta images/.
- Proyecto React actual: Home.jsx con port parcial (búsqueda, tarjetas, singles, mini-carrito, footer); navbar.jsx (Bootstrap, necesita actualización); footer.jsx (simple, necesita actualización); home.css (ya tiene estilos vanilla copiados); assets/ (necesita imágenes copiadas).

## Plan Aprobado
1. Copiar imágenes de temp-repo/images a src/assets/images.
2. Actualizar navbar.jsx para incluir logo y tagline del header, ajustar enlaces nav a vanilla (Inicio, Singles, Otros Productos, Guía & Estrategias, Ingresar).
3. Actualizar footer.jsx para coincidir con footer vanilla.
4. Actualizar Home.jsx para completar tarjetas destacadas (agregar faltantes), corregir rutas de imágenes (usar imports de assets), agregar header brand arriba de nav.
5. Crear CartContext.js para estado de carrito (adaptar lógica de carrito.js a React).
6. Actualizar productosAcople.jsx para coincidir con página de productos (filtros, grid).
7. Actualizar AppRouter.jsx para incluir rutas para singles, productos, etc.
8. Actualizar estilos globales en index.css o theme.css para incluir body, header de vanilla.
9. Implementar funcionalidad mini-carrito en Home.jsx usando CartContext.

## Archivos Dependientes
- Home.jsx
- navbar.jsx
- footer.jsx
- productosAcople.jsx
- AppRouter.jsx
- CartContext.js (nuevo)
- index.css
- theme.css
- src/assets/images/ (nuevo)

## Pasos de Seguimiento
- Probar la app, asegurar que imágenes carguen, carrito funcione.
- Limpiar temp-repo.

## Progreso
- [x] Paso 1: Copiar imágenes
- [x] Paso 2: Actualizar navbar.jsx
- [x] Paso 3: Actualizar footer.jsx
- [x] Paso 4: Actualizar Home.jsx
- [x] Paso 5: Crear CartContext.js
- [x] Paso 6: Actualizar productosAcople.jsx
- [x] Paso 7: Actualizar AppRouter.jsx
- [x] Paso 8: Actualizar estilos globales
- [x] Paso 9: Implementar mini-carrito
- [x] Seguimiento: Probar y limpiar

## TODO: Implement Singles Pages with Card Components
- [x] Create src/data/cards.js with hardcoded card data for Magic, Pokemon, Yu-Gi-Oh based on images
- [x] Create src/Components/CardPreview.jsx component for card list previews
- [x] Update src/Pages/magicSingles.jsx to display filtered Magic cards using CardPreview
- [x] Update src/Pages/pokemonSingles.jsx to display filtered Pokemon cards using CardPreview (fix title typo)
- [x] Update src/Pages/yugiohSingles.jsx to display filtered Yu-Gi-Oh cards using CardPreview (fix title)
- [x] Update src/Components/DetalleCarta.jsx to be dynamic with useParams, integrate with cards data and CartContext
- [x] Update src/Components/navbar.jsx to link /singles to /magic-singles
- [x] Test pages and detail functionality

## TODO: Implement Filters for Products and Singles Pages
- [x] Create src/data/products.js with accessory data (carpetas, dados, playmat, portamazos, protectores) and combine with cards
- [x] Create src/Components/Filter.jsx for category, rarity, price range
- [x] Create src/Components/ProductPreview.jsx for accessory previews
- [x] Update src/Pages/productosAcople.jsx to use all products, Filter, and ProductPreview
- [x] Update src/Pages/magicSingles.jsx, pokemonSingles.jsx, yugiohSingles.jsx to include Filter for sub-filtering
- [x] Test filters on products and singles pages
