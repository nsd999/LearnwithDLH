import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Dheeru's Learner's Hub (DLH) — Phonics, Handwriting & Daycare in Champapet, Hyderabad",
  description: "Dheeru's Learner's Hub offers Jolly Phonics, Cursive Handwriting, Spoken English, Brain Gym & Memory, Creative Arts, and Keerthy Daycare in Champapet, Hyderabad. Verified digital credentialing platform.",
  keywords: ["Dheeru's Learner's Hub", "DLH Champapet", "Phonics classes Hyderabad", "Handwriting course Hyderabad", "Keerthy Daycare", "Kiranmayee Nalkari", "LMS", "Certificate verification"],
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Dheeru's Learner's Hub — Holistic Learning & Credentialing Platform",
    description: "Phonics, handwriting, spoken languages, brain gym, painting & daycare in Champapet, Hyderabad.",
    url: "https://dheeruslearnershub.lovable.app",
    siteName: "Dheeru's Learner's Hub",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
