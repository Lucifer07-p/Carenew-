
# Pathfinder — refreshed UI + interactive guidance

This version keeps the original React + Vite + Supabase structure but makes the UI more human, calm and student-friendly instead of looking like a heavy "AI dashboard".

## What changed

- Subtle colors and section accents instead of a fully neon/AI-looking design.
- Larger Student Name and budget fields.
- Academic Profile and Preferences & Finance cards have their own top accent.
- Six stream cards now have different soft colors, visual icons, subjects and a working "Explore ... Roadmap" button at the bottom of every card.
- Roadmap stages are clickable. Each stage opens its own information.
- Every stream now has its own 6-stage roadmap: PCM, PCB, PCMB, Commerce, Arts & Humanities, and Diploma / Vocational each use different foundations, exam routes, college decisions, skill plans and next-step options.
- Class 11–12 Foundation contains separate Mathematics, Physics, Chemistry and Biology learning sections with multiple YouTube learning/search links.
- Entrance & Aptitude Preparation includes JEE Main, JEE Advanced, MHT-CET and NEET information with official links and preparation resources.
- Competitive Exams has an India-themed tricolor strip and remains linked to official sources.
- Institution Explorer now has a much broader India-wide starter catalogue with search + filters.
- Career Paths are clickable and open route steps, skills and alternatives.
- Student Profile now includes a larger snapshot/tips area and a subtly darker academic-pattern background.
- Roadmap stages and their subject/detail cards use separate colour families, with larger visual stage summaries.
- Competitive exam cards use recognizable exam wordmarks (JEE, CET, NEET, etc.) instead of generic decorative emoji.
- Institution Explorer includes additional Maharashtra colleges alongside the India-wide starter catalogue.
- Career Paths now include a much broader set of distinct CSE/technology careers plus medical, finance and civil-service routes, with richer career details.
- Scholarships & Loans and the Mahi discussion area have more colour and stronger visual hierarchy.
- Stream "Explore Roadmap" buttons turn sky blue on hover.
- Scholarships are filtered by the selected stream.
- What-If Simulator UI is cleaner but its core logic remains.
- Supabase authentication/profile persistence remains intact.

## Run

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_or_publishable_key
```

Run `supabase/schema.sql` in Supabase SQL Editor.

## Important data note

The institution and scholarship catalogues are intentionally broad starter data, not a claim that every Indian institution/scheme is listed. Admissions, fees, cutoffs, eligibility and scholarship rules change. The UI therefore keeps official-source links where possible and tells users to verify current rules.

The YouTube resources use channel/search links so the student sees current playlists/lectures instead of the app hard-coding an old video. Search results can change over time.

## Supabase security

Do not put a Supabase service-role key in this frontend. The existing `profiles` table uses row-level security so a normal student can read/write only their own profile.

For a future admin dashboard, use a server-side admin/Edge Function or a properly protected admin allowlist/custom claim.

### Current route references

The stream-specific roadmap keeps current official links where available, including NTA JEE/NEET/CUET, Maharashtra CET Cell, Consortium of NLUs, Council of Architecture/NATA, NID, UCEED, ICAI, UPSC, Maharashtra DTE and Maharashtra DVET.
