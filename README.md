# Courier Tracking System

A full-stack courier tracking application built with React + Vite on the frontend and Django REST Framework on the backend. The project is structured for local development and GitHub-ready deployment.

## Overview

This application allows users to manage courier records, track deliveries, and view courier status through a simple dashboard interface. It is designed to be easy to run locally and deploy to cloud hosting platforms.

## Features

- Dashboard overview for courier activity
- Add, edit, and delete courier records
- Track courier status by tracking number
- Responsive UI built with Tailwind CSS
- RESTful API backend powered by Django REST Framework

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router
- Backend: Django, Django REST Framework
- Database: SQLite (local development)
- Package Management: npm, pip

## Folder Structure

```text
courier-tracking-system/
├── client/                # React + Vite frontend
│   ├── src/               # Application source code
│   └── package.json       # Frontend dependencies
├── server/                # Django backend
│   ├── courier/           # API app
│   ├── server/            # Django project settings
│   └── requirements.txt   # Python dependencies
└── README.md              # Project documentation
```

## Installation

### Frontend

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

### Backend

```bash
cd server
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

## Environment Variables

### Frontend

Create a client-side environment file using the example provided:

```bash
VITE_API_BASE_URL=http://127.0.0.1:8000/api/
```

### Backend

Create a server-side environment file using the example provided:

```bash
SECRET_KEY=replace-with-a-secure-secret
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

## API Endpoints

The backend exposes the following REST API routes under the /api/ prefix:

- GET /api/couriers/
- POST /api/couriers/add/
- GET /api/couriers/<tracking_number>/
- PUT /api/couriers/update/<pk>/
- DELETE /api/couriers/delete/<pk>/

## Deployment Instructions

### Frontend

1. Build the frontend for production:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the contents of the dist/ folder to a static host such as Vercel or Netlify.
3. Set the VITE_API_BASE_URL environment variable to your deployed backend URL.

### Backend

1. Install production dependencies:
   ```bash
   cd server
   pip install -r requirements.txt
   ```
2. Configure environment variables for your hosting provider.
3. Run database migrations:
   ```bash
   python manage.py migrate
   ```
4. Collect static files:
   ```bash
   python manage.py collectstatic --noinput
   ```

> Note: SQLite is suitable for local development. For production deployments, consider switching to PostgreSQL for better reliability.

## Screenshots

Add screenshots of the dashboard, courier form, and tracking page here once the app is deployed or captured locally.

## Future Improvements

- Add authentication and role-based access control
- Integrate a production database such as PostgreSQL
- Add automated tests for the frontend and backend
- Improve deployment pipelines with CI/CD

## Author

Dhanu
