import React from 'react';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px', marginBottom: '20px' }}>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '8px 12px',
          background: currentPage === 1 ? '#ccc' : '#08415C',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        Anterior
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => paginate(page)}
          style={{
            padding: '8px 12px',
            background: page === currentPage ? '#CC2936' : '#08415C',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 12px',
          background: currentPage === totalPages ? '#ccc' : '#08415C',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
        }}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
