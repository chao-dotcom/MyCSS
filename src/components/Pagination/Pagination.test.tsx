import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

it('navigates pages and passes axe', async () => {
  const onPage = vi.fn();
  const { container } = render(
    <ThemeProvider>
      <Pagination page={1} pageCount={3} onPageChange={onPage} />
    </ThemeProvider>
  );
  fireEvent.click(screen.getByRole('button', { name: '2' }));
  expect(onPage).toHaveBeenCalledWith(2);
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


