import React from 'react';
import { Link, useLocation } from 'react-router';
import imgImage44 from "@/assets/images/main-logo.webp";
import { SECTION_IDS, SCROLL_ANCHOR_CLASS } from '../constants/sections';

export function Footer() {
  const location = useLocation();
  const faqTo =
    location.pathname === '/'
      ? `/#${SECTION_IDS.faq}`
      : `${location.pathname}#${SECTION_IDS.faq}`;

  return (
    <footer className="w-full bg-[#fafafb] pt-[50px] px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* Brand Logo */}
          <div className="flex flex-col shrink-0">
            <Link to="/" className="inline-block relative w-[100px] h-[100px]">
              <img 
                alt="ZH Vacation Home Logo" 
                className="w-full h-full object-cover" 
                src={imgImage44} 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-end w-full lg:flex-1 gap-x-12 sm:gap-x-24 md:gap-x-32 lg:gap-x-16 xl:gap-x-[110px] gap-y-10">
            <div className="flex flex-col gap-8 lg:gap-11">
              <Link to={`/#${SECTION_IDS.featuredStays}`} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">Featured Stays</Link>
              <Link to={`/#${SECTION_IDS.testimonials}`} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">Testimonials</Link>
            </div>
            <div className="flex flex-col gap-8 lg:gap-11">
              <Link to={`/investments#${SECTION_IDS.investment}`} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">Investment</Link>
              <Link to={`/#${SECTION_IDS.about}`} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">About</Link>
            </div>
            <div className="flex flex-col gap-8 lg:gap-11">
              <Link to={faqTo} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">FAQ</Link>
              <Link to={`/contact#${SECTION_IDS.contact}`} className="font-['Inter'] font-medium text-[#12161d] text-[18px] tracking-[-0.44px] hover:opacity-70 transition-opacity whitespace-nowrap">Contact Us</Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 pt-6 border-t border-[#e5e5e6] gap-6 mt-2">
          <p className="font-['Inter'] font-normal text-[#61656e] text-[14px] tracking-[-0.15px]">
            © {new Date().getFullYear()} Larisa Homes. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <Link
              id={SECTION_IDS.termsOfService}
              to={`/#${SECTION_IDS.termsOfService}`}
              className={`font-['Inter'] font-normal text-[#61656e] text-[14px] tracking-[-0.15px] hover:text-[#12161d] transition-colors whitespace-nowrap ${SCROLL_ANCHOR_CLASS}`}
            >
              Terms of Service
            </Link>
            <Link
              id={SECTION_IDS.privacyPolicy}
              to={`/#${SECTION_IDS.privacyPolicy}`}
              className={`font-['Inter'] font-normal text-[#61656e] text-[14px] tracking-[-0.15px] hover:text-[#12161d] transition-colors whitespace-nowrap ${SCROLL_ANCHOR_CLASS}`}
            >
              Policy service
            </Link>
            <Link
              id={SECTION_IDS.cookiePolicy}
              to={`/#${SECTION_IDS.cookiePolicy}`}
              className={`font-['Inter'] font-normal text-[#61656e] text-[14px] tracking-[-0.15px] hover:text-[#12161d] transition-colors whitespace-nowrap ${SCROLL_ANCHOR_CLASS}`}
            >
              Cookie Policy
            </Link>
            <Link
              id={SECTION_IDS.partners}
              to={`/#${SECTION_IDS.partners}`}
              className={`font-['Inter'] font-normal text-[#61656e] text-[14px] tracking-[-0.15px] hover:text-[#12161d] transition-colors whitespace-nowrap ${SCROLL_ANCHOR_CLASS}`}
            >
              Partners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
