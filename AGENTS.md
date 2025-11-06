# AGENTS.md

## Commands
- **Build**: `pnpm run build` (Next.js with Turbopack)
- **Lint**: `pnpm run lint` (ESLint with Next.js config)
- **Test**: `pnpm run test` (Jest)
- **Single test**: `npx jest <test-file-path>` or `npx jest --testNamePattern="<test-name>"`
- **Integration tests**: `pnpm run test:integration` (Cypress)
- **Coverage**: `pnpm run coverage`
- **Dev**: `pnpm run dev` (runs both frontend and backend)

## Code Style Guidelines

### Imports & Formatting
- Use absolute imports with `@/*` path alias (configured in tsconfig.json)
- React components: `'use client'` directive at top for client components
- Group imports: external libraries first, then internal modules
- Use TypeScript strict mode (enabled in tsconfig.json)

### Naming Conventions
- Components: PascalCase (e.g., `Navbar`, `LoginPage`)
- Functions/variables: camelCase
- Files: kebab-case for pages, PascalCase for components
- Constants: UPPER_SNAKE_CASE

### Error Handling
- Use try-catch blocks with proper error typing
- API routes: return 500 for server errors, appropriate status codes for client errors
- Frontend: display user-friendly error messages, log technical details

### TypeScript
- Strict typing enabled - always type function parameters and return values
- Use interfaces for object shapes
- Use proper generic types where applicable
- Import types with `import type` when possible

### React Patterns
- Use functional components with hooks
- State management: useState for local state, useEffect for side effects
- Event handlers: use proper event types (React.FormEvent, etc.)
- Client components: add `'use client'` directive

### API Structure
- Controllers handle HTTP logic, services contain business logic
- Use Express.js with TypeScript
- Proper request/response typing with Express types
- Middleware for authentication and validation

### Testing
- Jest for unit tests, Cypress for integration tests
- Test files: `.test.ts` or `.test.tsx` extension
- Use supertest for API testing
- Follow AAA pattern (Arrange, Act, Assert)