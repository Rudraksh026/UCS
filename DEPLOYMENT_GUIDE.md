# UCS Admin Panel - Deployment Guide

This guide covers setting up the complete admin panel with backend API.

## Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### Local Development Setup

#### Step 1: Backend Setup

```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env file and set your values
# nano .env  (or use your editor)

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

#### Step 2: Frontend Setup

```bash
cd frontend

# Create environment file
echo "VITE_API_URL=http://localhost:5000" > .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173` (or as shown in terminal)

#### Step 3: Access Admin Panel

1. Open browser to `http://localhost:5173/admin`
2. Login with password (default: `admin123`)
3. Start managing events and team!

## Features Implemented

### Event Management
✅ Add new events (upcoming and past)
✅ Edit existing events
✅ Delete events
✅ Categorize by event type
✅ Track attendee numbers
✅ Store event images
✅ View events by tabs

### Team Management
✅ Manage core committee members
✅ Add/edit/delete team members
✅ Manage staff counsellor information
✅ Store member photos
✅ Assign roles and positions
✅ Track college affiliations

### Admin Features
✅ Password-protected login
✅ JWT token authentication
✅ Persistent session management
✅ Role-based access control
✅ Real-time data updates
✅ Error handling and notifications

## Deployment Options

### Option 1: Deploy to Railway

Railway offers a free tier with MongoDB integration.

#### Backend Deployment

1. Push code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Connect GitHub repository
4. Create new project from repository
5. Add environment variables:
   ```
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<strong_random_string>
   ADMIN_PASSWORD=<secure_password>
   NODE_ENV=production
   ```
6. Railway auto-deploys on push
7. Note the public URL (e.g., `https://your-app.railway.app`)

#### Frontend Deployment

1. Create new project on Railway
2. Connect same GitHub repo
3. Set working directory: `frontend`
4. Add environment variables:
   ```
   VITE_API_URL=https://your-app.railway.app
   ```
5. Deploy
6. Access frontend URL

### Option 2: Deploy to Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# In frontend directory
vercel
```

Configure:
- Project name: ucs-frontend
- Framework: Vite
- Environment: `VITE_API_URL=https://your-backend.railway.app`

#### Backend on Railway (see above)

### Option 3: Deploy to Render

[Render.com](https://render.com) offers free tier with easy deployment.

#### Backend

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set start command: `npm start`
5. Add environment variables
6. Deploy
7. Note the web service URL

#### Frontend

1. Create new Static Site on Render
2. Connect GitHub repository
3. Set publish directory: `frontend/dist`
4. Set build command: `npm run build`
5. Set environment: `VITE_API_URL=<backend_url>`
6. Deploy

### Option 4: Self-hosted (VPS)

#### Using DigitalOcean, Linode, AWS EC2, etc.

```bash
# SSH into your server
ssh root@your_server_ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
sudo apt-get install -y mongodb

# Start MongoDB
sudo systemctl start mongodb

# Clone your repository
git clone <your_repo_url>
cd UCS/backend

# Setup backend
cp .env.example .env
# Edit .env with your values
npm install
npm start &

# In another terminal, setup frontend
cd ../frontend
npm install
npm run build

# Serve with nginx or pm2
npm install -g pm2
pm2 start "npm run dev" --name "ucs-frontend"
```

## Production Checklist

- [ ] Change default admin password
- [ ] Generate strong JWT_SECRET
- [ ] Use MongoDB Atlas or hosted database
- [ ] Enable HTTPS/SSL certificate
- [ ] Set up domain name
- [ ] Configure CORS properly
- [ ] Enable rate limiting
- [ ] Set up error logging
- [ ] Enable database backups
- [ ] Monitor server performance
- [ ] Set up email notifications
- [ ] Create admin backup user
- [ ] Test all features in production

## Environment Configuration

### Frontend (.env.local or platform env vars)
```
VITE_API_URL=<your_backend_url>
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<generate_strong_secret>
ADMIN_PASSWORD=<secure_password>
NODE_ENV=production
```

## Database Setup

### Using MongoDB Atlas (Recommended for Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster
4. Get connection string
5. Create database user with credentials
6. Update `MONGODB_URI` in `.env`:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/ucs-admin
   ```

### Using Local MongoDB

```bash
# macOS
brew install mongodb-community
brew services start mongodb-community

# Ubuntu
sudo apt-get install -y mongodb
sudo systemctl start mongodb

# Windows
# Download from https://www.mongodb.com/try/download/community
# Follow installer
```

## Monitoring & Maintenance

### Check Server Status
```bash
# SSH into server
curl http://localhost:5000/api/health

# Check logs
pm2 logs
```

### Database Backup
```bash
# MongoDB local backup
mongodump --db ucs-admin --out ./backup

# Atlas: Use built-in backup feature in dashboard
```

### View Logs
```bash
# Railway: Check in dashboard
# Render: Check in dashboard
# PM2:
pm2 logs

# Docker:
docker logs <container_id>
```

## Troubleshooting

### Backend won't start
```bash
# Check port is free
lsof -i :5000

# Kill existing process
kill -9 <PID>

# Check MongoDB connection
mongosh
```

### CORS errors
- Verify `VITE_API_URL` in frontend
- Check backend CORS configuration
- For production: whitelist specific domains

### Database connection failed
- Verify MongoDB is running
- Check connection string in `.env`
- Verify network access (Atlas firewall rules)

### Token expired
- Clear browser localStorage
- Re-login to get fresh token

## Performance Tips

1. **Optimize images**: Compress event/member images
2. **Database indexing**: Already configured in models
3. **API caching**: Consider Redis for frequently accessed data
4. **CDN**: Use Cloudflare for static assets
5. **Monitoring**: Set up error tracking (Sentry)

## Support & Documentation

- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs/)

## Need Help?

1. Check error messages in console
2. Review `backend/README.md`
3. Check network requests in browser DevTools
4. Verify all environment variables are set
5. Check server logs for detailed errors
