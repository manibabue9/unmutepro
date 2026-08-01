create table if not exists public.assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  mobile text not null,
  goal text not null,
  answers jsonb not null default '{}'::jsonb,
  score integer not null check (score >= 0),
  total integer not null check (total > 0 and total <= 30),
  estimated_level text not null,
  recommended_program text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'enrolled', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists assessment_attempts_created_at_idx on public.assessment_attempts (created_at desc);
alter table public.assessment_attempts enable row level security;
create policy "Anyone submits an assessment" on public.assessment_attempts for insert with check (score <= total and length(name) >= 2 and length(email) >= 5 and length(mobile) >= 10);
create policy "Staff manage assessments" on public.assessment_attempts for all using (public.is_staff()) with check (public.is_staff());

