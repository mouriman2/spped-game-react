import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText('React TypeScript Template')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<App />);
    expect(screen.getByText(/A modern web application template/)).toBeInTheDocument();
  });

  it('renders the action buttons', () => {
    render(<App />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});