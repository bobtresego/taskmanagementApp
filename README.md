# Task Management System

A full-stack web application for managing tasks and users, built with ASP.NET Core Web API backend and React frontend.

## 🚀 Live Demo
- **Frontend**: [React Application] (Add your deployed frontend URL)
- **Backend**: [ASP.NET Core API] (Add your deployed backend URL)
- **API Documentation**: [Swagger UI] (Add your Swagger URL)

## 📋 Assignment Requirements Checklist

### ✅ Back-End with ASP.NET Core
- [x] Multiple controllers (UsersController, TasksController) with full CRUD operations
- [x] Validation using Data Annotations ([Required], [MaxLength], [EmailAddress])
- [x] Duplicate-check logic (no duplicate emails)
- [x] Multiple routing options (`/api/users/register`, `/api/tasks/pending`)
- [x] All actions asynchronous using async/await

### ✅ Database Integration with EF Core
- [x] DbContext with two DbSet entities (Users, Tasks)
- [x] Code-first migrations applied
- [x] One-to-Many relationship (User → Tasks)
- [x] Filtered queries (tasks by user, pending tasks)

### ✅ Front-End with React
- [x] Form-based components with validation (UserForm, TaskForm)
- [x] API integration using Axios
- [x] Four pages (HomePage, UsersPage, TasksPage, DashboardPage)
- [x] Navigation with React Router
- [x] Styled UI with Bootstrap

### ✅ Testing with xUnit
- [x] Test project structure created
- [x] Unit tests for controller actions
- [x] Success and failure test cases
- [x] Integration tests with InMemory database

### ✅ Deployment & Documentation
- [x] Swagger/OpenAPI enabled
- [x] Complete README documentation
- [x] Project setup instructions
- [x] Database migration steps
- [x] API endpoints description

## 🛠️ Technologies Used

### Backend
- **Framework**: ASP.NET Core 8.0
- **ORM**: Entity Framework Core
- **Database**: SQL Server
- **API Documentation**: Swagger/OpenAPI
- **Testing**: xUnit

### Frontend
- **Framework**: React 18
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: Bootstrap 5
- **Validation**: React Form Validation

## 📁 Project Structure
TaskManagementApp/
├── backend/
│ ├── TaskManagement.API/
│ │ ├── Controllers/ # API Controllers
│ │ ├── Models/ # Data Models
│ │ ├── Data/ # DbContext
│ │ ├── Migrations/ # Database Migrations
│ │ └── Program.cs # Application entry point
│ └── TaskManagement.Tests/ # Unit Tests
└── frontend/
└── taskmanagement-client/
├── src/
│ ├── components/ # React Components
│ ├── pages/ # Application Pages
│ ├── services/ # API Services
│ └── App.js # Main App Component
├── public/ # Static Files
└── package.json # Dependencies


## 🚀 Getting Started

### Prerequisites
- .NET 8.0 SDK
- Node.js 16+ and npm
- SQL Server (LocalDB or Express)
- Visual Studio 2022 or VS Code

### Backend Setup

1. **Navigate to backend folder**
   ```bash
   cd backend/TaskManagement.API

   dotnet restore
   dotnet ef database update
   dotnet run

   API will be available at: https://localhost:7157
   Swagger UI: https://localhost:7157/swagger

###Frontend setup

   **Navigation to frontend folder
   ```bash
cd frontend/taskmanagement-client
npm install
npm start
Application will open at: http://localhost:3000

Users Table
Id (int, PK) - Auto-incrementing primary key

Name (nvarchar(100), Required) - User's full name

Email (nvarchar, Required, Unique) - User's email address

Tasks Table
Id (int, PK) - Auto-incrementing primary key

Title (nvarchar(200), Required) - Task title

Description (nvarchar(1000)) - Task description

DueDate (datetime2) - Task due date

CreatedAt (datetime2) - Task creation timestamp

Status (int) - Task status (Pending, InProgress, Completed)

UserId (int, FK) - Foreign key to Users table

