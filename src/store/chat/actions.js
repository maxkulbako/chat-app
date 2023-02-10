import { createPayloadAction } from '../_helpers';

export const actionSendMessage = createPayloadAction('message.send');
export const actionDeleteMessage = createPayloadAction('message.delete');
export const actionDeleteAllMessages = createPayloadAction('messages.delete.all');
