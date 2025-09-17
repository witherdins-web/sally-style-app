
# Sally Style App – Vercel-ready PWA (Full MVP)

**What it is**
- React + Vite PWA (installable)
- Tailwind styling (brand: navy, soft gold, sage)
- Pages: Home, Wardrobe (CRUD), Outfit (rules-based), Skin (routine helper)
- Supabase client (URL/key via env vars)
- Vercel-ready SPA routing (`vercel.json`)
- Icons + manifest + service worker

## Local run
```bash
npm install
echo "VITE_SUPABASE_URL=YOUR_URL" > .env
echo "VITE_SUPABASE_ANON_KEY=YOUR_KEY" >> .env
npm run dev
```

## Deploy on Vercel
- Push these files to a GitHub repo (root should contain `package.json`, `vite.config.js`, `src/`, `public/`, `vercel.json`).
- Import repo in Vercel (Framework: Vite).
- Add env vars (can be blank initially). Deploy.
- Open on phone → Add to Home Screen.

## Supabase SQL (optional to start)
```sql
create table if not exists wardrobe_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  user_id uuid,
  name text not null,
  category text,
  color text,
  image_url text,
  tags jsonb,
  notes text
);
alter table wardrobe_items enable row level security;
create policy "public read" on wardrobe_items for select using (true);
create policy "insert any" on wardrobe_items for insert with check (true);
create policy "owner can delete" on wardrobe_items for delete using (true);
```
(For production: add Auth and tighten RLS to `user_id = auth.uid()`.)

## Next steps
- Add Supabase Auth + Storage (photos).
- Tighten RLS.
- Expand rules with your Soft Autumn + hourglass logic.
- Add “Gaps Report” and “Shop smarter” suggestions.
