import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthResponse, InitialAuthStateType } from "../../types/authTypes";
import { loginUser, logoutUser, refresh, registerUser } from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialAuthState: InitialAuthStateType = {
  user: {
    name: "",
    email: "",
  },
  refreshToken: null,
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: true,
};
const slice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.user = action.payload.user;
          state.refreshToken = action.payload.refresh_token;
          state.accessToken = action.payload.access_token;
          state.isLoggedIn = true;
        },
      )
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.user = action.payload.user;
          state.refreshToken = action.payload.refresh_token;
          state.accessToken = action.payload.access_token;
          state.isLoggedIn = true;
        },
      )
      .addCase(logoutUser.fulfilled, (state) => {
        state = initialAuthState;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refresh.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isRefreshing = false;
          state.user = action.payload.user;
          state.refreshToken = action.payload.refresh_token;
          state.accessToken = action.payload.access_token;
          state.isLoggedIn = true;
        },
      )
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});
const authConfig = {
  key: "auth",
  storage: (storage as any).default || storage,
  whitelist: ["refreshToken"],
};

const authReducer = slice.reducer;
export const persistedAuthReducer = persistReducer(authConfig, authReducer);
