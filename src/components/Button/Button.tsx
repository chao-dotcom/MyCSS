import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
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

const borderPulse = keyframes`
  0% { box-shadow: inset 0 0 0 1px currentColor; }
  50% { box-shadow: inset 0 0 0 2px currentColor; }
  100% { box-shadow: inset 0 0 0 1px currentColor; }
`;

const bgSweep = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

/* no loading animation */

const dangerPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 62, 62, 0.55); }
  50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(229, 62, 62, 0.0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 62, 62, 0.0); }
`;

const dangerShake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  100% { transform: translateX(0); }
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
  ${(p) => (p.$variant === 'solid' || p.$variant === 'primary' ? solid(p.$scheme) : p.$variant === 'outline' || p.$variant === 'secondary' ? outline(p.$scheme) : p.$variant === 'ghost' ? ghostV(p.$scheme) : linkV(p.$scheme))}
  ${(p) => sizeStyles[p.$size]}

  /* Primary (solid) subtle lift + press feedback */
  ${(p) => (p.$variant === 'solid' || p.$variant === 'primary') && css`
    &:hover { transform: translateY(-1px); }
    &:active { transform: translateY(0); box-shadow: ${p.theme.elevation.level1}; }
  `}

  /* Secondary (outline) border pulse on hover */
  ${(p) => (p.$variant === 'outline' || p.$variant === 'secondary') && css`
    &:hover { animation: ${borderPulse} ${p.theme.motion?.slow} ${p.theme.motion?.easeInOut}; }
  `}

  /* Ghost sweeping background shimmer on hover */
  ${(p) => p.$variant === 'ghost' && css`
    background-image: linear-gradient(90deg, transparent, ${p.theme.palettes?.[p.$scheme]?.['50'] ?? p.theme.colors.surface}, transparent);
    background-size: 200% 100%;
    &:hover { animation: ${bgSweep} 900ms linear; }
  `}

  /* Loading state: dim, block interactions, no animations */
  &[aria-busy='true'] {
    pointer-events: none;
    cursor: progress;
    opacity: 0.8;
  }
  /* Disable hover shine while loading */
  &[aria-busy='true']::after { opacity: 0 !important; animation: none !important; }

  /* Exaggerated animation for danger (red) scheme */
  ${(p) => p.$scheme === 'red' && css`
    &:hover {
      animation: ${dangerPulse} 900ms ${p.theme.motion?.easeOut};
    }
    &:active {
      animation: ${dangerShake} 360ms ${p.theme.motion?.easeOut};
    }
    &::after { animation-duration: 0.8s; }
  `}

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
    const effectiveVariant: ButtonVariant = variant === 'primary' ? 'solid' : variant === 'secondary' ? 'outline' : variant;
    return (
      <StyledButton
        ref={ref}
        $variant={effectiveVariant}
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


