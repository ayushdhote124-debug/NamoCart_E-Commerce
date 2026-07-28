# namoCart 🛒

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application equipped with user authentication, order management, payment integration (Razorpay), Cloudinary image uploads, Redux state management, analytics, and an admin panel.

---

## 🚀 Features

- **User Authentication**: Signup, Login, Email verification (OTP/Nodemailer), and JWT authorization.
- **Product Management**: Search, category filter, product details, stock management, and admin CRUD actions.
- **Cart & Checkout**: Redux Toolkit for seamless client-side state management.
- **Payment Gateway**: Integrated with Razorpay for secure transactions.
- **Admin Dashboard**: Analytics summary, order fulfillment status, and product creation with Cloudinary image uploads.
- **Database Seeding**: Built-in seed script to generate sample products and users/admins for quick testing.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: React 19 + Vite
- **State Management**: Redux Toolkit & React Redux
- **Routing**: React Router DOM v7
- **Styling**: Modern Vanilla CSS

### Backend (`/server`)
- **Runtime & Server**: Node.js (ES Modules) + Express 5
- **Database**: MongoDB + Mongoose 9
- **Authentication**: JWT & Bcryptjs
- **File Uploads**: Cloudinary + Multer
- **Payment Processing**: Razorpay API
- **Mailing**: Nodemailer

---

## 📁 Directory Structure

```
namoCart/
├── package.json         # Root package file for managing workspaces & scripts
├── client/              # React frontend (Vite)
│   ├── src/             # Frontend source code (pages, components, redux store, admin)
│   ├── package.json     # Frontend dependencies & scripts
│   └── vite.config.js
└── server/              # Node.js Express backend
    ├── config/          # Database configuration
    ├── controllers/     # Controller functions
    ├── middlewares/     # Auth & upload middlewares
    ├── model/           # Mongoose schemas (User, Product, Order, etc.)
    ├── routes/          # API endpoint routes
    ├── utils/           # Utilities (Cloudinary, Nodemailer)
    ├── seed.js          # Database initial seed script
    ├── server.js        # Main server entry file
    └── package.json     # Backend dependencies & scripts
```

---

## ⚙️ Prerequisites & Environment Setup

Before running the application, make sure you have **Node.js** (v18+) and **npm** installed.

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=http://localhost:5173
```

---

## 📦 Installation & Getting Started

### 1. Clone the repository & Install dependencies

Run from the project root:

```bash
# Install root, server, and client dependencies
npm run install:all
```

### 2. Seed Initial Database Data (Optional)

To quickly populate MongoDB with 50 products and sample user/admin accounts:

```bash
npm run seed
```

Default seeded credentials:
- **Admin**: `admin1@example.com` / `password123`
- **User**: `user1@example.com` / `password123`

---

## 🏃 Execution Commands

From the **root folder**, you can use the following npm scripts:

| Command | Description |
|---|---|
| `npm run dev` | Runs both Backend and Frontend concurrently |
| `npm run dev:server` | Starts the Express server with `--watch` mode |
| `npm run dev:client` | Starts the Vite dev server for React |
| `npm run start` | Runs the production backend server |
| `npm run build` | Builds the React frontend for production |
| `npm run seed` | Runs database seed script (`server/seed.js`) |

---

## 📜 License

This project is licensed under the **ISC License**.
