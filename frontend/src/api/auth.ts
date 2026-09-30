import { apiClient } from "./client";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: AuthUser;
};

type MeResponse = {
  user: AuthUser;
};

export const login = async (input: LoginInput): Promise<LoginResponse> => {
  return apiClient<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: input,
  });
};

export const getMe = async (): Promise<MeResponse> => {
  return apiClient<MeResponse>("/api/auth/me");
};

export const logout = async (): Promise<void> => {
  await apiClient("/api/auth/logout", {
    method: "POST",
  });
};
