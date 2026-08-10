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
      'Guided by Kiranmayee Nalkari (25+ years expertise in education).'
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
    id: 'course-21st-century',
    name: '21st Century Learning & Problem Solving',
    shortcode: 'SKIL',
    category: 'Skills',
    badge: 'Future Ready',
    age_group: '7 - 16 Years',
    duration: '4 Weeks',
    schedule: 'Weekend Workshops',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Develop analytical thinking, structured problem-solving strategies, active listening skills, and self-awareness essential for modern academic and personal excellence.',
    why_join: [
      'Master critical thinking frameworks and decision-making logic.',
      'Build active listening, curiosity, and self-awareness habits.',
      'Interactive team challenges fostering leadership and collaboration.',
      'Guided by NIE Times of India certified soft skills trainer.'
    ],
    how_useful: [
      'Prepares students for competitive exams, group discussions, and project presentations.',
      'Enhances cognitive agility and adaptability in fast-changing environments.',
      'Strengthens self-confidence and independent decision making.'
    ],
    testimonials: [
      {
        name: 'Radhika Nair',
        role: 'Parent of Siddharth (Class 8)',
        comment: 'This module helped my son approach school projects with creative problem solving and active team leadership!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-time-esteem',
    name: 'Time Management & Self-Esteem Mastery',
    shortcode: 'TIME',
    category: 'Skills',
    badge: 'Life Skill',
    age_group: '8+ Years to Adults',
    duration: '3 Weeks',
    schedule: 'Flexible Batches',
    image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    description: 'Learn priority planning, goal setting, self-awareness, stress reduction, and building high self-esteem for balanced academic and personal success.',
    why_join: [
      'Eliminate procrastination with daily priority checklists and study schedules.',
      'Build positive thinking habits and overcome self-doubt.',
      'Learn stress management techniques for exam seasons.',
      'Designed by NIST certified soft-skills master trainer.'
    ],
    how_useful: [
      'Maximizes study efficiency while leaving ample time for hobbies and rest.',
      'Boosts inner confidence during competitive school tests and interviews.',
      'Instills lifelong time discipline and emotional resilience.'
    ],
    testimonials: [
      {
        name: 'Deepak V.',
        role: 'Engineering Student',
        comment: 'Mrs. Kiranmayee’s time management tools transformed how I plan my semester exams and personal routine!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-storytelling',
    name: 'Art of Storytelling & Article Writing',
    shortcode: 'WRIT',
    category: 'Creative Arts',
    badge: 'Creative Focus',
    age_group: '6 - 15 Years',
    duration: '4 Weeks',
    schedule: 'Sat & Sun Batches',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    description: 'Nurture creative expression through structured storytelling, imaginative narrative building, vocabulary enrichment, and article writing.',
    why_join: [
      'Learn story structure: plot creation, character arcs, and expressive dialogue.',
      'Master article writing for school magazines and online blogs.',
      'Enhance active imagination and descriptive essay writing skills.',
      'Guided feedback on individual creative drafts.'
    ],
    how_useful: [
      'Improves English creative writing marks in school curriculum.',
      'Builds expressive oral storytelling and presentation capabilities.',
      'Fosters a lifelong love for reading and literature.'
    ],
    testimonials: [
      {
        name: 'Meena Iyer',
        role: 'Parent of Kavya (Age 9)',
        comment: 'Kavya now writes her own imaginative short stories and loves expressing her ideas on paper!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-spelling-vocab',
    name: 'Spelling Tips & Vocabulary Building',
    shortcode: 'WORD',
    category: 'Languages',
    badge: 'Essential',
    age_group: '5 - 12 Years',
    duration: '4 Weeks',
    schedule: 'Mon to Thu Batches',
    image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    description: 'Master English spelling rules, dictation strategies, active vocabulary expansion, and phonetic word decoding for effortless reading and writing.',
    why_join: [
      'Learn root words, prefixes, suffixes, and silent letter rules.',
      'Eliminate common dictation and spelling mistakes in school exams.',
      'Interactive word games, puzzles, and vocabulary flashcards.',
      'Sensory phonetics integration.'
    ],
    how_useful: [
      'Boosts English exam scores in dictation, grammar, and comprehension.',
      'Expands active speaking and writing word bank.',
      'Prevents common spelling confusion.'
    ],
    testimonials: [
      {
        name: 'Sunil Rao',
        role: 'Parent of Varun (Age 8)',
        comment: 'Varun went from losing marks in dictation to scoring top grades in English spelling tests!',
        rating: 5
      }
    ]
  },
  {
    id: 'course-neurogym-meditation',
    name: 'Neurogym, Meditation & Stress Management',
    shortcode: 'MIND',
    category: 'Wellness',
    badge: 'Holistic Mind',
    age_group: '6 - 16 Years & Adults',
    duration: '4 Weeks',
    schedule: 'Morning & Evening Sessions',
    image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    description: 'Train your brain through Neurogym exercises, mindfulness meditation, anger management, and positive thinking routines for peak mental focus.',
    why_join: [
      'Activate both brain hemispheres through cross-lateral neurogym drills.',
      'Learn breathing techniques for anger management and exam calm.',
      'Guided 15-minute daily mindfulness and concentration routines.',
      'Certified counseling practitioner guidance.'
    ],
    how_useful: [
      'Increases attention span and study retention speed.',
      'Helps children regulate emotions and screen time dependency.',
      'Promotes calm, confident mindsets during high-pressure tests.'
    ],
    testimonials: [
      {
        name: 'Anu Sharma',
        role: 'Parent of Rahul (Age 11)',
        comment: 'The Neurogym drills helped Rahul stay calm and focused during his final school exams.',
        rating: 5
      }
    ]
  },
  {
    id: 'course-teacher-training',
    name: 'Teacher Training & Methodology Workshop',
    shortcode: 'TTT',
    category: 'Skills',
    badge: 'Professional',
    age_group: 'Adults & Educators',
    duration: '4 Weeks',
    schedule: 'Special Professional Batches',
    image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Professional Train-the-Trainer (TTT) module equipping educators with activity-based teaching methodologies, pre-primary curriculum design, and classroom engagement.',
    why_join: [
      'Master multi-sensory teaching tools for phonics and early childhood.',
      'Learn effective classroom management, lesson planning, and student psychology.',
      'VINGS Solutions & Home Science College Saifabad certified standards.',
      'Includes practical teaching practice sessions.'
    ],
    how_useful: [
      'Empowers aspiring teachers to secure positions in leading schools.',
      'Helps existing educators upgrade to modern 21st-century teaching methods.',
      'Provides actionable activity kits for home tutors and school staff.'
    ],
    testimonials: [
      {
        name: 'Lakshmi Prasanna',
        role: 'Educator',
        comment: 'Mrs. Kiranmayee’s TTT module gave me the practical techniques and confidence to start my own activity learning center!',
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
