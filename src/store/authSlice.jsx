import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    role: '',
  },
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
