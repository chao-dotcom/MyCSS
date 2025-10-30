import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';
import { ThemeProvider } from '../../theme/ThemeProvider';
import * as axe from 'axe-core';

const wrap = (ui: React.ReactElement) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe('Modal', () => {
  it('renders with title and closes on Escape', () => {
    const onClose = vi.fn();
    wrap(
      <Modal open onClose={onClose} title="Dialog title">
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog', { name: /dialog title/i })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('has no axe violations', async () => {
    const { container } = wrap(
      <Modal open onClose={() => {}} title="A11y">
        Hello
      </Modal>
    );
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});


