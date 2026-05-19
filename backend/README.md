# UCS Admin Backend API

Backend server for the UCS Admin Panel - manage events and team members through REST APIs.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ucs-admin
JWT_SECRET=your_super_secret_key_change_in_production
ADMIN_PASSWORD=admin123
NODE_ENV=development
```

**Important Security Notes:**
- Change `JWT_SECRET` to a strong random string in production
- Change `ADMIN_PASSWORD` to a secure password
- Never commit `.env` file to version control

### 3. MongoDB Setup

#### Option A: Local MongoDB

Install MongoDB locally and ensure it's running:

```bash
# macOS (with Homebrew)
brew services start mongodb-community

# Windows
# Start MongoDB service from Services
```

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Update `MONGODB_URI` in `.env` with your connection string

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will start at `http://localhost:5000`

## API Endpoints

### Authentication

#### Admin Login
```
POST /api/admin/login
Body: { "password": "admin123" }
Returns: { "token": "jwt_token" }
```

### Events Management

All event endpoints require `Authorization: Bearer <token>` header.

#### Get All Events
```
GET /api/events
```

#### Get Events by Type
```
GET /api/events/:type (upcoming or past)
```

#### Create Event
```
POST /api/events
Body: {
  "title": "Event Title",
  "category": "Category",
  "date": "YYYY-MM-DD",
  "time": "HH:MM - HH:MM",
  "venue": "Location",
  "description": "Event description",
  "image": "image_url",
  "attendees": 100,
  "eventType": "upcoming" or "past"
}
```

#### Update Event
```
PUT /api/events/:id
Body: { same as create }
```

#### Delete Event
```
DELETE /api/events/:id
```

### Team Management

All team endpoints require `Authorization: Bearer <token>` header.

#### Core Committee

**Get All Members:**
```
GET /api/team/committee
```

**Add Member:**
```
POST /api/team/committee
Body: {
  "name": "Member Name",
  "role": "President",
  "college": "College Name",
  "imageUrl": "image_url"
}
```

**Update Member:**
```
PUT /api/team/committee/:id
Body: { same as add }
```

**Delete Member:**
```
DELETE /api/team/committee/:id
```

#### Staff Counsellor

**Get Staff Counsellor:**
```
GET /api/team/counsellor
```

**Create/Update Staff Counsellor:**
```
POST /api/team/counsellor
Body: {
  "name": "Dr. Name",
  "designation": "Staff Counsellor",
  "department": "Department",
  "college": "College Name",
  "email": "email@example.com",
  "phone": "+91 1234567890",
  "imageUrl": "image_url"
}
```

**Update Staff Counsellor:**
```
PUT /api/team/counsellor/:id
Body: { same as create }
```

## Frontend Integration

Update your frontend's API URL in `.env` or `vite.config.ts`:

```
VITE_API_URL=http://localhost:5000
```

## Project Structure

```
backend/
├── index.js                 # Main server file
├── package.json            # Dependencies
├── .env.example            # Environment template
├── .gitignore
├── middleware/
│   └── auth.js            # JWT authentication
├── models/
│   ├── Event.js           # Event schema
│   ├── TeamMember.js      # Team member schema
│   └── StaffCounsellor.js # Staff counsellor schema
└── routes/
    ├── admin.js           # Admin login
    ├── events.js          # Event CRUD operations
    └── team.js            # Team management
```

## Deployment

### Deploy to Heroku

1. Install Heroku CLI
2. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```
3. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=<your_atlas_uri>
   heroku config:set JWT_SECRET=<strong_secret>
   heroku config:set ADMIN_PASSWORD=<secure_password>
   ```
4. Deploy:
   ```bash
   git push heroku main
   ```

### Deploy to Railway, Render, or AWS

Follow similar steps - set environment variables in the deployment platform's dashboard.

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check `MONGODB_URI` in `.env`

### Port Already in Use
- Change `PORT` in `.env` to another port (3000, 8000, etc.)

### CORS Errors
- Update `CORS_ORIGIN` if deploying frontend and backend separately
- Currently allows all origins - restrict in production

## Security Recommendations

1. **Production Checklist:**
   - Change all default passwords and secrets
   - Use HTTPS only
   - Enable MongoDB authentication
   - Restrict CORS to specific domains
   - Use strong JWT secret
   - Enable API rate limiting

2. **Authentication:**
   - Consider OAuth2 for better security
   - Add refresh token mechanism
   - Implement session management

3. **Data Validation:**
   - Add more robust input validation
   - Implement file upload security
   - Add XSS/CSRF protection

## Support

For issues or questions, check the main project README or contact the development team.