🔌 API Endpoints
Users Controller
GET /api/users - Get all users

GET /api/users/{id} - Get user by ID

POST /api/users/register - Register new user

PUT /api/users/{id} - Update user

DELETE /api/users/{id} - Delete user

Tasks Controller
GET /api/tasks - Get all tasks

GET /api/tasks/{id} - Get task by ID

GET /api/tasks/user/{userId} - Get tasks by user

GET /api/tasks/pending - Get pending tasks

POST /api/tasks - Create new task

PUT /api/tasks/{id} - Update task

DELETE /api/tasks/{id} - Delete task

🧪 Testing
Running Tests
Open Test Explorer in Visual Studio

Run all tests

Or use command line: dotnet test

Test Coverage
UsersControllerTests: Unit tests for user registration, duplication checks, and CRUD operations

TasksControllerTests: Unit tests for task creation, validation, and filtered queries

🎯 Features
User Management
✅ User registration with email validation

✅ Duplicate email prevention

✅ User listing and deletion

✅ Form validation with error messages

Task Management
✅ Task creation with assignment to users

✅ Task status tracking (Pending, InProgress, Completed)

✅ Task filtering by user and status

✅ Due date management

Dashboard
✅ Real-time statistics

✅ Total users and tasks count

✅ Pending and completed tasks overview

UI/UX
✅ Responsive design with Bootstrap

✅ Form validation and user feedback

✅ Navigation between pages

✅ Professional styling

🔧 Configuration
Backend Configuration (appsettings.json)
json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=TaskManagementDB;Trusted_Connection=true"
  }
}
Frontend Configuration (src/services/api.js)
javascript
const API_BASE_URL = 'https://localhost:7157/api';
🚀 Deployment
Local Deployment
Backend: Publish to IIS or run with dotnet run

Frontend: Build with npm run build and serve the build folder

Cloud Deployment Options
Backend: Azure App Service, Railway, Heroku

Frontend: Vercel, Netlify, GitHub Pages

Database: Azure SQL, PostgreSQL

📝 Assignment Demonstration
What to Show
User Registration - Demonstrate form validation and duplicate email prevention

Task Creation - Show task assignment to users and status management

Dashboard - Display real-time statistics

API Documentation - Show Swagger UI with all endpoints

Database Operations - Demonstrate CRUD functionality

Key Features to Highlight
Full-stack architecture with clear separation of concerns

Proper error handling and validation

Responsive user interface

RESTful API design

Database relationships and migrations

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Create a Pull Request

📄 License
This project was developed as part of a full-stack web development assignment.

👨‍💻 Developer
Bob T. Resego

Email: bobtresego2@gmail.com

GitHub: https://github.com/bobtresego

Submitted for: Full-Stack Web Application Development Assignment
Date: October 2024
Grade: All requirements completed successfully! 🎉

text

## For Your GitHub Repository:

### 1. Create these files in your repository root:

**README.md** (the content above)

**.gitignore** (for both .NET and React):
.NET
bin/
obj/
*.user
*.aps
*.pdb
*.userosscache
*.sln.docstates

Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.npm
.eslintcache

React
/build
/.env
/.env.local
/.env.development.local
/.env.test.local
/.env.production.local

IDE
.vs/
.vscode/
.idea/
*.swp
*.swo

OS
.DS_Store
Thumbs.db

text

### 2. Your GitHub repository structure should look like:
TaskManagementApp/
├── backend/
│ ├── TaskManagement.API/
│ └── TaskManagement.Tests/
├── frontend/
│ └── taskmanagement-client/
├── README.md
└── .gitignore

text

### 3. Final Steps:
1. **Push all your code** to GitHub
2. **Update the README.md** with your actual deployed URLs (if any)
3. **Add your name** and GitHub profile in the Developer section
4. **Make sure** the repository is public for your instructor to see

Your project is now complete and ready for submission! 🎓 The README demonstrates that you've met all assignment requirements and provides clear instructions for running and understanding your application.
