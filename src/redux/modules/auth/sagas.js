import { takeLatest, call, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import { login, registration } from "./api";
import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,
} from "./";

function* handleLogin() {
  yield takeLatest(fetchLoginRequest.type, function* (action) {
    try {
      const result = yield call(login, action.payload);
      if (result.success) {
        yield put(fetchLoginSuccess(result));
        yield put(push("/map"));
      } else {
        yield put(fetchLoginFailure(result));
      }
    } catch (e) {
      yield put(fetchLoginFailure({ error: e.message }));
    }
  });
}

function* handleRegistration() {
  yield takeLatest(fetchSignUpRequest.type, function* (action) {
    try {
      const result = yield call(registration, action.payload);
      if (result.success) {
        yield put(fetchSignUpSuccess(result));
        yield put(push("/map"));
      } else {
        yield put(fetchSignUpFailure(result));
      }
    } catch (e) {
      yield put(fetchSignUpFailure({ error: e.message }));
    }
  });
}

export { handleLogin, handleRegistration };
