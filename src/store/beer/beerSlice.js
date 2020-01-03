import { createSlice } from '@reduxjs/toolkit';

import * as Api from '../../api';

const initialState = {
  beers: [],
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
    getBeersSuccess(state, { payload }) {
      state.beers = payload;
      state.isLoading = false;
      state.error = null;
    },

  }
});

export const {
  getBeersStart,
  getBeersFailure,
  getBeersSuccess,
} = beers.actions;

export const fetchBeers = () => async (dispatch) => {
  try {
    dispatch(getBeersStart());
    const beers = await Api.getBeers();
    dispatch(getBeersSuccess(beers));
  } catch (err) {
    dispatch(getBeersFailure(err.toString()));
  }
};

export default beers.reducer;
