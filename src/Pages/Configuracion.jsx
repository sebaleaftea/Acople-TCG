import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/home.css';

const Configuracion = () => {
  const { logout } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCloseAllSessions = () => {
    setShowConfirm(true);
  };

  const confirmCloseAllSessions = () => {
    // For now, just logout the current session
    // In a real app, this would call an API to invalidate all sessions
    logout();
    setShowConfirm(false);
  };

  const cancelCloseAllSessions = () => {
    setShowConfirm(false);
  };

  return (
    <main className="configuracion-main">
      <h1>Configuración</h1>

      <section className="config-section">
        <h2>Seguridad</h2>
        <div className="security-options">
          <button
            onClick={handleCloseAllSessions}
            className="close-sessions-btn"
          >
            Cerrar todas las sesiones
          </button>
          <p className="security-note">
            Esto cerrará tu sesión en todos los dispositivos donde hayas iniciado sesión.
          </p>
        </div>
      </section>

      {showConfirm && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal">
            <h3>Confirmar acción</h3>
            <p>¿Estás seguro de que quieres cerrar todas las sesiones?</p>
            <div className="confirm-buttons">
              <button onClick={confirmCloseAllSessions} className="confirm-btn">
                Sí, cerrar sesiones
              </button>
              <button onClick={cancelCloseAllSessions} className="cancel-btn">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Configuracion;
