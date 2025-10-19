import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Esta página queda obsoleta; redirigimos a la nueva vista unificada
const Productos = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/all-products', { replace: true });
  }, [navigate]);
  return null;
};

export default Productos;
