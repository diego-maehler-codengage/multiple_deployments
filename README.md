# PoC of Monorepo

## Project Structure

### Folders

This follows the convention of [NPM Workspaces](https://vercel.com/docs/vercel-platform/glossary#workspace)

- **apps/**: Contains the main applications.
  - **admin/**: Admin application.
  - **customer/**: Customer application.
- **packages/**: Contains shared packages.
  - **shared/**: Shared code and utilities.

## Running the Project

This project uses [Turborepo](https://turbo.build/repo) for managing and running tasks across multiple packages and applications in a monorepo structure.

### Prerequisites

Ensure you have the necessary dependencies installed:

```sh
npm install
```

It's recommended that Turborepo is installed globally to use its cli tools.

```sh
npm install turbo --global
```

### Running dev

You can run all apps by executing:

```sh
turbo dev
```

It's also possible to run only one app at a time by executing:

```sh
turbo dev --filter=admin
```

## Deploying to Vercel

When configuring the deployment, simply select the app's folder that you want to deploy as the root folder of the deployment.

### Environment variables

Turborepo requires that environment variables are declared in the `turbo.json` file configuration, see [docs](https://turbo.build/repo/docs/crafting-your-repository/using-environment-variables) on that.
