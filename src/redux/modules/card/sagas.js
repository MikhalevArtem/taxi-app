import { takeLatest, call, put } from "@redux-saga/core/effects";
import { postCard } from "./api";
import { push } from "connected-react-router";
import { fetchPostCardRequest, fetchCardSuccess, fetchCardFailure } from "./";

function* handlePostCard() {
  yield takeLatest(fetchPostCardRequest.type, function* (action) {
    try {
      const result = yield call(postCard, action.payload);
      if (result.success) {
        yield put(fetchCardSuccess(result));
        yield put(push("/map"));
      } else {
        yield put(fetchCardFailure(result));
      }
    } catch (e) {
      yield put(fetchCardFailure({ error: e.message }));
    }
  });
}

export { handlePostCard };
