# Repository Guidelines

## Commit Requirements

- Use Conventional Commits: `type(scope): description`.
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- `scope` is optional and should name the module or file when useful.
- Keep `description` short.
- Capitalize the first letter of `description`.
- Do not end `description` with a period.
- Split commits by feature or purpose. Do not put unrelated changes into one commit.
- When changing a version number, update every visible version source, including `package.json` and UI version labels.
- If a branch or PR includes a version number, align the matching tag when updating that branch or opening the PR.

## Pull Request Requirements

- Use a Conventional Commits PR title: `type(scope): description`.
- Add enough detail in the description to explain what changed, why it changed, and the implementation approach.
- Keep the description focused on core sections such as changes and rationale.
- Do not add extra sections such as tests or notes unless explicitly needed.
