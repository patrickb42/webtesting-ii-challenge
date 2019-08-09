import React from 'react';
import { render, fireEvent,  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

const balls = 0;
const strikes = 0;
const outs = 0;

const metrics = [];
metrics.push({ label: 'Balls', data: balls });
metrics.push({ label: 'Strikes', data: strikes });
metrics.push({ label: 'Outs', data: outs });

const buttons = [];
buttons.push({ label: 'Ball', onClick: () => {}});
buttons.push({ label: 'Strike', onClick: () => {}});

describe('<Dashboard />', () => {
  const { getByTestId } = render(<Dashboard buttons={buttons} />);
  
  it('renders without crashing', () => {
    getByTestId(/^Dashboard$/);
  });
});
