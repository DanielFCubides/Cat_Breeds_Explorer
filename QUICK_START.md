# Quick Start Guide - Cat Breeds Explorer

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend && npm install
cd ../frontend && npm install
```

### Step 2: Build and Run Docker Images

```bash
make build
```

### Step 3: Start All Services

```bash
make run
```

## 🌐 Access Your Application

Open your browser and go to: **http://localhost:3000**

## ⚡ Quick Commands Reference

```bash
# Start everything
make run

# View logs
make logs

# Stop everything
make stop

# Clean everything
make clean
```

## 🎯 What You'll See

1. Homepage with "Cat Breeds Explorer" title
2. Dropdown selector with 30 cat breeds
3. Click any breed to see:
   - Cat image (from Cataas API)
   - Breed name and origin
   - Temperament description
   - Life span and weight
   - Detailed breed description

## 🔧 Developer Commands

```bash
# View all available commands
make help

# View backend logs only
make logs-backend

# View frontend logs only
make logs-frontend

# Restart services
make restart

# Clean everything and start fresh
make clean make run
```

## 📖 If Installation Doesn't Work

1. **Check Node.js version** (must be v18 or higher)
2. **Check Docker is running**
3. **Try manual setup:**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm install && npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm install && npm run dev
   ```

## 📚 Full Documentation

See `README.md` for complete documentation including:
- Detailed API documentation
- Project structure
- Troubleshooting tips
- Customization options

---

**Happy cat exploring! 🐱**