# 🛠️ CodeCraft: Online Cloud Compiler & Code Editor

**CodeCraft** is a cloud-based platform built to support real-time collaborative coding and learning. It provides a seamless environment for coding together, enhancing team productivity and educational engagement.

---

## 📚 Abstract

CodeCraft offers a novel cloud-native solution for collaborative software development and learning. The platform integrates modern cloud services like Convex (serverless backend), Clerk (authentication), Lemon Squeezy (monetization), and Vercel (deployment). It enables simultaneous, real-time coding experiences with a focus on usability and scalability.

---

## 🚀 Features

- 🧑‍💻 Real-time collaborative code editing
- 🔐 Secure user authentication (via Clerk)
- 💳 Subscription/payment integration with Lemon Squeezy
- 🚀 Seamless deployment with global CDN (Vercel)
- 📈 Scalable, reactive backend using Convex
- 📚 Educational tools and user session tracking

---

## 🧰 Technology Stack

| Category       | Technology            | Description                                                                 |
|----------------|------------------------|-----------------------------------------------------------------------------|
| Frontend       | React + TypeScript     | Component-based UI with modern state management                            |
| Backend        | Convex                 | Serverless backend with reactive TypeScript functions and data              |
| Database       | Convex Data Store      | Real-time, ACID-compliant storage                                          |
| Authentication | Clerk                  | Social sign-in, MFA, and user management                                   |
| Monetization   | Lemon Squeezy          | SaaS billing, payments, subscriptions, and tax compliance                  |
| Deployment     | Vercel                 | Git-based deploys with global CDN for static assets                        |

---

## 📁 Project Structure (Expected)

CodeCraft/ ├── src/ │ ├── components/ │ ├── pages/ │ ├── convex/ # Backend logic and schema │ └── utils/ ├── public/ ├── .env ├── tsconfig.json ├── package.json └── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shreyes-7/CodeCraft.git
cd CodeCraft
2. Install dependencies
bash
npm install

3. Configure environment variables
Create a .env file in the root directory and add the following:
CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL
CLERK_SECRET_KEY
LEMON_SQUEEZY_API_KEY
LEMON_SQUEEZY_STORE_ID
LEMON_SQUEEZY_WEBHOOK_SECRET

4. Build and run the app

npm run build
npm start
Then open: http://localhost:3000

✅ Advantages
Cloud-native & fully serverless

Minimal backend configuration

Real-time collaboration without sockets setup

Scalable and secure architecture

Clean developer experience with full TypeScript stack


