'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';
import { MainContainer, Title, Link } from '@/components';

import { Message, Error, LinkParagraph } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ message }: Props) {
  const t = useTranslations('home');

  return (
    <MainContainer>
      <Title>{t('title')}</Title>
      {message.error ? (
        <Error>{t(message.error)}</Error>
      ) : (
        <Message>{message.content}</Message>
      )}
      <LinkParagraph>
        {t('link')} <Link href={Path.Edit}>{t('linkText')}</Link>
      </LinkParagraph>
    </MainContainer>
  );
}
