import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchproducts',
  async () => {
    const response = await axios.get(`http://109.1.1.67:5000/api/products`);
    console.log(response.data);

    return response.data;
  },
);
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
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
