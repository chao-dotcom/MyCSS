import { render, screen } from '@testing-library/react';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('renders and passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Page' }]} />
    </ThemeProvider>
  );
  expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


