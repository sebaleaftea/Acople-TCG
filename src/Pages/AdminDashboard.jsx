import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// Nota: evitamos importar datos locales pesados para no afectar carga inicial.
// Cuando conectemos Firestore, traeremos productos/stock desde la nube.
import { auth, isConfigured, onAuthStateChanged, signOut } from '../firebase';

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

  // Placeholder: inventario basado en data estática.
  const rows = useMemo(() => {
    // Placeholder minimal mientras se integra Firestore
    return [
      { id: 'sample-1', nombre: 'Producto de ejemplo', stock: 0, precio: 0 },
      { id: 'sample-2', nombre: 'Producto de ejemplo 2', stock: 0, precio: 0 },
    ];
  }, []);

  return (
    <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ color: '#08415C' }}>Panel de administración</h1>
        <button
          onClick={async () => {
            if (isConfigured) {
              try {
                await signOut(auth);
              } catch (e) {
                // por ahora se ignoran errores de salir de sesion 
                console.warn('Error al cerrar sesión:', e);
              }
            }
            localStorage.removeItem('adminAuthed');
            navigate('/admin/login');
          }}
          className="mini-carrito-btn-outline"
        >
          Cerrar sesión
        </button>
      </header>

      <section style={{ background: '#f5f5f5', borderRadius: 12, boxShadow: '0 4px 16px rgba(8,65,92,0.10)', padding: '1rem' }}>
        <h2 style={{ marginTop: 0, color: '#286D8D' }}>Inventario (placeholder)</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '8px 6px' }}>ID</th>
                <th style={{ padding: '8px 6px' }}>Nombre</th>
                <th style={{ padding: '8px 6px' }}>Stock</th>
                <th style={{ padding: '8px 6px' }}>Precio</th>
                <th style={{ padding: '8px 6px' }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '8px 6px', fontFamily: 'monospace' }}>{r.id}</td>
                  <td style={{ padding: '8px 6px' }}>{r.nombre}</td>
                  <td style={{ padding: '8px 6px' }}>{r.stock}</td>
                  <td style={{ padding: '8px 6px' }}>${Number(r.precio).toLocaleString()}</td>
                  <td style={{ padding: '8px 6px' }}>
                    <button className="mini-carrito-btn-secundario" style={{ padding: '6px 10px' }}>Editar</button>
                  </td>
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
