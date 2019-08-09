import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  const balls = {
    label: 'Balls',
    data: 0,
  };
  const strikes = {
    label: 'Strikes',
    data: 0,
  };

  const metrics = [balls, strikes];

  const { getByTestId } = render(<Display metrics={metrics}/>);

  it('renders without crashing', () => {
    getByTestId(/^Display$/);
  });
});

