import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export function createStore(initialState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
