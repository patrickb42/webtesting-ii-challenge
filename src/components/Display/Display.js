import React from 'react';

import DisplayMetric from '../DisplayMetric'

const Display = ({ metrics }) => {
  return (
    <div data-testid="Display" className="display">
      {metrics.map((metric) => {
        return (<DisplayMetric key={`display-metric-${metric.label}`} {...metric} />);
      })}
    </div>
  );
};

export default Display;
