import React, { useState, useEffect, useMemo } from 'react';
import api from '../Api/axios';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useLoading } from '../contexts/useLoading';
import Pagination from '../Components/Pagination';
import '../styles/historial.css'; // We will create this file next

const HistorialCompras = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Show 5 orders per page
    const { user, isLoggedIn } = useAuth();
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        if (!isLoggedIn || !user?.id) {
            setError("Debes iniciar sesión para ver tu historial.");
            return;
        }

        const fetchOrders = async () => {
            showLoading({ message: 'Cargando tu historial...' });
            try {
                // Endpoint from SPRING_BOOT_GUIDE.md: GET /api/orders/my-orders?userId=...
                const response = await api.get('/orders/my-orders', {
                    params: { userId: user.id }
                });
                setOrders(response.data);
                setError('');
            } catch (err) {
                console.error("Error fetching order history:", err);
                const errorMessage = err.response?.data?.message || "No se pudo cargar el historial de compras.";
                setError(errorMessage);
                // If the backend returns 404, it might just mean no orders found.
                if (err.response?.status === 404) {
                    setOrders([]);
                }
            } finally {
                hideLoading();
            }
        };

        fetchOrders();
    }, [user, isLoggedIn, showLoading, hideLoading]);

    // Filter orders based on search query
    const filteredOrders = useMemo(() => {
        if (!searchQuery.trim()) return orders;

        const query = searchQuery.toLowerCase();
        return orders.filter(order =>
            order.items?.some(item =>
                item.product?.name?.toLowerCase().includes(query)
            )
        );
    }, [orders, searchQuery]);

    // Pagination logic
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Reset to page 1 when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    if (!isLoggedIn) {
        return (
            <main className="historial-main-unauthorized">
                <div className="historial-container">
                    <h1>Acceso Denegado</h1>
                    <p>Debes <Link to="/login">iniciar sesión</Link> para ver tu historial de compras.</p>
                </div>
            </main>
        );
    }
    
    return (
        <main className="historial-main">
            <div className="historial-container">
                <h1 className="historial-title">Mi Historial de Compras</h1>

                {/* Search Input */}
                {orders.length > 0 && (
                    <div className="historial-search">
                        <input
                            type="text"
                            placeholder="Buscar por nombre de producto..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="historial-search-input"
                        />
                    </div>
                )}

                {error && <p className="historial-error">{error}</p>}

                {orders.length === 0 && !error && (
                    <div className="historial-empty">
                        <p>Aún no has realizado ninguna compra.</p>
                        <Link to="/tienda" className="btn-primary">¡Ir a la tienda!</Link>
                    </div>
                )}

                {orders.length > 0 && (
                    <>
                        <div className="orders-list">
                            {currentOrders.map(order => (
                                <div key={order.id} className="order-card">
                                    <div className="order-card-header">
                                        <div className="order-info">
                                            <span className="order-info-label">Fecha del Pedido</span>
                                            <span className="order-info-value">{new Date(order.orderDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="order-info">
                                            <span className="order-info-label">Total</span>
                                            <span className="order-info-value">${Number(order.totalAmount).toLocaleString('es-CL')}</span>
                                        </div>
                                        <div className="order-info">
                                            <span className="order-info-label">Estado</span>
                                            <span className={`order-status status-${order.status?.toLowerCase()}`}>{order.status}</span>
                                        </div>
                                    </div>
                                    <div className="order-items-summary">
                                        <h4 className="order-items-title">Artículos en este pedido</h4>
                                        <ul className="order-items-list">
                                            {order.items?.map(item => (
                                                <li key={item.id} className="order-item-detail">
                                                    <span>{item.product?.name || 'Producto no disponible'}</span>
                                                    <span>({item.quantity} x ${Number(item.price).toLocaleString('es-CL')})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {filteredOrders.length > itemsPerPage && (
                            <Pagination
                                cardsPerPage={itemsPerPage}
                                totalCards={filteredOrders.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default HistorialCompras;
