This is a full-stack music app built with Next.js, Typescript, Prisma & PostgreSQL. 

### Instructions

First, clone this repository and install the dependencies:

```bash
git clone git@github.com:LomanFan-CodeJourney/musicApp.git
```

Change Directories

```bash
cd musicApp
```

Install Dependencies

```bash
npm install
```

After installing the dependencies, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 


Setup database

```bash
npx prisma init
```

Synchronize Prisma schema changes with db schema, prototype a change to an existing schema
```bash
npx prisma db push
```

Generate a migration from changes
```bash
npx prisma migrate dev
```