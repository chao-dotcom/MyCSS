import React from 'react';
import styled, { keyframes } from 'styled-components';

export type ToastMessage = { id: string; title?: string; description?: string };

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: grid;
  gap: 8px;
`;

const slideIn = keyframes` from { opacity: 0; transform: translateY(8px)} to { opacity: 1; transform: translateY(0)} `;

const Item = styled.div`
  background: ${(p) => p.theme.glass?.surface ?? p.theme.colors.surface};
  color: ${(p) => p.theme.colors.onSurface};
  border-radius: ${(p) => p.theme.radii.md};
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.lg};
  box-shadow: ${(p) => p.theme.elevation.level2};
  border: ${(p) => p.theme.glass?.border};
  backdrop-filter: ${(p) => p.theme.glass?.blur};
  -webkit-backdrop-filter: ${(p) => p.theme.glass?.blur};
  animation: ${slideIn} ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
`;

type ToastContextValue = {
  toasts: ToastMessage[];
  show: (t: Omit<ToastMessage, 'id'>) => void;
  hide: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);
  const show = (t: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((arr) => [...arr, { id, ...t }]);
  };
  const hide = (id: string) => setToasts((arr) => arr.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ toasts, show, hide }}>
      {children}
      <Container aria-live="polite" aria-atomic="false">
        {toasts.map((t) => (
          <Item key={t.id} role="status">
            {t.title ? <strong style={{ display: 'block', marginBottom: 4 }}>{t.title}</strong> : null}
            {t.description ? <div style={{ opacity: 0.9 }}>{t.description}</div> : null}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
              <button
                onClick={() => hide(t.id)}
                style={{
                  height: '32px',
                  padding: '0 12px',
                  borderRadius: 8,
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 6px 16px rgba(2,8,23,0.06)'
                }}
              >
                Dismiss
              </button>
            </div>
          </Item>
        ))}
      </Container>
    </ToastContext.Provider>
  );
};


