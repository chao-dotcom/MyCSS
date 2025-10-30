import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
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
type Story = StoryObj<typeof Pagination>;

const PaginationDemo = () => {
  const [page, setPage] = useState(1);
  return <Pagination page={page} pageCount={5} onPageChange={setPage} />;
};

export const Default: Story = { render: () => <PaginationDemo /> };


