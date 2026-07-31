create extension if not exists pgcrypto;

create type public.app_role as enum ('learner', 'mentor', 'admin');
create type public.content_status as enum ('draft', 'published', 'archived');
create type public.enrollment_status as enum ('active', 'completed', 'paused', 'cancelled');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '', goal text,
  role public.app_role not null default 'learner',
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.programs (
  id text primary key, title text not null, description text not null,
  status public.content_status not null default 'draft', sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.lessons (
  id text primary key, program_id text not null references public.programs(id) on delete cascade,
  title text not null, summary text not null default '', duration_minutes integer not null default 0,
  sort_order integer not null default 0, status public.content_status not null default 'draft',
  media_path text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.resources (
  id text primary key, title text not null, kind text not null, description text not null default '',
  file_path text, status public.content_status not null default 'draft', created_at timestamptz not null default now()
);
create table public.enrollments (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  program_id text not null references public.programs(id) on delete cascade,
  status public.enrollment_status not null default 'active', enrolled_at timestamptz not null default now(),
  unique(user_id, program_id)
);
create table public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  completed_at timestamptz, updated_at timestamptz not null default now(),
  primary key(user_id, lesson_id)
);
create table public.demo_leads (
  id uuid primary key default gen_random_uuid(), name text not null, mobile text not null,
  program_interest text, goal text, status text not null default 'new', assigned_to uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create or replace function public.is_staff() returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role in ('mentor', 'admin'));
$$;
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles(id, full_name) values(new.id, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)));
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.programs enable row level security;
alter table public.lessons enable row level security;
alter table public.resources enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.demo_leads enable row level security;

create policy "Users read own profile" on public.profiles for select using (id = auth.uid() or public.is_staff());
create policy "Users update own profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid() and role = (select role from public.profiles where id = auth.uid()));
create policy "Admins manage profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "Published programs are readable" on public.programs for select using (status = 'published' or public.is_staff());
create policy "Admins manage programs" on public.programs for all using (public.is_admin()) with check (public.is_admin());
create policy "Published lessons are readable" on public.lessons for select using (status = 'published' or public.is_staff());
create policy "Admins manage lessons" on public.lessons for all using (public.is_admin()) with check (public.is_admin());
create policy "Published resources are readable" on public.resources for select using (status = 'published' or public.is_staff());
create policy "Admins manage resources" on public.resources for all using (public.is_admin()) with check (public.is_admin());
create policy "Users read own enrollments" on public.enrollments for select using (user_id = auth.uid() or public.is_staff());
create policy "Staff manage enrollments" on public.enrollments for all using (public.is_staff()) with check (public.is_staff());
create policy "Users manage own progress" on public.lesson_progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "Staff read progress" on public.lesson_progress for select using (public.is_staff());
create policy "Anyone creates demo leads" on public.demo_leads for insert with check (true);
create policy "Staff manage demo leads" on public.demo_leads for all using (public.is_staff()) with check (public.is_staff());

insert into public.programs(id,title,description,status,sort_order) values
('confidence-english','Confidence English','Confidence-first English through guided real-time conversations.','published',1),
('interview-mastery','Interview Mastery','Admissions and job interview preparation with mentor feedback.','published',2),
('workplace-communication','Workplace Communication','Clear, credible communication for working professionals.','published',3);
insert into public.lessons(id,program_id,title,duration_minutes,sort_order,status) values
('find-your-voice','confidence-english','Find your confident voice',12,1,'published'),('everyday-conversations','confidence-english','Start everyday conversations',16,2,'published'),('speak-with-clarity','confidence-english','Speak with clarity',18,3,'published'),
('tell-me-about-yourself','interview-mastery','Tell me about yourself',14,1,'published'),('star-stories','interview-mastery','Build strong STAR stories',20,2,'published'),('mock-interview','interview-mastery','Your mock interview plan',15,3,'published'),
('clear-updates','workplace-communication','Give clear work updates',13,1,'published'),('speak-in-meetings','workplace-communication','Speak up in meetings',17,2,'published'),('present-with-impact','workplace-communication','Present with impact',22,3,'published');
