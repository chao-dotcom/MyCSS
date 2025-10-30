import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Tabs } from './Tabs';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

describe('Tabs', () => {
  it('supports arrow navigation and has no axe violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Tabs
          items={[
            { id: 'one', label: 'One', content: <div>One</div> },
            { id: 'two', label: 'Two', content: <div>Two</div> },
          ]}
        />
      </ThemeProvider>
    );
    const tablist = screen.getByRole('tablist');
    fireEvent.keyDown(tablist, { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true');
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});


