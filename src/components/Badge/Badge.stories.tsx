import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { children: 'New' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};
export const SubtleGreen: Story = { args: { colorScheme: 'green', children: 'Subtle' } };
export const SolidGreen: Story = { args: { variant: 'solid', colorScheme: 'green', children: 'Solid' } };
export const OutlineGreen: Story = { args: { variant: 'outline', colorScheme: 'green', children: 'Outline' } };

// Intent animations showcase
export const IntentNeutral: Story = {
  args: { intent: 'neutral', children: 'Neutral hover' },
};

export const IntentSuccess: Story = {
  args: { intent: 'success', variant: 'solid', colorScheme: 'green', children: 'Success' },
};

export const IntentWarning: Story = {
  args: { intent: 'warning', children: 'Warning' },
};

export const IntentDanger: Story = {
  args: { intent: 'danger', children: 'Danger' },
};


