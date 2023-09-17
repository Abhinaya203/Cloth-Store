import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import clothRedcuer from "./clothSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, clothRedcuer);
export const store = configureStore({
  reducer: { cloth: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer: {
  //   cloth: clothRedcuer,
  // },
});

export let persistor = persistStore(store);
