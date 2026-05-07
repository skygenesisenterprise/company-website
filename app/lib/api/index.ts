export type { TokenResponse, AuthResponse } from "./types";
export { authApi } from "./auth";
export * from "./client";

const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:8080";
};

export const registerApi = {
  register: async (email: string, username: string, password: string) => {
    const response = await fetch(`${getApiBaseUrl()}/api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Registration failed");
    }
    return data;
  },
};

export const forgotApi = {
  requestReset: async (email: string) => {
    const response = await fetch(`${getApiBaseUrl()}/api/v1/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }
    return data;
  },
};

export {
  articlesApi,
  categoriesApi,
  commentsApi,
  bookmarksApi,
  historyApi,
  notificationsApi,
  subscriptionApi,
  mediaApi,
  settingsApi,
  adminUsersApi,
} from "./client";
