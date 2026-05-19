#!/bin/bash
# UCS Admin Panel - Quick Start Script
# Run this script to set up everything locally

set -e

echo "🚀 Starting UCS Admin Panel setup..."

# Backend Setup
echo ""
echo "📦 Setting up backend..."
cd backend

if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "✓ .env file created. Please edit it with your values:"
    echo "  - MONGODB_URI"
    echo "  - JWT_SECRET"
    echo "  - ADMIN_PASSWORD"
fi

echo "Installing backend dependencies..."
npm install
echo "✓ Backend dependencies installed"

cd ..

# Frontend Setup
echo ""
echo "📦 Setting up frontend..."
cd frontend

if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    echo "VITE_API_URL=http://localhost:5000" > .env.local
    echo "✓ .env.local file created"
fi

echo "Installing frontend dependencies..."
npm install
echo "✓ Frontend dependencies installed"

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo ""
echo "1️⃣  Terminal 1 - Start Backend:"
echo "   cd backend && npm run dev"
echo ""
echo "2️⃣  Terminal 2 - Start Frontend:"
echo "   cd frontend && npm run dev"
echo ""
echo "3️⃣  Open browser:"
echo "   http://localhost:5173/admin"
echo ""
echo "4️⃣  Login with password: admin123"
echo ""
echo "📖 See ADMIN_PANEL_SUMMARY.md for complete documentation"
