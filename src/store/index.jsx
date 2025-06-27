import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/api';
import productReducer from './productSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
