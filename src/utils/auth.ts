// Authentication utilities for IFRIT CORE

const MASTER_USERNAME = 'Mahar69658607';
const MASTER_PASSWORD = 'Mahar@69$';

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthToken {
  token: string;
  expiresAt: Date;
  user: string;
}

/**
 * Authenticates master user credentials
 */
export function authenticateMaster(credentials: AuthCredentials): boolean {
  return (
    credentials.username === MASTER_USERNAME &&
    credentials.password === MASTER_PASSWORD
  );
}

/**
 * Generates secure authentication token
 */
export function generateAuthToken(username: string): AuthToken {
  const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  return {
    token,
    expiresAt,
    user: username,
  };
}

/**
 * Validates authentication token
 */
export function validateToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return decoded.includes(MASTER_USERNAME);
  } catch {
    return false;
  }
}

/**
 * Stores auth token securely
 */
export function storeAuthToken(token: AuthToken): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('ifrit_auth_token', token.token);
    sessionStorage.setItem('ifrit_auth_user', token.user);
    sessionStorage.setItem('ifrit_auth_expires', token.expiresAt.toISOString());
  }
}

/**
 * Retrieves stored auth token
 */
export function getStoredAuthToken(): AuthToken | null {
  if (typeof window === 'undefined') return null;

  const token = sessionStorage.getItem('ifrit_auth_token');
  const user = sessionStorage.getItem('ifrit_auth_user');
  const expiresAt = sessionStorage.getItem('ifrit_auth_expires');

  if (!token || !user || !expiresAt) return null;

  return {
    token,
    user,
    expiresAt: new Date(expiresAt),
  };
}

/**
 * Clears authentication
 */
export function clearAuth(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('ifrit_auth_token');
    sessionStorage.removeItem('ifrit_auth_user');
    sessionStorage.removeItem('ifrit_auth_expires');
  }
}
