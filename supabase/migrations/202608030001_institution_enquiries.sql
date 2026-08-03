create table if not exists public.institution_enquiries (
  id uuid primary key default gen_random_uuid(), institution_name text not null, contact_name text not null,
  designation text not null, email text not null, mobile text not null, city text not null,
  participant_count integer not null check (participant_count > 0), preferred_date date, topic text not null,
  format text not null, message text not null default '', status text not null default 'new', created_at timestamptz not null default now()
);
alter table public.institution_enquiries enable row level security;
create policy "Anyone submits institution enquiries" on public.institution_enquiries for insert with check (length(institution_name)>=2 and length(contact_name)>=2 and length(mobile)>=10);
create policy "Staff manage institution enquiries" on public.institution_enquiries for all using (public.is_staff()) with check (public.is_staff());
