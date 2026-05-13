import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import larissaLogo from "@/assets/logos/larissa-logo.png";

function DesktopNavLinks() {
  const location = useLocation();
  const linkBase =
    "hover:opacity-80 transition-opacity shrink-0 font-['Aileron:Regular',sans-serif] leading-[16px] not-italic text-white whitespace-nowrap";

  return (
    <div
      className="content-stretch flex flex-col gap-2 sm:gap-[16px] items-start justify-center text-[14px] sm:text-[16px] min-w-0 z-20 md:pt-0.5"
      data-name="Link"
    >
      <Link
        to="/"
        onClick={() => {
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={linkBase}
      >
        Home
      </Link>
      <Link
        to="/investments"
        onClick={() => {
          if (location.pathname === '/investments') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={linkBase}
      >
        Investments
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          if (location.pathname === '/contact') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={linkBase}
      >
        Contact Us
      </Link>
    </div>
  );
}

function Frame() {
  return (
    <Link to="/#featured-stays" className="bg-white content-stretch flex h-[36px] sm:h-[38px] items-center justify-center px-3 sm:px-[18px] py-[6px] sm:py-[8px] relative rounded-[25px] shrink-0 hover:bg-white/90 transition-colors">
      <p className="font-['Aileron:SemiBold',sans-serif] leading-[14px] sm:leading-[16px] not-italic relative shrink-0 text-[#12161d] text-[13px] sm:text-[16px] whitespace-nowrap">Book Your Stay</p>
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="content-stretch flex items-center justify-between gap-2 pb-[12px] pt-[20px] px-3 sm:px-[20px] relative w-full sm:min-h-[52px]"
        data-name="Navbar"
      >
        <div className="flex items-center gap-2 z-50 sm:hidden">
          <button
            type="button"
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <Link
            to="/"
            className="flex h-10 max-h-10 w-auto max-w-[200px] items-center shrink-0"
            data-name="larissa-logo-mobile"
          >
            <img alt="Larisa Holiday Homes" className="h-full w-auto max-w-full object-contain object-left" src={larissaLogo} />
          </Link>
        </div>

      {/* Desktop: nav | logo | CTA — items-start so logo/button stay fixed; pad-left nav only so "Home" lines up with logo (centering the whole column pushed Home upward). */}
      <div className="hidden sm:flex flex-1 items-start justify-between gap-4 min-w-0">
        <div className="flex-1 flex justify-start min-w-0 sm:pt-[14px] md:pt-[18px]">
          <DesktopNavLinks />
        </div>
        <Link
          to="/"
          className="shrink-0 flex h-11 md:h-[52px] w-auto max-w-[min(40vw,340px)] items-center justify-center z-10"
          data-name="larissa-logo-desktop"
        >
          <img alt="Larisa Holiday Homes" className="h-full w-auto max-w-full object-contain object-center" src={larissaLogo} />
        </Link>
        <div className="flex-1 flex justify-end items-center shrink-0 z-20">
          <Frame />
        </div>
      </div>

      {/* Mobile Animated Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#12161d] z-[9999] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden pt-20 px-8 shadow-2xl flex flex-col gap-8`}
      >
        <button 
          className="absolute top-6 left-6 text-white text-2xl" 
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col gap-6 text-[18px] font-['Aileron:Regular',sans-serif]">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/investments" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">Investments</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
        </div>
      </div>

      <div className="sm:hidden shrink-0 z-20 ml-auto">
        <Frame />
      </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[9998] bg-black/50 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}