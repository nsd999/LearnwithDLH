-- ========================================================
-- Dheeru's Learner's Hub (DLH) Supabase Database Schema
-- ========================================================

-- 1. COURSES TABLE
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    shortcode VARCHAR(10) NOT NULL UNIQUE,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    why_join TEXT[] DEFAULT '{}',
    how_useful TEXT[] DEFAULT '{}',
    age_group TEXT DEFAULT 'Kids & Adults',
    duration TEXT DEFAULT '4 Weeks',
    schedule TEXT DEFAULT 'Flexible',
    image_url TEXT,
    badge TEXT,
    testimonials JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. REGISTRATIONS TABLE
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course_id VARCHAR(100) NOT NULL,
    course_shortcode VARCHAR(10) NOT NULL,
    dlh_id TEXT UNIQUE,
    status TEXT DEFAULT 'enrolled' CHECK (status IN ('enrolled', 'completed', 'cancelled')),
    completion_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SEQUENCE GENERATOR FUNCTION FOR DLH_ID FORMAT: YYYY-[SHORTCODE]-[001]
CREATE OR REPLACE FUNCTION generate_dlh_id()
RETURNS TRIGGER AS $$
DECLARE
    current_year TEXT;
    next_seq INT;
    formatted_seq TEXT;
BEGIN
    current_year := TO_CHAR(NOW(), 'YYYY');
    
    -- Count existing registrations for this course shortcode in current year
    SELECT COALESCE(COUNT(*), 0) + 1 INTO next_seq
    FROM public.registrations
    WHERE course_shortcode = UPPER(NEW.course_shortcode)
      AND TO_CHAR(created_at, 'YYYY') = current_year;

    formatted_seq := LPAD(next_seq::TEXT, 3, '0');
    NEW.dlh_id := current_year || '-' || UPPER(NEW.course_shortcode) || '-' || formatted_seq;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. TRIGGER FOR AUTOMATIC DLH ID ASSIGNMENT
DROP TRIGGER IF EXISTS trg_set_dlh_id ON public.registrations;

CREATE TRIGGER trg_set_dlh_id
BEFORE INSERT ON public.registrations
FOR EACH ROW
WHEN (NEW.dlh_id IS NULL OR NEW.dlh_id = '')
EXECUTE FUNCTION generate_dlh_id();

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow public read access to courses
CREATE POLICY "Public Read Courses" ON public.courses
    FOR SELECT USING (true);

-- Allow public read access to public certificate queries by dlh_id
CREATE POLICY "Public Read Registrations" ON public.registrations
    FOR SELECT USING (true);

-- Allow public insertion for student registrations
CREATE POLICY "Public Insert Registrations" ON public.registrations
    FOR INSERT WITH CHECK (true);

-- Allow authenticated admin users full management access
CREATE POLICY "Admin Full Access Registrations" ON public.registrations
    FOR ALL USING (auth.role() = 'authenticated');
