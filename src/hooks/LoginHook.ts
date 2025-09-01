import React, { useCallback, useState } from 'react';
import type { User } from "../types/User.types";

export const SampleLogin = (user: User) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const validateLogin = useCallback(() => {
        if (user.username === 'lei' && user.password === 'lei') {
            setLoggedIn(true)
        } else {
            setError('Username or password is incorrect')
        }
    }, [])

    return {loggedIn, validateLogin, error};
}