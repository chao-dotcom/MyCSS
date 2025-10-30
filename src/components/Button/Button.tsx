import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  colorScheme?: keyof NonNullable<import('../../tokens/theme').DesignTokens['palettes']>;
};

const solid = (scheme: string) => css`
  background-color: ${(p) => p.theme.palettes?.[scheme]?.['500'] ?? p.theme.colors.primary};
  color: ${(p) => p.theme.colors.onPrimary};
  border: 0;
  box-shadow: ${(p) => p.theme.elevation.level1};
  &:hover { background-color: ${(p) => p.theme.palettes?.[scheme]?.['600'] ?? p.theme.colors.primary}; box-shadow: ${(p) => p.theme.elevation.level2}; }
`;

const outline = (scheme: string) => css`
  background: transparent;
  color: ${(p) => p.theme.palettes?.[scheme]?.['600'] ?? p.theme.colors.text};
  border: 1px solid ${(p) => p.theme.palettes?.[scheme]?.['500'] ?? p.theme.colors.text};
  &:hover { background: ${(p) => p.theme.palettes?.[scheme]?.['50'] ?? p.theme.colors.surface}; }
`;

const ghostV = (scheme: string) => css`
  background: transparent;
  color: ${(p) => p.theme.palettes?.[scheme]?.['600'] ?? p.theme.colors.text};
  border: 0;
  &:hover { background: ${(p) => p.theme.palettes?.[scheme]?.['50'] ?? p.theme.colors.surface}; }
`;

const linkV = (scheme: string) => css`
  background: transparent;
  color: ${(p) => p.theme.palettes?.[scheme]?.['600'] ?? p.theme.colors.primary};
  border: 0;
  text-decoration: underline;
`;

const shine = keyframes`
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
`;

const sizeStyles = {
  sm: css`
    height: ${(p) => p.theme.sizes?.sm ?? '36px'};
    padding: 0 ${(p) => p.theme.spacing.md};
    font-size: 13px;
  `,
  md: css`
    height: ${(p) => p.theme.sizes?.md ?? '40px'};
    padding: 0 ${(p) => p.theme.spacing.lg};
    font-size: 14px;
  `,
  lg: css`
    height: ${(p) => p.theme.sizes?.lg ?? '48px'};
    padding: 0 ${(p) => p.theme.spacing.lg};
    font-size: 16px;
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize; $scheme: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.xs};
  border-radius: ${(p) => p.theme.radii.lg};
  line-height: ${(p) => p.theme.typography.lineHeight};
  font-weight: ${(p) => p.theme.typography.fontWeight};
  cursor: pointer;
  transition:
    box-shadow ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut},
    transform ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut},
    background-color ${(p) => p.theme.motion?.normal} ${(p) => p.theme.motion?.easeOut},
    opacity ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut};
  min-height: 44px; /* target size */
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0.0) 70%);
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut};
  }
  &:hover::after { opacity: 1; animation: ${shine} 1.2s linear infinite; }
  ${(p) => (p.$variant === 'solid' ? solid(p.$scheme) : p.$variant === 'outline' ? outline(p.$scheme) : p.$variant === 'ghost' ? ghostV(p.$scheme) : linkV(p.$scheme))}
  ${(p) => sizeStyles[p.$size]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.15);
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', colorScheme = 'green', size = 'md', isLoading = false, children, disabled, ...rest }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $scheme={colorScheme}
        $size={size}
        aria-busy={isLoading || undefined}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? 'Loading…' : children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';


