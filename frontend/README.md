This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Quick Setup (Windows)

If you're on Windows, after installing Node 20, run the included setup script from the `frontend` folder. The script will verify Node/npm, install `pnpm` optionally, install dependencies, and offer to install recommended VS Code extensions (if `code` CLI is available).

Open a PowerShell terminal and run:

```powershell
cd frontend
.\setup-windows.ps1
```

If you prefer manual commands:

```bash
# verify Node and npm
node -v
npm -v

# install dependencies (uses package-lock.json for reproducible installs)
cd frontend
npm ci

# start dev server
npm run dev
```

Notes:
- The project targets Node 20 (see `.nvmrc`). Use `nvm`/`nvm-windows` to manage versions if needed.
- If you hit native module build errors (for example `sharp`), install Visual Studio Build Tools (Desktop development with C++) and Python 3.8+.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
