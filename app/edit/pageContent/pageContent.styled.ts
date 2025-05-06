import styled from 'styled-components';
import NextLink from 'next/link';

import { Color } from '@/enums';

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
