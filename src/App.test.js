import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const app = rtl.render(<App />);
});
