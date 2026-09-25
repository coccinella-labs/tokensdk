# Changelog

## 0.0.1

Initial package scaffold for the Coccinella Labs TypeScript client.

### Changes

- Rebrand the client from the Harper/tokensdk template to Coccinella Labs:
  - package is now `@coccinella-labs/tokensdk` and the client class is `Coccinella`
  - environment variables renamed to `COCINELLA_API_KEY`, `COCINELLA_BASE_URL`, `COCINELLA_LOG`
  - `HarperError` renamed to `CoccinellaError`
- Require an explicit `baseURL` (constructor option or `COCINELLA_BASE_URL`); the client no
  longer falls back to the `api.example.com` placeholder and throws a clear error when unset.
- Update `package.json` metadata (author, repository, homepage, bugs) to point at
  `coccinella-labs/tokensdk`.
