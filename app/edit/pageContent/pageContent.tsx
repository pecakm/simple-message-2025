'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Container, Title, BackLink } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ children }: Props) {
  const t = useTranslations('edit');

  return (
    <Container>
      <Title>{t('title')}</Title>
      {children}
      <BackLink href={Path.Home}>{t('back')}</BackLink>
    </Container>
  );
}
