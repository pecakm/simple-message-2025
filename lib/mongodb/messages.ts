import Message from '@/models/message';

import connectDB from './connect';

export async function getMessage() {
  await connectDB();
  const message = await Message.findOne();

  if (!message) {
    return { error: 'No message found' };
  }

  return { content: message.content };
}

export async function updateMessage(content: string) {
  await connectDB();
  const message = await Message.findOne();

  if (!message) {
    await Message.create({ content });
    return;
  }

  message.content = content;
  await message.save();
}
