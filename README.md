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
