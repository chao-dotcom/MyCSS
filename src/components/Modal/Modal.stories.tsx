import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
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
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} colorScheme="green">Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Example Modal">
        <p style={{ marginBottom: 16 }}>This modal follows WCAG roles and traps focus.</p>
      </Modal>
    </>
  );
};

export const Default: Story = { render: () => <ModalDemo /> };


