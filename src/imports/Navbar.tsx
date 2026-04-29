import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import imgImage44 from "@/assets/images/main-logo.webp";

function NavLinks() {
  const location = useLocation();
  return (
    <div className="content-stretch flex flex-col font-['Aileron:Regular',sans-serif] gap-2 sm:gap-[16px] items-start leading-[16px] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-white w-[min(100%,104px)] sm:w-[144px] whitespace-nowrap" data-name="Link">
      <Link
        to="/"
        onClick={() => {
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="hover:opacity-80 transition-opacity shrink-0"
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
        className="hover:opacity-80 transition-opacity shrink-0"
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
        className="hover:opacity-80 transition-opacity shrink-0"
      >
        Contact Us
      </Link>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative z-20 shrink-0 min-w-0">
      <NavLinks />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start relative z-20 shrink-0">
      <Frame />
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="content-stretch flex items-start justify-between gap-2 pb-[12px] pt-[20px] px-3 sm:px-[20px] relative w-full" data-name="Navbar">
              <div className="flex items-center gap-2 z-50">
        <button 
          className="sm:hidden p-2 text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <Link
          to="/"
          className="sm:hidden size-[50px]"
          data-name="image 44 mobile"
        >
          <img alt="Larisa Homes Logo" className="object-contain size-full" src={imgImage44} />
        </Link>
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

      {/* Desktop Links */}
      <div className="hidden sm:block absolute top-[20px] left-[20px] z-20">
        <Frame2 />
      </div>
      
      <Frame1 />
      <Link
        to="/"
        className="hidden sm:block -translate-x-1/2 absolute left-1/2 top-[20px] z-10 size-[88px] md:size-[100px]"
        data-name="image 44 desktop"
      >
        <img alt="Larisa Homes Logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage44} />
      </Link>
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