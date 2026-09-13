# 📦 PasteBox — Full-Stack Cloud File Sharing & Analytics Platform

[![Live Demo - Frontend](https://img.shields.io/badge/Frontend-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://pastebox1.netlify.app/)
[![Live Demo - Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://pastebox-kfqs.onrender.com)
[![Storage - AWS S3](https://img.shields.io/badge/Storage-AWS_S3-FF9900?style=for-the-badge&logo=amazons3)](https://aws.amazon.com/s3/)
[![Database - MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

**PasteBox** is a high-performance, secure full-stack web application designed for fast, temporary, and managed file sharing. Built using the **MERN Stack (MongoDB, Express, React, Node.js)** and **AWS S3**, PasteBox delivers zero-friction anonymous sharing for quick file transfer as well as authenticated user dashboards with real-time KPI analytics, password protection, and custom expiration controls.

---

## 🔗 Live Deployments

- 🌐 **Frontend App (Netlify):** [https://pastebox1.netlify.app/](https://pastebox1.netlify.app/)
- ⚙️ **Backend API (Render):** [https://pastebox-kfqs.onrender.com](https://pastebox-kfqs.onrender.com)
- 🐙 **GitHub Repository:** [https://github.com/virendraPrajapat18/pastebox](https://github.com/virendraPrajapat18/pastebox)

---

## ❓ The Problem with Existing Solutions

Most file-sharing platforms fall into one of two extremes:

1. **Heavy Authentication Overhead (Google Drive, Dropbox, OneDrive):**
   - Require users to log in, consume account quota, and manually configure complex sharing permissions just to share a single temporary file.
2. **Missing Granular Security & Analytics (WeTransfer, SendGB):**
   - Free tiers often lack password protection, custom auto-expiration controls, instant QR code mobile transfer, or real-time download tracking.
3. **Text-Only Limitations (Pastebin):**
   - Restricted primarily to code snippets and text, unable to handle high-resolution media, PDFs, or documents seamlessly.

---

## 💡 How PasteBox Solves These Challenges

PasteBox bridges this gap by offering a hybrid, developer-grade file sharing ecosystem:

- ⚡ **Zero-Friction Guest Mode:** Share files instantly without signing up.
- 🔐 **Password-Protected Files:** Secure sensitive documents with Bcrypt password hashing prior to download access.
- ⏳ **Custom Expiration Controls:** Set exact hourly expiration bounds or opt for indefinite retention (`No Expiry`).
- ☁️ **AWS S3 Presigned URL Streaming:** Prevents Node.js server RAM bottlenecks by generating secure, short-lived presigned URLs directly from AWS S3 storage.
- 📊 **Real-Time Dynamic KPI Analytics:** Authenticated users enjoy real-time analytics for total uploads, media classification (Images, Videos, Documents), download counters, and session history tracking.
- 📱 **Instant QR Code & Social Deep Links:** One-click QR code generation for mobile downloading, alongside seamless deep-linking to WhatsApp and Telegram.

---

## ✨ Key Features

### 🚀 Upload & Security
- **AWS S3 Cloud Storage:** High availability, scalable cloud storage.
- **Bcrypt Password Security:** Server-side hash verification for protected files.
- **Auto-Expiry System:** Automatic date-based lifecycle check preventing access to expired links.
- **Direct Preview & Streaming:** Securely view images, PDFs, and media without downloading raw files locally.

### 📊 Dashboard & Analytics
- **Live KPI Grid:** Real-time dynamic aggregation of active uploads, total downloads, and file mime-type counts.
- **Session History:** Standardized `Last Login` security tracking for previous active user sessions.
- **File Management:** Search, filter by mime-type/status, and delete files with automatic AWS S3 cleanup.

### 📲 Sharing & Mobile Access
- **Instant QR Code Generation:** Downloadable QR codes for fast mobile scanning.
- **Deep-Link Integration:** Direct one-click share to WhatsApp, Telegram, and 1-tap Instagram DM link copying.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React 18 + Vite
- **State Management:** Redux Toolkit
- **Styling:** Vanilla CSS + Tailwind CSS (Custom Dark/Light Design System)
- **Icons & UI:** React Icons, Date-fns, React Toastify

### **Backend**
- **Runtime:** Node.js + Express.js
- **Database:** MongoDB + Mongoose ODM (Atlas Cloud DB)
- **Cloud Storage:** AWS SDK (Amazon S3)
- **Authentication:** JSON Web Tokens (JWT) + Bcrypt.js + HTTP-Only Cookies
- **Middleware:** CORS (Dynamic Multi-Origin Handling), Cookie Parser, Body Parser

---

## 📂 Project Architecture

```
pastebox/
├── client/                     # React Frontend (Vite)
│   ├── public/                 # Static assets & Netlify _redirects
│   └── src/
│       ├── components/         # Dashboard, Guest, Download & Header Components
│       ├── config/             # Axios instance & Environment Base URL config
│       └── redux/              # Redux Slices & Async Thunks (Auth, Files)
│
└── server/                     # Node.js Express Backend
    └── src/
        ├── controllers/        # File management & User Auth controllers
        ├── db/                 # MongoDB Mongoose connection
        ├── middlewares/        # Multer AWS S3 upload middleware
        ├── models/             # File & User Mongoose Schemas
        └── routes/             # RESTful API Endpoints
```

---

## ⚙️ Environment Variables Setup

### Backend (`server/.env`)
```env
PORT=6600
MONGODB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=ap-south-1
AWS_BUCKET_NAME=your_s3_bucket_name
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:6600
```

---

## 🏃 Running Locally

1. **Clone Repository:**
   ```bash
   git clone https://github.com/virendraPrajapat18/pastebox.git
   cd pastebox
   ```

2. **Start Backend Server:**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Start Frontend Application:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
