# Docker Runtime Configuration Guide

This guide explains the different ways to run the Launchpad React Template application using Docker and VS Code.

## Configuration Options

The application supports three different runtime configurations:

### 1. Full Docker Environment
Run both frontend and backend services in Docker containers:

```powershell
docker-compose --profile docker up --build
```

This will:
- Start frontend on port 3300
- Start backend on port 4001
- Enable hot reloading
- Create a shared network

### 2. Hybrid Mode (Frontend in VS Code, Backend in Docker)
Run the backend in Docker while developing frontend in VS Code:

```powershell
# Terminal 1: Start backend only
docker-compose --profile local up --build

# Terminal 2: Start frontend locally
cd frontend
npm run dev:local
```

### 3. Local Development Mode
Run both services locally in VS Code:

```powershell
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev:local
```

## Environment Configuration

### Frontend (.env.local)
```plaintext
VITE_API_URL=http://localhost:4001/api
```

### Backend (.env)
```plaintext
PORT=4001
NODE_ENV=development
```

## Docker Profiles

The docker-compose.yml includes two profiles:
- `docker`: Used for running all services in containers
- `local`: Used for running only the backend in Docker

## Hot Reloading

### Docker Volume Mounts and Watching
To enable hot reloading in Docker environments, three key configurations work together:

1. **Volume Mounts** in docker-compose.yml:
```yaml
volumes:
  - type: bind
    source: ./frontend
    target: /app
  - type: volume
    source: node_modules
    target: /app/node_modules
```

2. **Environment Variables** for file watching:
```yaml
environment:
  - CHOKIDAR_USEPOLLING=true
  - WATCHPACK_POLLING=true
```

3. **Vite Configuration** in vite.config.ts:
```typescript
server: {
  watch: {
    usePolling: true,
    interval: 1000,
  }
}
```

### How It Works
- Bind mount syncs local changes to container
- Named volume preserves container node_modules
- File watchers use polling to detect changes
- Vite's HMR updates the browser without refresh

### Troubleshooting Hot Reload
If hot reloading stops:
1. Verify file permissions
2. Check Docker volume mounts:
```powershell
docker-compose ps
docker volume ls
```
3. Restart containers with:
```powershell
docker-compose down
docker volume rm launchpad-react-template_node_modules
docker-compose --profile docker up --build
```