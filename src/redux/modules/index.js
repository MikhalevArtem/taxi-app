import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { all } from "redux-saga/effects";
import auth from "./auth";
import card from "./card";
import addresses from "./address";
import way from "./way";
import { history } from "../../history";
import { handleLogin, handleRegistration } from "./auth";
import { handlePostCard } from "./card";
import { handleAddress } from "./address";
import { handleWay } from "./way";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    card,
    addresses,
    way,
  });

export function* rootSaga() {
  yield all([
    handleLogin(),
    handleRegistration(),
    handlePostCard(),
    handleAddress(),
    handleWay(),
  ]);
}

export default persistReducer(persistConfig, rootReducer(history));
