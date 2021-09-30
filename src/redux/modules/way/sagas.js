import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getWay } from "./api";
import { fetchWayRequest, fetchWaySuccess, fetchWayFailure } from "./";

function* handleWay() {
  yield takeLatest(fetchWayRequest.type, function* (action) {
    try {
      const [address1, address2] = action.payload;
      const result = yield call(getWay, address1, address2);
      yield put(fetchWaySuccess(result));
    } catch (e) {
      yield put(fetchWayFailure({ error: e.message }));
    }
  });
}

export { handleWay };
