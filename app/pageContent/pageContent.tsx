'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';
import { MainContainer, Title } from '@/components';

import { Message, Error, LinkParagraph, Link } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ message }: Props) {
  const t = useTranslations('home');

  return (
    <MainContainer>
      <Title>{t('title')}</Title>
      {message.error ? (
        <Error>{message.error}</Error>
      ) : (
        <Message>{message.content}</Message>
      )}
      <LinkParagraph>
        {t('link')} <Link href={Path.Edit}>{t('linkText')}</Link>
      </LinkParagraph>
    </MainContainer>
  );
}
