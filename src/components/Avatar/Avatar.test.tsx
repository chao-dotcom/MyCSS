import { render, screen } from '@testing-library/react';
import React from 'react';
import { Avatar } from './Avatar';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('renders initials and passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Avatar name="Jane Doe" />
    </ThemeProvider>
  );
  expect(screen.getByLabelText('Jane Doe')).toBeInTheDocument();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


