
import AppNavbar from "./Components/navbar.jsx";
import AppFooter from "./Components/footer.jsx";
import MiniCart from "./Components/MiniCart.jsx";
import './styles/theme.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppNavbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <AppFooter />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
          {/* MiniCarrito global para todas las rutas */}
          <MiniCart />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
