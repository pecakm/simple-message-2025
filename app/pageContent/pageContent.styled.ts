import styled from 'styled-components';

import { Breakpoint, Color } from '@/enums';

export const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${Color.Text};
  background: ${Color.White};
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: center;
  margin-bottom: 1.25rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${Breakpoint.Mobile} {
    font-size: 1.25rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media ${Breakpoint.Tablet} {
    font-size: 1.5rem;
    padding: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Error = styled.p`
  font-size: 1rem;
  color: ${Color.Error};
  background: ${Color.ErrorBg};
  padding: 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid ${Color.ErrorBorder};
  max-width: 800px;
  width: 100%;
  text-align: center;
  margin-bottom: 1.25rem;

  @media ${Breakpoint.Mobile} {
    font-size: 1.1rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  @media ${Breakpoint.Tablet} {
    font-size: 1.25rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const LinkParagraph = styled.p`
  font-size: 0.9rem;
  color: ${Color.Text};
  margin-top: 0.5rem;

  @media ${Breakpoint.Mobile} {
    font-size: 1rem;
    margin-top: 0.75rem;
  }

  @media ${Breakpoint.Tablet} {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
`;
