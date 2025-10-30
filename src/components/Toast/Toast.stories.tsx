import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider, useToast } from './Toast';
import { Button } from '../Button/Button';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta = {
  title: 'Molecules/Toast',
};

export default meta;

const Demo = () => {
  const { show } = useToast();
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button colorScheme="green" onClick={() => show({ title: 'Saved', description: 'Your changes were saved.' })}>Show toast</Button>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => (
    <ThemeProvider>
      <ToastProvider>
        <div style={{ padding: 16 }}>
          <Demo />
        </div>
      </ToastProvider>
    </ThemeProvider>
  ),
};


