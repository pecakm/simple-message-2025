'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@/lib/mui';

import { Props } from './themeProviders.types';

export function ThemeProviders({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}
