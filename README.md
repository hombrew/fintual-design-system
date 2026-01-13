# Fintual Design System

This Design System is maintained by Manuel Maldonado.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `app`: a [Expo](https://expo.dev/) mobile app
- `web`: a [React Router V7](https://reactrouter.com/) app
- `@repo/core`: a React package containing the base of the design system. Exports universal base components and style configurations for web and mobile platforms.
- `@repo/typography`: a React package containing a typography component ready to use and distribute.
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

For configuring your current environment, it is advised to first install and activate [mise](https://mise.jdx.dev/). Mise is a tool that helps installing the dependencies of your project. For more information, check `mise.toml` in the root of this project.

```bash
mise trust mise.toml
mise install
```

with the environment in place:

```bash
pnpm i
```

### Running the apps

for running the frontend app:

```bash
pnpm run dev
```

for running the mobile app:

```bash
cd apps/app
pnpm run android
```

### Notes

Mobile app has been tested only on Android in ArchLinux using [Waydroid](https://waydro.id/); but iOS should just work.
