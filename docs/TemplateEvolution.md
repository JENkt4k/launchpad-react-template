# Template Evolution Pattern

This document describes the evolution pattern used in the Launchpad React Template, combining Monorepo architecture with modular components and branch-based feature progression.

## Branch Structure

```
main                 # Default with README, CLI notes
├── hello-world      # Just frontend + routing
├── layout-added     # Layout components introduced
├── auth-oauth       # OAuth login added
└── full-dashboard   # CRM, calendar, etc.
```

Each branch represents a different level of complexity and features:

- **main**: Base documentation and CLI setup
- **hello-world**: Minimal frontend with routing
- **layout-added**: Introduces layout components and structure
- **auth-oauth**: Adds authentication and authorization
- **full-dashboard**: Complete application with CRM features

## Project Architecture

```
launchpad-react-template/
├── backend/           # Express backend application
├── frontend/         # React frontend application
├── shared/           # Shared types and utilities
├── modules/          # Optional: default merge-in modules
│   ├── auth-oauth/   # Authentication module
│   └── generators/   # Code generators
├── .env.example      # Environment configuration
├── package.json      # Project configuration
└── README.md         # Documentation
```

## Usage with CLI

You can generate a new project using specific features:

```bash
npx create-app-template --framework react --branch hello-world --include auth-oauth,generators
```

This command:
- Uses React as the framework
- Starts from hello-world branch
- Includes auth-oauth and generators modules