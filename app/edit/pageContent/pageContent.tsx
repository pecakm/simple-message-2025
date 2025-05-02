'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Container } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ children }: Props) {
  const t = useTranslations('edit');

  return (
    <Container>
      <h1>{t('title')}</h1>
      {children}
      <Link href={Path.Home}>{t('back')}</Link>
    </Container>
  );
}
