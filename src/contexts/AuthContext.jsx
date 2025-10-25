import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('acople-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('acople-user');
      }
    }
    setIsLoading(false);
  }, []);

  // Login básico (simulado)
  const login = (email, password) => {
    // Simulación: cualquier email/password válido
    if (email && password) {
      const userData = {
        email,
        name: email.split('@')[0], // Nombre básico
        phone: '',
        addresses: [],
      };
      setUser(userData);
      localStorage.setItem('acople-user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('acople-user');
  };

  // Actualizar perfil
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('acople-user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    updateProfile,
    isLoggedIn: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
