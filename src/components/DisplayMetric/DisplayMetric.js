import React from 'react';

const DisplayMetric = ({ label, data }) => {
  return (
    <div data-testid={`display-metric-${label.toLowerCase()}`} className="diplay-metric">
      <p className="display-metric-label">{label}</p>
      <p className="dispaly-metric-data">{data}</p>
    </div>
  );
};

export default DisplayMetric;
