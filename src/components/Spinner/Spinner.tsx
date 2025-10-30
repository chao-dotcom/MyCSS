import React from 'react';
import styled, { keyframes } from 'styled-components';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  size?: number;
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Ring = styled.div<{ $size: number }>`
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.theme.colors.surfaceVariant};
  border-top-color: ${(p) => p.theme.colors.primary};
  animation: ${spin} 1s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2s;
  }
`;

export const Spinner: React.FC<SpinnerProps> = ({ label = 'Loading', size = 20, ...rest }) => {
  return (
    <div role="status" aria-live="polite" aria-label={label} {...rest}>
      <Ring $size={size} />
    </div>
  );
};


