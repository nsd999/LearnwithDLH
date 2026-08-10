'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Award, Sparkles, BookOpen, CheckCircle2, UserCheck, 
  Briefcase, MessageSquare, ArrowLeft, Lightbulb, Languages, MapPin 
} from 'lucide-react';
import { DLH_PHONE_NUMBER } from '@/lib/whatsapp';

export default function MeetTheFounderPage() {
  const certifications = [
    { title: "Certified Soft Skills Trainer", org: "NIST" },
    { title: "Certified Counselling Practitioner", org: "ICS" },
    { title: "Certified TEFL Trainer", org: "ACT" },
    { title: "Certified Public Speaking Trainer", org: "Impact" },
    { title: "Certified TTT (Train the Trainer)", org: "VINGS SOLUTIONS, Hyderabad" },
    { title: "Early Childhood Education & Pre-primary Trainer", org: "Home Science College, Saifabad" },
  ];

  const experienceHighlights = [
    { role: "Freelance Soft Skills & Activity Trainer", org: "NIE Times of India", period: "School & College Workshops" },
    { role: "Spoken English Educator", org: "Govt Girls Blind School, Malakpet (Youth4jobs)", period: "Special Initiative" },
    { role: "DDUGKY Project Skill Trainer", org: "SLC College", period: "Youth Empowerment" },
    { role: "Primary & Pre-primary Incharge", org: "Krishnaveni Talent School", period: "2010 – 2015" },
    { role: "School Teacher", org: "Indo-English School", period: "1997 – 2008" },
  ];

  const topicsCovered = [
    "Time Management", "Self-Esteem Building", "The Art of Public Speaking", "The Art of Conversation",
    "Problem Solving", "21st Century Learning Skills", "Storytelling & Expressive Reading", "Effective Communication Skills",
    "Power of Positive Thinking", "Spelling Techniques & Dictation", "Cognitive Behaviour & Neurogym", "Active Listening Skills",
    "Vocabulary Expansion", "Self-Awareness & Mindfulness", "Team Building & Leadership", "Stress & Anger Management",
    "Spoken English & Fluency", "Teacher Training Modules", "Article & Creative Writing"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider mb-6 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Meet The Founder & Academic Director
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Mrs. Kiranmayee Nalkari
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Pioneering activity-based education, language fluency, soft-skills training, and early childhood development in Champapet, Hyderabad for over 25+ years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Details & Biography */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Founder Image Card */}
              <div className="lg:col-span-5 relative sticky top-24">
                <div className="rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-900 relative">
                  <img
                    src="/kiranmayee-nalkari.jpg"
                    alt="Mrs. Kiranmayee Nalkari"
                    className="w-full h-[450px] object-cover object-top"
                  />
                  <div className="p-6 bg-slate-900 text-white space-y-2">
                    <div className="font-display font-extrabold text-2xl text-white">
                      Kiranmayee Nalkari
                    </div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Founder & Director • DLH & Keerthy's Daycare
                    </div>
                    <div className="pt-2 text-xs text-slate-300 space-y-1">
                      <div className="flex items-center gap-2">
                        <Languages className="w-4 h-4 text-emerald-400" />
                        <span>Languages: English, Telugu, Hindi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>Champapet, Hyderabad, Telangana</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Profile & Credentials */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* Professional Overview */}
                <div className="space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <UserCheck className="w-7 h-7 text-blue-600" />
                    Professional Profile
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    As an independent freelance soft skills and activity master trainer, <strong>Kiranmayee Nalkari</strong> has delivered high-impact communication, leadership, and personality development programs for engineering colleges, MBA institutes, schools, and corporate groups.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    She prepares her own structured training modules covering team building, presentation skills, time management, public speaking, IELTS training, and early childhood education. Currently associated with <strong>NIE Times of India</strong>, she conducts student empowerment workshops across leading educational institutions.
                  </p>
                </div>

                {/* Educational Qualifications & Certifications */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Award className="w-6 h-6 text-amber-500" />
                    Professional Certifications & Qualifications
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/60 transition-colors space-y-1">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          {cert.title}
                        </div>
                        <div className="text-xs text-slate-500 font-medium pl-6">
                          Issued by {cert.org}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Bachelor's Degree from St. Pious X Degree College (1996)</span>
                  </div>
                </div>

                {/* Experience & Institutional Legacy */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    Teaching & Institutional Legacy
                  </h3>

                  <div className="space-y-3">
                    {experienceHighlights.map((exp, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                        <div>
                          <div className="font-bold text-slate-900 text-sm sm:text-base">
                            {exp.role}
                          </div>
                          <div className="text-xs text-slate-600">
                            {exp.org}
                          </div>
                        </div>
                        <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600 flex-shrink-0">
                          {exp.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Specialized Topics Covered */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Training Modules & Core Expertise
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white">
                Topics Covered by Mrs. Kiranmayee Nalkari
              </h2>
              <p className="text-slate-400 text-sm">
                Comprehensive training topics conducted for school students, college undergraduates, teachers, and adult professionals.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
              {topicsCovered.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold hover:border-amber-400/60 hover:text-amber-300 transition-all shadow-sm"
                >
                  ✨ {topic}
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <a
                href={`https://wa.me/${DLH_PHONE_NUMBER}?text=${encodeURIComponent("Hi Mrs. Kiranmayee Nalkari! I read your profile on DLH website and would like to inquire about training programs.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Connect With Founder on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
