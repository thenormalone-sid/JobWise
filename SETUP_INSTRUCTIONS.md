# Setup Instructions

## Issues Fixed

✅ **Login/Register** - Now connects to actual MongoDB database instead of using mock data
✅ **Username Display** - Fixed "Hello, [username]" display in Navbar
✅ **MongoDB Connection** - Improved error handling and authentication support

## Setup Steps

### 1. Server Setup

1. Navigate to the server directory:
   ```bash
   cd job-application-system/server
   ```

2. Create a `.env` file (if it doesn't exist):
   ```env
   MONGODB_URL=mongodb://localhost:27017/job-application-system
   JWT_SECRET=your-secret-jwt-key-change-this-in-production
   PORT=3001
   CLIENT_URL=http://localhost:3000
   ```

   **For MongoDB with Authentication:**
   ```env
   MONGODB_URL=mongodb://username:password@localhost:27017/job-application-system?authSource=admin
   ```

   **For MongoDB Atlas:**
   ```env
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/job-application-system?retryWrites=true&w=majority
   ```

3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   Database connected: job-application-system @ localhost:27017
   DB connection successful.
   Server is running on port 3001
   ```

### 2. Client Setup

1. Navigate to the client directory:
   ```bash
   cd job-application-system/client
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Create a `.env` file (optional, if your server is not on localhost:3001):
   ```env
   REACT_APP_API_URL=http://localhost:3001
   ```

4. Start the client:
   ```bash
   npm start
   ```

### 3. Testing the Connection

1. **Register a New User:**
   - Go to `/signup`
   - Fill in the registration form
   - Submit - data should be saved to MongoDB

2. **Login:**
   - Go to `/login`
   - Use your registered credentials
   - After login, you should see "Hello, [Your Name]" in the navbar

3. **Check MongoDB Compass:**
   - Connect to your MongoDB instance
   - Look for database: `job-application-system`
   - Collection: `users`
   - You should see your registered user data

## Troubleshooting

### Can't see data in MongoDB Compass?

1. **Check Database Name:**
   - Make sure you're connected to the same database as in your `MONGODB_URL`
   - Default database name: `job-application-system`

2. **Verify Connection:**
   - Run the validator: `cd server && npm run validate-mongo`
   - Check server logs for connection errors

3. **Check MongoDB is Running:**
   - Local MongoDB: `mongod` should be running
   - MongoDB Atlas: Cluster should be active

### Login doesn't work?

1. Make sure the server is running on port 3001
2. Check browser console for CORS errors
3. Verify the API URL in client `.env` matches your server

### Username not showing?

1. Clear browser localStorage: `localStorage.clear()`
2. Register a new user or login again
3. Check that the user object has `userName` field

## MongoDB URL Format Reference

### Local (No Auth)
```
mongodb://localhost:27017/job-application-system
```

### Local (With Auth)
```
mongodb://username:password@localhost:27017/job-application-system?authSource=admin
```

### MongoDB Atlas
```
mongodb+srv://username:password@cluster.mongodb.net/job-application-system?retryWrites=true&w=majority
```

## Next Steps

- All authentication now saves to MongoDB
- Users can register and login with real database persistence
- Username displays correctly in the navbar after login

