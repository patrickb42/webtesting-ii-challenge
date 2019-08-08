import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('renders without crashing', () => {
  const app = rtl.render(<App />);
  const element = app.queryByText(/test/i);
  expect(element).toBeInTheDocument();
});
