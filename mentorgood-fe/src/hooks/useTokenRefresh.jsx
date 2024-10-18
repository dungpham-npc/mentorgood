/* eslint-disable no-unused-vars */
// src/hooks/useTokenRefresh.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, clearAccessToken } from '../features/auth/authSlice';

export function useTokenRefresh() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (!accessToken) return;

    const interval = setInterval(async () => {
      try {
        const response = await fetch('/auth/refresh', { method: 'POST' });
        const data = await response.json();
        dispatch(setAccessToken(data.result.accessToken));
      } catch (error) {
        dispatch(clearAccessToken());
      }
    }, 2 * 60 * 1000); // Refresh every 2 minutes

    return () => clearInterval(interval);
  }, [accessToken, dispatch]);
}