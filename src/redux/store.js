import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import { persistReducer, persistStore } from "redux-persist";
import { mmkvStorage } from "./persist/storage";

const persistConfig = {
  key: "root",
  storage: mmkvStorage,
  whitelist: ["dummy"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(...[thunk, logger]),
);
export const persistor = persistStore(store);
