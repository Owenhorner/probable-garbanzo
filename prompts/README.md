# Prompt Management Guide

### Directory Structure
```bash
prompts/
├── refactoring/       # Prompts for code refactoring
├── testing/           # Prompts for test creation
└── features/          # Prompts for feature implementation
```

### Prompt Template

Each prompt should be stored in a markdown file using this structure:

```markdown
# [Prompt Title]

## Context
- File(s): [filename(s)]
- Date: [YYYY-MM-DD]
- Copilot Version: [version if known]
- Related Components: [component names]

## Prompt Text
[Your successful prompt goes here]

## Result
[Generated code or response]

## Notes
- Success Rate: [High/Medium/Low]
- Performance Notes: [Any observations]
- Use Cases: [Specific scenarios]
```

### Best Practices

1. **Naming Convention**
   - Use descriptive names: `create-auth-middleware.md`
   - Include date prefix: `2024-01-20-auth-flow.md`
   - Keep names lowercase with hyphens

2. **Organization**
   - Sort prompts into appropriate subdirectories
   - Maintain an index.md in each directory
   - Use consistent tags for searching

3. **Version Control**
   - Commit successful prompts
   - Write clear commit messages
   - Branch for experimental variations
   - Discard unsuccessful prompts

4. **Documentation**
   - Include full context
   - List dependencies
   - Note Copilot version used

5. **Maintenance**
   - Review monthly
   - Archive outdated prompts
   - Update for new Copilot features

### Security Note
- Never include sensitive data
- Remove personal information
- Exclude API keys or credentials

