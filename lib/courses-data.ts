import { Course } from '@/types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-phonics',
    name: 'DLH Phonics & Reading Mastery',
    shortcode: 'PHON',
    category: 'Languages',
    badge: 'Most Popular',
    age_group: '4 - 10 Years',
    duration: '6 Weeks',
    schedule: 'Mon, Wed, Fri (4:00 PM - 5:30 PM)',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    description: 'A sensory-rich, sound-based phonics program empowering young learners to read fluently, spell accurately, and speak with natural English pronunciation through interactive actions and songs.',
    why_join: [
      'Master 42 core phoneme sounds through multi-sensory actions & stories.',
      'Eliminate guesswork in spelling using structured blending and segmenting techniques.',
      'Boost early reading confidence before formal schooling.',
      'Guided by Kiranmayee Nalkari (12+ years expertise in language training).'
    ],
    how_useful: [
      'Improves school performance in English reading and dictation exams.',
      'Develops accent-free, clear pronunciation and expressive oral reading skills.',
      'Lays a lifelong foundation for vocabulary expansion and independent learning.'
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Parent of Aarav (Age 6)',
        comment: 'Aarav started reading storybooks on his own within 3 weeks of joining DLH! The phonics actions made reading so enjoyable for him.',
        rating: 5
      },
      {
        name: 'Venkatesh Rao',
        role: 'Parent of Ananya (Age 5)',
        comment: 'The individual attention given at the Champapet center is outstanding. Kiranmayee Ma’am is exceptionally patient.',
        rating: 5
      }
    ]
  },
  {
    id: 'course-handwriting',
    name: 'Cursive Handwriting & Calligraphy',
    shortcode: 'HAND',
    category: 'Skills',
    badge: 'Transformative',
    age_group: '6 - 15 Years & Adults',
    duration: '4 Weeks',
    schedule: 'Tue, Thu, Sat (5:00 PM - 6:30 PM)',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    description: 'Transform illegible handwriting into elegant, swift, and comfortable cursive writing using scientific pencil grip adjustments, strokes practice, and posture alignment.',
    why_join: [
      'Fix poor pencil grip, hand fatigue, and slow writing speed in just 15 days.',
      'Master letter joins, slant consistency, and paper positioning.',
      'Enhance exam presentation scores through clean, legible answer scripts.',
      'Includes specialized Calligraphy starter kit for artistic lettering.'
    ],
    how_useful: [
      'Helps students write faster during timed school and board examinations.',
      'Boosts self-esteem and pride in personal school notebooks and assignments.',
      'Improves fine motor skills, hand-eye coordination, and spatial awareness.'
    ],
    testimonials: [
      {
        name: 'Suhasini Reddy',
        role: 'Parent of Rohan (Class 7)',
        comment: 'Rohan lost marks due to bad handwriting. After completing DLH Handwriting module, his teacher specifically praised his neat answer sheets!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-spoken',
    name: 'Spoken English & Public Speaking',
    shortcode: 'TALK',
    category: 'Languages',
    badge: 'Confidence Booster',
    age_group: '8 - 16 Years & Adults',
    duration: '8 Weeks',
    schedule: 'Daily Evening Batches',
    image_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Overcome stage fear, build robust English vocabulary, correct grammatical errors, and articulate ideas with eloquence and poise in public settings.',
    why_join: [
      'Interactive speech exercises, debate sessions, and storytelling stages.',
      'Real-world situational roleplays (interviews, presentations, casual conversations).',
      'Personalized accent training and grammar correction without rote learning.',
      'Small batch sizes ensuring every student gets microphone practice.'
    ],
    how_useful: [
      'Prepares students for school elocution contests, debates, and leadership roles.',
      'Builds interpersonal confidence for social interactions and future job interviews.',
      'Expands active speaking vocabulary and eliminates hesitations.'
    ],
    testimonials: [
      {
        name: 'Karthik K.',
        role: 'College Student',
        comment: 'I was always afraid to speak in English in front of my peers. DLH gave me the practice and confidence to speak fluently!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-brain-gym',
    name: 'Brain Gym, Yoga & Memory Techniques',
    shortcode: 'BRAIN',
    category: 'Wellness',
    badge: 'Holistic Mind',
    age_group: '5 - 14 Years',
    duration: '4 Weeks',
    schedule: 'Mon to Fri Morning / Evening',
    image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    description: 'Combines cross-lateral physical movements, Pranayama breathing, Surya Namaskaram, and mnemonic memory tricks to supercharge focus, retention, and emotional balance.',
    why_join: [
      'Activates both left and right brain hemispheres through movement coordination.',
      'Teaches speed memory techniques for formulas, historical dates, and vocabulary.',
      'Reduces exam anxiety, hyper-reactivity, and screen addiction.',
      'Includes daily 15-minute mindfulness and guided concentration routines.'
    ],
    how_useful: [
      'Shortens study time by increasing focus and memory recall speed.',
      'Improves body posture, flexibility, and physical vitality.',
      'Provides effective emotional regulation techniques during stressful exam periods.'
    ],
    testimonials: [
      {
        name: 'Deepa Laxmi',
        role: 'Parent of Neha (Age 9)',
        comment: 'Neha’s concentration span doubled! She remembers her study material much faster and looks forward to the morning Brain Gym routine.',
        rating: 5
      }
    ]
  },
  {
    id: 'course-painting',
    name: 'Creative Arts, Drawing & Acrylic Painting',
    shortcode: 'ARTS',
    category: 'Creative Arts',
    badge: 'Creative Focus',
    age_group: '5+ Years to Adults',
    duration: 'Flexible / Ongoing',
    schedule: 'Weekend Workshops & Regular Batches',
    image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    description: 'Unleash artistic expression through watercolor blending, acrylic techniques, sketching fundamentals, and craft work in a welcoming studio environment.',
    why_join: [
      'Learn perspective, color wheel harmony, shading, and texture rendering.',
      'Explores multiple mediums: Oil pastels, watercolors, acrylics, and clay modelling.',
      'Exhibit creations in DLH’s annual art showcase.',
      'Stress-busting creative haven for kids, teens, and homemakers alike.'
    ],
    how_useful: [
      'Nurtures creative problem solving, aesthetic sense, and spatial design skills.',
      'Provides a peaceful, screen-free therapeutic outlet.',
      'Enables students to build an impressive art portfolio.'
    ],
    testimonials: [
      {
        name: 'Sunitha Verma',
        role: 'Adult Art Learner',
        comment: 'Attending painting classes at DLH Champapet is my favorite part of the week. The atmosphere is warm, encouraging, and highly creative!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-daycare',
    name: "Keerthy's Daycare And Kindergarten",
    shortcode: 'CARE',
    category: 'Childcare',
    badge: 'Trusted Care',
    age_group: '6 Months - 10 Years',
    duration: 'Monthly / Hourly',
    schedule: 'Mon to Sat (8:30 AM - 7:30 PM)',
    image_url: '/keerthys-daycare-logo.png',
    description: "Safe, hygienic, and nurturing daycare & pre-school facilities operating in tandem with DLH, featuring indoor play spaces, nutritious meal times, nap zones, and structured study sessions at Keerthy's Daycare And Kindergarten.",
    why_join: [
      'CCTV monitored, kid-safe spaces with trained, caring staff.',
      'Balanced daily routine: Free play, story hour, study help, meals, and rest.',
      'Homely atmosphere in Champapet / Rakshapuram area.',
      'Flexible full-day, half-day, and after-school options for working parents.'
    ],
    how_useful: [
      'Provides working parents with total peace of mind regarding child safety and nutrition.',
      'Builds early social skills, sharing habits, and peer bonding.',
      'Includes after-school homework supervision and activity class integration.'
    ],
    testimonials: [
      {
        name: 'Madhavi Latha',
        role: 'Parent of Ishaan (Age 2)',
        comment: "As a working mother, Keerthy's Daycare And Kindergarten has been a blessing. Ishaan is so well cared for, healthy, and happy!",
        rating: 5
      }
    ]
  }
];
