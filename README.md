# React TypeScript Template

A modern web application template built with React, TypeScript, ESLint, Jest, and Tailwind CSS.

## Features

- ⚛️ React 19 with TypeScript
- 🎨 Tailwind CSS for styling
- 📦 Vite for fast development and building
- 🧪 Jest and React Testing Library for testing
- 🔧 ESLint for code linting
- 🏗️ Modern tooling and configuration

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-typescript-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx    # Sample button component
│   ├── Button.test.tsx
│   └── index.ts      # Component exports
├── App.tsx           # Main application component
├── App.test.tsx      # App component tests
├── main.tsx          # Application entry point
├── index.css         # Global styles
├── setupTests.ts     # Jest setup
└── vite-env.d.ts     # Vite type definitions
```

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `jest.config.js` - Jest configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.ts` - Vite configuration

## Testing

This template includes Jest and React Testing Library for testing. Tests are located alongside their corresponding components with the `.test.tsx` extension.

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

## License

MIT License