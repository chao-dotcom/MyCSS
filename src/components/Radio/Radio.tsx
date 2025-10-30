import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const pop = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.12); }
  100% { transform: scale(1); }
`;

const LabelText = styled.span`
  transition: transform ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut};
  ${Dot}:checked + & {
    animation: ${pop} ${(p) => p.theme.motion?.slow ?? '360ms'} ${(p) => p.theme.motion?.easeOut};
  }
`;

export const Radio: React.FC<RadioProps> = ({ label, ...rest }) => {
  const input = <Dot type="radio" {...rest} />;
  if (!label) return input;
  return (
    <Wrapper>
      {input}
      <LabelText>{label}</LabelText>
    </Wrapper>
  );
};


