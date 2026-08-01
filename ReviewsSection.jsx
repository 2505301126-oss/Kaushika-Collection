import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-[#FAF5EF] border-b border-[#EFE3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5EBE6] text-[#8A4E54] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>VERIFIED CLIENT LOVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#231518]">
            Adored by Women Across the Globe
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-[#8A4E54]">
            <div className="flex items-center text-[#DFB76C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#DFB76C]" />
              ))}
            </div>
            <span className="font-bold text-[#231518]">4.9 out of 5.0</span>
            <span className="text-[#A0888C]">• Based on 1,240+ Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5B8AC]/40 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#DFB76C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#A0888C]">{rev.date}</span>
                </div>

                <p className="text-xs text-[#4A383C] font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE3DB] flex items-center gap-3">
                <img 
                  src={rev.avatar} 
                  alt={rev.author} 
                  className="w-10 h-10 rounded-full object-cover border border-[#E5B8AC]" 
                />
                <div>
                  <h4 className="text-xs font-bold text-[#231518] flex items-center gap-1">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-3 h-3 text-[#C58B88]" />
                  </h4>
                  <span className="text-[10px] text-[#6E5A5E] block">{rev.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
