import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage';

export function createMockChat (override) {
  const date = new Date(faker.date.past()).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    lastMessage: 'I\'ll be in your neighborhood...',
    date: [date],
    messages: [
      createMockMessage(),
      createMockMessage(),
      createMockMessage()
    ],
    ...override
  };
}
