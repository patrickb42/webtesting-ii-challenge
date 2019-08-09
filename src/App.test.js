import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';


describe('testing default components rendered in App', () => {
  const { getByTestId } = render(<App />);

  it('renders without crashing', () => {
    expect(getByTestId(/^App$/)).toBeInTheDocument();
  });

  it('component Display renders to App', () => {
    getByTestId(/^Display$/);
  });

  it('balls DisplayMetric renders to App', () => {
    getByTestId(/^display-metric-balls$/);
  });

  it('strikes DisplayMetric renders to App', () => {
    getByTestId(/^display-metric-strikes$/);
  });

  it('component Display renders to App', () => {
    getByTestId(/^Dashboard$/);
  });
})
