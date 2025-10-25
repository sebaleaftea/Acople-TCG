import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, isConfigured, onAuthStateChanged } from '../firebase';
import '../styles/home.css';

// pagina de login para administrador , tendra una autenticacion basica con firebase auth 

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConfigured) return; 
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) navigate('/admin');
    });
    return () => unsub && unsub();
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) return setError('Completá email y contraseña');

    if (isConfigured) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err?.message || 'Error de autenticación');
      }
    } else {
      localStorage.setItem('adminAuthed', 'true');
      navigate('/admin');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-labelledby="admin-login-title">
        <button
          type="button"
          className="modal-close"
          aria-label="Cerrar"
          onClick={() => navigate('/')}
        >
          ×
        </button>

        <div className="modal-body">
          <h2 id="admin-login-title">Admin - Iniciar sesión</h2>

          <form onSubmit={onSubmit} aria-label="Login de administrador">
            <div className="form-group">
              <label htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-password">Contraseña</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="modal-submit-btn">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
