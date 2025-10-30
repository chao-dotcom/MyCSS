import React from 'react';
import styled from 'styled-components';

export type Segment = { id: string; label: string };
export type SegmentedControlProps = {
  segments: Segment[];
  value?: string;
  onChange?: (id: string) => void;
};

const Wrap = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  gap: 0;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 999px;
  position: relative;
  box-shadow: 0 8px 24px rgba(2,8,23,0.06);
`;

const Item = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  padding: 8px 16px;
  border: 0;
  background: transparent;
  cursor: pointer;
  min-width: 80px;
  color: ${(p) => (p.$active ? '#166534' : 'inherit')};
`;

const Indicator = styled.div<{ $index: number; $count: number }>`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  width: calc((100% - 4px) / ${(p) => p.$count});
  transform: translateX(calc(${(p) => p.$index} * (100%)));
  background: rgba(22,163,74,0.12);
  border-radius: 999px;
  transition: transform 220ms cubic-bezier(0.2,0.8,0.2,1);
`;

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ segments, value, onChange }) => {
  const [internal, setInternal] = React.useState(segments[0]?.id);
  const active = value ?? internal;
  const index = Math.max(0, segments.findIndex((s) => s.id === active));

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  return (
    <Wrap role="tablist" aria-label="Options">
      <Indicator $index={index} $count={segments.length} />
      {segments.map((s) => (
        <Item key={s.id} $active={s.id === active} role="tab" aria-selected={s.id === active} onClick={() => select(s.id)}>
          {s.label}
        </Item>
      ))}
    </Wrap>
  );
};


