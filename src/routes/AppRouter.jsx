import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import DetalleCarta from "../Components/DetalleCarta";
import detalleCompra from "../Pages/detalleCompra";
import Login from "../Pages/Login";
import magicSingles from "../Pages/magicSingles";
import PokemonSingles from "../Pages/pokemonSingles";
import YugiohSingles from "../Pages/yugiohSingles";
import Perfil from "../Pages/Perfil";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/DetalleCarta/:id" element={<DetalleCarta />} />
      <Route path="/detalle-compra" element={<detalleCompra />} />
      <Route path="/login" element={<Login />} />
      <Route path="/magic-singles" element={<magicSingles />} />
      <Route path="/pokemon-singles" element={<PokemonSingles />} />
      <Route path="/yugioh-singles" element={<YugiohSingles />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default AppRouter;