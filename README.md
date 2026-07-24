# Cat Breeds Explorer

A modern web application for exploring cat breeds with detailed information, beautiful UI interface, and containerized deployment using Docker.

## 🐱 Overview

This application allows users to browse and explore different cat breeds with detailed information about each breed. The frontend is built with React and Tailwind CSS, while the backend provides a RESTful API with mock data for approximately 30 popular cat breeds.

## ✨ Features

- **Modern React UI** with Tailwind CSS styling
- **Breed Selection** through a dropdown interface
- **Detailed Breed Information** including:
  - Breed name and origin
  - Temperament description
  - Life span and weight measurements
  - Detailed breed description
  - Cat images
- **Docker Containerization** for easy deployment
- **Containerized Development** with local API integration
- **Responsive Design** for mobile and desktop devices

## 🏗️ Tech Stack

### Frontend
- **React 18** - Latest React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Cataas API** - For retrieving breed-specific cat images

### Backend
- **Node.js** with Express.js
- **Express.js** - Web server and RESTful API
- **Mock Data** - 30 pre-configured cat breeds in JSON format

### Infrastructure
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Makefile** - Convenient build and run commands

## 📁 Project Structure

```
Cat_Breeds_Explorer/
├── backend/
│   ├── src/
│   │   ├── server.js              # Express server entry point
│   │   ├── routes/
│   │   │   └── breeds.js          # Breed API endpoints
│   │   └── data/
│   │       └── breeds.json        # Mock breed data (~30 breeds)
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx                # Main React application
│   │   ├── components/
│   │   │   ├── BreedSelector.jsx    # Dropdown selector component
│   │   │   └── BreedDetails.jsx     # Breed details display component
│   │   ├── utils/
│   │   │   └── helpers.js          # Utility functions
│   │   ├── index.js               # Entry point
│   │   └── App.css                # Custom styles
│   ├── index.html
│   ├── tailwind.config.js         # Tailwind configuration
│   ├── tailwind.css               # Global styles
│   ├── vite.config.js             # Vite configuration
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── docker-compose.yml             # Service orchestration
├── Makefile                       # Build/run commands
└── README.md                      # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Cat_Breeds_Explorer
   ```

2. **Install dependencies**
   ```bash
   make install
   ```
   or manually:
   ```bash
   cd backend && npm install
   cd frontend && npm install
   ```

### Running the Application

#### Option 1: Using Docker Compose (Preferred)

1. **Start all services**
   ```bash
   make run
   ```

2. **Access the application**
   Open `http://localhost:3000` in your browser

3. **Stop all services**
   ```bash
   make stop
   ```

#### Option 2: Using Makefile

**Development mode (local port binding):**
```bash
make dev
```

**Build Docker images:**
```bash
make build
```

**Start services:**
```bash
make run
```

**View logs:**
```bash
make logs
```

**Clean up:**
```bash
make clean
```

#### Option 3: Manual Setup

**Backend:**
```bash
cd backend
npm install
npm run dev
```
Backend API will be available at `http://localhost:5000`

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available at `http://localhost:5173`

## 📡 API Endpoints

### Backend API (localhost:5000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/breeds` | Get list of all breeds |
| GET | `/api/breeds/:id` | Get specific breed details |

### API Response Format

**List of breeds:**
```json
{
  "success": true,
  "data": [
    {
      "id": "abys",
      "name": "Abyssinian"
    }
  ]
}
```

**Breed details:**
```json
{
  "success": true,
  "data": {
    "id": "abys",
    "name": "Abyssinian",
    "temperament": "Active, playful, curious, intelligent",
    "origin": "Egypt",
    "life_span": "12-15 years",
    "weight": {
      "metric": "4.5-7.5",
      "imperial": "10-16"
    },
    "description": "The Abyssinian is known for its elegant, muscular body...",
    "image_id": "Ab4"
  }
}
```

## 👨‍💻 Development

### Modifying Breed Data

Edit the breed data in `backend/data/breeds.json` to add new breeds or modify existing information.

### Adding New Features

1. **Backend Changes:**
   - Add new routes in `backend/src/routes/index.js`
   - Update API endpoints in `backend/src/routes/routes.js`

2. **Frontend Changes:**
   - Modify components in `frontend/src/components/`
   - Update main application in `frontend/src/App.jsx`
   - Add new styles in `frontend/tailwind.css`

## 🛠️ Available Make Commands

| Command | Description |
|---------|-------------|
| `make help` | Show help message with all available commands |
| `make dev` | Start development servers |
| `make build` | Build Docker images |
| `make run` | Start all services |
| `make stop` | Stop all running containers |
| `make logs` | Show logs from all services |
| `make clean` | Remove containers and images |
| `make install` | Install dependencies for both frontend and backend |

## 🌐 Container Networking

The Docker Compose configuration sets up a shared network (`cat-network`) allowing the frontend to communicate with the backend API using their container names:
- Frontend accesses backend: `http://backend:5000`
- Backend responds on port: `5000`
- Frontend listens on port: `5173` (mapped to 3000 externally)

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://backend:5000/api
```

## 🎨 Customization

### Theme Colors
Modify the color configuration in `frontend/tailwind.config.js` to change the primary color scheme.

### API Integration
The system is designed to prevent direct Cat API calls from the frontend. All API requests are routed through the backend.

## 🐛 Troubleshooting

### Backend not starting
- Check if port 5000 is already in use
- Ensure Node.js version is compatible (v18+)
- Review logs with `make logs-backend`

### Frontend not loading breeds
- Verify backend is running
- Check network connectivity between containers
- Review frontend logs with `make logs-frontend`

### Images not loading
- Ensure Cataas API is accessible
- Verify breed image_id values in `backend/data/breeds.json`

### Docker issues
- Ensure Docker and Docker Compose are properly installed
- Check container logs: `docker-compose logs`
- Try rebuilding: `make clean && make build`

## 📝 Breed Statistics

The application includes information for approximately 30 popular cat breeds covering various sizes, temperaments, and origins.

## 📄 License

MIT License - feel free to use and modify for your projects.

## 👥 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 🙏 Acknowledgments

- **Cataas API** for cat image generation
- **Cat API** for inspiration and data structure
- The community of cat lovers and developers

---

Built with ❤️ using React, Node.js, and Docker | **Cat Breeds Explorer** © 2024