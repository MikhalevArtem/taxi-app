import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { history } from "../history";
import reducer from "./modules";
import { rootSaga } from "./modules";

const sagaMiddleware = createSagaMiddleware();

export default function createAppStore() {
  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(routerMiddleware(history), sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
