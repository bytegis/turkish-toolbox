# AGENTS.md

This repository contains @bytegis/turkish-toolbox, a TypeScript utility library for Turkish text, identity, phone, date, currency, address, name, IBAN, postal code, and number helpers.

## Repository structure

- Source files live in [src](src/).
- Public exports are centralized in [src/index.ts](src/index.ts).
- Each utility module is implemented as a dedicated file such as [src/TextUtility.ts](src/TextUtility.ts) or [src/IdentityUtility.ts](src/IdentityUtility.ts).
- Tests are colocated with the implementation as files ending in `.test.ts`, for example [src/TextUtility.test.ts](src/TextUtility.test.ts).

## Common tasks

### Implementing a new utility

1. Add or update the relevant module in [src](src/).
2. Keep the API consistent with the existing naming style, such as `TrText`, `TrIdentity`, `TrPhone`, and `TrDate`.
3. Re-export the module from [src/index.ts](src/index.ts) if it should be part of the public package API.
4. Add or update tests in the matching `.test.ts` file.

### Running validation

- Run tests with `npm test`
- Build the package with `npm run build`

## Conventions

- Prefer small, focused utility functions.
- Preserve existing exported names and behavior unless the change is explicitly requested.
- Keep TypeScript types explicit and avoid introducing new runtime dependencies.
- When changing behavior, add regression tests first when practical.

## Notes for agents

- This library is published as a package, so public API compatibility matters.
- Changes should remain compatible with the existing module pattern and package entrypoints.
- Prefer minimal, well-scoped edits over broad refactors.
