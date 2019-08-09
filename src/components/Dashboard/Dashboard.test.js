import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

const balls = 0;
const setBalls = () => {};
const strikes = 0;
const setStrikes = () => {};
const outs = 0;
const setOuts = () => {};

const metrics = [];
metrics.push({ label: 'Balls', data: balls });
metrics.push({ label: 'Strikes', data: strikes });
metrics.push({ label: 'Outs', data: outs });

const buttons = [];
buttons.push({ label: 'Ball', onClick: setBalls});
buttons.push({ label: 'Strike', onClick: setStrikes});

describe('<Dashboard />', () => {
  const { getByTestId } = render(<Dashboard buttons={buttons} />);
  
  it('renders without crashing', () => {
    getByTestId(/^Dashboard$/);
  });
});
