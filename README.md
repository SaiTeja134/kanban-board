# 🧑‍💼 Employee Task Management App

A full-stack web application that allows administrators to manage employees and tasks. It features a user-friendly UI, role-based access, and a Kanban-style task management interface.

---

## 📁 Project Structure

employee-task-app/
│
├── frontend/ # Angular frontend
│ └── src/
│ └── app/
│ ├── components/ # UI components
│ ├── models/ # TypeScript interfaces
│ └── services/ # HTTP services
│
├── backend/ # Node.js + Express + Mongoose backend
│ ├── controllers/ # Logic handlers
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API endpoints
│ └── services/ # Business logic
│
└── README.md


---

## 🚀 Features

- 🔐 User Authentication
- 👤 Employee Management
- 📋 Task Assignment
- ✅ Kanban Board Interface
- 🔄 Real-time Status Update
- 🔎 User & Task Search
- 📅 Deadline Tracking

---

## 🛠️ Tech Stack

### Frontend
- Angular 16+
- TypeScript
- RxJS
- Bootstrap (optional)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS, dotenv, etc.

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/<your-username>/employee-task-app.git
cd employee-task-app
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a .env file in the backend folder with:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/employee-task-db
```
Then start the server:

```bash
npm start
```
---

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm start
```

## 📦 Dummy Test Data

### User
```json
{
  "username": "john123",
  "password": "password123",
  "role": "admin",
  "fullName": "John Doe",
  "position": "Team Lead",
  "department": "Engineering",
  "phoneNumber": "9876543210"
}
```
### Task
```
{
  "title": "Design UI for Dashboard",
  "description": "Create Figma mockups for the dashboard screen.",
  "status": "To Do",
  "deadline": "2025-06-10"
}
```

## 📬 API Endpoints

### 🧑‍💼 Users
| Method | Endpoint                     | Description                     |
|--------|------------------------------|---------------------------------|
| GET    | `/users`                     | Get all users                   |
| GET    | `/users/:id`                 | Get user by ID                  |
| GET    | `/users/by-username?username=XXX` | Get user by username        |
| POST   | `/users`                     | Create/Register user            |
| PUT    | `/users/:id`                 | Update user                     |
| DELETE | `/users/:id`                 | Delete user                     |

### 📋 Tasks
| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | `/tasks`       | Get all tasks             |
| GET    | `/tasks/:id`   | Get task by ID            |
| POST   | `/tasks`       | Create a new task         |
| PUT    | `/tasks/:id`   | Update full task          |
| PATCH  | `/tasks/:id`   | Update task status        |
| DELETE | `/tasks/:id`   | Delete task               |

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

## 📄 License
**This project is licensed under the MIT License.**

## 👨‍💻 Author
**Sai Teja**  
**GitHub:** [SaiTeja134](https://github.com/SaiTeja134)  
**Email:** saiteja.gangavaram09@gmail.com



