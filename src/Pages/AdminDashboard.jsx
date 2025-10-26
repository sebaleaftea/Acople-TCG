import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, isConfigured, onAuthStateChanged, signOut } from '../firebase';
import '../styles/admin.css';
import '../styles/home.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isConfigured) {
      const unsub = onAuthStateChanged(auth, (user) => {
        const fallback = localStorage.getItem('adminAuthed') === 'true';
        if (!user && !fallback) navigate('/');
      });
      return () => unsub && unsub();
    } else {
      const ok = localStorage.getItem('adminAuthed') === 'true';
      if (!ok) navigate('/');
    }
  }, [navigate]);

  // Inventario editable (placeholder con persistencia local)
  const STORAGE_KEY = 'acople-inventory';
  const initialRows = useMemo(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('No se pudo leer inventario local:', e);
    }
    return [
      { id: 'sample-1', nombre: 'Producto de ejemplo', stock: 10, precio: 19990 },
      { id: 'sample-2', nombre: 'Producto de ejemplo 2', stock: 5, precio: 9990 },
    ];
  }, []);
  const [rows, setRows] = useState(initialRows);
  const [savingId, setSavingId] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [addForm, setAddForm] = useState({ nombre: '', stock: 0, precio: 0 });
  const [addError, setAddError] = useState('');

  const persist = (next) => {
    setRows(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn('No se pudo guardar inventario local:', e);
    }
  };

  const setStock = (id, value) => {
    const v = Math.max(0, Number(value) || 0);
    persist(rows.map(r => r.id === id ? { ...r, stock: v } : r));
  };
  const deltaStock = (id, delta) => {
    persist(rows.map(r => r.id === id ? { ...r, stock: Math.max(0, (Number(r.stock)||0) + delta) } : r));
  };
  const setPrecio = (id, value) => {
    const v = Math.max(0, Number(value) || 0);
    persist(rows.map(r => r.id === id ? { ...r, precio: v } : r));
  };

  // Crear / Eliminar productos (persistencia local por ahora)
  const openAddModal = () => {
    setAddForm({ nombre: '', stock: 0, precio: 0 });
    setAddError('');
    setIsAddOpen(true);
  };
  const closeAddModal = () => {
    setIsAddOpen(false);
  };
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    if (name === 'stock' || name === 'precio') {
      const v = Math.max(0, Number(value) || 0);
      setAddForm(prev => ({ ...prev, [name]: v }));
    } else {
      setAddForm(prev => ({ ...prev, [name]: value }));
    }
    setAddError('');
  };
  const submitAdd = (e) => {
    e.preventDefault();
    if (!addForm.nombre || String(addForm.nombre).trim() === '') {
      setAddError('Ingresa un nombre válido');
      return;
    }
    const id = `item-${Date.now()}`;
    const nuevo = {
      id,
      nombre: String(addForm.nombre).trim(),
      stock: Math.max(0, Number(addForm.stock) || 0),
      precio: Math.max(0, Number(addForm.precio) || 0)
    };
    persist([...rows, nuevo]);
    setIsAddOpen(false);
  };

  const removeRow = (id) => {
    if (!window.confirm('¿Eliminar este producto?')) return;
    persist(rows.filter(r => r.id !== id));
  };

  // Placeholder para futura integración con Firebase
  const saveRow = async (id) => {
    setSavingId(id);
    try {
      // TODO: integrar con Firestore/Realtime DB aquí
      // const row = rows.find(r => r.id === id);
      // await saveInventoryItemToFirebase(row)
      await new Promise(res => setTimeout(res, 600)); // feedback mínimo
    } finally {
      setSavingId(null);
    }
  };

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
            navigate('/');
          }}
          className="admin-logout-btn"
        >
          Cerrar sesión
        </button>
      </header>

      <section className="admin-card">
        <div className="admin-toolbar">
          <h2 className="admin-section-title" style={{ margin: 0 }}>Inventario</h2>
          <button className="admin-btn-secondary" onClick={openAddModal}>Agregar producto</button>
        </div>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio (CLP)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.nombre}</td>
                  <td style={{ minWidth: 140 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button className="admin-btn-outline" onClick={() => deltaStock(r.id, -1)}>-</button>
                      <input
                        type="number"
                        min={0}
                        value={r.stock}
                        onChange={(e) => setStock(r.id, e.target.value)}
                        className="admin-input"
                        style={{ width: 80 }}
                      />
                      <button className="admin-btn-outline" onClick={() => deltaStock(r.id, 1)}>+</button>
                    </div>
                  </td>
                  <td style={{ minWidth: 160 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span>$</span>
                      <input
                        type="number"
                        min={0}
                        step={10}
                        value={r.precio}
                        onChange={(e) => setPrecio(r.id, e.target.value)}
                        className="admin-input"
                        style={{ width: 120 }}
                      />
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        className="admin-btn-secondary"
                        onClick={() => saveRow(r.id)}
                        disabled={savingId === r.id}
                      >
                        {savingId === r.id ? 'Guardando...' : 'Guardar'}
                      </button>
                      <button
                        className="admin-btn-outline"
                        onClick={() => removeRow(r.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isAddOpen && (
        <div className="modal-overlay" onClick={closeAddModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAddModal}>&times;</button>
            <div className="modal-body">
              <form onSubmit={submitAdd}>
                <h2>Nuevo producto</h2>
                <div className="form-group">
                  <label htmlFor="add-nombre">Nombre</label>
                  <input
                    id="add-nombre"
                    name="nombre"
                    type="text"
                    value={addForm.nombre}
                    onChange={handleAddChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="add-stock">Stock</label>
                  <input
                    id="add-stock"
                    name="stock"
                    type="number"
                    min={0}
                    value={addForm.stock}
                    onChange={handleAddChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="add-precio">Precio (CLP)</label>
                  <input
                    id="add-precio"
                    name="precio"
                    type="number"
                    min={0}
                    step={10}
                    value={addForm.precio}
                    onChange={handleAddChange}
                    required
                  />
                </div>
                {addError && <div className="error-message">{addError}</div>}
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="button" className="admin-btn-outline" onClick={closeAddModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="modal-submit-btn" style={{ flex: 1 }}>
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminDashboard;
