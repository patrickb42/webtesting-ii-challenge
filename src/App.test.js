import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/test/i);
  // expect(element).toBeTruthy();
  // expect(element).toBeInTheDocument();
  expect(document.body).toContainElement(element);
  // console.log(expect(document.body));
});
