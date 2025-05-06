'use client';

import { useTranslations } from 'next-intl';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container, Error } from './form.styled';
import { FormData, Props } from './form.types';
import { schema } from './form.schema';

export default function Form({ submitMessage }: Props) {
  const t = useTranslations('edit');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    submitMessage(data.content);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={t('label')}
        {...register('content')}
      />
      {errors.content?.message && <Error>{t(errors.content.message)}</Error>}
      <Button type="submit">{t('button')}</Button>
    </Container>
  );
}
