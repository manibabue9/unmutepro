export type AppRole = "learner" | "mentor" | "admin";

export type Database = {
  public: {
    Tables: {
      profiles: { Row: { id: string; full_name: string; goal: string | null; role: AppRole; created_at: string }; Insert: { id: string; full_name?: string; goal?: string | null; role?: AppRole }; Update: { full_name?: string; goal?: string | null; role?: AppRole } };
      programs: { Row: { id: string; title: string; description: string; status: string; sort_order: number }; Insert: { id: string; title: string; description: string; status?: string; sort_order?: number }; Update: { title?: string; description?: string; status?: string; sort_order?: number } };
      lessons: { Row: { id: string; program_id: string; title: string; duration_minutes: number; sort_order: number; status: string }; Insert: { id: string; program_id: string; title: string; duration_minutes?: number; sort_order?: number; status?: string }; Update: { title?: string; duration_minutes?: number; sort_order?: number; status?: string } };
      enrollments: { Row: { id: string; user_id: string; program_id: string; status: string; enrolled_at: string }; Insert: { user_id: string; program_id: string; status?: string }; Update: { status?: string } };
      lesson_progress: { Row: { user_id: string; lesson_id: string; completed_at: string | null; updated_at: string }; Insert: { user_id: string; lesson_id: string; completed_at?: string | null }; Update: { completed_at?: string | null } };
      demo_leads: { Row: { id: string; name: string; mobile: string; email: string | null; goal: string | null; preferred_contact_time: string | null; source: string; program_interest: string | null; status: string; created_at: string }; Insert: { name: string; mobile: string; email?: string | null; goal?: string | null; preferred_contact_time?: string | null; source?: string; program_interest?: string | null; status?: string }; Update: { status?: string } };
      assessment_attempts: { Row: { id: string; name: string; email: string; mobile: string; goal: string; answers: Record<string, number>; score: number; total: number; estimated_level: string; recommended_program: string; status: string; created_at: string }; Insert: { name: string; email: string; mobile: string; goal: string; answers: Record<string, number>; score: number; total: number; estimated_level: string; recommended_program: string; status?: string }; Update: { status?: string } };
    };
  };
};

