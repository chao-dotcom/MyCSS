import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Radio name="plan" value="free" label="Free" defaultChecked />
      <Radio name="plan" value="pro" label="Pro" />
      <Radio name="plan" value="team" label="Team" />
    </div>
  ),
};


