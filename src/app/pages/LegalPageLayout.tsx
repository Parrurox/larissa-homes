import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import Navbar from "../../imports/Navbar";
import imgContactBackground from "../../assets/images/legalpage-bg.png";
import { Link, useNavigate, useLocation } from 'react-router';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-[#12161D] font-sans overflow-x-hidden selection:bg-[#5383a9] selection:text-white flex flex-col">
      {/* Header Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] flex flex-col items-center">
        <div className="absolute inset-0 z-0">
          <img src={imgContactBackground} className="w-full h-full object-cover object-center" alt="Header Background" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Navbar Overlay */}
        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight text-center">
            {title}
          </h1>
          <p className="text-white/80 mt-4 text-lg">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-8">
        <div className="flex flex-col text-[#61656E] text-[17px] md:text-[18px] leading-relaxed
          [&>h2]:text-2xl [&>h2]:md:text-[28px] [&>h2]:text-[#12161D] [&>h2]:font-medium [&>h2]:mt-10 [&>h2]:mb-4
          [&>h3]:text-xl [&>h3]:text-[#12161D] [&>h3]:font-medium [&>h3]:mt-6 [&>h3]:mb-3
          [&>p]:mb-5
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:mb-2
          [&>a]:text-[#5383a9] [&>a]:underline hover:[&>a]:opacity-80
        ">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
