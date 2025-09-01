// src/types/LoginPage.types.ts

export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginState {
  isLoading: boolean;
  loggedIn: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  role?: string;
}

export interface LoginHookReturn {
  validateLogin: () => void;
  loggedIn: boolean;
  error: string | null;
  isLoading: boolean;
  user: User | null;
  logout: () => void;
}