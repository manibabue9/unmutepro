# Unmute Pro learner app roadmap

## Phase 1 — responsive MVP (implemented)

- Mobile-first learner experience at `/app`, while preserving the marketing site.
- Demo onboarding/login, personalised dashboard and profile.
- Typed programme, lesson and resource catalogue designed for a future CMS/API.
- Lesson detail and on-device progress tracking.
- Existing resource downloads plus WhatsApp demo and email contact calls to action.
- PWA manifest for installable, standalone presentation where supported.

The MVP deliberately uses browser storage and mock content. It does not claim production authentication, cross-device sync, payments, video delivery or admin editing.

## Phase 2 — production foundation (foundation implemented)

- Supabase/PostgreSQL schema for profiles, programmes, lessons, resources, enrolments, progress and demo leads.
- Passwordless email authentication, learner/mentor/admin roles and cross-device progress sync.
- Role-gated admin dashboard foundation with live operational counts.
- Next increment: editorial forms, protected media delivery, reminders and consent-aware monitoring.

## Phase 3 — mentor-led learning

- Live session scheduling, mentor availability and calendar integration.
- Conversation-room links, mock interview rubrics, feedback notes and action plans.
- Admissions/job-specific learning paths, assessments and certificates.
- Push/email/WhatsApp reminders with learner-controlled preferences.

## Phase 4 — scale and native reach

- Payments, coupons, subscriptions and enrolment operations.
- Cohort/community features and organisation dashboards.
- Offline lesson caching and richer install prompts; evaluate a React Native shell only if device-native needs justify it.
- Accessibility, performance and funnel optimisation based on real learner evidence.
