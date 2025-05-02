import { useTranslations } from 'next-intl';

export default function Edit() {
  const t = useTranslations('edit');

  return (
    <main>
      <h1>{t('title')}</h1>
      <form>
        <input type="text" />
        <button>{t('button')}</button>
      </form>
    </main>
  );
}
