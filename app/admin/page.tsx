'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminRegistrationTable from '@/components/AdminRegistrationTable';
import { Shield, Lock, KeyRound, Sparkles } from 'lucide-react';

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === 'dlh2026' || pin.trim() === 'admin') {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
                DLH Administrator Portal
              </div>
              <h1 className="font-display text-3xl font-extrabold text-slate-900">
                Student Enrollment & Credential Management
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Toggle completion statuses, view registration details, and issue digital certificates.
              </p>
            </div>

            {authenticated && (
              <button
                onClick={() => setAuthenticated(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100"
              >
                Log Out Admin
              </button>
            )}
          </div>

          {!authenticated ? (
            /* PIN Protection Gate */
            <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Lock className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900">
                  Admin Passcode Required
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter administrative passcode to manage student registrations.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    required
                    placeholder="Enter Passcode"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-center font-mono text-lg text-slate-900 tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {error && (
                    <div className="text-xs font-bold text-red-600 mt-2">
                      Incorrect passcode. Access denied.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  Unlock Admin Dashboard
                </button>
              </form>
            </div>
          ) : (
            /* Admin Table Component */
            <AdminRegistrationTable />
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
