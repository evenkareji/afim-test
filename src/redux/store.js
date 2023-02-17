import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
// import isIconSlice from '../features/isIconSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    // isIcon: isIconSlice,
  },
});
