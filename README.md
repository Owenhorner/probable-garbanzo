# The-Internet Testing Project

Automated testing suite for https://the-internet.herokuapp.com/ using Playwright and DevContainers.

## Prerequisites

- Docker Desktop
- Visual Studio Code
- VS Code Remote - Containers extension

## Getting Started

1. Clone the repository
2. Open in VS Code
3. Click "Reopen in Container" when prompted
4. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

```sh
npx playwright test        # Run all tests
npx playwright test --ui   # Run tests with UI mode
```

## Development

This project uses TypeScript and follows the Page Object Model pattern for test organization. See individual test files for examples and documentation.