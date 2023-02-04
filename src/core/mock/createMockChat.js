import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage';

export function createMockChat (override) {
  const date = new Date(faker.date.past()).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
  const randomMessagesQuantity = Math.floor(Math.random() * (20 - 10));
  const messages = [];
  for (let i = 0; i < randomMessagesQuantity; i++) {
    const j = Math.random();
    if (j > 0.5) {
      messages.push(createMockMessage());
    } else messages.push(createMockMessage({ name: 'Max Kulbako' }));
  };

  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    date: [date],
    messages,
    ...override
  };
}
