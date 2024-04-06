import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./management/features/navSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
