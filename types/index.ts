export interface Course {
  id: string;
  name: string;
  shortcode: string;
  category: 'Languages' | 'Wellness' | 'Creative Arts' | 'Childcare' | 'Skills';
  description: string;
  why_join: string[];
  how_useful: string[];
  age_group: string;
  duration: string;
  schedule: string;
  image_url: string;
  badge?: string;
  testimonials: {
    name: string;
    role: string;
    comment: string;
    rating: number;
  }[];
}

export interface Registration {
  id: string;
  student_name: string;
  email: string;
  phone: string;
  course_id: string;
  course_name?: string;
  course_shortcode: string;
  dlh_id: string;
  status: 'enrolled' | 'completed' | 'cancelled';
  completion_date?: string;
  created_at: string;
}

export interface CertificateData {
  dlh_id: string;
  student_name: string;
  course_name: string;
  completion_date: string;
  status: 'completed' | 'enrolled' | 'invalid';
}
