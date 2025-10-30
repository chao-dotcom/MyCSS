import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 16, display: 'flex', gap: 16 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = { args: { name: 'Jane Doe', size: 40 } };
export const WithImage: Story = { args: { src: 'https://via.placeholder.com/80', alt: 'Avatar', size: 40 } };


