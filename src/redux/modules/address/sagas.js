import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getAddresses } from "./api";
import {
  fetchAddressRequest,
  fetchAddressSuccess,
  fetchAddressFailure,
} from "./";

function* handleAddress() {
  yield takeLatest(fetchAddressRequest.type, function* (action) {
    try {
      const result = yield call(getAddresses);
      if (result.addresses) {
        yield put(fetchAddressSuccess(result));
      } else {
        yield put(fetchAddressFailure(result));
      }
    } catch (e) {
      yield put(fetchAddressFailure({ error: e.message }));
    }
  });
}

export { handleAddress };
