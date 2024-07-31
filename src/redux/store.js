import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReduser } from "./contacts/slice";
import { filtersReduser } from "./filters/slice";
import { authReducer } from "./auth/slice";

import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global/";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReduser,
    filters: filtersReduser,
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);