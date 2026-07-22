import axios from "axios";
import type { AuthResponse, LoginType, RegisterType } from "../types/types";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cHd6dmpkcmhocGdhaGZ4YXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTEzMjgsImV4cCI6MjA5OTg2NzMyOH0.F4joEtm4bw7GaEM-cgvqKXU7nU87m1wFnYY0EJwwzTI";

const BASE_URL = "https://ozpwzvjdrhhpgahfxaxb.supabase.co";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    apikey: API_KEY,
    "Content-Type": "application/json",
  },
});
export function setToken(token: string): void {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function clearToken(): void {
  instance.defaults.headers.common.Authorization = "";
}

export async function apiRegisterUser(
  data: RegisterType,
): Promise<AuthResponse> {
  const response = await instance.post("/auth/v1/signup", {
    email: data.email,
    password: data.password,
    data: { name: (data as any).name || "User" },
  });
  const mappedResponse = {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    user: {
      name: response.data.user.user_metadata?.name,
      email: response.data.user.email,
    },
  };

  setToken(mappedResponse.access_token);
  return mappedResponse;
}
export async function apiLoginUser(data: LoginType): Promise<AuthResponse> {
  const response = await instance.post(
    "/auth/v1/token?grant_type=password",
    data,
  );
  const mappedResponse = {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    user: {
      name: response.data.user.user_metadata?.name,
      email: response.data.user.email,
    },
  };
  setToken(response.data.access_token);
  return mappedResponse;
}
export async function apiLogoutUser(): Promise<void> {
  await instance.post("/auth/v1/logout");
  clearToken();
}
export async function apiRefreshUser(
  refreshToken: string,
): Promise<AuthResponse> {
  const response = await instance.post(
    "/auth/v1/token?grant_type=refresh_token",
    { refresh_token: refreshToken },
  );
  const mappedResponse = {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    user: {
      name: response.data.user.user_metadata?.name,
      email: response.data.user.email,
    },
  };
  setToken(response.data.access_token);

  return mappedResponse;
}
