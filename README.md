# Unmute Pro

Official website for **Unmute Pro** â€“ A Spoken English and Communication Skills Institute.

## Features

- Spoken English
- Interview Preparation
- Personality Development
- Corporate Communication
- Responsive Design
- Built with Next.js and Tailwind CSS
- Responsive learner MVP at `/app`
- Local onboarding, programme catalogue, lessons, progress and resources
- PWA metadata for mobile installation

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the public website or `http://localhost:3000/app` for the learner MVP.

## Validate

```bash
npm run lint
npm run build
```

Phase 1 uses mock content and browser storage. See `docs/PRODUCT-ROADMAP.md` for the production data, authentication, admin and mentor roadmap.

## Phase 2: Supabase setup

1. Create a Supabase project.
2. Run `supabase/migrations/202608010001_phase2_foundation.sql` in the SQL editor or with the Supabase CLI.
3. Copy `.env.example` to `.env.local` and add the project URL and anon key.
4. Add `http://localhost:3000/auth/callback` and the production callback URL to Supabase Auth redirect URLs.
5. Sign in once, then assign the first administrator in the SQL editor:

```sql
update public.profiles set role = 'admin' where id = '<auth-user-uuid>';
```

The app automatically uses cloud identity and synchronized progress when configured. Without those variables it remains in local demo mode. Staff can open `/admin` after their role is set to `mentor` or `admin`.

## Google Reviews setup

The homepage includes a Google Reviews section. Without Google credentials it
shows a safe link to the public UnmutePro Google Maps profile. To show the live
rating and review cards:

1. Create or select a Google Cloud project and enable **Places API (New)**.
2. Create an API key and restrict it to **Places API (New)**. Keep this key
   server-only; never prefix it with `NEXT_PUBLIC_`.
3. Add `GOOGLE_PLACES_API_KEY` to `.env.local` and to the Vercel Production
   environment.
4. Optionally add `GOOGLE_PLACES_PLACE_ID` to avoid a text-search request. If it
   is omitted, the server locates the UnmutePro listing by its business name and
   Hyderabad address.
5. Redeploy the site after changing Vercel environment variables.

The integration requests the latest Google content without storing review text.

## Author

Mani Babu
