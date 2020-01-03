import { combineReducers } from '@reduxjs/toolkit';

import beersReducer from './beer/beerSlice';

const rootReducer = combineReducers({
  beers: beersReducer,
});

export default rootReducer;
