import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/api';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
