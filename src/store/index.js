import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export * from '@store/constants';

export const store = createStore(rootReducer);
