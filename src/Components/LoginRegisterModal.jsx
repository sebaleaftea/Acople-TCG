import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/home.css';

const LoginRegisterModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    const success = login(formData.email, formData.password);
    if (success) {
      onClose();
      setFormData({ email: '', password: '', name: '' });
    } else {
      setError('Credenciales inválidas');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      setError('Por favor completa todos los campos');
      return;
    }

    // For now, registration is the same as login (simulated)
    const success = login(formData.email, formData.password);
    if (success) {
      onClose();
      setFormData({ email: '', password: '', name: '' });
    } else {
      setError('Error en el registro');
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setError('');
    setFormData({ email: '', password: '', name: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-tabs">
          <button
            className={`modal-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Ingresar
          </button>
          <button
            className={`modal-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => switchTab('register')}
          >
            Registrarse
          </button>
        </div>

        <div className="modal-body">
          {activeTab === 'login' ? (
            <form onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Contraseña</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="modal-submit-btn">Ingresar</button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <h2>Crear Cuenta</h2>
              <div className="form-group">
                <label htmlFor="register-name">Nombre</label>
                <input
                  type="text"
                  id="register-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Contraseña</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="modal-submit-btn">Registrarse</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
