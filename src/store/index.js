import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

export * from '@store/constants';

export const store = createStore(rootReducer, applyMiddleware(logger));
