This is a full-stack music app built with Next.js, Typescript, Prisma & PostgreSQL.

### Instructions

First, clone this repository and install the dependencies:

```bash
git clone git@github.com:LomanFan-CodeJourney/musicApp.git
```

Change Directories:

```bash
cd musicApp
```

Install Dependencies:

```bash
npm install
```

After installing the dependencies, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Setup database:

```bash
npx prisma init
```

Synchronize Prisma schema changes with db schema, prototype a change to an existing schema:

```bash
npx prisma db push
```

Generate a migration from changes:

```bash
npx prisma migrate dev
```

Seed db:

```bash
npx prisma db seed
```

Open db:

```bash
npx prisma studio
```

Drop/Reset whole db, use only after all latest migrations are done, for this we run "npx prisma db push" and "npx prisma migrate dev" first then reset db with the following command:

```bash
npx prisma migrate reset
```