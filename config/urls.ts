// src/config/urls.ts

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

// Derived URLs
export const AUTH_LOGIN_URL = `${BACKEND_URL}/auth/login`;
export const API_USER_PROFILE_URL = `${BACKEND_URL}/api/user-profile`;
