import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/home.css';

const ProfileDropdown = ({ onClose }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="profile-dropdown">
      <div className="dropdown-header">
        <span className="user-email">{user?.email}</span>
      </div>
      <div className="dropdown-menu">
        <Link
          to="/perfil"
          className="dropdown-item"
          onClick={handleLinkClick}
        >
          Perfil
        </Link>
        <Link
          to="/configuracion"
          className="dropdown-item"
          onClick={handleLinkClick}
        >
          Configuración
        </Link>
        <button
          onClick={handleLogout}
          className="dropdown-item logout-item"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
