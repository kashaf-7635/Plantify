import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';
import { STATUSES } from './statuses';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '',
    user: '',
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.status = STATUSES.SUCCESS;
        state.isAuthenticated = true;
        state.user = payload.data;
        state.token = payload.token;
      },
      userApi.endpoints.loginUser.matchPending,
      (state, { payload }) => {
        state.status = STATUSES.LOADING;
      },
      userApi.endpoints.loginUser.matchRejected,
      (state, { payload }) => {
        state.status = STATUSES.ERROR;
        state.error = payload.error.message;
      },
    );
  },
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
