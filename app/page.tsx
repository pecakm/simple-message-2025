import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

export default function Home() {
  const t = useTranslations('home');
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>Hello World</p>
      <p>
        {t('link')} <Link href={Path.Edit}>{t('linkText')}</Link>
      </p>
    </main>
  );
}
