# united

AI automation for teams, with governance and security built in. Build AI agents and workflow automations by describing what you want, bring your own AI keys, and run it on your own infrastructure or in the cloud.

- **Agents**: AI that carries out tasks using your apps.
- **Flows**: a trigger, then the steps you choose.
- **Tables**: your data, in rows and columns, shared by agents and flows.
- **740+ integrations** ("pieces") in `packages/pieces`.
- **MCP server**: build from your own AI client.

## Editions

| Edition | `AP_EDITION` | Notes |
|---|---|---|
| Community | `ce` | Self-hosted, open source (MIT) |
| Enterprise | `ee` | Self-hosted, commercial licence, adds SSO, custom branding, audit and more |
| Cloud | `cloud` | Hosted |

## Repository layout

| Path | What lives there |
|---|---|
| `packages/web` | React 19 + Vite frontend |
| `packages/server/api` | Fastify API |
| `packages/server/worker` | Job worker (BullMQ) |
| `packages/server/engine` | Flow execution engine |
| `packages/server/sandbox` | Isolated execution of user code |
| `packages/core/*` | Shared libraries, thin to thick (`core-utils` ... `@united/shared`) |
| `packages/pieces` | Integrations and the pieces framework |
| `packages/tests-e2e` | Playwright end-to-end tests |
| `packages/ee` | Enterprise-licensed code |
| `docs` | Product documentation (Mintlify) |

## Quality engineering

Testing is layered so each risk is caught at the cheapest level that can catch it.

| Layer | Tooling | Where |
|---|---|---|
| Unit | Vitest | `packages/**/test` |
| API integration, per edition | Vitest + Fastify inject, CE / EE / Cloud | `packages/server/api/test/integration` |
| Role and permission matrix | Generated allowed/forbidden cases per role | `packages/server/api/test/helpers/permission-test.ts` |
| End-to-end | Playwright, page objects, edition matrix | `packages/tests-e2e` |
| Synthetic monitoring | Checkly, BetterStack | `packages/tests-e2e` |
| AI agent evals | Deterministic replay gate on PRs, nightly LLM-judge | `.github/workflows/agent-evals.yml` |
| Security (DAST) | OWASP ZAP | `.github/workflows/dast.yml`, `.zap/` |
| Sandbox isolation | Filesystem, memory and network probes | `smoke-test/` |
| Upgrade safety | Previous release -> new image with live state | `.github/workflows/upgrade-test.yml` |
| Performance | Load rigs, p90/p99 regression detection | `benchmark/` |

## Local development

Requirements: Node.js 22.15+ or 24, Bun 1.4.4 (`npm install -g bun@1.4.4`), Deno (`npm install -g deno`).

```bash
npm start        # installs dependencies, then runs frontend + backend
npm run dev      # frontend + backend, after the first install
```

```bash
npm run test-unit   # unit tests
npm run test-api    # API integration tests (CE, EE, Cloud)
npm run lint-dev    # lint with auto-fix
```

## Licence

The core is released under the [MIT licence](LICENSE). Code under `packages/ee` and `packages/server/api/src/app/ee` is under the [Enterprise licence](packages/ee/LICENSE). See [docs/about/license.mdx](docs/about/license.mdx).
