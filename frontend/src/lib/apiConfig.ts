/**
 * Centralized API configuration
 * All API calls should use this to get the backend URI
 */

export const getBackendUri = (): string => {
  return (
    import.meta.env.VITE_BACKEND_URI ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000"
  );
};

export const API_BASE_URL = getBackendUri();
