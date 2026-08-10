'use client';

import React, { forwardRef } from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

interface CertificateTemplateProps {
  studentName: string;
  courseName: string;
  dlhId: string;
  completionDate: string;
}

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ studentName, courseName, dlhId, completionDate }, ref) => {
    return (
      <div className="w-full overflow-x-auto flex justify-center p-2 sm:p-4 bg-slate-900/5 rounded-2xl">
        <div
          ref={ref}
          className="relative w-[850px] h-[600px] bg-white text-slate-900 p-10 flex flex-col justify-between shadow-2xl border-[12px] border-amber-600 rounded-none overflow-hidden select-none font-sans"
          style={{
            backgroundImage: `radial-gradient(circle at center, #ffffff 0%, #fffdf8 100%)`,
          }}
        >
          {/* Ornate Inner Border */}
          <div className="absolute inset-3 border-2 border-amber-500/60 pointer-events-none" />
          <div className="absolute inset-5 border border-slate-300 pointer-events-none" />

          {/* Corner Ornaments */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-600 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-600 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-600 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-600 pointer-events-none" />

          {/* Header & Logo */}
          <div className="text-center relative z-10 space-y-2 pt-2">
            <div className="inline-flex items-center justify-center gap-2 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-700 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                DLH
              </div>
              <div className="text-left">
                <span className="font-display font-extrabold text-lg tracking-tight text-blue-950 block leading-none">
                  Dheeru's Learner's Hub
                </span>
                <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-widest block mt-0.5">
                  Champapet • Hyderabad
                </span>
              </div>
            </div>

            <div className="uppercase tracking-[0.3em] text-xs font-bold text-amber-600 pt-2">
              Official Certificate of Completion
            </div>
            
            <h1 className="font-serif text-3xl font-extrabold text-slate-900 tracking-wide">
              CERTIFICATE OF ACHIEVEMENT
            </h1>
          </div>

          {/* Body Section */}
          <div className="text-center relative z-10 my-auto space-y-4">
            <p className="text-slate-600 text-sm font-medium italic">
              This is to proudly certify that
            </p>

            <div className="relative inline-block px-8 py-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight border-b-2 border-amber-500 pb-1 capitalize">
                {studentName || 'Student Name'}
              </h2>
            </div>

            <p className="text-slate-600 text-sm font-medium max-w-lg mx-auto leading-relaxed">
              has successfully completed all prescribed coursework, practical sessions, and activity evaluations for the course
            </p>

            <div className="font-display font-bold text-2xl text-emerald-800 tracking-wide uppercase px-4 py-1 bg-emerald-50 inline-block rounded-lg border border-emerald-200">
              {courseName || 'Course Name'}
            </div>
          </div>

          {/* Footer Seals & Signatures */}
          <div className="relative z-10 flex items-end justify-between pt-4 border-t border-slate-200">
            
            {/* Left: Certificate Meta */}
            <div className="text-left space-y-1">
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                Credential Verification ID
              </div>
              <div className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300 inline-block">
                {dlhId || '2026-PHON-001'}
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Date of Issue: <strong className="text-slate-800">{completionDate || new Date().toISOString().split('T')[0]}</strong>
              </div>
            </div>

            {/* Center: Official DLH Gold Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 p-1 shadow-lg flex items-center justify-center text-slate-900 border-2 border-white">
                <div className="w-full h-full rounded-full border border-dashed border-amber-950/40 flex flex-col items-center justify-center p-1 text-center">
                  <ShieldCheck className="w-6 h-6 text-amber-950" />
                  <span className="text-[7px] font-extrabold uppercase tracking-tighter text-amber-950 mt-0.5">
                    VERIFIED DLH
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Signature Block */}
            <div className="text-right space-y-1">
              <div className="font-serif italic text-xl font-bold text-slate-900 pr-2">
                Kiranmayee N.
              </div>
              <div className="w-40 h-0.5 bg-slate-300 ml-auto" />
              <div className="text-xs font-bold text-slate-900">
                Kiranmayee Nalkari
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                Founder & Academic Director, DLH
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = 'CertificateTemplate';
