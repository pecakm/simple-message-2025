'use client';

import { useTranslations } from 'next-intl';

import { Container, Input, Button } from './form.styled';

export default function Form() {
  const t = useTranslations('edit');

  return (
    <Container>
      <Input type="text" />
      <Button>{t('button')}</Button>
    </Container>
  );
}
