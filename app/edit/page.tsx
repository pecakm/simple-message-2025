import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

export default function Edit() {
  const t = useTranslations('edit');

  return (
    <main>
      <h1>{t('title')}</h1>
      <form>
        <input type="text" />
        <button>{t('button')}</button>
      </form>
      <Link href={Path.Home}>{t('back')}</Link>
    </main>
  );
}
