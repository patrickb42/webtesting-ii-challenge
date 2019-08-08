import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const component = rtl.render(<Dashboard />)
  component.getByTestId(/^Dashboard$/);
});
