# Etec Dashboard

An admin dashboard for the Etec e-commerce platform, built with Next.js 15 and React 19. Provides full CRUD management for products, categories, orders, clients, and contacts — all behind JWT-protected routes.

---

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + shadcn/ui
- **State Management** — Zustand
- **HTTP Client** — Axios (with in-memory caching)
- **Auth** — JWT via `jose`, stored in cookies
- **Charts** — Recharts
- **Notifications** — Sonner

---

## Features

- **Sign In** — Admin authentication with JWT role verification
- **Dashboard** — Overview cards (products, orders, purchased, clients) + order charts + recent orders table
- **Products** — Create, update, delete products with image URL support and category assignment
- **Categories** — Create, update, delete product categories
- **Orders** — View all orders, update status (Processing → Shipped → Delivered)
- **Purchased** — View and remove purchased product records
- **Clients** — View registered users, remove accounts
- **Contacts** — View and delete support messages
- **Route Protection** — Next.js middleware blocks all `/admin/*` routes for non-admin users

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running instance of the Etec backend API

### Installation

```bash
git clone https://github.com/mohusein/etec-dashboard.git
cd etec-dashboard
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_JWT_SECRET=your_jwt_secret_here
```

`NEXT_PUBLIC_API_URL` should point to your backend API base URL. `NEXT_PUBLIC_JWT_SECRET` must match the secret used to sign tokens on the backend.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Sign in with an admin account to access the dashboard.

### Building for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Sign in page (/)
│   └── admin/              # Protected admin routes
│       ├── layout.tsx      # Admin layout with navbar
│       ├── dashboard/
│       ├── products/
│       ├── categories/
│       ├── orders/
│       ├── purchased/
│       ├── clients/
│       └── contacts/
├── api/                    # Axios API functions
├── components/             # React components by feature
│   └── shared/             # Reusable UI components
├── store/                  # Zustand state stores
│   ├── auth/
│   └── pages/
├── types/                  # TypeScript interfaces
├── util/                   # Helpers (fetch wrapper, cache, cookies)
├── data/                   # Static data (nav links, chart data)
├── styles/                 # Global CSS
└── middleware.ts           # JWT auth middleware
```

---

## API Endpoints Used

| Resource    | Endpoints                                      |
|-------------|------------------------------------------------|
| Auth        | `POST /auth/login`                             |
| Products    | `GET/POST /api/product(s)`, `PUT/DELETE /api/product/:id` |
| Categories  | `GET /api/categorys`, `POST/PUT/DELETE /api/category/:id` |
| Orders      | `GET /api/orders`, `PUT /api/order/:id`        |
| Purchased   | `GET /api/purchaseds`, `DELETE /api/purchased/:id` |
| Clients     | `GET /api/clients`, `DELETE /api/client/:id`   |
| Contacts    | `GET /api/contacts`, `DELETE /api/contact/:id` |
