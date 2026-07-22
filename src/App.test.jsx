import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Forooz portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /digital products that feel/i })).toBeDefined();
  expect(screen.getByText(/18 years of experience/i)).toBeDefined();
});
