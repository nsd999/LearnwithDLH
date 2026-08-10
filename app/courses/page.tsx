'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import CourseDetailsModal from '@/components/CourseDetailsModal';
import RegistrationModal from '@/components/RegistrationModal';
import { Course } from '@/types';
import { getCourses } from '@/lib/supabase';
import { BookOpen, Sparkles, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AllCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const categories = ['All', 'Languages', 'Skills', 'Wellness', 'Creative Arts', 'Childcare'];

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortcode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        
        {/* Page Banner */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                Complete Academic & Skill Programs Catalog
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                All Programs & Training Modules
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Explore 13+ activity-based learning programs, soft skills training, language fluency, creative arts, and kindergarten care at Dheeru's Learner's Hub.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Controls & Search */}
        <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search course or shortcode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
              />
            </div>

          </div>
        </section>

        {/* Main Grid Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {loading ? (
              <div className="py-20 text-center text-slate-400 font-medium">
                Loading programs from database...
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="text-4xl">🔍</div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  No Matching Courses Found
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your search query or switching category filters.
                </p>
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
