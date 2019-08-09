import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';


describe('testing default components rendered in <App />', () => {
  const { getByTestId } = render(<App />);

  it('renders without crashing', () => {
    expect(getByTestId(/^App$/)).toBeInTheDocument();
    getByTestId(/^Display$/);
    getByTestId(/^display-metric-balls$/);
    getByTestId(/^display-metric-strikes$/);
    getByTestId(/^Dashboard$/);
  });
})
