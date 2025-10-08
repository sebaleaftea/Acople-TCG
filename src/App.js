
import AppNavbar from "./Components/navbar.jsx";
import AppFooter from "./Components/footer.jsx";
import './styles/theme.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      {/* Aquí van las rutas principales */}
      <AppRouter />
      <AppFooter />
    </BrowserRouter>
  );
}