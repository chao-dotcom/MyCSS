import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from './Switch';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Uncontrolled: Story = {};

const SwitchDemo = () => {
  const [on, setOn] = useState(false);
  return <Switch checked={on} onCheckedChange={setOn} aria-label="Airplane Mode" />;
};

export const Controlled: Story = { render: () => <SwitchDemo /> };


