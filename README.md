# Budget Trip Planner

A full-stack application that allows users to plan a trip based on a specific destination and a target budget. It intelligently curates the best combinations of flights, hotels, food, and activities that fit exactly into your budget.

## Project Structure

This project is a monorepo containing both the frontend and backend:

- `/frontend` - React (Vite) application with a premium, glassmorphism design.
- `/backend` - Node.js (Express) server that handles the itinerary generation algorithm and mock data.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Running the Backend
```bash
cd backend
npm install
node server.js
```
The backend will run on `http://localhost:5000`.

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will typically run on `http://localhost:5173`.

## Tech Stack
- **Frontend**: React, Vite, Vanilla CSS (Custom Design System), Lucide React (Icons), Axios.
- **Backend**: Node.js, Express, CORS.
