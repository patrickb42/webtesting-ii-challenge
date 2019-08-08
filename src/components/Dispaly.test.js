import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

it('renders without crashing', () => {
  const component = rtl.render(<Display />)
  component.getByTestId(/^Display$/);
});
