import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { productsApi } from '../services/productsApi';
import { userApi } from '../services/userApi';
import productReducer from './productSlice';
import authReducer from './authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  products: productReducer,
  auth: authReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    AsyncStorage.removeItem('persist:root');
    state = {
      auth: undefined,
    };
  }

  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PURGE',
        ],
      },
    }).concat(productsApi.middleware, userApi.middleware),
});

export const persistor = persistStore(store);
