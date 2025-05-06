'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@mui/material';

import { Container } from './form.styled';
import { Props } from './form.types';

export default function Form({ submitMessage }: Props) {
  const t = useTranslations('edit');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    submitMessage(content);
  };

  return (
    <Container>
      <TextField
        label={t('label')}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="button" onClick={handleSubmit}>{t('button')}</Button>
    </Container>
  );
}
