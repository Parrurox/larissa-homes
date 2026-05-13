import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { CustomerReviews } from '../components/CustomerReviews';
import { Footer } from '../components/Footer';
import Navbar from "../../imports/Navbar";
import { SECTION_IDS, SCROLL_ANCHOR_CLASS } from '../constants/sections';
import { sendContactInquiry } from '../../lib/contactApi';

import imgDubaiBackground from "@/assets/images/backgrounds/dubai-desktop-hd.webp";
import imgContactBackground from "@/assets/images/backgrounds/contact-section.webp";
import imgUnion from "@/assets/Union.svg";
import imgInvestmentsHeroText from "@/assets/text.svg";
import imgDubaiSkyline from "@/assets/images/dubai-skyline-waterfront.webp";
import imgService1 from "@/assets/images/service-advisory.webp";
import imgService3 from "@/assets/images/team-collaboration.webp";
import newImgAboutHero from "@/assets/images/about-page-hero.webp";
import imgProp1Img1 from "@/assets/images/hero-key-visual.webp";
import imgProp1Img2 from "@/assets/images/team-collaboration.webp";
import imgProp1Img3 from "@/assets/images/property-type-a-gallery-3.webp";
import imgProp1Img4 from "@/assets/images/property-type-a-gallery-4.webp";
import imgProp2Img1 from "@/assets/images/property-type-b-gallery-1.webp";
import imgProp2Img2 from "@/assets/images/interior-lounge.webp";
import imgProp2Img3 from "@/assets/images/property-type-b-gallery-3.webp";
import imgProp2Img4 from "@/assets/images/property-type-b-gallery-4.webp";
import imgProp3Img1 from "@/assets/images/property-type-c-gallery-1.webp";
import imgProp3Img2 from "@/assets/images/property-type-c-gallery-2.webp";
import imgProp3Img3 from "@/assets/images/modern-living-space.webp";
import imgProp3Img4 from "@/assets/images/property-type-c-gallery-4.webp";
import imgCtaBanner from "@/assets/images/cta-banner.webp";
import imgOnboarding from "@/assets/images/onboarding.webp";
import imgManagement from "@/assets/images/management-services.webp";
import imgEarnings from "@/assets/images/earnings-illustration.webp";
import imgGuestRelations from "@/assets/images/guest-relations.webp";
import imgJvc1 from "@/assets/images/jumerah-village-circle-1.jpg";
import imgJvc2 from "@/assets/images/jumerah-village-circle-2.jpg";
import imgJvc3 from "@/assets/images/jumerah-village-circle-3.jpg";
import imgJvc4 from "@/assets/images/jumerah-village-circle-4.jpg";
import imgJvc5 from "@/assets/images/jumerah-village-circle-5.jpg";
import imgJvc6 from "@/assets/images/jumerah-village-circle-6.jpg";
import imgBayBusiness1 from "@/assets/images/bay-business-1.jpg";
import imgBayBusiness2 from "@/assets/images/bay-business-2.jpg";
import imgBayBusiness3 from "@/assets/images/bay-business-3.jpg";
import imgBayBusiness4 from "@/assets/images/bay-business-4.jpg";
import imgBayBusiness5 from "@/assets/images/bay-business-5.jpg";

const homeFaqs = [
  {
    q: "What amenities are included in my stay?",
    a: "All our properties come fully equipped with high-speed Wi-Fi, premium linens, luxury toiletries, a fully stocked kitchen, and a Smart TV. Specific amenities like private pools or gym access vary by property."
  },
  {
    q: "How does the check-in process work?",
    a: "We offer a seamless, contactless check-in experience. You will receive a unique digital access code and detailed instructions 24 hours before your arrival."
  },
  {
    q: "Are pets allowed in the properties?",
    a: "Pet policies vary depending on the specific property. Please check the individual property listing details or reach out to our support team to find the perfect pet-friendly stay."
  },
  {
    q: "Is there a minimum stay requirement?",
    a: "Most of our properties have a 2-night minimum stay, though this can vary during peak seasons or holidays. Long-term stays are also available with special rates."
  }
];

