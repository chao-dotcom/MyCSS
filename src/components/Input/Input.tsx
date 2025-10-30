import React from 'react';
import styled from 'styled-components';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  id?: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.xs};
`;

const StyledInput = styled.input`
  padding: ${(p) => p.theme.spacing.md};
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.surfaceVariant};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  line-height: ${(p) => p.theme.typography.lineHeight};
  font-size: ${(p) => p.theme.typography.fontSize};
  min-height: 44px;

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.primary};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.25);
  }
`;

const ErrorText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #991b1b;
  background: #fee2e2;
  border: 1px solid #fecaca;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
`;

export const Input: React.FC<InputProps> = ({ label, labelProps, id, error, ...rest }) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const describedBy = error ? `${inputId}-error` : undefined;
  return (
    <Wrapper>
      {label ? (
        <label htmlFor={inputId} {...labelProps}>
          {label}
          {rest.required ? ' *' : ''}
        </label>
      ) : null}
      <StyledInput id={inputId} aria-invalid={!!error || undefined} aria-describedby={describedBy} {...rest} />
      {error ? <ErrorText id={`${inputId}-error`}>{error}</ErrorText> : null}
    </Wrapper>
  );
};


