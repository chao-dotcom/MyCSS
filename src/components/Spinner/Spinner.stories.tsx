import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Spinner } from './Spinner';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Large: Story = { args: { size: 36 } };


