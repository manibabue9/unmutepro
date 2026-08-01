alter table public.demo_leads add column if not exists email text;
alter table public.demo_leads add column if not exists preferred_contact_time text;
alter table public.demo_leads add column if not exists source text not null default 'contact_form';

