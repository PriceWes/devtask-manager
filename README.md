# Developer Task Manager

A full-stack web application for managing tasks across an organization. Built with React (Vite) for the frontend and Node.js/Express/MongoDB for the backend.

## Features
- User authentication (signup/login)
- Role-based dashboards (Admin, Developer)
- Create, edit, delete, and view tasks
- Admins can manage all tasks; developers manage their own
- Responsive UI with dark mode

## Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (recommended)
- MongoDB (local or cloud)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/PriceWes/devtask-manager.git
cd devtask-manager
```

#### 2. Install dependencies
```bash
cd client
pnpm install
cd ../server
pnpm install
```

#### 3. Environment Variables
Create a `.env` file in the `server` directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For the frontend, create a `.env` file in the `client` directory:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

#### 4. Run the servers
- **Backend**
  ```bash
  cd server
  pnpm dev
  ```
- **Frontend**
  ```bash
  cd client
  pnpm dev
  ```

---

## API Endpoints

### Auth
- `POST /api/auth/signup` — Register a new user
  - Body: `{ email, password }`
- `POST /api/auth/login` — Login
  - Body: `{ email, password }`
  - Response: `{ token }`

### Tasks
- `GET /api/tasks/all` — Get all tasks (Admin only)
- `GET /api/tasks/me` — Get tasks for logged-in user
- `POST /api/tasks` — Create a new task
  - Body: `{ title, description, ... }`
- `PUT /api/tasks/:id` — Update a task
  - Body: `{ completed, ... }`
- `DELETE /api/tasks/:id` — Delete a task

---


## Folder Structure
```
client/
  src/
    pages/
    components/
    services/
    utils/
server/
  controllers/
  models/
  routes/
  middleware/
  config/
```

---

## License
FREE WORLD: Feel free to contribute

---

## Author
PriceWes
