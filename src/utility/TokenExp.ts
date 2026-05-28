/**
 * Checks if a JWT token has expired
 * Decodes the token payload and compares the expiration time with the current time
 * Returns true if token is expired, invalid, or malformed
 * @function
 * @param {string} token - JWT token to validate (format: header.payload.signature)
 * @returns {boolean} True if token is expired or invalid, false if token is still valid
 * @example
 * const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
 * if (isTokenExpired(token)) {
 *   // Token is expired, redirect to login
 * }
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (!payload.exp) {
      return true;
    }
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }
};
