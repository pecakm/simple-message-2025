import { redirect } from 'next/navigation';

import { updateMessage } from '@/lib/mongodb';
import { Path } from '@/enums';

import { Form } from './form';
import { PageContent } from './pageContent';

export default function Edit() {
  const submitMessage = async (content: string) => {
    'use server';
    
    await updateMessage(content);
    redirect(Path.Home);
  };

  return (
    <PageContent>
      <Form submitMessage={submitMessage} />
    </PageContent>
  );
}
