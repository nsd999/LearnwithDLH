import React from 'react';
import { Award, BookOpen, CheckCircle, MessageSquare, Sparkles, Users, Star } from 'lucide-react';
import { DLH_PHONE_NUMBER } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Decor Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Premier Learning & Activity Center • Champapet, Hyderabad</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Transforming Curiosity Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">Lifelong Skills</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-white">Dheeru's Learner's Hub (DLH)</strong>. We provide expert-led DLH Phonics, Cursive Handwriting, Spoken Languages, Brain Gym & Wellness, Creative Arts, and Daycare for children, teens, and adults.
            </p>

            {/* Quick Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>100% Activity-Based Methodology</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Small Batch Attention & Guidance</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Verified Digital Certificates</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Flexible Timings for All Age Groups</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                Explore All Programs
              </a>
              <a
                href={`https://wa.me/${DLH_PHONE_NUMBER}?text=${encodeURIComponent("Hi DLH Team! I am interested in joining a course. Can you assist me?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Apply on WhatsApp
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">25+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400">2,500+</div>
                <div className="text-xs text-slate-400 font-medium">Enrolled Students</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">4.9 ★</div>
                <div className="text-xs text-slate-400 font-medium">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/40 p-3 shadow-2xl shadow-blue-900/40">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Interactive Phonics & Activity Learning at Dheeru's Learner's Hub"
                className="rounded-xl w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/70 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm">
                      DLH Phonics & Brain Gym
                    </h4>
                    <p className="text-xs text-slate-300">
                      Guided by Kiranmayee Nalkari • Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Credential Badge */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold tracking-wide uppercase">Official DLH Certificate Issued</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
