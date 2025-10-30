import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { id: 'one', label: 'One', content: <div>One content</div> },
      { id: 'two', label: 'Two', content: <div>Two content</div> },
      { id: 'three', label: 'Three', content: <div>Three content</div> },
    ],
  },
};


