import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    followEvent: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { login, logout, followEvent } = userSlice.actions;
export default userSlice.reducer;
