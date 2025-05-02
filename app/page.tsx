import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>Hello World</p>
    </main>
  );
}
