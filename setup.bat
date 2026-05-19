@echo off
REM UCS Admin Panel - Quick Start Script for Windows

echo.
echo 🚀 Starting UCS Admin Panel setup...
echo.

REM Backend Setup
echo.
echo 📦 Setting up backend...
cd backend

if not exist .env (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo ✓ .env file created. Please edit it with your values:
    echo   - MONGODB_URI
    echo   - JWT_SECRET
    echo   - ADMIN_PASSWORD
)

echo Installing backend dependencies...
call npm install
echo ✓ Backend dependencies installed

cd ..

REM Frontend Setup
echo.
echo 📦 Setting up frontend...
cd frontend

if not exist .env.local (
    echo Creating .env.local file...
    (
        echo VITE_API_URL=http://localhost:5000
    ) > .env.local
    echo ✓ .env.local file created
)

echo Installing frontend dependencies...
call npm install
echo ✓ Frontend dependencies installed

cd ..

echo.
echo ✅ Setup complete!
echo.
echo Next steps:
echo.
echo 1️⃣  Terminal 1 - Start Backend:
echo    cd backend ^&^& npm run dev
echo.
echo 2️⃣  Terminal 2 - Start Frontend:
echo    cd frontend ^&^& npm run dev
echo.
echo 3️⃣  Open browser:
echo    http://localhost:5173/admin
echo.
echo 4️⃣  Login with password: admin123
echo.
echo 📖 See ADMIN_PANEL_SUMMARY.md for complete documentation
echo.
pause
