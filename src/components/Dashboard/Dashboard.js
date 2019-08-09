import React from 'react';

import DashboardButton from '../DashboardButton';

const Dashboard = ({ buttons }) => {
  return (
    <div data-testid="Dashboard">
      {buttons.map((button) => {
        return <DashboardButton key={`dashboard-button-${button.label}`} {...button} />
      })}
    </div>
  );
};

export default Dashboard;
