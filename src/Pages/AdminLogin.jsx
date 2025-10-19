import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, isConfigured, onAuthStateChanged } from '../firebase';

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
    <main style={{ maxWidth: 420, margin: '3rem auto', background: '#f5f5f5', borderRadius: 12, boxShadow: '0 4px 16px rgba(8,65,92,0.10)', padding: '2rem 1.5rem' }}>
      <h1 style={{ textAlign: 'center', color: '#08415C', marginBottom: '1.5rem' }}>Admin - Iniciar sesión</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>
          <span style={{ display: 'block', marginBottom: 6 }}>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd' }} />
        </label>
        <label>
          <span style={{ display: 'block', marginBottom: 6 }}>Contraseña</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd' }} />
        </label>
        {error && <div style={{ color: '#b00020', marginTop: 4 }}>{error}</div>}
        <button type="submit" className="mini-carrito-ver-carrito">Ingresar</button>
      </form>
    </main>
  );
};

export default AdminLogin;
