import React from 'react';

export default function Loader({ loading }) {
  return (
    <div className={`loader-container ${!loading ? 'hidden' : ''}`}>
      <div className="loader"></div>
    </div>
  );
}
