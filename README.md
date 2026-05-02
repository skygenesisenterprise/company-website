<div align="center">

# 🚀 Official Enterprise Website

[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](https://github.com/anomalyco/company-website/blob/main/LICENSE) [![Go](https://img.shields.io/badge/Go-1.21+-blue?style=for-the-badge&logo=go)](https://golang.org/) [![Gin](https://img.shields.io/badge/Gin-1.9+-lightgrey?style=for-the-badge&logo=go)](https://gin-gonic.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19.2.1-blue?style=for-the-badge&logo=react)](https://react.dev/)

**Enterprise-Grade Web Platform - Hybrid Architecture with Complete Package Ecosystem**

A modern enterprise website platform built with **hybrid Go/TypeScript architecture**, featuring **complete authentication system**, **Next.js 16 frontend**, **Go backend API**, and **enterprise-ready monorepo design** with enhanced capabilities.

[🚀 Quick Start](#-quick-start) • [📋 What's New](#-whats-new) • [📊 Current Status](#-current-status) • [🛠️ Tech Stack](#️-tech-stack) • [📁 Architecture](#-architecture) • [🤝 Contributing](#-contributing)

[![GitHub stars](https://img.shields.io/github/stars/skygenesisenterprise/company-website?style=social)](https://github.com/skygenesisenterprise/company-website/stargazers) [![GitHub forks](https://img.shields.io/github/forks/skygenesisenterprise/company-website?style=social)](https://github.com/skygenesisenterprise/company-website/network) [![GitHub issues](https://img.shields.io/github/issues/github/skygenesisenterprise/company-website)](https://github.com/skygenesisenterprise/company-website/issues)

</div>

---

## 🌟 What is Official Enterprise Website?

**Official Enterprise Website** is a comprehensive enterprise web platform built with **hybrid Go/TypeScript architecture**. It features a **complete authentication system**, **modern frontend**, **high-performance backend**, and **enterprise-ready capabilities**.

### 🎯 Our Vision

- **🚀 Hybrid Architecture** - Go 1.21+ backend + TypeScript 5 frontend
- **🔐 Complete Authentication System** - JWT-based system with **login/register forms and context**
- **⚡ High-Performance Backend** - Go-based server with **Gin + GORM**
- **🎨 Modern Frontend** - **Next.js 16 + React 19.2.1 + shadcn/ui** component library
- **🏗️ Enterprise-Ready Design** - Scalable, secure, and maintainable architecture
- **🛠️ Developer-Friendly** - Hot reload, TypeScript strict mode, Make commands

---

## 🆕 What's New

### 🎯 **Recent Updates**

#### 🏗️ **Enhanced Architecture**

- ✅ **Hybrid Monorepo Structure** - Go backend + TypeScript frontend workspaces
- ✅ **Docker Deployment** - Production-ready containerization
- ✅ **Security Enhancements** - Rate limiting, input validation, CORS
- ✅ **Development Environment** - Hot reload, TypeScript strict mode

#### 📚 **Documentation**

- ✅ **Architecture Documentation** - Comprehensive system docs
- ✅ **API Documentation** - Step-by-step integration guides
- ✅ **Component Library** - shadcn/ui components

---

## 📊 Current Status

> **✅ Active Development**: Enterprise web platform with hybrid Go/TypeScript architecture.

### ✅ **Currently Implemented**

#### 🏗️ **Core Foundation**

- ✅ **Hybrid Monorepo Architecture** - Go backend + TypeScript frontend workspaces
- ✅ **Go Backend Server** - High-performance Gin API with **GORM + PostgreSQL**
- ✅ **Next.js 16 Frontend** - Modern React 19.2.1 with **shadcn/ui + Tailwind CSS**
- ✅ **PostgreSQL Database** - User models and data persistence
- ✅ **JWT Authentication** - Complete login/register implementation
- ✅ **CLI Tools** - Command-line interface for server management

#### 🛠️ **Development Infrastructure**

- ✅ **Development Environment** - Hot reload, Type_script strict mode, Go modules
- ✅ **Docker Deployment** - Production-ready containers
- ✅ **Security Implementation** - Rate limiting, validation, security headers
- ✅ **Structured Logging** - Comprehensive logging

### 🔄 **In Development**

- **User Management Dashboard** - Complete CRUD interface
- **Additional Features** - Extended platform capabilities
- **API Documentation** - Comprehensive endpoints docs
- **Testing Suite** - Unit and integration tests

### 📋 **Planned Features**

- **Advanced Security** - Enhanced authentication and authorization
- **Multi-tenancy** - Enterprise multi-tenant support
- **Analytics Dashboard** - User and platform analytics
- **CMS Integration** - Content management system

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Go** 1.21.0 or higher (for backend)
- **Node.js** 18.0.0 or higher (for frontend)
- **pnpm** 9.0.0 or higher (recommended package manager)
- **PostgreSQL** 14.0 or higher (for database)
- **Docker** (optional, for deployment)
- **Make** (for command shortcuts)

### 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/skygenesisenterprise/company-website.git
   cd company-website
   ```

2. **Quick start (recommended)**

   ```bash
   # Install dependencies and start
   make dev
   ```

3. **Manual setup**

   ```bash
   # Install Node.js dependencies
   pnpm install

   # Install Go dependencies
   cd server && go mod download && cd ..

   # Environment setup
   cp .env.example .env

   # Start development servers
   make dev
   ```

### 🌐 Access Points

Once running, you can access:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API Server**: [http://localhost:8080](http://localhost:8080)
- **Health Check**: [http://localhost:8080/health](http://localhost:8080/health)

### 🎯 **Make Commands**

```bash
# 🚀 Quick Start & Development
make dev                  # Start all services (frontend + backend)
make dev-frontend         # Frontend only (port 3000)
make dev-backend         # Backend only (port 8080)

# 🔧 Go Backend Commands
make server              # Start Go server
make server-build      # Build Go binary

# 🏗️ Building & Production
make build             # Build all packages
make build-frontend  # Build frontend
make start            # Start production servers

# 🔧 Code Quality
make lint             # Lint all packages
make typecheck       # Type check all packages

# 🗄️ Database
make db-migrate      # Run migrations

# 🛠️ Utilities
make help           # Show all available commands
make clean          # Clean build artifacts
```

---

## 🛠️ Tech Stack

### 🎨 **Frontend Layer**

```
Next.js 16 + React 19.2.1 + TypeScript 5
├── 🎨 Tailwind CSS + shadcn/ui (Styling & Components)
├── 🔐 JWT Authentication
├── 🛣️ Next.js App Router (Routing)
├── 📝 TypeScript Strict Mode (Type Safety)
├── 🔄 React Context (State Management)
└── 🔧 ESLint + Prettier (Code Quality)
```

### ⚙️ **Backend Layer**

```
Go 1.21+ + Gin Framework
├── 🗄️ GORM + PostgreSQL (Database Layer)
├── 🔐 JWT Authentication
├── 🛡️ Middleware (Security, CORS, Logging)
├── 🌐 HTTP Router (Gin Router)
├── 📦 JSON Serialization (Native Go)
└── 📊 Structured Logging
```

### 🗄️ **Data Layer**

```
PostgreSQL + Prisma/GORM
├── 🏗️ Schema Management (Auto-migration)
├── 🔍 Query Builder (Type-Safe Queries)
├── 🔄 Connection Pooling (Performance)
└── 👤 User Models (Complete Implementation)
```

### 🏗️ **Monorepo Infrastructure**

```
Make + pnpm Workspaces + Go Modules
├── 📦 app/ (Next.js Frontend - TypeScript)
├── ⚙️ server/ (Gin API - Go)
├── 🛠️ cmd/ (Command Line Tools - Go)
├── 📦 package/ (Package Ecosystem)
└── 🐳 docker/ (Container Configuration)
```

---

## 📁 Architecture

### 🏗️ **Monorepo Structure**

```
company-website/
├── app/                     # Next.js 16 Frontend Application (TypeScript)
│   ├── app/               # Next.js App Router pages
│   ├── components/       # React components with shadcn/ui
│   │   └── ui/          # UI component library
│   ├── context/         # React contexts (authentication, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── styles/        # Tailwind CSS styling
│   ├── types/         # TypeScript definitions
│   └── public/        # Static assets
├── server/                 # Go Backend Server
│   ├── src/
│   │   ├── config/    # Database and server configuration
│   │   ├── controllers/ # HTTP request handlers
│   │   ├── middleware/ # Gin middleware
│   │   ├── models/   # Data models and structs
│   │   ├── routes/  # API route definitions
│   │   └── services/ # Business logic
│   ├── main.go        # Main server entry point
│   ├── go.mod        # Go modules file
│   └── prisma/       # Database schema
├── cmd/                    # Command Line Tools (Go)
│   ├── internal/      # Internal packages
│   └── pkg/           # Public packages
├── package/                # Package Ecosystem
├── docker/                 # Docker Configuration
├── infrastructure/         # Infrastructure as Code
└── Makefile              # Build commands
```

### 🔄 **Data Flow Architecture**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   Gin API         │    │   PostgreSQL    │
│   (Frontend)    │◄──►│   (Backend)       │◄──►│   (Database)    │
│  Port 3000      │    │  Port 8080        │    │  Port 5432      │
│  TypeScript     │    │  Go              │    │                │
└─────────────────┘    └──────────────────┘    └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
  React Context         API Endpoints         User/Data
  shadcn/ui Components  Authentication      GORM ORM
        │                       │
        ▼                       ▼
    💾 Session           🛡️ Security
    LocalStorage         Middleware
```

---

## 🗺️ Development Roadmap

### 🎯 **Phase 1: Foundation (✅ Complete)**

- ✅ **Hybrid Monorepo Setup** - Go backend + TypeScript frontend
- ✅ **Authentication System** - Complete JWT implementation
- ✅ **Frontend Framework** - Next.js 16 + React 19.2.1 + shadcn/ui
- ✅ **Go Backend API** - Gin with authentication endpoints
- ✅ **Database Layer** - PostgreSQL with user models
- ✅ **Docker Deployment** - Production-ready containers
- ✅ **Development Environment** - TypeScript strict mode, Go modules

### 🚀 **Phase 2: Features (🔄 In Progress)**

- 🔄 **User Management Dashboard** - Complete CRUD interface
- 🔄 **API Documentation** - Comprehensive docs
- 📋 **Testing Suite** - Unit and integration tests
- 📋 **Analytics Dashboard** - Platform analytics

### 🌟 **Phase 3: Enterprise Features**

- 📋 **Multi-tenancy** - Enterprise multi-tenant support
- 📋 **Advanced Security** - Enhanced authentication
- 📋 **CMS Integration** - Content management
- 📋 **Performance Optimization** - Caching and optimization

---

## 💻 Development

### 🎯 **Make Command Interface**

The project uses **Makefile** for streamlined development:

```bash
# Quick Start
make dev                  # Start all services

# Frontend
make dev-frontend        # Frontend development
make build-frontend      # Build frontend

# Backend
make dev-backend         # Backend development
make server-build       # Build backend

# Code Quality
make lint              # Lint code
make typecheck        # Type check

# Database
make db-migrate       # Run migrations

# Cleanup
make clean            # Clean artifacts
make help            # Show all commands
```

### 📋 **Development Workflow**

```bash
# New developer setup
make dev

# Daily development
make dev              # Start working
make lint-fix        # Fix code issues
make typecheck      # Verify types

# Before committing
make lint           # Check code quality
make typecheck      # Verify types
```

### 📋 **Development Guidelines**

- **TypeScript Strict Mode** - All frontend code must pass strict type checking
- **Go Best Practices** - Follow Go conventions for backend code
- **Conventional Commits** - Use standardized commit messages
- **Component Structure** - Follow established patterns for React components
- **API Design** - RESTful endpoints with proper HTTP methods

---

## 🔐 Authentication System

### 🎯 **Complete Implementation**

The authentication system is fully implemented with Go backend and TypeScript frontend:

- **JWT Tokens** - Secure token-based authentication
- **Login/Register Forms** - Complete user authentication flow
- **Auth Context** - Global authentication state management
- **Protected Routes** - Route-based authentication guards
- **Go API Endpoints** - Complete authentication API with Gin
- **Password Security** - bcrypt hashing for secure password storage

### 🔄 **Authentication Flow**

```
// Registration Process
1. User submits registration → API validation
2. Password hashing with bcrypt → Database storage
3. JWT tokens generated → Client receives tokens
4. Auth context updates → User logged in

// Login Process
1. User submits credentials → API validation
2. Password verification → JWT token generation
3. Tokens stored → Auth context updated
4. Redirect to dashboard → Protected route access
```

---

## 🤝 Contributing

We're looking for contributors to help build this enterprise web platform!

### 🎯 **How to Get Started**

1. **Fork the repository** and create a feature branch
2. **Check the issues** for tasks that need help
3. **Join discussions** about architecture and features
4. **Start small** - Documentation, tests, or minor features
5. **Follow our code standards** and commit guidelines

### 🏗️ **Areas Needing Help**

- **Go Backend Development** - API endpoints, business logic, security
- **TypeScript Frontend Development** - React components, UI/UX design
- **Database Design** - Schema development, migrations, optimization
- **DevOps Engineers** - Docker, deployment, CI/CD
- **Documentation** - API docs, user guides, tutorials

---

## 📞 Support & Community

### 💬 **Get Help**

- 📖 **[Documentation](docs/)** - Comprehensive guides and API docs
- 🐛 **[GitHub Issues](https://github.com/skygenesisenterprise/company-website/issues)** - Bug reports
- 💡 **[GitHub Discussions](https://github.com/skygenesisenterprise/company-website/discussions)** - General questions

### 🐛 **Reporting Issues**

When reporting bugs, please include:

- Clear description of the problem
- Steps to reproduce
- Environment information
- Error logs or screenshots
- Expected vs actual behavior

---

## 📊 Project Status

| Component                 | Status         | Technology                | Notes                             |
| ------------------------- | -------------- | ------------------------- | --------------------------------- |
| **Hybrid Architecture**   | ✅ Working     | Go + TypeScript           | Monorepo design                    |
| **Authentication System** | ✅ Working     | JWT (Go/TS)             | Full implementation with forms    |
| **Go Backend API**        | ✅ Working     | Gin + GORM               | High-performance                  |
| **Frontend Framework**    | ✅ Working     | Next.js 16 + React 19.2.1 | shadcn/ui + Tailwind CSS         |
| **Database Layer**        | ✅ Working     | PostgreSQL              | User models                     |
| **Docker Deployment**   | ✅ Working     | Multi-Stage             | Production-ready containers     |
| **User Management**      | 📋 Planned     | Go/TS                    | Dashboard interface            |
| **Testing Suite**        | 📋 Planned     | Go/TS                    | Unit and integration tests       |

---

## 🏆 Sponsors & Partners

**Development led by [Anomaly Co](https://skygenesisenterprise.com)**

We're looking for sponsors and partners to help accelerate development.

[🤝 Become a Sponsor](https://github.com/sponsors/skygenesisenterprise)

---

## 📄 License

This project is licensed under the **AGPLv3 Licence** - see the [LICENSE](LICENSE) file for details.

```
GNU AFFERO GENERAL PUBLIC LICENSE
   Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

        Preamble

The GNU Affero General Public License is a free, copyleft license for
software and other kinds of works, specifically designed to ensure
cooperation with the community in the case of network server software.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
our General Public Licenses are intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.

When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.
```

---

## 🙏 Acknowledgments

- **Sky Genesis Enterprise** - Projet leadership and evolution
- **Go Community** - High-performance programming language and ecosystem
- **Gin Framework** - Lightweight HTTP web framework
- **GORM Team** - Modern Go database library
- **Next.js Team** - Excellent React framework
- **React Team** - Modern UI library
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework
- **pnpm** - Fast, disk space efficient package manager
- **Docker Team** - Container platform and tools

---

<div align="center">

### 🚀 **Join Us in Building the Future of Enterprise Web Platforms!**

[⭐ Star This Repo](https://github.com/skygenesisenterprise/company-website) • [🐛 Report Issues](https://github.com/skygenesisenterprise/company-website/issues) • [💡 Start a Discussion](https://github.com/skygenesisenterprise/company-website/discussions)

---

**Enterprise-Grade Web Platform with Hybrid Go/TypeScript Architecture**

**Made with ❤️ by the [Sky Genesis Enterprise](https://skygenesisenterprise.com) team**

_Building a modern enterprise web platform with complete authentication and enterprise-ready capabilities_

</div>