const investmentFaqs = [
  {
    q: "How does the commission model work?",
    a: "We charge a competitive 15% commission on gross rental revenue. There are no hidden fees, and you only pay when your property earns money."
  },
  {
    q: "What is included in the management service?",
    a: "Our service includes full property management, dynamic price optimization, 24/7 guest communication, professional cleaning coordination, and monthly financial reporting."
  },
  {
    q: "Do I have to commit to a long-term contract?",
    a: "No, we believe in earning your business every month. We don't lock you into long-term contracts, giving you flexibility and peace of mind."
  },
  {
    q: "How and when are my earnings paid out?",
    a: "You will receive your monthly payouts directly to your bank account alongside transparent, detailed performance reports detailing occupancy and revenue."
  }
];

function PropertyImageCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden group">
      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    setContactError('');

    const result = await sendContactInquiry(contactForm);

    if (result.success) {
      setContactStatus('success');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setContactStatus('error');
      setContactError(result.error || 'Something went wrong');
    }
  };

  const scrollToSection = React.useCallback((id: string) => {
    if (id === SECTION_IDS.investmentsTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleBookYourStay = React.useCallback(() => {
    if (location.pathname === '/') {
      scrollToSection(SECTION_IDS.featuredStays);
    } else {
      navigate({ pathname: '/', hash: SECTION_IDS.featuredStays });
    }
  }, [location.pathname, navigate, scrollToSection]);

  React.useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    requestAnimationFrame(() => scrollToSection(hash));
  }, [location.pathname, location.hash, scrollToSection]);

  /** SPA keeps scroll position across routes; reset to top on select routes when there is no hash anchor. */
  React.useEffect(() => {
    const scrollTopRoutes = ['/investments', '/contact', '/privacy-policy', '/terms-of-service', '/cookie-policy'];
    if (!scrollTopRoutes.includes(location.pathname)) return;
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#12161D] font-sans overflow-x-hidden selection:bg-[#5383a9] selection:text-white">
      
      {/* Hero Section */}
      {isHomePage ? (
        <section className="relative w-full h-screen flex flex-col items-center">
          <div className="absolute inset-0 z-0">
            <img src={imgDubaiBackground} className="w-full h-full object-cover" alt="Dubai Background" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#5383a9] to-transparent h-[60%] opacity-80" />
          </div>
          
          {/* Navbar */}
          <Navbar />

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1200px] pb-10 md:pb-20">
            <div className="flex items-center justify-center">
              <img
                src={imgUnion}
                className="w-[92%] max-w-[560px] h-auto md:w-full md:max-w-[719px]"
                alt="Find the perfect rental"
              />
            </div>
          </div>
        </section>
      ) : isContactPage ? (
        <section id={SECTION_IDS.contact} className={`relative w-full min-h-screen flex flex-col items-center ${SCROLL_ANCHOR_CLASS}`}>
          <div className="absolute inset-0 z-0">
            <img src={imgContactBackground} className="w-full h-full object-cover object-center" alt="Dubai Skyline" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Navbar Overlay */}
          <div className="relative z-[9997] w-full">
            <Navbar />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-[852px] px-6 mt-[120px] md:mt-[220px] mb-20 md:mb-32">
            <h1 className="text-[40px] md:text-5xl lg:text-[64px] font-semibold text-white tracking-[-1.6px] leading-[1.1] md:leading-[80px] text-center mb-[38px] w-full">
              Get In Touch with Us
            </h1>

            <div className="backdrop-blur-[12px] bg-[#737373]/55 rounded-[24px] w-full p-8 md:p-12 lg:p-[50px] flex flex-col items-center gap-[40px]">
              <form onSubmit={handleContactSubmit} className="w-full flex flex-col gap-[34px]">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[16px] text-white font-normal leading-[1.4]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="h-[56px] w-full bg-transparent border border-white rounded-[12px] px-4 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[16px] text-white font-normal leading-[1.4]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="h-[56px] w-full bg-transparent border border-white rounded-[12px] px-4 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[16px] text-white font-normal leading-[1.4]">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    required
                    className="h-[56px] w-full bg-transparent border border-white rounded-[12px] px-4 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[16px] text-white font-normal leading-[1.4]">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    className="h-[126px] w-full bg-transparent border border-white rounded-[12px] p-4 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                  />
                </div>

                {contactStatus === 'success' && (
                  <p className="text-white text-center font-medium">Thank you! Your message has been sent.</p>
                )}

                {contactStatus === 'error' && (
                  <p className="text-red-300 text-center font-medium">{contactError}</p>
                )}

                <button
                  type="submit"
                  disabled={contactStatus === 'sending'}
                  className="bg-white text-[#12161D] h-[38px] px-[18px] rounded-[25px] font-semibold text-[16px] flex items-center justify-center hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {contactStatus === 'sending' ? 'Sending...' : 'Get In Touch'}
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section
          id={SECTION_IDS.investmentsTop}
          className="relative w-full h-screen overflow-hidden flex flex-col"
        >
          <div className="absolute inset-0 z-0">
            <img src={imgDubaiSkyline} className="w-full h-full object-cover object-center" alt="Dubai Skyline" />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center px-6">
              <div className="flex items-center justify-center">
                <img
                  src={imgInvestmentsHeroText}
                  className="w-[92%] max-w-[560px] h-auto md:w-full md:max-w-[1011px]"
                  alt="Airbnb management that maximizes your earnings with style and comfort"
                />
              </div>
            </div>
          </div>
          
          {/* Navbar Overlay */}
          <div className="relative z-10 w-full">
            <Navbar />
          </div>
        </section>
      )}

      {/* Featured Stays (Only on Home Page) */}
      {isHomePage && (
        <section
          id={SECTION_IDS.featuredStays}
          className={`bg-white py-24 px-6 lg:px-20 max-w-[1440px] mx-auto w-full ${SCROLL_ANCHOR_CLASS}`}
        >
          <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[40px] lg:text-[52px] font-medium text-[#12161D] leading-tight tracking-tight">
                  Featured Stays in Dubai
                </h2>
                <p className="text-[18px] text-[#61656E] max-w-xl">
                  Discover our handpicked selection of premium properties. Designed for comfort, styled for luxury, and perfectly located.
                </p>
              </div>
            </div>

            <div className="w-full pb-16 flex flex-col gap-16 md:gap-24">
                {/* Property 1 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[250px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden">
                      <PropertyImageCarousel 
                        images={[imgProp1Img1, imgProp1Img2, imgProp1Img3, imgProp1Img4]} 
                        alt="Exclusive 2BR Luxury Retreat" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">Dubai Marina</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.75</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Exclusive 2BR Luxury Retreat</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 4 guests</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Bedrooms</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Beds</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Baths</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        <p>Indulge in luxury at this freshly furnished 2-bedroom #Beachfront apartment in Dubai’s most exclusive vacation spot.</p>
                        <p>Designed for those who crave privacy, serenity, and effortless beachfront living, this retreat is perfect for romantic getaways, family vacations, or remote work escapes.</p>
                      </div>
                      <div className="pt-2">
                        <a 
                          href="https://www.airbnb.ae/rooms/1304732294862538511?source_impression_id=p3_1775537830_P3ALZ-6nSAuPpJJJ&scroll_to_review=1425960071292803232" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 2 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[250px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden lg:order-last">
                      <PropertyImageCarousel 
                        images={[imgProp2Img1, imgProp2Img2, imgProp2Img3, imgProp2Img4]} 
                        alt="Oriental Zen Suite" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">DUBAI MARINA</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.79</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Oriental Zen Suite</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 2 guests</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bedroom</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bed</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bath</span>
                        </div>
                      </div>
                      <p className="text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        Unwind in a serene Japanese Zen-inspired space, just steps from your private beach! soaking up the sun or enjoying a cozy night in with 85" TV, this retreat is designed for ultimate comfort. With prompt, high-quality service, we’re here to make your stay stress-free and unforgettable.
                      </p>
                      <div className="pt-2">
                        <a 
                          href="https://www.airbnb.ae/rooms/1313158206257962744?source_impression_id=p3_1775537830_P39eMhQl0gxdRWnS" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 3 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[250px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden">
                      <PropertyImageCarousel 
                        images={[imgProp3Img1, imgProp3Img2, imgProp3Img3, imgProp3Img4]} 
                        alt="Unique JP Apartment" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">Palm Jumeirah</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.83</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Unique JP Apartment</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 2 guests</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bedroom</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bed</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bath</span>
                        </div>
                      </div>
                      <p className="text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        The newly trend landmark in Dubai! No need to go inside the Palm but enjoy the unique Palm advantages such as OCEAN VIEW, PRIVATE BEACH, Skyline Swimming Pool and Fitness! All you need is here, as the area is very new, you can enjoy the quality Quiet Vocation only at Beachfront Dubai!
                      </p>
                      <div className="pt-2">
                        <a 
                          href="https://www.airbnb.ae/rooms/952306283884833606?source_impression_id=p3_1775537830_P3ThIfc7rHch2Ajq" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 4 — Binghatti House (reserved) */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden lg:order-last">
                      <PropertyImageCarousel
                        images={[imgJvc1, imgJvc2, imgJvc3, imgJvc4, imgJvc5, imgJvc6]}
                        alt="Modern 1BR Urban Escape at Binghatti House"
                      />
                      <div
                        className="pointer-events-none absolute left-4 top-4 z-30 max-w-[min(100%-2rem,20rem)] rounded-lg bg-[#12161D]/92 px-3 py-2 text-left shadow-lg md:left-5 md:top-5 md:px-4 md:py-2.5"
                        role="status"
                        aria-label="Currently reserved for long term"
                      >
                        <span className="text-[11px] font-semibold uppercase leading-snug tracking-wider text-white md:text-xs">
                          Currently Reserved (Long Term)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">
                            Jumeirah Village Circle
                          </span>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">
                          Modern 1BR Urban Escape at Binghatti House
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 2 guests</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bedroom</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bed</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>1 Bath</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        <p>
                          Experience elevated living in this stylish 1-bedroom apartment at Binghatti House, nestled in the heart of JVC - Dubai&apos;s vibrant and well-connected community.
                        </p>
                        <p>
                          Designed for modern comfort and effortless city living, this contemporary retreat offers the perfect balance of tranquility and accessibility. Enjoy premium amenities including a rooftop pool, state-of-the-art gym, landscaped spaces, and 24/7 security, all within a striking high-rise known for its innovative design.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          disabled
                          className="inline-block bg-[#ECEEF0] text-[#95999F] px-8 py-4 rounded-full font-medium text-lg cursor-not-allowed w-fit pointer-events-none select-none"
                          aria-disabled="true"
                        >
                          Reserved
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 5 — Binghatti Canal (reserved, long term) */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden">
                      <PropertyImageCarousel
                        images={[imgBayBusiness1, imgBayBusiness2, imgBayBusiness3, imgBayBusiness4, imgBayBusiness5]}
                        alt="Stylish Canal-View 2BR Retreat at Binghatti Canal"
                      />
                      <div
                        className="pointer-events-none absolute left-4 top-4 z-30 max-w-[min(100%-2rem,20rem)] rounded-lg bg-[#12161D]/92 px-3 py-2 text-left shadow-lg md:left-5 md:top-5 md:px-4 md:py-2.5"
                        role="status"
                        aria-label="Currently reserved for long term"
                      >
                        <span className="text-[11px] font-semibold uppercase leading-snug tracking-wider text-white md:text-xs">
                          Currently Reserved (Long Term)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">
                            Business Bay
                          </span>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">
                          Stylish Canal-View 2BR Retreat at Binghatti Canal
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 4 guests</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Bedrooms</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Beds</span>
                          <span className="hidden sm:block w-1.5 h-1.5 bg-[#D1D3D6] rounded-full shrink-0" />
                          <span>2 Baths</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        <p>
                          Experience waterfront living in this contemporary 2-bedroom apartment at Binghatti Canal, set in the heart of Business Bay along the iconic Dubai Water Canal.
                        </p>
                        <p>
                          Designed for those who appreciate modern architecture and vibrant city energy, this residence offers a perfect blend of comfort, style, and connectivity. Wake up to stunning canal and skyline views, unwind in thoughtfully designed interiors with floor-to-ceiling windows, and enjoy premium amenities including a swimming pool, fully equipped gym, landscaped gardens, and leisure spaces.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          disabled
                          className="inline-block bg-[#ECEEF0] text-[#95999F] px-8 py-4 rounded-full font-medium text-lg cursor-not-allowed w-fit pointer-events-none select-none"
                          aria-disabled="true"
                        >
                          Reserved
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      )}



      {/* Stats Strip (Only on Home Page) */}
      {isHomePage && (
        <section className="bg-[#f7f6f5] w-full py-16 px-6">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:flex md:flex-nowrap justify-between lg:px-[50px] gap-y-16 gap-x-6">
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <span className="font-medium text-[48px] lg:text-[56px] leading-[1] text-[#12161D] tracking-[-1px]">90%</span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#61656E] tracking-[-0.23px]">Average<br className="md:hidden" /> Occupancy</span>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <span className="font-medium text-[48px] lg:text-[56px] leading-[1] text-[#12161D] tracking-[-1px]">250+</span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#61656E] tracking-[-0.23px]">Nights<br className="md:hidden" /> Booked</span>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <span className="font-medium text-[48px] lg:text-[56px] leading-[1] text-[#12161D] tracking-[-1px]">4.8/5</span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#61656E] tracking-[-0.23px]">Average<br className="md:hidden" /> Rating</span>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <span className="font-medium text-[48px] lg:text-[56px] leading-[1] text-[#12161D] tracking-[-1px]">300+</span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#61656E] tracking-[-0.23px]">Customers<br className="md:hidden" /> Managed</span>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {/* About Section (Only on Home Page) */}
      {isHomePage && (
        <section id={SECTION_IDS.about} className={`bg-white py-16 px-6 lg:px-20 max-w-[1440px] mx-auto ${SCROLL_ANCHOR_CLASS}`}>
          <div className="bg-[#F1EFEA] rounded-[24px] flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              <img src={newImgAboutHero} className="absolute inset-0 w-full h-full object-cover" alt="Luxury Property Interior" />
            </div>
            <div className="lg:w-1/2 p-6 md:p-10 lg:p-20 flex flex-col justify-center">
              <div className="bg-white text-[#12161D] text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest w-fit mb-6">
                About Larisa Homes
              </div>
              <h2 className="text-3xl md:text-[40px] lg:text-[52px] leading-[1.15] lg:leading-[1.05] font-medium text-[#12161D] mb-6 tracking-tight">
                Exceptional Airbnb stays and premium hosting services in Dubai.
              </h2>
              <p className="text-[17px] text-[#42444A] leading-relaxed">
                Whether you're a traveler seeking a luxurious, unforgettable stay in the heart of Dubai, or a property owner looking for end-to-end management that maximizes your earnings, Larisa Homes has you covered. We blend world-class hospitality with cutting-edge technology to deliver flawless experiences for guests and stress-free hosting for owners.
              </p>
            </div>
          </div>
        </section>
      )}

      {!isHomePage && !isContactPage && (
        <>
          {/* Section 3: Services */}
          <section id={SECTION_IDS.investment} className={`bg-white py-24 px-6 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-16 lg:gap-24 ${SCROLL_ANCHOR_CLASS}`}>
            {/* Listing Management */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgService1} alt="Listing Management" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#12161D] leading-tight">Listing Management</h3>
                <p className="text-[17px] md:text-[18px] text-[#61656E] leading-[1.5]">
                  Professional photography, compelling descriptions, and continuous optimization across Airbnb, Booking.com, and VRBO. We ensure your listing ranks high and attracts quality guests consistently.
                </p>
              </div>
            </div>

            {/* Guest Relations */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#12161D] leading-tight">Guest Relations</h3>
                <p className="text-[17px] md:text-[18px] text-[#61656E] leading-[1.5]">
                  24/7 guest communication, seamless check-in/check-out, and immediate support to ensure 5-star reviews every time. We handle all inquiries and vetting so you don't have to.
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgGuestRelations} alt="Guest Relations" className="w-full h-full object-cover rounded-[10px]" />
              </div>
            </div>

            {/* Property Maintenance */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgService3} alt="Property Maintenance" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#12161D] leading-tight">Property Maintenance</h3>
                <p className="text-[17px] md:text-[18px] text-[#61656E] leading-[1.5]">
                  Hotel-quality cleaning, regular inspections, and prompt maintenance handling to keep your investment pristine. Your property is always ready for the next stay.
                </p>
              </div>
            </div>
          </section>

          {/* Hosting Process Section */}
          <section className="bg-[#f4f7f9] py-24 w-full">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-16">
              <div className="text-center flex flex-col gap-4 max-w-2xl">
                <h2 className="text-[32px] md:text-[40px] lg:text-[52px] font-medium text-[#12161D] leading-tight tracking-tight">
                  Hosting Made Simple
                </h2>
                <p className="text-[18px] text-[#61656E] leading-relaxed">
                  Experience a hassle-free journey from onboarding to consistent payouts. We manage the details so you don't have to.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Step 1 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgOnboarding} alt="Onboarding" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Onboarding</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      We evaluate your property, arrange professional photography, and set up your listing across major platforms to maximize visibility.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgManagement} alt="Management" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Management</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      Our team handles daily pricing optimization, seamless guest communications, and hotel-quality cleaning between every stay.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgEarnings} alt="Earnings" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Earnings</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      Sit back and relax as we maintain your property. Access transparent reports and receive consistent monthly payouts directly.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => {
                  if (location.pathname === '/contact') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="bg-[#12161D] text-white px-8 py-4 rounded-[100px] font-medium text-[17px] hover:bg-[#12161D]/90 transition-colors shadow-sm w-fit inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </>
      )}


      {isHomePage && <CustomerReviews />}

      {/* Section 5: FAQ */}
      <section id={SECTION_IDS.faq} className={`bg-white py-20 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto ${SCROLL_ANCHOR_CLASS}`}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <div className="lg:w-[550px] shrink-0">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.1] md:leading-tight text-[#12161D] mb-4 lg:mb-6">
              Frequently Asked Questions
            </h2>
            {/* <p className="text-lg text-[#61656E] leading-relaxed">
              If there are questions you want to ask.<br />
              We will answer all your questions.
            </p> */}
          </div>
          <div className="flex-1 flex flex-col gap-5">
            {(isHomePage ? homeFaqs : investmentFaqs).map((faq, index) => (
              <div key={index} className="border border-[#E5E5E6] rounded-lg bg-white overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-xl lg:text-2xl font-medium text-[#12161D] pr-4">{faq.q}</span>
                  <span className="w-6 h-6 flex items-center justify-center shrink-0 text-[#12161D]">
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg text-[#61656E] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {!isContactPage && (
        <section className="bg-white pb-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
          <div className="relative w-full rounded-[24px] overflow-hidden bg-[#12161D]">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full">
              <img src={imgCtaBanner} className="w-full h-full object-cover" alt="Modern Kitchen Interior" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#12161D]/90 via-[#12161D]/70 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 py-16 lg:py-20 px-6 lg:px-16 flex flex-col gap-6 lg:gap-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-[1.1] text-white tracking-tight">
                Ready to Maximize Your Property's Potential?
              </h2>
              <p className="text-base lg:text-xl text-white/80 leading-relaxed md:leading-relaxed">
                Join Larisa Homes today and let our expert team transform your space into a high-performing luxury rental. Sit back, relax, and watch your earnings grow.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => {
                    if (location.pathname === '/contact') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-[#12161D] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Floating Action Button */}
      <div 
        className={`hidden md:block fixed top-5 right-6 lg:right-10 z-50 transition-all duration-300 transform ${
          isScrolled ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={handleBookYourStay}
          className="bg-[#12161D] text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition-colors shadow-lg"
        >
          Book Your Stay
        </button>
      </div>
    </div>
  );
}
