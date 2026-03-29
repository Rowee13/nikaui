# Nika UI

Beautiful, animated components built with Tailwind CSS and Motion. Inspired by shadcn/ui — install components individually, own the code.

## Monorepo Structure

### Apps

- `apps/docs` — Documentation site (Next.js, port 3001)
- `apps/showcase` — Marketing / demo site (Next.js, port 3000)

### Packages

- `packages/registry` — Component source code (Button, Badge, Card, Input, Separator, etc.)
- `packages/cli` — `npx nika` CLI tool for adding components to user projects
- `packages/tailwind-config` — Tailwind CSS preset and theme tokens
- `packages/eslint-config` — Shared ESLint configurations
- `packages/typescript-config` — Shared TypeScript configurations

## Development

```bash
# Install dependencies
pnpm install

# Start all apps in dev mode
pnpm dev

# Build everything
pnpm build

# Lint
pnpm lint

# Type check
pnpm check-types
```

## Tech Stack

- **Turborepo** — Monorepo build system
- **pnpm** — Package manager
- **TypeScript** — Strict mode
- **React 19** — UI framework
- **Next.js 16** — App framework
- **Tailwind CSS** — Styling
- **Motion** — Animations
- **Headless UI** — Accessible primitives
- **class-variance-authority** — Component variants
- **tailwind-merge + clsx** — Class composition

## License

MIT
