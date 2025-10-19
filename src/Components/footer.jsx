import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function AppFooter() {
  return (
    <footer>
      <p>© 2025 Acople TCG. Todos los derechos reservados.</p>
      <div style={{ marginTop: 8 }}>
        <Link to="/admin/login" className="footer-admin-btn" aria-label="Iniciar sesión como administrador">
          Admin
        </Link>
      </div>
    </footer>
  );
}
