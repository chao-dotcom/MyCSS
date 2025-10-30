import { render } from '@testing-library/react';
import React from 'react';
import { Icon } from './Icon';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Icon path="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" title="Check" />
    </ThemeProvider>
  );
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


