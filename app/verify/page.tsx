'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CertificateTemplate } from '@/components/CertificateTemplate';
import { getRegistrationByDlhId } from '@/lib/supabase';
import { Registration } from '@/types';
import { Award, Search, Download, CheckCircle, Clock, AlertTriangle, ShieldCheck, ArrowLeft, Loader2, Camera, Trash2, Sparkles } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Link from 'next/link';

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || '';
  
  const [dlhIdInput, setDlhIdInput] = useState(initialId);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<Registration | null>(null);
  const [searched, setSearched] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Optional Student Photo State & BG Removal
  const [studentPhoto, setStudentPhoto] = useState<string | null>(null);
  const [processingPhoto, setProcessingPhoto] = useState(false);
  const [photoMessage, setPhotoMessage] = useState<string | null>(null);

  const certRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProcessingPhoto(true);
    setPhotoMessage(null);

    try {
      // Call remove.bg API to strip background cleanly
      const formData = new FormData();
      formData.append('image_file', file);
      formData.append('size', 'auto');

      const res = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'tRVKq82y1jpdJkJJ8HDGRPqx',
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Remove.bg API failed');
      }

      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentPhoto(reader.result as string);
        setPhotoMessage('✨ Photo background removed cleanly via AI!');
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      console.warn('Remove.bg API failed or quota reached, using raw uploaded photo', err);
      // Fallback: load raw photo as data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentPhoto(reader.result as string);
        setPhotoMessage('Photo attached successfully!');
      };
      reader.readAsDataURL(file);
    } finally {
      setProcessingPhoto(false);
    }
  };

  const handleSearch = async (queryId?: string) => {
    const query = (queryId || dlhIdInput).trim();
    if (!query) return;

    setLoading(true);
    setSearched(true);
    try {
      const match = await getRegistrationByDlhId(query);
      setRecord(match);
    } catch (err) {
      console.error('Lookup error:', err);
      setRecord(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialId) {
      handleSearch(initialId);
    }
  }, [initialId]);

  const handleDownloadPDF = async () => {
    if (!certRef.current || !record) return;
    setDownloading(true);

    try {
      const element = certRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 3, // High definition output
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: -window.scrollY, // Compensate for window scroll position
        x: 0,
        y: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [850, 600],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 850, 600, undefined, 'FAST');
      pdf.save(`DLH_Certificate_${record.dlh_id}_${record.student_name.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to render PDF certificate:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Official DLH Credential Verification Portal
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verify Digital Certificate
            </h1>

            <p className="text-slate-600 text-sm">
              Enter the unique <strong>DLH Registration ID</strong> (e.g. <code>2026-PHON-001</code>) issued by Dheeru's Learner's Hub to verify course completion status and download the official PDF certificate.
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-md max-w-xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. 2026-PHON-001 or 2026-HAND-042"
                  value={dlhIdInput}
                  onChange={(e) => setDlhIdInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-300 font-mono text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600 uppercase"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search ID'}
              </button>
            </form>
          </div>

          {/* Results Area */}
          {searched && !loading && (
            <div className="space-y-8 animate-fade-in">
              
              {!record ? (
                /* Not Found Card */
                <div className="bg-white rounded-3xl p-8 border border-red-200 shadow-sm text-center max-w-md mx-auto space-y-4">
                  <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      No Record Found
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      No matching registration record exists for ID <strong>"{dlhIdInput}"</strong>.
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                    Tip: Try searching sample test IDs like <code>2026-PHON-001</code> or <code>2026-HAND-042</code>.
                  </p>
                </div>
              ) : record.status === 'completed' ? (
                /* Completed Certificate View */
                <div className="space-y-6">
                  <div className="bg-emerald-900 text-white p-6 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                      <div className="p-3 bg-emerald-800 rounded-2xl text-emerald-300">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-300 uppercase tracking-widest font-bold">
                          Verified Official Credential
                        </div>
                        <div className="font-display text-xl font-extrabold text-white">
                          {record.student_name} • {record.course_name || record.course_shortcode}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleDownloadPDF}
                      disabled={downloading}
                      className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0"
                    >
                      {downloading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Generating PDF...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Download Official PDF Certificate
                        </>
                      )}
                    </button>
                  </div>

                  {/* Optional Student Photo Upload Toolbar */}
                  <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-left">
                      <div className="p-2.5 bg-amber-100 text-amber-800 rounded-2xl flex-shrink-0">
                        <Camera className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                          <span>Personalize Certificate (Optional)</span>
                          <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            AI Studio BG Removal
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {studentPhoto 
                            ? 'Your transparent portrait photo has been embedded into the official certificate.' 
                            : 'Optionally upload a portrait photo to strip background and feature on your digital certificate.'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      {studentPhoto ? (
                        <button
                          type="button"
                          onClick={() => {
                            setStudentPhoto(null);
                            setPhotoMessage(null);
                          }}
                          className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors flex items-center gap-1.5 border border-red-200"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Remove Photo
                        </button>
                      ) : (
                        <label className="cursor-pointer px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2">
                          {processingPhoto ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                              Removing BG...
                            </>
                          ) : (
                            <>
                              <Camera className="w-4 h-4 text-amber-400" />
                              Upload Student Photo
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            disabled={processingPhoto}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {photoMessage && (
                    <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-2xl border border-emerald-200 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{photoMessage}</span>
                    </div>
                  )}

                  {/* Render Live Certificate Component */}
                  <CertificateTemplate
                    ref={certRef}
                    studentName={record.student_name}
                    courseName={record.course_name || record.course_shortcode}
                    dlhId={record.dlh_id}
                    completionDate={record.completion_date || new Date().toISOString().split('T')[0]}
                    studentPhotoUrl={studentPhoto}
                  />
                </div>
              ) : (
                /* Enrolled Status Card */
                <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-sm text-center max-w-lg mx-auto space-y-4">
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="bg-amber-100 text-amber-800 font-bold text-xs px-3 py-1 rounded-full uppercase border border-amber-300">
                      Enrollment Active • Completion Pending
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mt-3">
                      {record.student_name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Currently enrolled in <strong>{record.course_name || record.course_shortcode}</strong> under DLH ID <code>{record.dlh_id}</code>.
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 border-t border-slate-100 pt-3">
                    Certificates become downloadable once the course administrator marks the program as completed in the Admin Portal.
                  </p>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading portal...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
