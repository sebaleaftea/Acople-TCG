
import AppNavbar from "./Components/navbar.jsx";
import AppFooter from "./Components/footer.jsx";
import './styles/theme.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { CartProvider } from "./contexts/CartContext.js";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppNavbar />
        {/* Aquí van las rutas principales */}
        <AppRouter />
        <AppFooter />
      </BrowserRouter>
    </CartProvider>
  );
}
