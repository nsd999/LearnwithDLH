import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Award, ArrowUpRight, Heart, ExternalLink } from 'lucide-react';
import { 
  DLH_PHONE_NUMBER, 
  DLH_SECONDARY_PHONE_NUMBER, 
  DLH_EMAIL, 
  DLH_GOOGLE_MAPS_LOCATION 
} from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block shadow-md">
                <img
                  src="/dlh-logo.png"
                  alt="Dheeru's Learner's Hub Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering learners of all ages through activity-based Phonics, Handwriting, Languages, Brain Gym, Creative Arts, and Keerthy's Daycare And Kindergarten in Champapet, Hyderabad.
            </p>
            <div className="pt-2">
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3.5 py-2 rounded-lg hover:bg-emerald-900/60 transition-colors"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                Public Credential Verification
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Programs & Activities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Jolly Phonics & Reading</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Cursive Handwriting Mastery</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Spoken English & Public Speaking</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Brain Gym & Memory Techniques</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Drawing & Acrylic Painting</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Keerthy's Daycare And Kindergarten</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Hub Location & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href={DLH_GOOGLE_MAPS_LOCATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-start gap-1 group"
                >
                  <span>
                    Champapet / Rakshapuram Main Road,<br />
                    Hyderabad, Telangana 500079
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-1" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:+${DLH_PHONE_NUMBER}`} className="hover:text-white transition-colors font-medium">
                    +91 90327 08241
                  </a>
                  <a href={`tel:+${DLH_SECONDARY_PHONE_NUMBER}`} className="hover:text-white transition-colors font-medium">
                    +91 63038 49852
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${DLH_EMAIL}`} className="hover:text-white transition-colors break-all">
                  {DLH_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Founder & Mission */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Founder & Director
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Led by <strong className="text-slate-200">Kiranmayee Nalkari</strong>, certified freelance soft-skills and language trainer with 25+ years of educational experience.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <p className="text-xs text-slate-300 italic">
                "Every learner holds limitless potential when guided with patience, structured activities, and joyful practice."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dheeru's Learner's Hub & Keerthy's Daycare And Kindergarten. All rights reserved.</p>

          {/* NSD Creations Branding */}
          <div className="flex items-center gap-2.5 mt-2 md:mt-0 opacity-90 hover:opacity-100 transition-opacity">
            <img src="/nsd-logo.png" alt="NSD Creations" className="h-9 w-auto object-contain drop-shadow-md" />
            <span className="font-medium text-slate-400">
              Creatively Crafted by{' '}
              <a href="https://tinyurl.com/nsd-creations" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
                NSD Creations
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/verify" className="hover:text-slate-300 transition-colors">Credential Search</Link>
            <Link href="/admin" className="hover:text-slate-300 transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
