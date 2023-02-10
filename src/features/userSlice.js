import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user: JSON.parse(localStorage.getItem('user')) || null,
    user: {
      _id: '63e5a22b273d540ab10bb7f2',
      username: '来てくれたあなた',
      email: 'u@u',
      password: '123456',
      profileImg: '',
      isAdmin: false,
      createdAt: '2023-02-10T01:47:23.692Z',
      updatedAt: '2023-02-10T01:47:23.692Z',
    },
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
