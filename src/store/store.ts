import { configureStore } from '@reduxjs/toolkit';
import MobileNav from './slices/MobileNav';

export const store = configureStore({
  reducer: {
    MobileNav,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
