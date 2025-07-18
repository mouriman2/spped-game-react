import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  it('renders game heading', () => {
    render(<App />);
    expect(screen.getByText('Speed Game')).toBeInTheDocument();
  });

  it('shows 5 cards in player hand', () => {
    render(<App />);
    expect(screen.getAllByTestId('player-card')).toHaveLength(5);
  });
});
