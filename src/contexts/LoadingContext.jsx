import React, { useCallback, useRef, useState } from "react";
import { LoadingContext } from "./loadingContextBase";

export const LoadingProvider = ({ children }) => {
  const [state, setState] = useState({ active: false, message: "", variant: "dice" });
  const timerRef = useRef(null);

  const hideLoading = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setState((s) => ({ ...s, active: false }));
  }, []);

  const showLoading = useCallback(({ message = "Cargando...", duration = 5000, variant = "dice" } = {}) => {
    setState({ active: true, message, variant });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setState((s) => ({ ...s, active: false }));
      timerRef.current = null;
    }, duration);
  }, []);

  return (
    <LoadingContext.Provider value={{ active: state.active, message: state.message, variant: state.variant, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
// Note: Hook moved to separate file to avoid Fast Refresh warnings.
// See: src/contexts/useLoading.js
