import { createStore,applyMiddleware } from 'redux';

import { mainReducer } from './redux';

export const store = createStore(mainReducer);
