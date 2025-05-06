import styled from 'styled-components';
import NextLink from 'next/link';

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

export const BackLink = styled(NextLink)`
  color: ${Color.Link};
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  margin-top: 1rem;

  &:hover {
    color: ${Color.LinkHover};
    text-decoration: underline;
  }
`;
