import { z } from 'zod';

export const schema = z.object({
  content: z.string().min(1, 'fieldRequired').max(256, 'fieldMaxLength'),
});
