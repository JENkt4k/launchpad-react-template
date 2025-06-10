# README.md

# Launchpad React Template

Welcome to the Launchpad React Template! This project is a full-stack monorepo that combines a Node.js backend with a React frontend, designed to help you kickstart your development.

## Project Structure

```
launchpad-react-template
├── backend
├── frontend
└── shared
```

- **backend/**: Contains the Express backend application.
- **frontend/**: Contains the React frontend application.
- **shared/**: Contains shared code and definitions used by both the frontend and backend.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker (for running the application in containers)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd launchpad-react-template
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

4. Install dependencies for the shared module:

   ```bash
   cd ../shared
   npm install
   ```

### Running the Application

You can run the backend and frontend applications separately or use Docker to run them together.

#### Running Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   npm start
   ```

#### Running Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

### Using Docker

To run the application using Docker, you can use the provided `docker-compose.yml` file:

```bash
docker-compose up
```

### Environment Variables

Make sure to create a `.env` file in both the `backend` and `frontend` directories based on the provided `.env.example` files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.