# How to add a house, condo or development

Hooli listings are a **single TypeScript file**. No database server to manage.
Edit, commit, push to GitHub, and Vercel publishes the new property.

## 1. Add photos

Create a folder:

```
public/listings/my-new-slug/
```

Drop images there (`hero.jpg`, `02.jpg`, `03.jpg`…). You can also reuse the
shared interiors in `public/listings/_shared/`.

## 2. Add the listing

Open `src/data/listings.ts` and paste a new object into the `listings` array.
A commented template is at the bottom of that file.

Required fields:

| Field | What it is |
|---|---|
| `slug` | URL: `/listings/your-slug` |
| `type` | `house` `villa` `condo` `penthouse` `townhouse` `development` |
| `status` | `for-sale` `pre-sale` `sold` |
| `area` | `cancun` `playa-del-carmen` `tulum` `puerto-morelos` `puerto-aventuras` |
| `lat` / `lng` | Google Maps pin (no API key) |
| `price` + `currency` | Number + `USD` or `MXN`. Set `priceFrom: true` for developments |
| `sizeM2`, `bedrooms`, `bathrooms`, `parking` | Specs on the card |
| `rooms` | Interior layout dropdown (`living`, `kitchen`, `terrace`…) |
| `amenities` / `commonAreas` | Keys from `src/data/amenities.ts` |
| `images` | Paths starting with `/listings/…` |
| `videoId` | YouTube id (the part after `v=`) |
| `title` `subtitle` `description` `highlights` | Spanish **and** English |

## 3. Contact details

Edit `src/data/agent.ts` for name, phone, WhatsApp, email and AMPI text.

## 4. Amenity labels

If you need a new amenity, add the key in `src/data/amenities.ts` (Spanish + English),
then use that key on the listing.

## 5. Publish

```
git add public/listings/my-new-slug src/data/listings.ts
git commit -m "Add listing: my new slug"
git push
```

Vercel rebuilds from this repo. No extra dashboard.
