This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## End-to-End Testing

This project uses [Cypress](https://www.cypress.io) for e2e tests. Build the app first, then run:

```bash
# Build for production
npm run build

# Terminal 1: Start the production server
npm run start  # defaults to http://localhost:3000

# Terminal 2: Run Cypress headless (assumes server on localhost:3000)
npm run e2e:run

# Or with custom server URL:
APP_URL=http://192.168.1.63:3002 npm run e2e:run

# Or open interactive runner:
APP_URL=http://192.168.1.63:3002 npm run e2e
```

**Note**: If the production server conflicts with port 3000, use `PORT=3002 npm run start` and set `APP_URL` accordingly.

Test files live under `cypress/e2e` and use TypeScript. Configure additional commands in `cypress/support`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
