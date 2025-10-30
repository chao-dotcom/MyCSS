import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('shows tooltip on focus and passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Tooltip content="Help text">
        <button>Target</button>
      </Tooltip>
    </ThemeProvider>
  );
  const btn = screen.getByRole('button', { name: 'Target' });
  fireEvent.focus(btn);
  expect(screen.getByRole('tooltip')).toBeInTheDocument();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


