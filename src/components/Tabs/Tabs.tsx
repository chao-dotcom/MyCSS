import React from 'react';
import styled, { keyframes } from 'styled-components';

export type TabItem = { id: string; label: string; content: React.ReactNode };

export type TabsProps = {
  items: TabItem[];
  value?: string;
  onValueChange?: (id: string) => void;
};

const List = styled.div`
  position: relative;
  display: flex;
  gap: ${(p) => p.theme.spacing.md};
  border-bottom: 2px solid ${(p) => p.theme.colors.surfaceVariant};
`;

const Indicator = styled.div<{ $index: number; $count: number }>`
  position: absolute;
  bottom: -2px;
  height: 3px;
  background: ${(p) => p.theme.colors.primary};
  width: calc((100% - ${(p) => (p.$count - 1) *  (parseInt(p.theme.spacing.md) || 16)}px) / ${(p) => p.$count});
  transition: transform ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut}, width ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
  transform: translateX(calc(${(p) => p.$index} * 100% + ${p => p.$index} * ${(p) => p.theme.spacing.md}));
`;

const grow = keyframes`
  from { transform: scale(0.98); }
  to { transform: scale(1); }
`;

const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  background: ${(p) => (p.$active ? 'rgba(22,163,74,0.10)' : 'transparent')};
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.lg};
  cursor: pointer;
  color: ${(p) => (p.$active ? p.theme.colors.text : '#6b7280')};
  border-bottom: 3px solid ${(p) => (p.$active ? p.theme.colors.primary : 'transparent')};
  border-radius: ${(p) => p.theme.radii.sm} ${(p) => p.theme.radii.sm} 0 0;
  box-shadow: ${(p) => (p.$active ? '0 8px 18px rgba(22,163,74,0.12)' : 'none')};
  font-size: ${(p) => (p.$active ? '1.02rem' : '1rem')};
  animation: ${(p) => (p.$active ? grow : 'none')} ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut};

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  &:hover { color: ${(p) => p.theme.colors.text}; }
`;

const appear = keyframes` from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) }`;
const Panel = styled.div`
  padding: ${(p) => p.theme.spacing.lg} 0;
  animation: ${appear} ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
`;

export const Tabs: React.FC<TabsProps> = ({ items, value, onValueChange }) => {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value ?? internal;

  const setActive = (id: string) => {
    if (value === undefined) setInternal(id);
    onValueChange?.(id);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = items.findIndex((t) => t.id === active);
    if (idx < 0) return;
    if (e.key === 'ArrowRight') {
      const next = items[(idx + 1) % items.length];
      setActive(next.id);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      const prev = items[(idx - 1 + items.length) % items.length];
      setActive(prev.id);
      e.preventDefault();
    }
  };

  return (
    <div>
      <List role="tablist" aria-label="Tabs" onKeyDown={onKeyDown}>
        <Indicator $index={Math.max(0, items.findIndex((t) => t.id === active))} $count={items.length} />
        {items.map((t) => {
          const selected = t.id === active;
          return (
            <TabButton
              key={t.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              tabIndex={selected ? 0 : -1}
              $active={selected}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </TabButton>
          );
        })}
      </List>
      {items.map((t) => (
        <Panel
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={t.id !== active}
        >
          {t.id === active ? t.content : null}
        </Panel>
      ))}
    </div>
  );
};


