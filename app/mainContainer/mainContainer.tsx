'use client';

import { Container } from './mainContainer.styled';

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
