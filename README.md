# Hooli Real Estate

Bilingual (ES / EN) site for homes and developments in Cancun, Playa del Carmen,
Tulum, Puerto Morelos and the Riviera Maya.

Agent: **Nicolas Zarfino** · AMPI certified · +52 984 157 7492

## Edit listings

See [LISTINGS.md](./LISTINGS.md). Everything lives in `src/data/listings.ts`
plus images under `public/listings/`.

## Run locally

```
npm install
npm run dev
```

## Deploy on Vercel

Push this repository to GitHub and import it in Vercel. The app already uses
the Vercel Nitro preset. No environment variables are required for listings.

Update `src/data/agent.ts` if the public email should change (the form opens
the visitor’s mail app via `mailto:`).
