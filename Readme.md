## Backend Overview – Kenakata App

The backend of Kenakata App is built with Node.js, Express.js, and MongoDB using Mongoose as the ODM. It is designed to support a robust e-commerce system with secure authentication, dynamic product handling, and complete order management.

⚙️ Key Features
🔐 JWT-based Authentication
Supports user registration, login, and role-based access (admin, customer).

🛍️ Product Management
Supports multiple types of products like grosaryproduct and offerproduct using refPath for dynamic model referencing.

📦 Order System

Users can place orders with multiple products.

Each order stores user info, product references, quantity, total price, payment status, and transaction ID.

Uses populate() with refPath to fetch full product details for each order.

🧾 Transaction Tracking
Stores unique transaction IDs and handles different payment statuses (Pending, Paid, Failed).

⏱️ Timestamps & Status
Orders include automatic timestamps and delivery status tracking (Pending, Shipped, Completed, Cancelled).

🧩 Technologies & Tools
Purpose Stack / Tool
Server Framework Node.js, Express.js
Database MongoDB, Mongoose
Authentication JWT, Cookies
Data Validation Zod / Mongoose
Environment Config dotenv
Dev Tools Nodemon, TypeScript
