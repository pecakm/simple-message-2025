import NextLink from 'next/link';
import styled from 'styled-components';

import { Breakpoint, Color } from '@/enums';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  @media ${Breakpoint.Mobile} {
    padding: 1rem;
  }

  @media ${Breakpoint.Tablet} {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${Color.Title};
  margin-bottom: 1.25rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media ${Breakpoint.Mobile} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media ${Breakpoint.Tablet} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

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

export const Link = styled(NextLink)`
  color: ${Color.Link};
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${Color.LinkHover};
    text-decoration: underline;
  }
`;
