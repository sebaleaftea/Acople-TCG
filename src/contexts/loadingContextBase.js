import { createContext } from "react";

export const LoadingContext = createContext({
  active: false,
  message: "",
  showLoading: () => {},
  hideLoading: () => {},
});
