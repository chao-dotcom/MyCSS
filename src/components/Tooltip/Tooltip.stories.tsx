import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
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
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful hint">
      <Button colorScheme="green">Hover or focus me</Button>
    </Tooltip>
  ),
};


