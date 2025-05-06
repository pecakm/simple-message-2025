'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';

import { CookieName } from '@/constants';
import { CountryCode } from '@/enums';

import { Container } from './languageIcon.styled';

export default function LanguageIcon() {
  const router = useRouter();
  const locale = useLocale();
  const isPolish = locale === CountryCode.PL;

  const handleLanguageChange = () => {
    const newLocale = isPolish ? CountryCode.EN : CountryCode.PL;
    Cookies.set(CookieName.Language, newLocale, { path: '/', expires: 365 });
    router.refresh();
  };

  return (
    <Container onClick={handleLanguageChange}>
      {isPolish ? '🇵🇱' : '🇬🇧'}
    </Container>
  );
}
