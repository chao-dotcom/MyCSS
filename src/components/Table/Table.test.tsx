import { render, screen } from '@testing-library/react';
import React from 'react';
import { Table } from './Table';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

type Row = { name: string; role: string };

it('renders headers and passes axe', async () => {
  const { container } = render(
    <ThemeProvider>
      <Table<Row>
        columns={[{ key: 'name', header: 'Name' }, { key: 'role', header: 'Role' }]}
        data={[{ name: 'Alice', role: 'Admin' }]}
      />
    </ThemeProvider>
  );
  expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});


