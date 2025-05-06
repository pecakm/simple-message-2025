'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';
import { MainContainer, Title } from '@/components';

import { BackLink } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ children }: Props) {
  const t = useTranslations('edit');

  return (
    <MainContainer>
      <Title>{t('title')}</Title>
      {children}
      <BackLink href={Path.Home}>{t('back')}</BackLink>
    </MainContainer>
  );
}
