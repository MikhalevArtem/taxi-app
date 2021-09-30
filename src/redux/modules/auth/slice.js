import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  token: null,
  loginError: null,
  singUpError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchLoginRequest(state) {
      state.isLoading = true;
      state.loginError = null;
      state.singUpError = null;
    },
    fetchLoginSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    fetchLoginFailure(state, action) {
      state.isLoading = false;
      state.token = null;
      state.loginError = action.payload.error;
    },
    fetchSignUpRequest(state) {
      state.isLoading = true;
      state.loginError = null;
      state.singUpError = null;
    },
    fetchSignUpSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    fetchSignUpFailure(state, action) {
      state.isLoading = false;
      state.singUpError = action.payload.error;
    },
    logout(state) {
      state.isLoading = false;
      state.token = null;
      state.loginError = null;
      state.singUpError = null;
    },
  },
});

export const {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
