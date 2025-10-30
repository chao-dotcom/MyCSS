import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from './Table';
import { ThemeProvider } from '../../theme/ThemeProvider';

type Row = { name: string; role: string; email: string };

type Columns = { key: keyof Row; header: string }[];
const TableComponent = (props: { columns: Columns; data: Row[] }) => <Table<Row> {...props} />;

const meta: Meta<typeof TableComponent> = {
  title: 'Organisms/Table',
  component: TableComponent,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 16 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableComponent>;

export const Default: Story = {
  render: () => {
    const columns: Columns = [
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' },
      { key: 'email', header: 'Email' },
    ];
    const data: Row[] = [
      { name: 'Alice', role: 'Admin', email: 'alice@example.com' },
      { name: 'Bob', role: 'User', email: 'bob@example.com' },
    ];
    return <TableComponent columns={columns} data={data} />;
  },
};


