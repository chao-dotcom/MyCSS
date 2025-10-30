import React from 'react';
import styled, { keyframes } from 'styled-components';

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

const Bubble = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${(p) => p.theme.glass?.surface ?? '#111827'};
  color: ${(p) => p.theme.colors.onSurface};
  padding: 6px 10px;
  border-radius: ${(p) => p.theme.radii.sm};
  box-shadow: ${(p) => p.theme.elevation.level1};
  backdrop-filter: ${(p) => p.theme.glass?.blur};
  -webkit-backdrop-filter: ${(p) => p.theme.glass?.blur};
  border: ${(p) => p.theme.glass?.border};
  animation: ${fadeIn} ${(p) => p.theme.motion?.fast} ${(p) => p.theme.motion?.easeOut};
  white-space: nowrap;
  font-size: 12px;
  margin-bottom: 6px;
`;

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <Wrapper onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {React.cloneElement(children, {
        'aria-describedby': open ? id : undefined,
      })}
      {open ? (
        <Bubble role="tooltip" id={id}>
          {content}
        </Bubble>
      ) : null}
    </Wrapper>
  );
};


