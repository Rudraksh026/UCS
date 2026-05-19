# Frontend Environment Configuration

## Overview
The frontend uses environment variables to configure the backend API URI. This centralizes configuration and makes it easy to switch between different environments (development, staging, production) without modifying the code.

## Environment Variables

### `VITE_BACKEND_URI`
- **Type**: String
- **Default**: `http://localhost:5000`
- **Description**: The primary backend API URI. Used throughout the application for all API calls.
- **Example**: `http://localhost:5000` (development), `https://api.example.com` (production)

### `VITE_API_URL`
- **Type**: String
- **Default**: `http://localhost:5000`
- **Description**: Fallback backend URI for backward compatibility. If `VITE_BACKEND_URI` is not set, this will be used.
- **Example**: `http://localhost:5000`

## Setup Instructions

### Development Setup

1. **Create `.env` file** in the frontend directory:
   ```bash
   cp .env.example .env
   ```

2. **Update `.env` with your backend URI**:
   ```env
   VITE_BACKEND_URI=http://localhost:5000
   VITE_API_URL=http://localhost:5000
   ```

3. **Run the development server**:
   ```bash
   bun install
   bun run dev
   ```

### Production Setup

1. **Update `.env` with your production backend URI**:
   ```env
   VITE_BACKEND_URI=https://api.yourdomain.com
   VITE_API_URL=https://api.yourdomain.com
   ```

2. **Build the frontend**:
   ```bash
   bun run build
   ```

## How It Works

The frontend uses a centralized API configuration file located at `src/lib/apiConfig.ts`:

```typescript
export const getBackendUri = (): string => {
  return (
    import.meta.env.VITE_BACKEND_URI ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000"
  );
};
```

This function:
1. Checks for `VITE_BACKEND_URI` first
2. Falls back to `VITE_API_URL` if not set
3. Uses `http://localhost:5000` as the ultimate fallback

## Usage in Components

Import and use the `getBackendUri()` function in any component that needs to make API calls:

```typescript
import { getBackendUri } from "@/lib/apiConfig";

const fetchData = async () => {
  const backendUri = getBackendUri();
  const response = await fetch(`${backendUri}/api/endpoint`);
  // Handle response...
};
```

## Files Using This Configuration

- `src/pages/Team.tsx` - Fetches team and staff counsellor data
- `src/pages/Admin.tsx` - Admin login endpoint
- `src/components/Admin/EventManagement.tsx` - Event management API calls
- `src/components/Admin/TeamManagement.tsx` - Team management API calls

## Important Notes

⚠️ **Security**: 
- Never commit `.env` files with sensitive information
- Use `.env.example` as a template for developers
- In production, set environment variables through your deployment platform (Vercel, Netlify, etc.)

🔄 **Vite Environment Variables**:
- All environment variables must be prefixed with `VITE_` to be accessible in the browser
- These variables are embedded at build time, so you need to rebuild for changes to take effect in production

## Troubleshooting

### Backend URI Not Working
1. Verify the `.env` file exists in the frontend directory
2. Check that `VITE_BACKEND_URI` or `VITE_API_URL` is set correctly
3. Ensure the backend server is running at the specified URI
4. Check browser console for CORS errors

### Changes Not Taking Effect
- In development: Restart the dev server (`bun run dev`)
- In production: Rebuild the project (`bun run build`) after updating the environment variable
