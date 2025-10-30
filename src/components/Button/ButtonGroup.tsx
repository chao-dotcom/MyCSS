import React from 'react';
import styled from 'styled-components';
import { Button, type ButtonProps } from './Button';

export type ButtonGroupProps = {
  children: React.ReactNode;
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
  colorScheme?: ButtonProps['colorScheme'];
  ariaLabel?: string;
};

const Group = styled.div`
  display: inline-flex;
  align-items: stretch;

  /* Collapse adjacent borders and shape corners by position */
  & > * {
    border-radius: 0;
    position: relative;
  }

  & > *:not(:first-child) {
    margin-left: -1px; /* collapse 1px borders */
  }

  & > *:first-child {
    border-top-left-radius: ${(p) => p.theme.radii.lg};
    border-bottom-left-radius: ${(p) => p.theme.radii.lg};
  }

  & > *:last-child {
    border-top-right-radius: ${(p) => p.theme.radii.lg};
    border-bottom-right-radius: ${(p) => p.theme.radii.lg};
  }

  /* Lift hovered/active button over neighbors so borders look seamless */
  & > *:hover,
  & > *:focus-visible,
  & > *[aria-pressed='true'] {
    z-index: 1;
  }
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, size, variant, colorScheme, ariaLabel }) => {
  const mapped = React.Children.toArray(children).map((child, index) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === Button) {
      const props: Partial<ButtonProps> = {};
      if (size) props.size = size;
      if (variant) props.variant = variant;
      if (colorScheme) props.colorScheme = colorScheme as any;
      return React.cloneElement(child as React.ReactElement<ButtonProps>, props);
    }
    return child;
  });

  return (
    <Group role="group" aria-label={ariaLabel}>
      {mapped}
    </Group>
  );
};

ButtonGroup.displayName = 'ButtonGroup';


