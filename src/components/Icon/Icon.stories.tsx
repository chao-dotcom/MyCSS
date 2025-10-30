import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 16, display: 'flex', gap: 16, alignItems: 'center' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

const checkPath = 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z';

export const Check: Story = { args: { path: checkPath, size: 24, title: 'Check' } };


