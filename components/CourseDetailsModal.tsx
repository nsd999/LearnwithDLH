'use client';

import React from 'react';
import { Course } from '@/types';
import { X, CheckCircle2, Star, Clock, Users, Calendar, Award, MessageSquare, Lightbulb } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface CourseDetailsModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (course: Course) => void;
}

export default function CourseDetailsModal({ course, onClose, onApply }: CourseDetailsModalProps) {
  if (!course) return null;

  const directWhatsAppUrl = generateWhatsAppUrl({ courseName: course.name });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-end">
          <img
            src={course.image_url}
            alt={course.name}
            className={`absolute inset-0 w-full h-full ${
              course.image_url.includes('keerthy') || course.image_url.includes('logo')
                ? 'object-contain p-6 bg-white opacity-95'
                : 'object-cover opacity-40 mix-blend-overlay'
            }`}
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                CODE: {course.shortcode}
              </span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {course.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Target Age</div>
                <div className="font-bold text-slate-800">{course.age_group}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Duration</div>
                <div className="font-bold text-slate-800">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Schedule</div>
                <div className="font-bold text-slate-800">{course.schedule}</div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Program Overview
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Why Join? */}
          {course.why_join && course.why_join.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Why Join This Program?
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {course.why_join.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How Useful? */}
          {course.how_useful && course.how_useful.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                How It Helps Learners
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {course.how_useful.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonials */}
          {course.testimonials && course.testimonials.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                What Parents & Students Say
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.testimonials.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic">"{t.comment}"</p>
                    <div className="text-xs font-bold text-slate-900 pt-1">
                      {t.name} <span className="font-normal text-slate-500">• {t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Need custom batch timings? Contact <strong className="text-slate-700">+91 90327 08241</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(course);
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Apply & Register Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
