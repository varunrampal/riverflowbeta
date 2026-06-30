# Turso Blog Setup on Hostinger Node.js

The blog uses a Node.js server at `server/index.js`. It serves the built React
site from `dist/` and keeps the Turso token private behind `/api/blog`.

## 1. Create Turso credentials

```bash
turso db create riverflow
turso db show riverflow --http-url
turso db tokens create riverflow
```

## 2. Create the admin password hash

```bash
node -e "console.log(require('crypto').createHash('sha256').update('replace-with-your-password').digest('hex'))"
```

## 3. Set Hostinger environment variables

Configure these in the Hostinger Node.js app panel:

```text
TURSO_DATABASE_URL=https://your-database-your-org.turso.io
TURSO_AUTH_TOKEN=your-turso-db-token
ADMIN_PASSWORD_SHA256=sha256-hash-of-your-admin-password
ADMIN_SESSION_SECRET=replace-with-a-long-random-string
NODE_ENV=production
```

## 4. Build and start

```bash
npm install
npm run build
npm start
```

Hostinger should run:

```bash
npm start
```

The `start` script runs:

```bash
node server/index.js
```

## 5. Smoke test

Open:

```text
https://your-domain.com/api/blog?action=list
```

Expected result: JSON with `"ok": true` and a `posts` array. The first request
creates the Turso tables and seeds the starter blog posts if they have not been
seeded before.

Admin login:

```text
https://your-domain.com/admin/login
```
