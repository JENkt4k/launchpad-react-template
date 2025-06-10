# README.md

# Launchpad React Template

A modern full-stack template for building React applications, featuring a modular evolution pattern.

## Template Evolution

This template follows a branch-based evolution pattern, allowing you to choose the complexity level that matches your needs:

```
main                 # Default with README, CLI notes
├── hello-world      # Just frontend + routing
├── layout-added     # Layout components introduced
├── auth-oauth       # OAuth login added
└── full-dashboard  # CRM, calendar, etc.
```

For detailed information about the evolution pattern and architecture, see [Template Evolution](./docs/TemplateEvolution.md).

## Project Structure

```
launchpad-react-template/
├── backend/         # Express backend application
├── frontend/       # React frontend application
└── shared/         # Shared code and definitions
```

## Quick Start

### Option 1: Using CLI (Recommended)
```bash
# Create new project using CLI
npx create-app-template --framework react --branch hello-world --include auth-oauth,generators
```

This command:
- Creates a new project using React
- Starts from the hello-world branch
- Includes auth-oauth and generators modules

### Option 2: Manual Clone
```bash
# Clone the basic version
git clone -b hello-world https://github.com/JENkt4k/launchpad-react-template.git

# Or clone with authentication
git clone -b auth-oauth https://github.com/JENkt4k/launchpad-react-template.git
```

2. Start the application:
```bash
docker-compose up --build
```

## Documentation

- [Template Evolution](./docs/TemplateEvolution.md)
- [Docker Configuration](./docs/DockerRuntimeConfiguration.md)

## License

This project is licensed under the MIT License.