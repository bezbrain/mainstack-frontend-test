import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./management/features/navSlice";
import walletReducer from "./management/features/walletSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
    walletStore: walletReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
