import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  card: false,
  error: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    fetchPostCardRequest(state) {
      state.isLoading = true;
      state.card = false;
      state.error = null;
    },
    fetchCardSuccess(state, action) {
      state.isLoading = false;
      state.card = action.payload.success;
      state.error = null;
    },
    fetchCardFailure(state, action) {
      state.isLoading = false;
      state.card = action.payload.success;
      state.error = action.payload.error;
    },
    fetchGetCardRequest(state) {
      state.isLoading = true;
      state.card = false;
      state.error = false;
    },
    logout(state) {
      state.isLoading = false;
      state.card = false;
      state.error = null;
    },
  },
});

export const {
  fetchPostCardRequest,
  fetchGetCardRequest,
  fetchCardSuccess,
  fetchCardFailure,
  logout,
} = cardSlice.actions;
export default cardSlice.reducer;
