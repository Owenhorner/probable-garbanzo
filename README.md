# Playwright Test Project for The-Internet

Automated testing suite for https://the-internet.herokuapp.com/ using Playwright and DevContainers.

## Prerequisites

- Docker Desktop
- Visual Studio Code
- VS Code Remote - Containers extension

## Getting Started

1. Clone the repository
2. Open in VS Code
3. Click "Reopen in Container" when prompted

That's it! The DevContainer will automatically:
- Set up the Node.js environment
- Install project dependencies
- Install Playwright and its browsers
- Configure all necessary tools

## Development Environment

### DevContainer Features
The project provides a consistent development environment with:
- Node.js LTS
- Playwright Test Framework
- Essential VS Code extensions
- Docker-in-Docker support
- Automated port forwarding

### Running Tests

To run tests on all popular browsers (Chromium, Firefox, and WebKit) locally, use the following command:

```bash
npx playwright test
```

# Run tests with UI mode
npx playwright test --ui

# View HTML test report
npx playwright show-report
```

The HTML report will be available at `http://localhost:9323` after running tests.

## Project Structure

This project uses TypeScript and follows these organizational patterns:
- Page Object Model for test organization
- Feature-specific test directories
- Separate page objects from test files
- Dedicated directories for utilities and helpers
- Test data stored separately from test logic

See individual test files for examples and documentation.

## GitHub Actions
This project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/playwright.yml`.