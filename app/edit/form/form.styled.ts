import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

import { Breakpoint, Color } from '@/enums';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  background: ${Color.White};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media ${Breakpoint.Mobile} {
    padding: 2rem;
  }

  @media ${Breakpoint.Tablet} {
    padding: 2.5rem;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${Color.Link};
    }
    &.Mui-focused fieldset {
      border-color: ${Color.Link};
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${Color.Link};
  }
`;

export const StyledButton = styled(Button)`
  && {
    background-color: ${Color.Link};
    color: ${Color.White};
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${Color.LinkHover};
    }

    @media ${Breakpoint.Mobile} {
      font-size: 1.1rem;
      padding: 0.875rem 1.75rem;
    }

    @media ${Breakpoint.Tablet} {
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }
  }
`;

export const Error = styled.p`
  font-size: 0.9rem;
  color: ${Color.Error};
  background: ${Color.ErrorBg};
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${Color.ErrorBorder};
  margin: 0;

  @media ${Breakpoint.Mobile} {
    font-size: 1rem;
    padding: 0.875rem;
  }

  @media ${Breakpoint.Tablet} {
    font-size: 1.1rem;
    padding: 1rem;
  }
`;
