import styled from 'styled-components';

import { Breakpoint, ZIndex } from '@/enums';

export const Container = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease-in-out;
  z-index: ${ZIndex.LanguageIcon};

  &:hover {
    transform: translateY(-2px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }

  &:active {
    transform: translateY(0);
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  }

  @media ${Breakpoint.Mobile} {
    top: 0.75rem;
    right: 0.75rem;
  }

  @media ${Breakpoint.Tablet} {
    top: 1rem;
    right: 1rem;
  }
`;
