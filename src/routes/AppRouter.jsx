import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import DetalleCarta from "../Components/DetalleCarta";
import DetalleCompra from "../Pages/detalleCompra";
import Login from "../Pages/Login";
import MagicSingles from "../Pages/magicSingles";
import PokemonSingles from "../Pages/pokemonSingles";
import YugiohSingles from "../Pages/yugiohSingles";
import Perfil from "../Pages/Perfil";
import Productos from "../Pages/productosAcople";
import AllProducts from "../Pages/allProducts";
import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/AdminDashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/detalle-carta/:id" element={<DetalleCarta />} />
      <Route path="/detalle-compra" element={<DetalleCompra />} />
      <Route path="/login" element={<Login />} />
      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/magic-singles" element={<MagicSingles />} />
      <Route path="/pokemon-singles" element={<PokemonSingles />} />
      <Route path="/yugioh-singles" element={<YugiohSingles />} />
      <Route path="/productos-acople" element={<Productos />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default AppRouter;
