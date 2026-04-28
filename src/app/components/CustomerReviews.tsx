import React, { useState, useEffect } from 'react';
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS, SCROLL_ANCHOR_CLASS } from '../constants/sections';

interface Review {
  id: string;
  name: string;
  text: string;
}

export function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('/.netlify/functions/list-reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setReviews(data);
        }
      })
      .catch((error) => console.error("Failed to fetch reviews:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    
    setStatus('sending');
    try {
      const response = await fetch('/.netlify/functions/add-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, description: formData.description }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', description: '' });
        setRating(0);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id={SECTION_IDS.testimonials} className={`w-full bg-[#f3f5f6] py-20 relative ${SCROLL_ANCHOR_CLASS}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-medium text-[#12161D] text-center mb-16">
          What Our Customers Say
        </h2>

        {/* Reviews Grid */}
        <div className="relative pb-16 h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {(() => {
            const renderColumn = (items: typeof reviews, speed: number, dir: "up" | "down", colIndex: number) => (
              <div key={colIndex} className="flex flex-col h-full overflow-hidden">
                <motion.div
                  animate={{ y: dir === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                  className="flex flex-col"
                >
                  {[1, 2].map((dup) => (
                    <div key={dup} className="flex flex-col gap-5 pb-5">
                      {items.map((review) => (
                        <motion.div 
                          key={`${review.id}-${dup}`}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-white rounded-[10px] p-5 shrink-0 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col mb-4">
                            <h3 className="font-bold text-[#2e5d82] text-sm mb-1">{review.name}</h3>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#EECB4C] text-[#EECB4C]" />
                              ))}
                            </div>
                          </div>
                          <p className="text-[#12161D] text-base leading-relaxed whitespace-pre-wrap">
                            {review.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            );

            return (
              <>
                <div className="hidden lg:grid grid-cols-3 gap-5 h-full">
                  {renderColumn(reviews.filter((_, i) => i % 3 === 0), 35, "up", 0)}
                  {renderColumn(reviews.filter((_, i) => i % 3 === 1), 45, "down", 1)}
                  {renderColumn(reviews.filter((_, i) => i % 3 === 2), 40, "up", 2)}
                </div>
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 h-full">
                  {renderColumn(reviews.filter((_, i) => i % 2 === 0), 35, "up", 0)}
                  {renderColumn(reviews.filter((_, i) => i % 2 === 1), 40, "down", 1)}
                </div>
                <div className="grid md:hidden grid-cols-1 gap-5 h-full">
                  {renderColumn(reviews, 40, "up", 0)}
                </div>
              </>
            );
          })()}
          <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#f3f5f6] via-[#f3f5f6]/80 to-transparent pointer-events-none" />
        </div>

        {/* Rate Your Stay Form */}
        <form onSubmit={handleSubmit} className="relative -mt-24 mx-auto max-w-[1000px] bg-white rounded-[24px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.1)] p-8 md:p-12 z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Left side - Rating */}
            <div className="flex flex-col gap-6 lg:w-1/3">
              <h3 className="text-2xl md:text-3xl font-medium text-[#12161D]">Rate Your Stay</h3>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                <div
                      key={starValue}
                      className="relative w-11 h-11 cursor-pointer transition-transform hover:scale-110"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const fraction = (e.clientX - rect.left) / rect.width;
                        let hoverVal;
                        if (fraction < 0.5) {
                          hoverVal = starValue - 0.5;
                        } else {
                          hoverVal = starValue;
                        }
                        setHoverRating(hoverVal);
                      }}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const fraction = (e.clientX - rect.left) / rect.width;
                        let newRating;
                        if (fraction < 0.5) {
                          newRating = starValue - 0.5;
                        } else {
                          newRating = starValue;
                        }
                        setRating(newRating === rating ? 0 : newRating);
                      }}
                    >
                      <div className="relative w-11 h-11">
                        {/* Grey background star */}
                        <Star className="w-11 h-11 fill-[#E8E8E8] text-[#E8E8E8] absolute top-0 left-0" />
                        
                        {/* Colored foreground star */}
                        <Star 
                          className="w-11 h-11 fill-[#FABF35] text-[#FABF35] absolute top-0 left-0 transition-opacity"
                          style={{ 
                            clipPath: (hoverRating || rating) >= starValue 
                              ? 'inset(0 0 0 0)' 
                              : (hoverRating || rating) >= starValue - 0.5 
                                ? 'inset(0 50% 0 0)' 
                                : 'inset(0 100% 0 0)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex flex-col gap-6 lg:w-2/3">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm md:text-base text-[#12161D]">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#f6f6f6] rounded-[12px] h-14 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#2e5d82] transition-shadow"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm md:text-base text-[#12161D]">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#f6f6f6] rounded-[12px] h-14 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#2e5d82] transition-shadow"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base text-[#12161D]">Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="bg-[#f6f6f6] rounded-[12px] h-[140px] md:h-[180px] p-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#2e5d82] transition-shadow"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <button type="submit" disabled={status === 'sending'} className="bg-[#12161D] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors shadow-sm disabled:opacity-50">
              {status === 'sending' ? 'Submitting...' : 'Submit A Review'}
            </button>
            {status === 'success' && (
              <p className="text-[#2e5d82] font-medium text-center">Thank you! Your review has been submitted.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
