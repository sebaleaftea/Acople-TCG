import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

// 2. Create a custom hook for easy consumption
export const useProducts = () => useContext(ProductContext);
