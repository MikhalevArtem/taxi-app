import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  addresses: [],
  error: null,
};

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    fetchAddressRequest(state) {
      state.isLoading = true;
      state.addresses = [];
      state.error = null;
    },
    fetchAddressSuccess(state, action) {
      state.isLoading = false;
      state.addresses = action.payload.addresses;
      state.error = null;
    },
    fetchAddressFailure(state, action) {
      state.isLoading = false;
      state.addresses = [];
      state.error = action.payload.error;
    },
  },
});

export const { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } =
  addressSlice.actions;
export default addressSlice.reducer;
