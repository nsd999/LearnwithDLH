'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import CourseDetailsModal from '@/components/CourseDetailsModal';
import RegistrationModal from '@/components/RegistrationModal';
import { Course } from '@/types';
import { getCourses } from '@/lib/supabase';
import { DLH_PHONE_NUMBER } from '@/lib/whatsapp';
import { 
  BookOpen, Sparkles, Award, Heart, CheckCircle2, ShieldCheck, 
  MapPin, Phone, Mail, HelpCircle, Star, MessageSquare, ArrowRight, UserCheck 
} from 'lucide-react';

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Modals state
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);
  const [registerCourse, setRegisterCourse] = useState<Course | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (e) {
        console.error('Failed to load courses', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const categories = ['All', 'Languages', 'Wellness', 'Creative Arts', 'Childcare', 'Skills'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT DLH SECTION */}
        <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Story */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  About Dheeru's Learner's Hub
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Activity-Based Education Built On <span className="text-blue-600">Care, Practice & Mastery</span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Founded in 2013 in <strong>Champapet, Hyderabad</strong>, <strong>Dheeru's Learner's Hub (DLH)</strong> operates alongside <strong>Keerthy's Daycare And Kindergarten</strong> to nurture young minds and adult learners alike.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Led by <strong>Kiranmayee Nalkari</strong>, a seasoned freelance soft-skills and activity trainer with over 25+ years of experience, DLH provides structured phonics, handwriting improvement, language fluency, memory expansion, fine arts, and daycare.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Individual Focus
                    </div>
                    <div className="text-xs text-slate-600">
                      Small batch sizes ensuring tailored guidance for every child.
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      Verified DLH IDs
                    </div>
                    <div className="text-xs text-slate-600">
                      Auto-generated student registration IDs and digital PDF certificates.
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Feature Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
                    alt="Handwriting and Calligraphy at DLH Champapet"
                    className="rounded-2xl shadow-md w-full h-48 sm:h-60 object-cover"
                  />
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-center">
                    <img
                      src="/keerthys-daycare-logo.png"
                      alt="Keerthy's Daycare And Kindergarten Logo"
                      className="h-20 w-auto mx-auto object-contain"
                    />
                    <div className="font-display font-bold text-slate-900 text-sm">Keerthy's Daycare And Kindergarten</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="p-5 rounded-2xl bg-emerald-700 text-white space-y-2">
                    <div className="font-display font-bold text-xl">DLH Phonics</div>
                    <div className="text-xs text-emerald-100">
                      Sound-action reading methods transforming early English literacy.
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
                    alt="Brain Gym and Yoga at DLH Hyderabad"
                    className="rounded-2xl shadow-md w-full h-48 sm:h-60 object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2.1 VISIONARY SECTION: KIRANMAYEE NALKARI */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Card with Floating Badge Top Right */}
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-900/30 bg-slate-800">
                  
                  {/* Floating Badge Top Right */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2 rounded-xl shadow-xl border border-amber-300/80 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <Sparkles className="w-4 h-4 text-slate-950 fill-current" />
                    <span>25+ Years of Experience</span>
                  </div>

                  {/* Founder Photo without background removal */}
                  <img
                    src="/kiranmayee-nalkari.jpg"
                    alt="Mrs. Kiranmayee Nalkari - Founder & Director of Dheeru's Learner's Hub"
                    className="w-full h-[440px] sm:h-[480px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-6 pt-12">
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      Mrs. Kiranmayee Nalkari
                    </h3>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                      Founder & Lead Educator • DLH & Keerthy's Daycare
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Google-fetched details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-400" />
                  The Visionary Behind DLH
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Empowering Generations of Learners Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-emerald-400">Expert Guidance</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Led by <strong>Mrs. Kiranmayee Nalkari</strong>, a distinguished freelance soft-skills master trainer, language coach, and child educationist based in Champapet, Hyderabad. With a rich legacy spanning <strong>over 25+ years in education</strong>, she has pioneered activity-based learning methodologies that transform student confidence.
                </p>

                {/* Expertise Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>DLH Phonics & Sound Phonetics Specialist</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Cursive Handwriting & Speed Writing Master</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Soft Skills & Multilingual Language Trainer</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Brain Gym, Concentration & Memory Retention</span>
                  </div>
                </div>

                {/* Visionary Quote Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-800/90 to-blue-950/90 border border-slate-700/70 shadow-inner space-y-2">
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                    "Every learner holds limitless potential when guided with patience, structured activities, and joyful practice."
                  </p>
                  <div className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                    — Kiranmayee Nalkari, Founder & Director
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. DYNAMIC COURSE CATALOG SECTION */}
        <section id="courses" className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header & Categories Filter */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Activities & Programs Catalog
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore Programs at Dheeru's Learner's Hub
              </h2>

              <p className="text-slate-600 text-sm sm:text-base">
                Click <strong>"Learn More"</strong> for detailed objectives, benefits, and testimonials, or click <strong>"Apply Now"</strong> to generate your unique DLH Registration ID and start on WhatsApp.
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            {loading ? (
              <div className="py-12 text-center text-slate-400 font-medium">
                Loading programs from database...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onLearnMore={(c) => setDetailCourse(c)}
                    onRegister={(c) => setRegisterCourse(c)}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* 4. VERIFICATION PROMO BANNER */}
        <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Award className="w-4 h-4" />
                Instant Public Verification
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                Have a DLH Registration ID? Verify Certificates Online
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Enter any <strong>dlh_id</strong> (e.g. <code>2026-PHON-001</code>) to instantly verify course completion and generate a downloadable PDF certificate.
              </p>
            </div>

            <a
              href="/verify"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 transition-all flex-shrink-0"
            >
              Verify Certificate Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Frequently Asked Questions
              </div>
              <h2 className="font-display text-3xl font-extrabold text-slate-900">
                Common Questions About DLH
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Where is Dheeru's Learner's Hub located?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are conveniently located in Champapet / Rakshapuram, Hyderabad, Telangana (<a href="https://share.google/MKr5T842njWACZG1Z" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">View on Google Maps</a>). Contact us at <strong>+91 90327 08241 / +91 63038 49852</strong> or email <strong>dheeruslearnershub@gmail.com</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  How does the dynamic DLH Registration ID work?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  When you apply for a program online, our system generates a unique sequential ID formatted as <code>YYYY-[COURSE_SHORTCODE]-[001]</code>. This ID tracks your enrollment and enables instant public certificate verification upon completion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  What age groups can enroll at DLH?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We offer programs tailored for kids (ages 4+), school students, teenagers, and adults looking to improve handwriting, public speaking, or painting! Daycare services cover infants from 6 months up to 10 years.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Modals */}
      <CourseDetailsModal
        course={detailCourse}
        onClose={() => setDetailCourse(null)}
        onApply={(c) => {
          setDetailCourse(null);
          setRegisterCourse(c);
        }}
      />

      <RegistrationModal
        course={registerCourse}
        onClose={() => setRegisterCourse(null)}
      />
    </div>
  );
}
