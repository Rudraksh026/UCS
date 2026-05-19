# UCS Admin Panel Developer Guide

## 📚 Documentation Map

Start here based on your needs:

### Getting Started
- **New to the project?** → Read [ADMIN_PANEL_SUMMARY.md](./ADMIN_PANEL_SUMMARY.md)
- **Want to deploy?** → Read [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Need frontend setup?** → Read [frontend/ADMIN_SETUP.md](./frontend/ADMIN_SETUP.md)
- **Need backend setup?** → Read [backend/README.md](./backend/README.md)

## 🎯 Quick Links

### Setup & Installation
```bash
# Windows
setup.bat

# macOS/Linux
bash setup.sh

# Manual setup
cd backend && npm install && npm run dev
# In another terminal
cd frontend && npm install && npm run dev
```

### Access Points
- Frontend: `http://localhost:5173`
- Admin Panel: `http://localhost:5173/admin`
- Backend API: `http://localhost:5000`
- API Health: `http://localhost:5000/api/health`

### Default Credentials
- **Admin Password**: `admin123`
- **MongoDB**: `mongodb://localhost:27017/ucs-admin`

## 📁 Project Structure Overview

```
UCS/
├── setup.sh                    # Unix setup script
├── setup.bat                   # Windows setup script
├── ADMIN_PANEL_SUMMARY.md      # This file - quick reference
├── DEPLOYMENT_GUIDE.md         # Production deployment
│
├── frontend/                   # React + Vite frontend
│   ├── ADMIN_SETUP.md         # Frontend-specific setup
│   ├── src/
│   │   ├── pages/Admin.tsx    # Admin page & login
│   │   ├── App.tsx            # Updated with routes
│   │   └── components/Admin/  # Admin components
│   └── .env.local             # Frontend env vars
│
└── backend/                    # Node.js + Express backend
    ├── README.md              # Backend-specific setup
    ├── index.js               # Main server
    ├── package.json           # Dependencies
    ├── .env                   # Backend env vars (create from .env.example)
    ├── models/                # MongoDB schemas
    ├── routes/                # API routes
    └── middleware/            # Authentication
```

## 🔄 Architecture Overview

```
┌─────────────────┐
│   Browser       │
│  (React App)    │
└────────┬────────┘
         │
         │ HTTP/REST with JWT
         │
    ┌────▼─────────┐
    │   Express    │
    │  Backend     │
    │  (Node.js)   │
    └────┬─────────┘
         │
         │ Mongoose ODM
         │
    ┌────▼──────────┐
    │  MongoDB      │
    │  Database     │
    └───────────────┘
```

## 📋 Feature Checklist

### Event Management
- [x] View all events (upcoming & past)
- [x] Create new event
- [x] Edit existing event
- [x] Delete event
- [x] Filter by event type
- [x] Store images
- [x] Track attendees

### Team Management
- [x] View core committee
- [x] Add committee member
- [x] Edit committee member
- [x] Delete committee member
- [x] View staff counsellor
- [x] Update staff counsellor
- [x] Store member photos

### Admin Features
- [x] Password-protected login
- [x] JWT authentication
- [x] Session management (24h)
- [x] Error handling
- [x] Toast notifications
- [x] Responsive UI
- [x] Real-time updates

## 🔌 API Reference

### Authentication
```
POST /api/admin/login
Request: { "password": "admin123" }
Response: { "token": "eyJhbGc..." }
```

### Events
```
GET    /api/events                    # All events
GET    /api/events/upcoming           # By type
POST   /api/events                    # Create
PUT    /api/events/:id                # Update
DELETE /api/events/:id                # Delete
```

### Team - Committee
```
GET    /api/team/committee            # All members
POST   /api/team/committee            # Add
PUT    /api/team/committee/:id        # Update
DELETE /api/team/committee/:id        # Delete
```

### Team - Counsellor
```
GET    /api/team/counsellor           # Get
POST   /api/team/counsellor           # Create/Update
PUT    /api/team/counsellor/:id       # Update
```

## 🛠️ Development Workflow

### 1. Making Changes to Frontend

```bash
cd frontend
# Edit files in src/
npm run dev
# Changes auto-reload at http://localhost:5173
```

### 2. Making Changes to Backend

```bash
cd backend
# Edit files in routes/, models/, etc.
npm run dev
# Nodemon auto-restarts server
```

### 3. Debugging

**Frontend:**
- DevTools Console (F12)
- React DevTools browser extension
- Network tab to see API calls

**Backend:**
- Check terminal output
- Add `console.log()` statements
- Check network requests in browser DevTools

## 🚀 Deployment Workflow

### Step 1: Prepare for Production
```bash
# Update .env values
JWT_SECRET=<strong_random_string>
ADMIN_PASSWORD=<secure_password>
MONGODB_URI=<production_database_uri>
NODE_ENV=production
```

### Step 2: Choose Provider
- Railway (recommended for quick start)
- Render (free tier with 7 day data retention)
- Vercel + backend provider
- Self-hosted VPS

### Step 3: Deploy
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed steps.

## 📊 Common Tasks

### Add a New Role
1. Edit `frontend/src/components/Admin/TeamMemberForm.tsx`
2. Add role to `roles` array
3. No backend changes needed

### Add a New College
1. Edit `frontend/src/components/Admin/TeamMemberForm.tsx`
2. Add college to `colleges` array
3. No backend changes needed

### Change Admin Password
1. Edit `backend/.env`
2. Update `ADMIN_PASSWORD=<new_password>`
3. Restart backend

### Switch Database
1. Edit `backend/.env`
2. Update `MONGODB_URI=<new_database_connection>`
3. Restart backend

### Change API URL
1. Edit `frontend/.env.local`
2. Update `VITE_API_URL=<new_api_url>`
3. Restart frontend

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| `ECONNREFUSED` on backend | MongoDB not running. Run `mongod` or start service |
| `CORS error` | Check `VITE_API_URL` in frontend `.env.local` |
| `Invalid token` | Clear localStorage, re-login |
| `Port already in use` | Change PORT in `.env` or kill existing process |
| `Module not found` | Run `npm install` in respective directory |
| `Login fails` | Verify password matches `ADMIN_PASSWORD` in `.env` |

## 🔒 Security Best Practices

✅ Always use HTTPS in production
✅ Change all default passwords
✅ Use strong JWT_SECRET
✅ Never commit `.env` files
✅ Validate all user inputs
✅ Use rate limiting
✅ Enable CORS only for trusted domains
✅ Keep dependencies updated
✅ Use environment variables for secrets
✅ Implement proper error logging

## 📈 Performance Tips

1. **Database**: Add indexes for frequently queried fields
2. **API**: Implement caching for read-heavy operations
3. **Frontend**: Lazy load components
4. **Images**: Compress before upload
5. **Monitoring**: Set up error tracking and performance monitoring

## 🤝 Team Collaboration

### Git Workflow
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Create Pull Request
```

### Code Style
- Frontend: Follow React best practices
- Backend: Follow Express conventions
- Naming: camelCase for variables, PascalCase for components/classes
- Comments: Document complex logic

## 📞 Getting Help

### Resources
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

### Internal
- Check existing code examples
- Review commit history
- Ask team members

## ✨ Future Enhancements

Potential features to add:
- [ ] Email notifications
- [ ] Bulk event import/export
- [ ] Advanced search filters
- [ ] Event analytics dashboard
- [ ] Audit logs
- [ ] Team member comments
- [ ] Event registration system
- [ ] Calendar view
- [ ] Email templates
- [ ] SMS notifications

## 📞 Contact & Support

For questions or issues:
1. Check documentation
2. Review error messages
3. Check browser console
4. Ask the development team

---

**Last Updated**: May 19, 2026

For the most up-to-date information, always refer to the documentation files in the root directory.
