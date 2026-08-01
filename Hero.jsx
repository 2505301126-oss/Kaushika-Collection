import React from 'react';
import { Sparkles, ShieldCheck, Scissors, ArrowRight, Award, Flame } from 'lucide-react';

export default function Hero({ onExploreClick, onFilterFabric }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EF] via-[#F5EBE6] to-[#FAF5EF] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EFE3DB]">
      
      {/* Delicate Decorative Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#E5B8AC]/20 to-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Royal Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/80 backdrop-blur border border-[#C58B88]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#8A4E54] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>THE ART OF UNSTITCHED LUXURY SUITS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#231518] leading-[1.15]">
              Unstitched Elegance <br />
              <span className="italic font-light text-rose-gold-gradient">Tailored to Your Soul.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5E4A4E] max-w-2xl font-light leading-relaxed">
              Welcome to <strong>Kaushika Collection</strong> — home of India’s finest unstitched suit sets. From opulent Zardosi Velvets and Hand-woven Banarasi Silks to airy Organza and cozy Kashmiri Pashmina, customize your silhouette with generous fabric cuts.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#collections"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#231518] hover:bg-[#3B252A] text-[#F3E5C8] font-medium px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Unstitched Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#DFB76C]" />
              </a>

              <a
                href="#fabric-inspector"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#231518] border border-[#C58B88]/50 px-6 py-4 rounded-full font-medium transition shadow-sm"
              >
                <Scissors className="w-4 h-4 text-[#C58B88]" />
                <span>How 3m Fabric Cuts Work</span>
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-[#E5D5CC] grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#C58B88]/15 flex items-center justify-center text-[#8A4E54] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#231518] uppercase tracking-wider">100% Authentic</h4>
                  <p className="text-[11px] text-[#6E5A5E]">Pure Thread &amp; Zari Weaves</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#DFB76C]/20 flex items-center justify-center text-[#8A4E54] shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#231518] uppercase tracking-wider">Up to 5XL Size</h4>
                  <p className="text-[11px] text-[#6E5A5E]">Generous 3.0m Kameez Cut</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#C58B88]/15 flex items-center justify-center text-[#8A4E54] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#231518] uppercase tracking-wider">Curated Luxury</h4>
                  <p className="text-[11px] text-[#6E5A5E]">Trousseau Box Included</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Banner Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Showcase Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#231518] group">
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80" 
                alt="Kaushika Collection Unstitched Suits" 
                className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#231518] via-transparent to-transparent opacity-80" />

              {/* Floating Company Badge with Official Logo */}
              <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur p-3 rounded-2xl shadow-xl border border-[#E5B8AC] flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#8A4E54]">Official Atelier</span>
                  <span className="text-xs font-serif-luxury font-semibold text-[#231518]">KHUSHIKA COLLECTION</span>
                </div>
              </div>

              {/* Bottom Card Specs Floating Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5B8AC] shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#C58B88] uppercase tracking-widest block">FEATURED UNSTITCHED SUIT</span>
                    <h3 className="text-base font-serif-luxury font-bold text-[#231518]">Royal Zardosi Maroon Velvet Set</h3>
                    <p className="text-xs text-[#6E5A5E]">3m Kameez + Scalloped Organza Dupatta + Shantoon</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#8A4E54] line-through block">₹12,990</span>
                    <span className="text-base font-bold text-[#231518]">₹9,490</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Ribbon Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#231518] text-[#F3E5C8] p-3 rounded-2xl shadow-2xl border border-[#DFB76C]/40 hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#DFB76C] text-[#231518] flex items-center justify-center font-bold text-xs">
                ★ 4.9
              </div>
              <div className="text-xs">
                <span className="font-semibold block">Trusted by 10,000+ Ladies</span>
                <span className="text-[10px] text-[#D4BAB0]">Pan-India &amp; Worldwide Shipping</span>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Fabric Filter Strip */}
        <div className="mt-12 pt-6 border-t border-[#EFE3DB]/80 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A4E54] flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#DFB76C]" /> Explore Fabrics:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {['Pure Silk', 'Velvet', 'Chanderi Silk', 'Organza', 'Pashmina', 'Cotton Lawn'].map((fabric) => (
              <button
                key={fabric}
                onClick={() => onFilterFabric(fabric)}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#FFFFFF] hover:bg-[#231518] text-[#4A383C] hover:text-[#F3E5C8] border border-[#E5B8AC]/60 transition-all shadow-xs whitespace-nowrap"
              >
                {fabric}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
