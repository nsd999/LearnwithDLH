'use client';

import React, { useState, useEffect } from 'react';
import { Course, Registration } from '@/types';
import { X, CheckCircle, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { registerStudent } from '@/lib/supabase';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface RegistrationModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function RegistrationModal({ course, onClose }: RegistrationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [registeredData, setRegisteredData] = useState<Registration | null>(null);

  // Reset form and registration state whenever course changes
  useEffect(() => {
    if (course) {
      setRegisteredData(null);
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
      setLoading(false);
    }
  }, [course?.id]);

  if (!course) return null;

  const handleCloseModal = () => {
    setRegisteredData(null);
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});
    onClose();
  };

  // AI Human Name Verification Helper
  const isPlausibleHumanName = (inputName: string): boolean => {
    const trimmed = inputName.trim();
    if (trimmed.length < 2 || trimmed.length > 60) return false;
    const nameRegex = /^[a-zA-Z\s\.\'\-]+$/;
    if (!nameRegex.test(trimmed)) return false;
    const lower = trimmed.toLowerCase();
    if (/^(.)\1+$/.test(lower)) return false;
    if (['asdf', 'qwerty', 'test', 'abcd', '1234', 'xyz'].some(spam => lower.includes(spam))) return false;
    return true;
  };

  const formatTitleCase = (str: string): string => {
    return str
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!isPlausibleHumanName(name)) {
      newErrors.name = 'Please enter a valid student full name (letters only).';
    }

    if (phone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    const formattedName = formatTitleCase(name);

    try {
      const reg = await registerStudent({
        student_name: formattedName,
        email,
        phone: `+91 ${phone}`,
        course_id: course.id,
        course_name: course.name,
        course_shortcode: course.shortcode,
      });

      setRegisteredData(reg);
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWhatsApp = () => {
    if (!registeredData) return;
    const url = generateWhatsAppUrl({
      courseName: course.name,
      studentName: registeredData.student_name,
      email: registeredData.email,
      phone: registeredData.phone,
      dlhId: registeredData.dlh_id,
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!registeredData ? (
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Enrollment Request
            </div>
            
            <h3 className="font-display text-2xl font-extrabold text-slate-900">
              Apply for {course.name}
            </h3>
            
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Enter applicant details below to auto-generate your unique DLH Registration ID (`YYYY-{course.shortcode}-001`) and open WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Student / Applicant Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900`}
                />
                {errors.name && (
                  <p className="text-[11px] font-semibold text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Contact Phone (10-Digit Mobile) *</span>
                  <span className="text-[10px] text-slate-400 font-normal">{phone.length}/10 digits</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 pointer-events-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm font-mono text-slate-900 font-bold`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] font-semibold text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. student@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900`}
                />
                {errors.email && (
                  <p className="text-[11px] font-semibold text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating Registration ID...
                    </>
                  ) : (
                    'Generate DLH ID & Connect on WhatsApp'
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-6 py-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Registration Generated!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your unique Dheeru's Learner's Hub ID has been securely created in our system.
              </p>
            </div>

            {/* Generated DLH ID Box */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Official DLH Registration ID
              </div>
              <div className="font-mono text-2xl font-extrabold text-emerald-400 tracking-wider">
                {registeredData.dlh_id}
              </div>
              <div className="text-xs text-slate-300">
                Status: <span className="text-amber-400 font-semibold capitalize">{registeredData.status}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600">
              Click below to send your pre-filled registration details directly to our Champapet admissions team via WhatsApp.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Open WhatsApp Chat Now
              </button>

              <button
                onClick={handleCloseModal}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
