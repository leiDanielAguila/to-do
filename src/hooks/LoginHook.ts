// src/hooks/LoginHook.ts

import { useState, useCallback } from 'react';
import type { LoginForm, LoginHookReturn, User } from '@/types/LoginPage.types';
import { authService } from '@/services/authService';

export const SampleLogin = (loginForm: LoginForm): LoginHookReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const validateLogin = useCallback(async () => {
    // Reset error state
    setError(null);
    
    // Basic validation
    if (!loginForm.username.trim() || !loginForm.password.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (loginForm.username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }

    if (loginForm.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      const response = await authService.login(loginForm);
      
      if (response.success) {
        setLoggedIn(true);
        setUser(response.user || null);
        setError(null);
        
        // Store auth token in localStorage or secure storage
        localStorage.setItem('authToken', response.token || '');
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        setError(response.message || 'Login failed');
        setLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setLoggedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [loginForm]);

  const logout = useCallback(() => {
    setLoggedIn(false);
    setUser(null);
    setError(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }, []);

  return {
    validateLogin,
    loggedIn,
    error,
    isLoading,
    user,
    logout,
  };
};