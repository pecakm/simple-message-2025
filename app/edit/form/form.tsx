'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container, StyledTextField, StyledButton, Error } from './form.styled';
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
      <StyledTextField
        label={t('label')}
        {...register('content')}
        error={!!errors.content}
      />
      {errors.content?.message && <Error>{t(errors.content.message)}</Error>}
      <StyledButton type="submit" variant="contained">
        {t('button')}
      </StyledButton>
    </Container>
  );
}
