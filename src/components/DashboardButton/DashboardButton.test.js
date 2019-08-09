import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DashboardButton from './DashboardButton';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    const ball = {
      label: 'Ball',
      onClick: () => {},
    }

    const { getByTestId } = render(<DashboardButton {...ball} />);

    getByTestId(`dashboard-button-${ball.label.toLowerCase()}`);
  });
});
