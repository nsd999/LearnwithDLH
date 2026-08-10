import { createClient } from '@supabase/supabase-js';
import { Course, Registration } from '@/types';
import { INITIAL_COURSES } from './courses-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initial mock seed data for local storage fallback
const INITIAL_MOCK_REGISTRATIONS: Registration[] = [
  {
    id: 'reg-101',
    student_name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    course_id: 'course-phonics',
    course_name: 'DLH Phonics & Reading Mastery',
    course_shortcode: 'PHON',
    dlh_id: '2026-PHON-001',
    status: 'completed',
    completion_date: '2026-02-15',
    created_at: '2026-01-10T10:00:00Z'
  },
  {
    id: 'reg-102',
    student_name: 'Rohan Verma',
    email: 'rohan.v@example.com',
    phone: '+91 91234 56789',
    course_id: 'course-handwriting',
    course_name: 'Cursive Handwriting & Calligraphy',
    course_shortcode: 'HAND',
    dlh_id: '2026-HAND-042',
    status: 'completed',
    completion_date: '2026-03-01',
    created_at: '2026-02-01T11:30:00Z'
  },
  {
    id: 'reg-103',
    student_name: 'Siddharth Rao',
    email: 'sid.rao@example.com',
    phone: '+91 99887 76655',
    course_id: 'course-spoken',
    course_name: 'Spoken English & Public Speaking',
    course_shortcode: 'TALK',
    dlh_id: '2026-TALK-003',
    status: 'enrolled',
    created_at: '2026-03-05T09:15:00Z'
  }
];

const LOCAL_STORAGE_KEY_COURSES = 'dlh_courses_data_v5';
const LOCAL_STORAGE_KEY_REGS = 'dlh_registrations_data_v1';

// Helper functions for Data Operations
export async function getCourses(): Promise<Course[]> {
  let coursesList: Course[] = [];

  if (supabase) {
    try {
      const { data, error } = await supabase.from('courses').select('*');
      if (!error && data && data.length > 0) {
        coursesList = data as Course[];
      }
    } catch (e) {
      console.warn('Supabase query failed, falling back to local dataset', e);
    }
  }

  // Client-side local storage fallback
  if (coursesList.length === 0 && typeof window !== 'undefined') {
    try {
      localStorage.removeItem('dlh_courses_data_v1');
      localStorage.removeItem('dlh_courses_data_v2');
    } catch (err) {}

    const cached = localStorage.getItem(LOCAL_STORAGE_KEY_COURSES);
    if (cached) {
      try {
        coursesList = JSON.parse(cached);
      } catch (err) {
        // ignore parse error
      }
    }
    if (!coursesList || coursesList.length === 0) {
      coursesList = INITIAL_COURSES;
      localStorage.setItem(LOCAL_STORAGE_KEY_COURSES, JSON.stringify(INITIAL_COURSES));
    }
  }

  if (coursesList.length === 0) {
    coursesList = INITIAL_COURSES;
  }

  // Ensure latest Keerthy's Daycare And Kindergarten and DLH Phonics names across any cached or DB rows
  return coursesList.map(c => {
    if (c.id === 'course-daycare' || c.shortcode === 'CARE' || c.name.toLowerCase().includes('keerthy') || c.name.toLowerCase().includes('daycare')) {
      return {
        ...c,
        name: "Keerthy's Daycare And Kindergarten",
        image_url: "/keerthys-daycare-logo.png"
      };
    }
    if (c.id === 'course-phonics' || c.shortcode === 'PHON' || c.name.toLowerCase().includes('phonics')) {
      return {
        ...c,
        name: "DLH Phonics & Reading Mastery"
      };
    }
    return c;
  });
}

export async function getRegistrations(): Promise<Registration[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        return data as Registration[];
      }
    } catch (e) {
      console.warn('Supabase fetch registrations error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY_REGS);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        // ignore
      }
    }
    localStorage.setItem(LOCAL_STORAGE_KEY_REGS, JSON.stringify(INITIAL_MOCK_REGISTRATIONS));
    return INITIAL_MOCK_REGISTRATIONS;
  }

  return INITIAL_MOCK_REGISTRATIONS;
}

