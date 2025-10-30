import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
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
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { id: 'a', header: 'Section A', content: 'Content A' },
      { id: 'b', header: 'Section B', content: 'Content B' },
      { id: 'c', header: 'Section C', content: 'Content C' },
    ],
  },
};


