import { useContext } from "react";
import { LoadingContext } from "./loadingContextBase";

export const useLoading = () => useContext(LoadingContext);
