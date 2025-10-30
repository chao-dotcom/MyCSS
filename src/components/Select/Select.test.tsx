import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

const wrap = (ui: React.ReactElement) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe('Select', () => {
  it('opens and selects an option with keyboard', () => {
    const onChange = vi.fn();
    wrap(
      <Select
        label="Fruit"
        options={[
          { value: 'a', label: 'Apple' },
          { value: 'b', label: 'Banana' },
        ]}
        onChange={onChange}
      />
    );
    const button = screen.getByRole('button', { name: /fruit/i });
    fireEvent.keyDown(button, { key: 'ArrowDown' });
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(onChange).toHaveBeenCalled();
  });

  it('has no axe violations when open', async () => {
    const { container } = wrap(
      <Select
        options={[
          { value: 'a', label: 'Apple' },
          { value: 'b', label: 'Banana' },
        ]}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'ArrowDown' });
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});


