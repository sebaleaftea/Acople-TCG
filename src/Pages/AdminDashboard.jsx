import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, isConfigured, onAuthStateChanged, signOut } from '../firebase';
import '../styles/admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isConfigured) {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (!user) navigate('/admin/login');
      });
      return () => unsub && unsub();
    } else {
      const ok = localStorage.getItem('adminAuthed') === 'true';
      if (!ok) navigate('/admin/login');
    }
  }, [navigate]);

  const rows = useMemo(() => {
    return [
      { id: 'sample-1', nombre: 'Producto de ejemplo', stock: 0, precio: 0 },
      { id: 'sample-2', nombre: 'Producto de ejemplo 2', stock: 0, precio: 0 },
    ];
  }, []);

  return (
    <main className="admin-main">
      <header className="admin-header">
        <h1 className="admin-title">Panel de administración</h1>
        <button
          onClick={async () => {
            if (isConfigured) {
              try {
                await signOut(auth);
              } catch (e) {
                console.warn('Error al cerrar sesión:', e);
              }
            }
            localStorage.removeItem('adminAuthed');
            navigate('/admin/login');
          }}
          className="admin-logout-btn"
        >
          Cerrar sesión
        </button>
      </header>

      <section className="admin-card">
        <h2 className="admin-section-title">Inventario (placeholder)</h2>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.nombre}</td>
                  <td>{r.stock}</td>
                  <td>${r.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
