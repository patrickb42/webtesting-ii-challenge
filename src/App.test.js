import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  expect(rtl.render(<App />).getByTestId(/^App$/)).toBeInTheDocument();
});
