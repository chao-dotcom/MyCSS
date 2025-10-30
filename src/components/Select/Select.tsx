import React from 'react';
import styled, { keyframes } from 'styled-components';

export type SelectOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

const Box = styled.div`
  position: relative;
  display: inline-block;
  min-width: 200px;
`;

const Trigger = styled.button`
  width: 100%;
  text-align: left;
  padding: ${(p) => p.theme.spacing.md};
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.surfaceVariant};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  min-height: 44px;
  &:focus-visible { box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.25); }
`;

const pop = keyframes`
  from { opacity: 0; transform: translateY(6px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Listbox = styled.ul`
  position: absolute;
  z-index: 10;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${(p) => p.theme.glass?.surface ?? p.theme.colors.surface};
  border: ${(p) => p.theme.glass?.border ?? `1px solid ${p.theme.colors.surfaceVariant}`};
  border-radius: ${(p) => p.theme.radii.sm};
  margin: 0;
  padding: 4px 0;
  list-style: none;
  max-height: 240px;
  overflow: auto;
  box-shadow: ${(p) => p.theme.elevation.level2};
  backdrop-filter: ${(p) => p.theme.glass?.blur};
  -webkit-backdrop-filter: ${(p) => p.theme.glass?.blur};
  animation: ${pop} ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
`;

const OptionLi = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 6px 10px;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  background: ${(p) => (p.$active ? '#e5e7eb' : 'transparent')};
  color: ${(p) => (p.$disabled ? '#9ca3af' : p.theme.colors.text)};
`;

export const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder = 'Select…', label }) => {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const id = React.useId();
  const labelId = React.useId();
  const selected = options.find((o) => o.value === value) || null;
  const listboxRef = React.useRef<HTMLUListElement | null>(null);

  const firstEnabledIndex = React.useCallback(() => {
    const idx = options.findIndex((o) => !o.disabled);
    return idx === -1 ? 0 : idx;
  }, [options]);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      setActiveIndex(firstEnabledIndex());
      setOpen(true);
      e.preventDefault();
      return;
    }
    if (!open) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt && !opt.disabled) {
        onChange?.(opt.value);
        close();
      }
    }
  };

  const onListboxKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt && !opt.disabled) {
        onChange?.(opt.value);
        close();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  };

  React.useEffect(() => {
    if (open) {
      // Move focus into listbox to satisfy aria-activedescendant requirement
      listboxRef.current?.focus();
    }
  }, [open]);

  return (
    <Box>
      {label ? (
        <label id={labelId} style={{ display: 'block', marginBottom: 4 }}>
          {label}
        </label>
      ) : null}
      <Trigger
        aria-haspopup="listbox"
        aria-labelledby={label ? labelId : undefined}
        aria-label={!label ? (selected ? selected.label : placeholder) : undefined}
        aria-expanded={open}
        aria-controls={id}
        onClick={toggle}
        onKeyDown={onTriggerKeyDown}
      >
        {selected ? selected.label : <span style={{ color: '#9ca3af' }}>{placeholder}</span>}
      </Trigger>
      {open ? (
        <Listbox
          ref={listboxRef}
          role="listbox"
          id={id}
          tabIndex={0}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? placeholder : undefined}
          aria-activedescendant={`${id}-opt-${activeIndex}`}
          onKeyDown={onListboxKeyDown}
        >
          {options.map((opt, i) => (
            <OptionLi
              key={opt.value}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={selected?.value === opt.value}
              aria-disabled={opt.disabled || undefined}
              $active={i === activeIndex}
              $disabled={!!opt.disabled}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => {
                if (opt.disabled) return;
                onChange?.(opt.value);
                close();
              }}
            >
              {opt.label}
            </OptionLi>
          ))}
        </Listbox>
      ) : null}
    </Box>
  );
};


