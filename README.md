# FS Trade - Backend API Server

The core engine for the FS Trade ecosystem. A robust Node.js/Express server connecting the PostgreSQL database to the Admin and Client frontends.

## ⚙️ Features

- **RESTful API**: Clean API endpoints for all website sections.
- **Database Architecture**: PostgreSQL powered by Supabase.
- **Auto-Schema Migration**: Automatic table creation and initialization on server start.
- **Security**: 
  - JWT Authentication for Admin routes.
  - Helmet middleware for HTTP headers.
  - CORS configuration for allowed origins.
- **File Handling**: Multer integration for image uploads.

## 🛠️ Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL (pg)
- **Deployment**: Vercel optimized (vercel.json)

## 📦 Getting Started

### Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   PORT=8000
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_secret
   CLIENT_URL=http://localhost:3000
   ADMIN_URL=http://localhost:3001
   ```

### Running Locally

```bash
npm run dev
```

The server will run on [http://localhost:8000](http://localhost:8000).

---
Built with ❤️ for FS Trade.
