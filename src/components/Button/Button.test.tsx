import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Button', () => {
  it('renders with text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('disables when loading', () => {
    renderWithTheme(<Button isLoading>Click</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('has no obvious a11y violations', async () => {
    const { container } = renderWithTheme(<Button>OK</Button>);
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});


