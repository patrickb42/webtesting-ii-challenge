import React from 'react';

const DashboardButton = ({ label, onClick }) => {
  return (
    <button data-testid={`dashboard-button-${label.toLowerCase()}`} onClick={onClick}>{label}</button>
  );
}

export default DashboardButton;
