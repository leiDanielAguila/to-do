// src/services/authService.ts

import type { LoginForm, User } from '@/types/LoginPage.types';

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
}

class AuthService {
  private baseURL = 'http://localhost:3000/api'; // Replace with your actual API URL

  async login(credentials: LoginForm): Promise<LoginResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock authentication logic
    if (credentials.username === 'demo' && credentials.password === 'password') {
      return {
        success: true,
        token: 'mock-jwt-token-12345',
        user: {
          id: '1',
          username: credentials.username,
          email: 'demo@example.com',
          role: 'user'
        }
      };
    }

    return {
      success: false,
      message: 'Invalid credentials'
    };

    // Real API implementation would look like this:
    /*
    try {
      const response = await fetch(`${this.baseURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'Login failed'
        };
      }

      return {
        success: true,
        token: data.token,
        user: data.user
      };
    } catch (error) {
      return {
        success: false,
        message: 'Network error occurred'
      };
    }
    */
  }

  async logout(): Promise<void> {
    // Clear any stored tokens
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // If you have a logout endpoint:
    /*
    try {
      await fetch(`${this.baseURL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
    */
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }
}

export const authService = new AuthService();