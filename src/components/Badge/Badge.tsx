import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type BadgeVariant = 'subtle' | 'solid' | 'outline';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  colorScheme?: keyof NonNullable<import('../../tokens/theme').DesignTokens['palettes']> | 'gray';
  intent?: 'neutral' | 'success' | 'warning' | 'danger';
};

const subtle = (s: string) => css`
  background: ${(p) => p.theme.palettes?.[s]?.['100'] ?? p.theme.colors.surfaceVariant};
  color: ${(p) => p.theme.palettes?.[s]?.['700'] ?? p.theme.colors.onSurface};
`;
const solid = (s: string) => css`
  background: ${(p) => p.theme.palettes?.[s]?.['500'] ?? p.theme.colors.primary};
  color: #fff;
`;
const outline = (s: string) => css`
  background: transparent;
  color: ${(p) => p.theme.palettes?.[s]?.['700'] ?? p.theme.colors.onSurface};
  border: 1px solid ${(p) => p.theme.palettes?.[s]?.['400'] ?? '#cbd5e0'};
`;

const pump = keyframes` 0%,100%{ transform: scale(1)} 50%{ transform: scale(1.06)} `;
const shine = keyframes` 0%{ box-shadow: inset 0 0 0 rgba(255,255,255,0)} 100%{ box-shadow: inset 200px 0 0 rgba(255,255,255,0.08)} `;
const shiver = keyframes` 0%,100%{ transform: translateX(0)} 25%{ transform: translateX(-1px)} 75%{ transform: translateX(1px)} `;
const glow = keyframes` 0%,100%{ box-shadow: 0 0 0 rgba(239,68,68,0.0)} 50%{ box-shadow: 0 0 18px rgba(239,68,68,0.45)} `;

const Pill = styled.span<{ $variant: BadgeVariant; $scheme: string; $intent?: string }>`
  display: inline-block;
  padding: 0 ${(p) => p.theme.spacing.md};
  height: 22px;
  line-height: 22px;
  border-radius: 999px;
  font-size: 12px;
  box-shadow: 0 6px 16px rgba(2,8,23,0.06);
  ${(p) => (p.$variant === 'solid' ? solid(p.$scheme) : p.$variant === 'outline' ? outline(p.$scheme) : subtle(p.$scheme))}
  ${(p) => p.$intent === 'neutral' ? css`transition: transform 180ms ${p.theme.motion?.easeOut}; &:hover{ transform: scale(1.06); background:#ffffff; color:#1e3a8a; box-shadow: 0 8px 18px rgba(2,8,23,0.08); }` : ''}
  ${(p) => p.$intent === 'success' ? css`animation: ${pump} 1800ms ${p.theme.motion?.easeInOut} infinite, ${shine} 2200ms linear infinite; color:#1e3a8a;` : ''}
  ${(p) => p.$intent === 'warning' ? css`animation: ${shiver} 600ms ${p.theme.motion?.easeOut} infinite; background:#fee2e2; color:#9b2c2c;` : ''}
  ${(p) => p.$intent === 'danger' ? css`animation: ${glow} 1800ms ${p.theme.motion?.easeInOut} infinite; background:#ef4444; color:#ffffff;` : ''}
`;

export const Badge: React.FC<BadgeProps> = ({ variant = 'subtle', colorScheme = 'gray', intent, children, ...rest }) => {
  return (
    <Pill role="status" aria-live="polite" $variant={variant} $scheme={colorScheme} $intent={intent} {...rest}>
      {children}
    </Pill>
  );
};


