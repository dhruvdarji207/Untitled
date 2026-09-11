# SecureLab

SecureLab is a small **local cybersecurity learning website** for comparing vulnerable and secure coding patterns for SQL injection and cross-site scripting (XSS).

The project is intentionally constrained for classroom use: the labs use **preset scenarios only** and do not provide fields for domains, IP addresses, database connection strings, shells, or arbitrary attack payloads.

## Features

- SQL Injection lab: vulnerable string construction vs parameterized-query preview
- XSS lab: unencoded HTML vs output encoding inside a sandboxed iframe
- Short defensive-security quiz
- Responsive Next.js interface
- Security headers configured in `next.config.ts`
- Vitest safety/helper tests
- Docker support

## Quick start

Requirements: Node.js 20+ (Node 22 recommended)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful commands

```bash
npm run dev
npm run lint
npm test
npm run build
npm run reset-demo
```

## Environment

For a shared deployment, copy `.env.example` to `.env.local` and replace the placeholder value.

```env
SESSION_SECRET=replace-me-with-a-long-random-value
```

The current classroom UI does not require accounts or a real database. The variable is reserved for future server-side guest-session work.

## Docker

```bash
docker compose up --build
```

Then open `http://localhost:3000`.

## Project structure

```text
src/
  app/
    page.tsx
    sql-lab/page.tsx
    xss-lab/page.tsx
    quiz/page.tsx
  components/
  lib/
scripts/
tests/
public/
```

## Safety boundary

SecureLab demonstrates defensive concepts using fictional content and fixed classroom scenarios. Do not convert it into tooling for targeting systems you do not own or have explicit authorization to test.

## Stack

Next.js · React · TypeScript · Tailwind tooling · Vitest
