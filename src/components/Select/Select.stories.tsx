import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from './Select';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>;

const SelectDemo = () => {
  const [val, setVal] = useState<string | undefined>();
  return (
    <Select
      label="Fruit"
      options={[
        { value: 'a', label: 'Apple' },
        { value: 'b', label: 'Banana' },
        { value: 'c', label: 'Cherry', disabled: true },
      ]}
      value={val}
      onChange={setVal}
    />
  );
};

export const Default: Story = { render: () => <SelectDemo /> };


