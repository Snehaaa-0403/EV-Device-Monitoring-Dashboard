EV Device Monitoring Dashboard

A full-stack assignment built using React + Tailwind (frontend) and Node.js + Express (backend).

🚀 Backend Setup
cd backend
npm install
npm start


Backend runs at:
http://localhost:5000

API Routes:

GET /api/devices
GET /api/devices?status=active
GET /api/devices?status=warning
GET /api/devices?status=offline

🌐 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173

Ensure the backend is running so the frontend can fetch data.

📁 Project Structure
backend/      → Express API
frontend/     → React + Tailwind UI
screenshot/   → UI screenshots
README.md
