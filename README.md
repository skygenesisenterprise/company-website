# Sky Genesis Enterprise – Official Company Website

Welcome to the official repository for the **Sky Genesis Enterprise website**.  
This repository is for internal use by company developers only.

---

## 🚀 Project Overview

This project contains the source code for the Sky Genesis Enterprise public website.  
The website presents our products, services, company news, and serves as the main digital presence for our brand.

---

## 📦 Tech Stack

- **Frontend:** React (or specify your framework)
- **Backend:** Node.js (or specify your backend)
- **Styling:** CSS/SCSS, Tailwind, etc.
- **Containerization:** Docker
- **CI/CD:** (Specify if used, e.g., GitLab CI, GitHub Actions)
- **Testing:** Jest, React Testing Library, etc.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/skygenesisenterprise/company-website.git
cd company-website
```

### 2. Local Development Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000) (or your configured port).

---

## 🐳 Using Docker

You can run the website in a Docker container for local development or testing.

### Build the Docker image

```bash
docker build -t company-website .
```

### Run the container

```bash
docker run -p 3000:3000 company-website
```

- The app will be accessible at [http://localhost:3000](http://localhost:3000).

#### Environment Variables

- Copy `.env.example` to `.env` and adjust values as needed for your environment.

---

## 🧪 Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

Lint and format code:

```bash
npm run lint
npm run format
```

---

## 🧭 Contribution Guidelines

- Please read the [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for detailed contribution instructions.
- Use feature branches and submit Merge Requests via the internal Git platform.
- Write tests for new features and bug fixes.
- Update documentation as needed.

---

## 🗂️ Project Structure

```
company-website/
├── src/                # Application source code
├── public/             # Static assets
├── .github/            # Contribution and issue templates
├── Dockerfile
├── .env.example
├── package.json
└── README.md
```

---

## 🛡️ Security & Access

- This repository is **internal only**. Do not share code or credentials outside the company.
- Report any security issues to the technical team immediately.

---

## 📩 Support & Questions

- For urgent issues, contact: [webmaster@skygenesisenterprise.com](mailto:webmaster@skygenesisenterprise.com)

---

## 📄 License

This project use the AGPLv3 licence see [licence](LICENSE)
© Sky Genesis Enterprise. All rights reserved.
