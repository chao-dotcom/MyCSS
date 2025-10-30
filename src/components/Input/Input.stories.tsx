import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { label: 'Email', placeholder: 'you@example.com' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = { args: { error: 'Email is invalid' } };


