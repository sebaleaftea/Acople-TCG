import React from "react";
import "../styles/ErrorModal.css";

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;
  // Depuración visual para asegurar renderizado
  console.log("ErrorModal renderizado con mensaje:", message);
  return (
    <div className="error-modal-overlay">
      <div className="error-modal">
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ErrorModal;
