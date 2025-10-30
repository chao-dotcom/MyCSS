import React from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
  size?: number;
  path: string;
  title?: string;
};

export const Icon: React.FC<IconProps> = ({ size = 20, path, title, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={path} />
    </svg>
  );
};


