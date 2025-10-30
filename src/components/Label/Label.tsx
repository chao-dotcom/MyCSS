import React from 'react';
import styled from 'styled-components';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  requiredIndicator?: boolean;
};

const StyledLabel = styled.label`
  display: inline-block;
  color: ${(p) => p.theme.colors.onSurface};
  font-size: ${(p) => p.theme.typography.fontSize};
  line-height: ${(p) => p.theme.typography.lineHeight};
  margin-bottom: ${(p) => p.theme.spacing.xs};
  letter-spacing: 0.2px;
`;

export const Label: React.FC<LabelProps> = ({ children, requiredIndicator, ...rest }) => {
  return (
    <StyledLabel {...rest}>
      {children}
      {requiredIndicator ? ' *' : null}
    </StyledLabel>
  );
};


