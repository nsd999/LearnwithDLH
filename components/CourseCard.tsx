'use client';

import React from 'react';
import { Course } from '@/types';
import { Clock, Users, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface CourseCardProps {
  course: Course;
  onLearnMore: (course: Course) => void;
  onRegister: (course: Course) => void;
}

export default function CourseCard({ course, onLearnMore, onRegister }: CourseCardProps) {
  const directWhatsAppUrl = generateWhatsAppUrl({ courseName: course.name });

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      
      {/* Thumbnail Image & Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src={course.image_url}
          alt={course.name}
          className={`w-full h-full transition-transform duration-500 ${
            course.image_url.includes('keerthy') || course.image_url.includes('logo')
              ? 'object-contain p-5 bg-white group-hover:scale-105'
              : 'object-cover group-hover:scale-105'
          }`}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-slate-700/50">
            {course.category}
          </span>
          {course.badge && (
            <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {course.badge}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-blue-600 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md shadow-md">
          {course.shortcode}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {course.name}
          </h3>
          
          <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          {/* Quick Meta */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
              <span>{course.age_group}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => onLearnMore(course)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold text-xs py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => onRegister(course)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-md hover:shadow-emerald-600/20 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}
