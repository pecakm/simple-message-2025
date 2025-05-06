import { getMessage } from '@/lib/mongodb';

import { PageContent } from './pageContent';

export default async function Home() {
  const message = await getMessage();

  return <PageContent message={message} />;
}
