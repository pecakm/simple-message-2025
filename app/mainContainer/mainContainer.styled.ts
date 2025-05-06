import styled from 'styled-components';

import { Breakpoint } from '@/enums';

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
