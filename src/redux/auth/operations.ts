import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from "../../services/api";
import type { AuthResponse, LoginType, RegisterType } from "../../types/types";
import type { RootState } from "../store";

export const registerUser = createAsyncThunk<AuthResponse, RegisterType>(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await apiRegisterUser(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
export const loginUser = createAsyncThunk<AuthResponse, LoginType>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await apiLoginUser(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await apiLogoutUser();
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);

export const refresh = createAsyncThunk<AuthResponse, void>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.refreshToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("error");
    }
    try {
      const response = await apiRefreshUser(persistedToken);
      console.log(response);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
