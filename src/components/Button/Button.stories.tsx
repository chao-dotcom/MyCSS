import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { children: 'Button' },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary', colorScheme: 'gray' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Loading: Story = { args: { isLoading: true } };

export const Grouped: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ButtonGroup ariaLabel="Align content" variant="outline" colorScheme="gray" size="md">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup ariaLabel="Danger actions" variant="solid" colorScheme="red" size="md">
        <Button>Discard</Button>
        <Button>Delete</Button>
        <Button>Nuke</Button>
      </ButtonGroup>
    </div>
  ),
};


