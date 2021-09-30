import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  way: [],
  error: null,
};

const waySlice = createSlice({
  name: "way",
  initialState,
  reducers: {
    fetchWayRequest(state) {
      state.isLoading = true;
      state.way = [];
      state.error = null;
    },
    fetchWaySuccess(state, action) {
      state.isLoading = false;
      state.way = action.payload;
      state.error = null;
    },
    fetchWayFailure(state, action) {
      state.isLoading = false;
      state.way = [];
      state.error = action.payload.error;
    },
    wayClear(state) {
      state.isLoading = false;
      state.way = [];
      state.error = null;
    },
  },
});

export const { fetchWayRequest, fetchWaySuccess, fetchWayFailure, wayClear } =
  waySlice.actions;
export default waySlice.reducer;
