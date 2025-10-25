import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/perfil.css";

const Perfil = () => {
  const { user, updateProfile } = useAuth();
  const [editingName, setEditingName] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    addresses: user?.addresses || [],
  });
  const [addressForm, setAddressForm] = useState({
    firstName: '',
    lastName: '',
    country: 'Chile',
    street: '',
    apartment: '',
    postalCode: '',
    city: '',
    region: '',
    phone: '',
    isDefault: false,
  });

  const chileanRegions = [
    'Arica y Parinacota',
    'Tarapacá',
    'Antofagasta',
    'Atacama',
    'Coquimbo',
    'Valparaíso',
    'Metropolitana de Santiago',
    'Libertador General Bernardo O\'Higgins',
    'Maule',
    'Ñuble',
    'Biobío',
    'La Araucanía',
    'Los Ríos',
    'Los Lagos',
    'Aysén del General Carlos Ibáñez del Campo',
    'Magallanes y de la Antártica Chilena',
  ];

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        addresses: user.addresses || [],
      });
    }
  }, [user]);

  const handleSaveName = () => {
    updateProfile({ name: formData.name });
    setEditingName(false);
  };

  const handleSaveAddress = () => {
    const fullName = `${addressForm.firstName} ${addressForm.lastName}`.trim();
    const newAddress = {
      id: editingAddress ? editingAddress.id : Date.now(),
      fullName,
      street: addressForm.street,
      apartment: addressForm.apartment,
      city: addressForm.city,
      region: addressForm.region,
      postalCode: addressForm.postalCode,
      country: addressForm.country,
      phone: addressForm.phone,
      isDefault: addressForm.isDefault,
    };

    let updatedAddresses;
    if (editingAddress) {
      updatedAddresses = formData.addresses.map(addr =>
        addr.id === editingAddress.id ? newAddress : addr
      );
    } else {
      updatedAddresses = [...formData.addresses, newAddress];
    }

    // If setting as default, remove default from others
    if (addressForm.isDefault) {
      updatedAddresses = updatedAddresses.map(addr => ({
        ...addr,
        isDefault: addr.id === newAddress.id,
      }));
    }

    const updatedData = { ...formData, addresses: updatedAddresses };
    setFormData(updatedData);
    updateProfile(updatedData);
    setShowModal(false);
    resetAddressForm();
  };

  const resetAddressForm = () => {
    setAddressForm({
      firstName: '',
      lastName: '',
      country: 'Chile',
      street: '',
      apartment: '',
      postalCode: '',
      city: '',
      region: '',
      phone: '',
      isDefault: false,
    });
    setEditingAddress(null);
  };

  const handleEditAddress = (address) => {
    const [firstName, ...lastNameParts] = address.fullName.split(' ');
    setAddressForm({
      firstName,
      lastName: lastNameParts.join(' '),
      country: address.country,
      street: address.street,
      apartment: address.apartment || '',
      postalCode: address.postalCode,
      city: address.city,
      region: address.region,
      phone: address.phone,
      isDefault: address.isDefault || false,
    });
    setEditingAddress(address);
    setShowModal(true);
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = formData.addresses.filter(addr => addr.id !== id);
    const updatedData = { ...formData, addresses: updatedAddresses };
    setFormData(updatedData);
    updateProfile(updatedData);
  };

  return (
    <main className="perfil-main">
      <h1>Mi Perfil</h1>

      {/* User Info Section */}
      <section className="user-info-section">
        <div className="user-info-card">
          <div className="user-name">
            {editingName ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={handleSaveName}
                onKeyPress={(e) => e.key === 'Enter' && handleSaveName()}
                autoFocus
                className="name-input"
              />
            ) : (
              <>
                <span>{formData.name || 'Usuario'}</span>
                <button
                  className="edit-name-btn"
                  onClick={() => setEditingName(true)}
                  aria-label="Editar nombre"
                >
                  ✏️
                </button>
              </>
            )}
          </div>
          <div className="user-email">
            <span>{formData.email}</span>
          </div>
        </div>
      </section>

      {/* Address Management Section */}
      <section className="addresses-section">
        <div className="addresses-header">
          <h2>Direcciones</h2>
          <button
            className="add-address-btn"
            onClick={() => {
              resetAddressForm();
              setShowModal(true);
            }}
          >
            + Agregar
          </button>
        </div>

        {formData.addresses.length === 0 ? (
          <div className="no-addresses">
            <p>No tienes direcciones guardadas</p>
            <p>Agrega una dirección para facilitar tus compras</p>
          </div>
        ) : (
          <div className="addresses-grid">
            {formData.addresses.map((address) => (
              <div key={address.id} className={`address-card ${address.isDefault ? 'default' : ''}`}>
                {address.isDefault && <h4>Dirección Predeterminada</h4>}
                <p className="address-name">{address.fullName}</p>
                <p>{address.street}{address.apartment && `, ${address.apartment}`}</p>
                <p>{address.city}, {address.region}</p>
                <p>{address.country} - {address.postalCode}</p>
                <p>+56 {address.phone}</p>
                <div className="address-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditAddress(address)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Address Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <h2>{editingAddress ? 'Editar Dirección' : 'Agregar Nueva Dirección'}</h2>
            <form className="address-form" onSubmit={(e) => { e.preventDefault(); handleSaveAddress(); }}>
              <select
                name="country"
                value={addressForm.country}
                onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })}
                required
              >
                <option value="Chile">Chile</option>
              </select>

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={addressForm.firstName}
                  onChange={(e) => setAddressForm({ ...addressForm, firstName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={addressForm.lastName}
                  onChange={(e) => setAddressForm({ ...addressForm, lastName: e.target.value })}
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Dirección"
                value={addressForm.street}
                onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Apartamento (opcional)"
                value={addressForm.apartment}
                onChange={(e) => setAddressForm({ ...addressForm, apartment: e.target.value })}
              />

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Código Postal"
                  value={addressForm.postalCode}
                  onChange={(e) => setAddressForm({ ...addressForm, postalCode: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={addressForm.city}
                  onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                  required
                />
              </div>

              <select
                name="region"
                value={addressForm.region}
                onChange={(e) => setAddressForm({ ...addressForm, region: e.target.value })}
                required
              >
                <option value="">Seleccionar Región</option>
                {chileanRegions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <input
                type="tel"
                placeholder="Teléfono (+56...)"
                value={addressForm.phone}
                onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                required
              />

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={addressForm.isDefault}
                  onChange={(e) => setAddressForm({ ...addressForm, isDefault: e.target.checked })}
                />
                Establecer como dirección predeterminada
              </label>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="save-btn">
                  {editingAddress ? 'Guardar Cambios' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Perfil;
