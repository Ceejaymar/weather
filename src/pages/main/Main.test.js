import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from 'pages/main/Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/weather/i);
  expect(linkElement).toBeInTheDocument();
});
