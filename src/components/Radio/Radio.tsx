import React from 'react';
import styled from 'styled-components';

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm};
  color: ${(p) => p.theme.colors.onSurface};
  font-size: ${(p) => p.theme.typography.fontSize};
  min-height: 44px;
`;

const Dot = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${(p) => p.theme.colors.primary};
`;

export const Radio: React.FC<RadioProps> = ({ label, ...rest }) => {
  const input = <Dot type="radio" {...rest} />;
  if (!label) return input;
  return (
    <Wrapper>
      {input}
      <span>{label}</span>
    </Wrapper>
  );
};


