import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

import './globals.css';

import { StyledComponentsRegistry } from '@/lib/styled-components';

import { ThemeProviders } from './themeProviders';
import LanguageIcon from './languageIcon/languageIcon';
import MainContainer from './mainContainer/mainContainer';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Simple Message',
  description: 'Created by IT Pulse Mikołaj Pęcak',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider>
            <ThemeProviders>
              <MainContainer>
                <LanguageIcon />
                {children}
              </MainContainer>
            </ThemeProviders>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
