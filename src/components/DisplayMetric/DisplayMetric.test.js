import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DisplayMetric from './DisplayMetric';

describe('<DisplayMetric />', () => {
  const metric = {
    label: 'ball',
    data: 0,
  };

  const { getByTestId } = render(<DisplayMetric {...metric} />);
  
  it('renders without crashing', () => {
    getByTestId(`display-metric-${metric.label}`);
  });
});
