
import AppNavbar from "./Components/navbar";
import AppFooter from "./Components/footer";
import './styles/theme.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

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