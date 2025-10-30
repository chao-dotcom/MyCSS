import React, { useEffect, useId, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { createFocusTrap, FocusTrapHandle } from '../../utils/focusTrap';
import { Button } from '../Button/Button';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 8, 23, 0.30);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Dialog = styled.div`
  min-width: 320px;
  max-width: 90vw;
  background: ${(p) => p.theme.glass?.surface ?? p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.lg};
  padding: ${(p) => p.theme.spacing.lg};
  box-shadow: ${(p) => p.theme.elevation.level3};
  backdrop-filter: ${(p) => p.theme.glass?.blur};
  -webkit-backdrop-filter: ${(p) => p.theme.glass?.blur};
  border: ${(p) => p.theme.glass?.border};
  animation: ${appear} ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
`;

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const labelId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const trap = useRef<FocusTrapHandle | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      trap.current = createFocusTrap(el);
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', onEsc);
      return () => document.removeEventListener('keydown', onEsc);
    } else {
      trap.current?.deactivate();
      trap.current = null;
    }
  }, [open, onClose]);

  if (!open) return null;
  return (
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <Dialog
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? labelId : undefined}
      >
        {title ? (
          <h2 id={labelId} style={{ marginTop: 0 }}>
            {title}
          </h2>
        ) : null}
        <div style={{ marginTop: 8 }}>{children}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 16 }}>
          <Button colorScheme="green" onClick={onClose}>Confirm</Button>
        </div>
      </Dialog>
    </Backdrop>
  );
};


