import { z } from 'zod';

import { schema } from './form.schema';

export type Props = {
  submitMessage: (content: string) => void;
};

export type FormData = z.infer<typeof schema>;
