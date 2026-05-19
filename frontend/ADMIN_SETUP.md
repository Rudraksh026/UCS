# Frontend Admin Panel Setup Guide

## Installation

The admin panel components are already created. Follow these steps to complete the setup:

### 1. Create `.env.local` file in frontend directory

```
VITE_API_URL=http://localhost:5000
```

### 2. Access Admin Panel

- Navigate to `http://localhost:5173/admin`
- Login with the password set in backend `.env` (default: `admin123`)

## Admin Features

### Event Management
- **Home Tab**: View all events with filters
- **Upcoming Events**: Add, edit, and delete upcoming events
- **Past Events**: Manage past events archive
- Features:
  - Rich event details (title, date, time, venue, description)
  - Event categorization
  - Expected attendee count
  - Image upload support

### Team Management
- **Core Committee**: Manage committee members
  - Add/edit/delete members
  - Assign roles and positions
  - Associate with colleges
  - Profile image support

- **Staff Counsellor**: Manage single staff counsellor record
  - Update counsellor information
  - Contact details (email, phone)
  - Department and college affiliation
  - Professional image

## Architecture

### Frontend Components Structure
```
src/
├── pages/
│   └── Admin.tsx              # Main admin page with auth
├── components/
│   └── Admin/
│       ├── EventManagement.tsx    # Event CRUD wrapper
│       ├── EventForm.tsx          # Event creation/edit form
│       ├── EventList.tsx          # Event display list
│       ├── TeamManagement.tsx     # Team CRUD wrapper
│       ├── TeamMemberForm.tsx     # Member creation/edit form
│       ├── TeamMemberList.tsx     # Member display grid
│       └── StaffCounsellorForm.tsx # Counsellor form
```

### Backend API Structure
```
backend/
├── routes/
│   ├── admin.js          # POST /login
│   ├── events.js         # CRUD operations
│   └── team.js           # Committee & Counsellor CRUD
├── models/
│   ├── Event.js
│   ├── TeamMember.js
│   └── StaffCounsellor.js
└── middleware/
    └── auth.js           # JWT verification
```

## Data Flow

1. **Login Flow**
   - User enters password on `/admin` page
   - POST to `/api/admin/login` with password
   - Backend verifies and returns JWT token
   - Token stored in localStorage
   - User redirected to dashboard

2. **Event Management**
   - CRUD operations on `/api/events`
   - All requests include JWT token in headers
   - Events filtered by type (upcoming/past)
   - Real-time updates after operations

3. **Team Management**
   - Committee: `/api/team/committee`
   - Counsellor: `/api/team/counsellor`
   - Supports add/edit/delete operations

## Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ucs-admin
JWT_SECRET=your_super_secret_key
ADMIN_PASSWORD=admin123
NODE_ENV=development
```

## Running the Application

### Terminal 1 - Backend
```bash
cd backend
npm install
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm run dev
```

## Default Credentials

- **Admin Password**: `admin123` (change in production)
- **MongoDB**: `mongodb://localhost:27017/ucs-admin`

## Security Notes

- Never commit `.env` files
- Change all default passwords before production deployment
- Use HTTPS in production
- Implement rate limiting for login attempts
- Consider OAuth2 for enhanced security

## Troubleshooting

### "Failed to connect to server"
- Ensure backend is running on port 5000
- Check MongoDB connection
- Verify `VITE_API_URL` in frontend `.env.local`

### "Invalid token"
- Clear localStorage and re-login
- Check JWT_SECRET consistency
- Verify token hasn't expired

### CORS Errors
- Ensure `VITE_API_URL` matches backend URL
- Check CORS headers in Express middleware

## Next Steps

1. Set up MongoDB Atlas for cloud database
2. Deploy backend to a hosting service (Railway, Render, Heroku)
3. Update `VITE_API_URL` to production backend URL
4. Change default admin password
5. Generate strong JWT_SECRET
