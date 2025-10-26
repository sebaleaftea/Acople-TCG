import React from "react";
import { useLoading } from "../contexts/useLoading";
import "../styles/loading.css";

const LoadingOverlay = () => {
  const { active, message } = useLoading();
  if (!active) return null;
  return (
    <div className="loading-overlay" role="alert" aria-live="assertive">
      <div className="loading-card">
        <div className="dice-loader" aria-hidden="true">
          <div className="die" />
          <div className="die" />
        </div>
        <div className="loading-text">{message || "Cargando..."}</div>
        <div className="loading-subtext">Lanzando dados...</div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
