```markdown
# discord-enterprise Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on contributing to the `discord-enterprise` TypeScript codebase, which is built on the Express framework. You'll learn the repository's coding conventions, commit message patterns, and how to write and locate tests. The guide also includes suggested commands for common development tasks.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userController.ts`, `messageService.ts`

### Import Style
- Use **relative imports** for modules within the codebase.
  - Example:
    ```typescript
    import { getUser } from './userService';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // userService.ts
    export function getUser(id: string) { ... }
    ```

### Commit Messages
- Follow **Conventional Commits** format.
- Use the `build` prefix for build-related changes.
- Keep commit messages concise (average ~48 characters).
  - Example:
    ```
    build: update dependencies to latest versions
    ```

## Workflows

### Creating a New Feature
**Trigger:** When adding a new feature to the codebase  
**Command:** `/create-feature`

1. Create a new file using camelCase naming.
2. Write your feature using TypeScript and Express conventions.
3. Use relative imports for any internal modules.
4. Export your functions or classes using named exports.
5. Write corresponding tests in a `.test.ts` file.
6. Commit your changes using a conventional commit message.

### Running Tests
**Trigger:** When verifying code changes  
**Command:** `/run-tests`

1. Locate test files matching the `*.test.*` pattern.
2. Run the test suite using your project's test runner (framework unknown; check project scripts).
3. Review test results and address any failures.

## Testing Patterns

- Test files follow the `*.test.*` naming pattern (e.g., `userService.test.ts`).
- The specific testing framework is not detected; refer to project documentation or `package.json` for details.
- Place tests alongside implementation files or in a dedicated test directory, as per project structure.

## Commands
| Command           | Purpose                                 |
|-------------------|-----------------------------------------|
| /create-feature   | Scaffold and implement a new feature    |
| /run-tests        | Run all test suites                     |
```
