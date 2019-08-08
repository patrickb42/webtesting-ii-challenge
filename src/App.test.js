import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const app = rtl.render(<App />);

it('renders without crashing', () => {
  expect(app.getByTestId(/^App$/)).toBeInTheDocument();
});

it('component Display renders to App', () => {
  app.getByTestId(/^Display$/);
});

it('component Display renders to App', () => {
  app.getByTestId(/^Dashboard$/);
});
