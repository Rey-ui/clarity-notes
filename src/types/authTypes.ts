export interface User {
  name: string | null;
  email: string | null;
}

export interface RegisterType {
  name: string;
  email: string;
  password: string;
}
export interface LoginType {
  email: string;
  password: string;
}
export interface AuthResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}
export interface InitialAuthStateType {
  user: User;
  refreshToken: string | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
