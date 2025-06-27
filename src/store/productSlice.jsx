import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../services/api';

export const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'succeeded',
  ERROR: 'failed',
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},

  extraReducers: builder => {
    builder.addMatcher(
      productsApi.endpoints.products.matchFulfilled,
      (state, { payload }) => {
        state.status = STATUSES.SUCCESS;
        state.data = payload?.products;
      },
      productsApi.endpoints.products.matchPending,
      (state, { payload }) => {
        state.status = STATUSES.LOADING;
      },
      productsApi.endpoints.products.matchRejected,
      (state, { payload }) => {
        state.status = STATUSES.ERROR;
        state.error = payload.error.message;
      },
    );
  },
});

export default productSlice.reducer;
