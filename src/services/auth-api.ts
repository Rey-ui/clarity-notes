
import type { AuthResponse, LoginType, RegisterType } from "../types/authTypes";
import { instance } from "./api";


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
