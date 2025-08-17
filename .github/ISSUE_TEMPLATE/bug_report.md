---
name: Bug report
about: Create a report to help us fix an unexpected behavior or defect
title: ""
labels: 'bug'
assignees: ''
---

## Summary
A short, descriptive title and one-line summary of the problem.

Example: "postFixConversion returns 'underflow' for empty string input"

## Environment
Provide environment details so we can reproduce the issue reliably.
- Library version: (from package.json)
- Node.js version: (e.g. v16.20.0)
- OS: (e.g. Ubuntu 22.04)
- Browser (if applicable): (name and version)

## Steps to reproduce
Provide a minimal, ordered list of steps needed to reproduce the bug. Prefer a small code sample that reproduces the issue.
1. Clone the repo
2. Install dependencies: `npm ci`
3. Run the code or test: provide the exact command

Minimal reproduction (copyable):
```js
// paste the smallest code snippet that reproduces the problem
```

## Expected behavior
Describe what you expected to happen.

## Actual behavior
Describe what actually happened instead. If you have error messages, paste them here (or attach logs).

## Reproduction checklist
Please confirm the following before submitting (helps reduce noise):
- [ ] I can reproduce the issue with the latest commit on the default branch
- [ ] I have tried `npm ci` / `npm test` and the behavior still occurs
- [ ] I can reproduce the problem in a minimal example (included above)

## Logs / stack traces / error output
If applicable, include relevant logs or stack traces. Wrap them in triple backticks for readability.

```
Paste logs or error messages here
```

## Severity / impact
Provide guidance for maintainers on how urgent this is and how it impacts users:
- Low: minor issue, cosmetic or ergonomics
- Medium: incorrect behavior for an uncommon case
- High: common feature broken, tests failing
- Critical: security, data loss, or prevents installation

## Workaround (if any)
If you have a temporary workaround or a fix, describe it here.

## Possible fix / notes for maintainers (optional)
If you have ideas about the cause or a suggested fix, include them. Mention files to look at or tests that fail.

## Additional context
Add any other context, screenshots, related issues, or references.

---

### Contributor checklist (please fill before submitting)
- [ ] I have searched existing issues and the bug has not already been reported
- [ ] I can reproduce the issue and provided a minimal reproduction
- [ ] I am happy to help debug or provide a PR if requested
