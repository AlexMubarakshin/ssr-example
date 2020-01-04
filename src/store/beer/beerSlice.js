import { createSlice } from '@reduxjs/toolkit';

import * as Api from '../../api';

const BEER_PER_PAGE = 15;

const initialState = {
  beers: [],
  page: 1,
  hasMore: true,
  isLoading: false,
};

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const beers = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    getBeersStart: startLoading,
    getBeersFailure: loadingFailed,
    getBeersSuccess(state, { payload: { beers, page }, }) {
      state.beers = [...state.beers, ...beers];
      state.isLoading = false;
      state.error = null;
      state.page = page;
      state.hasMore = beers.length >= BEER_PER_PAGE;
    },

  }
});

export const {
  getBeersStart,
  getBeersFailure,
  getBeersSuccess,
} = beers.actions;

export const fetchBeers = (page = 1) => async (dispatch) => {
  try {
    dispatch(getBeersStart());
    const beers = await Api.getBeers(page);
    dispatch(getBeersSuccess({ beers, page }));
  } catch (err) {
    dispatch(getBeersFailure(err.toString()));
  }
};

export default beers.reducer;
