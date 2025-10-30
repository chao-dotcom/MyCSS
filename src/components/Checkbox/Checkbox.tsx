import React from 'react';
import styled from 'styled-components';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
  indeterminate?: boolean;
};

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm};
  color: ${(p) => p.theme.colors.onSurface};
  font-size: ${(p) => p.theme.typography.fontSize};
  min-height: 44px;
`;

const Box = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${(p) => p.theme.colors.primary};
`;

export const Checkbox: React.FC<CheckboxProps> = ({ label, indeterminate, ...rest }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  const input = <Box ref={ref} type="checkbox" {...rest} />;

  if (!label) return input;
  return (
    <Wrapper>
      {input}
      <span>{label}</span>
    </Wrapper>
  );
};


