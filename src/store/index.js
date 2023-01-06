import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export * from './constants';

export const store = createStore(rootReducer);
