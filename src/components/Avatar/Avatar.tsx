import React from 'react';
import styled from 'styled-components';

export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  name?: string;
  size?: number;
};

const Circle = styled.div<{ $size: number }>`
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  background: ${(p) => p.theme.gradients?.secondary ?? '#e5e7eb'};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 32, ...rest }) => {
  const initials = name?.split(/\s+/).map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  if (src) {
    return <img src={src} alt={alt ?? name ?? 'Avatar'} width={size} height={size} style={{ borderRadius: '50%' }} {...rest} />;
  }
  return <Circle aria-label={name ?? 'Avatar'} $size={size}>{initials ?? '?'}</Circle>;
};


