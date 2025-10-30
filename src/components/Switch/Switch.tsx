import React from 'react';
import styled from 'styled-components';

export type SwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'aria-checked'> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Track = styled.span<{ $checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  background: ${(p) => (p.$checked ? p.theme.colors.primary : p.theme.colors.surfaceVariant)};
  border-radius: 999px;
  transition: background ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
  vertical-align: middle;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(p) => (p.$checked ? '18px' : '2px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.surface};
    box-shadow: ${(p) => p.theme.elevation.level1};
    transition: left ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut}, transform ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut};
  }
`;

const Button = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii.md};

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

export const Switch: React.FC<SwitchProps> = ({ checked: controlledChecked, onCheckedChange, ...rest }) => {
  const [uncontrolled, setUncontrolled] = React.useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolled;

  const toggle = () => {
    const next = !checked;
    if (!isControlled) setUncontrolled(next);
    onCheckedChange?.(next);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      onKeyDown={onKeyDown}
      {...rest}
    >
      <Track $checked={checked} />
    </Button>
  );
};


