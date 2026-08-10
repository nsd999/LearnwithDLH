'use client';

import React, { useState, useEffect } from 'react';
import { Registration, Course } from '@/types';
import { getRegistrations, updateRegistrationStatus, getCourses, registerStudent } from '@/lib/supabase';
import { Search, Filter, CheckCircle2, Clock, Download, RefreshCw, UserPlus, Shield, X, Mail, Phone, BookOpen } from 'lucide-react';

export default function AdminRegistrationTable() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'enrolled' | 'completed'>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Manual Add Student Modal state
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentPhone, setNewStudentPhone] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [regsData, coursesData] = await Promise.all([
        getRegistrations(),
        getCourses()
      ]);
      setRegistrations(regsData);
      setCourses(coursesData);
      if (coursesData.length > 0 && !selectedCourseId) {
        setSelectedCourseId(coursesData[0].id);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleStatus = async (reg: Registration) => {
    const nextStatus = reg.status === 'completed' ? 'enrolled' : 'completed';
    setUpdatingId(reg.id);
    try {
      const success = await updateRegistrationStatus(reg.id, nextStatus);
      if (success) {
        setRegistrations(prev => prev.map(r => {
          if (r.id === reg.id) {
            return {
              ...r,
              status: nextStatus,
              completion_date: nextStatus === 'completed' ? new Date().toISOString().split('T')[0] : r.completion_date
            };
          }
          return r;
        }));
      }
    } catch (err) {
      console.error('Error toggling status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleManualAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentEmail || !newStudentPhone || !selectedCourseId) return;

    const course = courses.find(c => c.id === selectedCourseId);
    if (!course) return;

    try {
      const newReg = await registerStudent({
        student_name: newStudentName,
        email: newStudentEmail,
        phone: newStudentPhone,
        course_id: course.id,
        course_name: course.name,
        course_shortcode: course.shortcode,
      });

      setRegistrations(prev => [newReg, ...prev]);
      setAddModalOpen(false);
      setNewStudentName('');
      setNewStudentEmail('');
      setNewStudentPhone('');
    } catch (err) {
      console.error('Manual student addition failed:', err);
    }
  };

  const filteredRegistrations = registrations.filter(r => {
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
    const matchesSearch = 
      r.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.dlh_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.course_name && r.course_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      r.course_shortcode.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['DLH ID', 'Student Name', 'Email', 'Phone', 'Course Shortcode', 'Course Name', 'Status', 'Completion Date', 'Created At'];
    const rows = filteredRegistrations.map(r => [
      r.dlh_id,
      `"${r.student_name}"`,
      r.email,
      r.phone,
      r.course_shortcode,
      `"${r.course_name || ''}"`,
      r.status,
      r.completion_date || '',
      r.created_at
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dlh_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Bar: Search, Filters & Actions */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, email, DLH ID (e.g. 2026-PHON-001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
          <select
            value={statusFilter}
            onChange={(e: any) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="all">All Statuses ({registrations.length})</option>
            <option value="enrolled">Enrolled Only ({registrations.filter(r => r.status === 'enrolled').length})</option>
            <option value="completed">Completed Only ({registrations.filter(r => r.status === 'completed').length})</option>
          </select>

          <button
            onClick={loadData}
            title="Refresh list"
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            CSV
          </button>

          <button
            onClick={() => setAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Enroll Student
          </button>
        </div>

      </div>

      {/* Registrations Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">DLH ID</th>
                <th className="px-6 py-4">Student & Contact</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Completion Status</th>
                <th className="px-6 py-4">Date Enrolled / Completed</th>
                <th className="px-6 py-4 text-right">Action Toggle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredRegistrations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                    No student registrations match your current filters.
                  </td>
                </tr>
              ) : (
                filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* DLH ID */}
                    <td className="px-6 py-4 font-mono font-bold text-slate-900">
                      <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 text-xs">
                        {reg.dlh_id}
                      </span>
                    </td>

                    {/* Student Name & Email */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">{reg.student_name}</div>
                      <div className="text-xs text-slate-500">{reg.email} • {reg.phone}</div>
                    </td>

                    {/* Course */}
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {reg.course_shortcode}
                        </span>
                        <span className="text-slate-800 text-xs truncate max-w-[200px]">
                          {reg.course_name || reg.course_id}
                        </span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      {reg.status === 'completed' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          Enrolled
                        </span>
                      )}
                    </td>

                    {/* Dates */}
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {reg.status === 'completed' ? (
                        <div>
                          <span className="text-slate-400">Completed on:</span>{' '}
                          <strong className="text-slate-700">{reg.completion_date || 'N/A'}</strong>
                        </div>
                      ) : (
                        <div>
                          <span className="text-slate-400">Enrolled on:</span>{' '}
                          {reg.created_at ? reg.created_at.split('T')[0] : 'N/A'}
                        </div>
                      )}
                    </td>

                    {/* Toggle Button */}
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleToggleStatus(reg)}
                        disabled={updatingId === reg.id}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
                          reg.status === 'completed'
                            ? 'bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-amber-900 border border-slate-300'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                        }`}
                      >
                        {updatingId === reg.id ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : reg.status === 'completed' ? (
                          'Mark Enrolled'
                        ) : (
                          'Mark Completed'
                        )}
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Student Add Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <button
              onClick={() => setAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-bold text-xl text-slate-900">
              Manually Register Student
            </h3>

            <form onSubmit={handleManualAdd} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Name *</label>
                <input
                  type="text"
                  required
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  placeholder="e.g. Rahul Verma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={newStudentEmail}
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={newStudentPhone}
                  onChange={(e) => setNewStudentPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Program / Course *</label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
                >
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>
                      [{c.shortcode}] {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
                >
                  Create & Generate DLH ID
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
