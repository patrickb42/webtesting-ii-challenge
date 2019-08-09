import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  const { getByTestId } = render(<Dashboard />);
  
  it('renders without crashing', () => {
    getByTestId(/^Dashboard$/);
  });
});