export async function registerStudent(input: {
  student_name: string;
  email: string;
  phone: string;
  course_id: string;
  course_name: string;
  course_shortcode: string;
}): Promise<Registration> {
  const currentYear = new Date().getFullYear().toString();
  const shortcode = input.course_shortcode.toUpperCase();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([{
          student_name: input.student_name,
          email: input.email,
          phone: input.phone,
          course_id: input.course_id,
          course_shortcode: shortcode,
          status: 'enrolled'
        }])
        .select()
        .single();

      if (!error && data) {
        return data as Registration;
      }
    } catch (e) {
      console.warn('Supabase registration insert error:', e);
    }
  }

  // Guaranteed unique sequential ID generation matching YYYY-[SHORTCODE]-[001]
  const currentRegs = await getRegistrations();
  const existingIds = new Set(currentRegs.map(r => r.dlh_id ? r.dlh_id.toUpperCase() : ''));

  const pattern = new RegExp(`^${currentYear}-${shortcode}-(\\d+)$`, 'i');
  let maxSeq = 0;
  for (const reg of currentRegs) {
    if (reg.dlh_id) {
      const match = reg.dlh_id.match(pattern);
      if (match) {
        const seq = parseInt(match[1], 10);
        if (seq > maxSeq) maxSeq = seq;
      }
    }
  }

  let nextSeqNum = Math.max(maxSeq + 1, currentRegs.length + 1);
  let candidateDlhId = `${currentYear}-${shortcode}-${nextSeqNum.toString().padStart(3, '0')}`;
  
  while (existingIds.has(candidateDlhId.toUpperCase())) {
    nextSeqNum++;
    candidateDlhId = `${currentYear}-${shortcode}-${nextSeqNum.toString().padStart(3, '0')}`;
  }

  const newReg: Registration = {
    id: `reg-${Date.now()}`,
    student_name: input.student_name,
    email: input.email,
    phone: input.phone,
    course_id: input.course_id,
    course_name: input.course_name,
    course_shortcode: shortcode,
    dlh_id: candidateDlhId,
    status: 'enrolled',
    created_at: new Date().toISOString()
  };

  if (typeof window !== 'undefined') {
    const updated = [newReg, ...currentRegs];
    localStorage.setItem(LOCAL_STORAGE_KEY_REGS, JSON.stringify(updated));
  }

  return newReg;
}

export async function updateRegistrationStatus(
  id: string,
  status: 'enrolled' | 'completed' | 'cancelled'
): Promise<boolean> {
  const completion_date = status === 'completed' 
    ? new Date().toISOString().split('T')[0] 
    : undefined;

  if (supabase) {
    try {
      const updatePayload: { status: string; completion_date?: string } = { status };
      if (completion_date) updatePayload.completion_date = completion_date;

      const { error } = await supabase
        .from('registrations')
        .update(updatePayload)
        .eq('id', id);

      if (!error) return true;
    } catch (e) {
      console.warn('Supabase update status error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const current = await getRegistrations();
    const updated = current.map(r => {
      if (r.id === id) {
        return {
          ...r,
          status,
          completion_date: status === 'completed' ? (completion_date || r.completion_date || new Date().toISOString().split('T')[0]) : r.completion_date
        };
      }
      return r;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY_REGS, JSON.stringify(updated));
    return true;
  }

  return false;
}

export async function getRegistrationByDlhId(dlhId: string): Promise<Registration | null> {
  const cleanedId = dlhId.trim().toUpperCase();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .eq('dlh_id', cleanedId)
        .single();
      if (!error && data) {
        return data as Registration;
      }
    } catch (e) {
      console.warn('Supabase lookup error:', e);
    }
  }

  const allRegs = await getRegistrations();
  const match = allRegs.find(r => r.dlh_id.trim().toUpperCase() === cleanedId);
  return match || null;
}

export async function deleteRegistration(id: string): Promise<boolean> {
  if (supabase) {
    try {
      const { error } = await supabase
        .from('registrations')
        .delete()
        .eq('id', id);
      if (!error) return true;
    } catch (e) {
      console.warn('Supabase delete error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const list = await getRegistrations();
    const updated = list.filter(r => r.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY_REGS, JSON.stringify(updated));
    return true;
  }

  return true;
}
