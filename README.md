# 🛍️ Kenakata - Backend

Kenakata is a full-featured e-commerce backend built with Node.js and Express.js. This backend powers user authentication, product management, order processing, and admin functionalities for the Kenakata platform.

---

## 🧰 Tech Stack

- **Node.js** – Server runtime
- **Express.js** – REST API framework
- **MongoDB + Mongoose** – Database and ODM
- **JWT** – Secure authentication
- **Bcrypt** – Password hashing
- **Cloudinary** – Image storage
- **Dotenv** – Environment configuration
- **Cors & Helmet** – Security middlewares

---

## 🔁 How the Backend Works

1. **User Registration & Login**
   - Passwords are hashed using `bcrypt`.
   - JWT tokens are issued on successful login (access & refresh tokens).
   - Auth middleware protects private routes.

2. **Product Management**
   - Admin can create, update, and delete products.
   - Products include name, description, price, image, brand, category, rating, and stock quantity.

3. **Order Management**
   - Users can place orders with selected products.
   - Orders are saved and can be tracked.

4. **Role-Based Access**
   - Admins have additional access to manage products and orders.
   - Normal users have limited permissions.

5. **Image Upload**
   - Images are uploaded to Cloudinary via API and stored securely.

---

## 🔒 Authentication Flow

- **Access Token:** Short-lived, used for accessing secure endpoints.
- **Refresh Token:** Long-lived, used to regenerate access tokens.
- **Protected Routes:** Verified with middleware to ensure role and user identity.

---



## 📁 Project Strure
│
├── controllers/ # Route logic
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── middlewares/ # Custom middleware (auth, errorHandler)
├── utils/ # Helper functions
├── payments-system/schema
├── config/ # Cloudinary, DB config
├── server.ts # Entry point
├── app.ts
└── .env # Environment variables

## ⚙️ Environment Variables Example

PORT=

DATABASE_URL=
USER_NAME=
USER_PASS=
BCRYPT_SALT_ROUND=

JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES_IN=

OPENAI_API_KEY=

CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=

STORE_ID=
SIGNATURE_KEY=
PAYMENT_VERIFY_URL=
PAYMENT_URL=

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Shajadulhaqueemon111/kenakata-server-side-app.git

# Navigate into the project directory
cd kenakata-server-side-app

# Install dependencies
npm install

# Start the development server
npm run dev

Api-base-url==http://localhost:5000/api/v1/

