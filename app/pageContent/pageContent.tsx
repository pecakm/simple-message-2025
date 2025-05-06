'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Container, Title, Message, Error, LinkParagraph } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ message }: Props) {
  const t = useTranslations('home');

  return (
    <Container>
      <Title>{t('title')}</Title>
      {message.error ? (
        <Error>{message.error}</Error>
      ) : (
        <Message>{message.content}</Message>
      )}
      <LinkParagraph>
        {t('link')} <Link href={Path.Edit}>{t('linkText')}</Link>
      </LinkParagraph>
    </Container>
  );
}
