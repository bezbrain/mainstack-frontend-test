import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./management/features/navSlice";
import walletReducer from "./management/features/walletSlice";
import transactionReducer from "./management/features/transactionSlice";
import filterReducer from "./management/features/filtersSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
    walletStore: walletReducer,
    transactionStore: transactionReducer,
    filterStore: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
