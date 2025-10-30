import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Accordion } from './Accordion';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('toggles panels and passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Accordion items={[{ id: 'a', header: 'A', content: 'Content' }]} />
    </ThemeProvider>
  );
  const btn = screen.getByRole('button', { name: 'A' });
  fireEvent.click(btn);
  expect(screen.getByRole('region')).toBeInTheDocument();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


