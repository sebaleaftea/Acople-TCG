import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import BlogDetail from "../Pages/BlogDetail";
import DetalleCarta from "../Components/DetalleCarta";
import DetalleCompra from "../Pages/detalleCompra";
import Tienda from "../Pages/Tienda";
import Perfil from "../Pages/Perfil";
import Configuracion from "../Pages/Configuracion";
import Productos from "../Pages/productosAcople";
import AllProducts from "../Pages/allProducts";
import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/AdminDashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/detalle-carta/:id" element={<DetalleCarta />} />
      <Route path="/detalle-compra" element={<DetalleCompra />} />
      <Route path="/checkout" element={<DetalleCompra />} />
      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/productos-acople" element={<Productos />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  );
};

export default AppRouter;
