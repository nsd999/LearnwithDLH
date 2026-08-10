'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, BookOpen, MessageSquare, Shield, Menu, X, Phone } from 'lucide-react';
import { DLH_PHONE_NUMBER } from '@/lib/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              DLH
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 block leading-none">
                Dheeru's Learner's Hub
              </span>
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase mt-1 block">
                Champapet, Hyderabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <a href="#courses" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Programs & Courses
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About DLH
            </a>
            <Link href="/verify" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <Award className="w-4 h-4 text-emerald-600" />
              Verify Certificate
            </Link>
            <Link href="/admin" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 text-slate-500 hover:text-slate-900">
              <Shield className="w-4 h-4" />
              Admin
            </Link>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${DLH_PHONE_NUMBER}?text=${encodeURIComponent("Hi DLH Team! I would like to inquire about course admissions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600"
          >
            Home
          </Link>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600"
          >
            Programs & Courses
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600"
          >
            About DLH
          </a>
          <Link
            href="/verify"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-semibold text-emerald-600"
          >
            <Award className="w-5 h-5" />
            Verify Certificate
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-medium text-slate-600"
          >
            <Shield className="w-5 h-5" />
            Admin Portal
          </Link>
          <div className="pt-2">
            <a
              href={`https://wa.me/${DLH_PHONE_NUMBER}?text=${encodeURIComponent("Hi DLH Team! I would like to inquire about course admissions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 rounded-xl"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
