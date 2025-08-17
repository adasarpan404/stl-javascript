---
name: Support request (stl-javascript)
about: Ask for help using this library, report unexpected behaviour in a specific data structure or helper, or request clarification about APIs.
title: "[Support] "
labels: support, triage
assignees: ''

---

**Module**
- Which part of the project is involved? (select one or list multiple)
  - stack
  - queue
  - circularQueue
  - priorityQueue
  - nonLinear/binarySearchTree
  - nonLinear/segmentTree
  - nonLinear/priorityQueue
  - uses/postfixConversion
  - uses/convertToBinary
  - examples/
  - other (please specify)

**Version & environment**
- stl-javascript version (from package.json or tag):
- Node.js version:
- OS / platform:

**Short description**
One-line summary of the problem or question.

**Reproduction steps (minimal)**
Provide a minimal, copy-pasteable example that reproduces the issue. Prefer a few lines of JavaScript that import the affected module and demonstrate the problem.

Example:
```javascript
const { BinarySearchTree } = require('stl-javascript/nonLinear/binarySearchTree')
const bst = new BinarySearchTree()
// minimal steps to reproduce...
```

**Expected behavior**
What you expected to happen.

**Actual behavior / error**
What happened instead. Include full error messages and stack traces if present.

**What I've already tried**
Short list of debugging steps you've run (run tests, checked examples, upgraded package, looked at source files).

**Optional: test case or patch**
If you can provide a failing test, a small runnable script, or a suggested code change, paste it here or attach a file. Tests that run under the repo's existing Jest setup are especially helpful.

**Additional context**
Any other details (links to examples, screenshots, commands run).

---

If you believe you found a bug, consider using the "Bug report" template instead so maintainers can triage and prioritize fixes. For a new behavior request, use "Feature request".
