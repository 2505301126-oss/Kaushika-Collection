import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer({ onSelectCategory, onOpenAtelier }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#231518] text-[#F3E5C8] pt-16 pb-8 border-t border-[#3B252A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Strip */}
        <div className="bg-[#2E1C20] p-8 rounded-3xl border border-[#52373C] grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DFB76C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> JOIN THE VIP KAUSHIKA CIRCLE
            </span>
            <h3 className="text-2xl font-serif-luxury text-white">Receive Exclusive Festive Pre-Launches &amp; ₹500 Coupon</h3>
            <p className="text-xs text-[#D4BAB0] font-light">
              Subscribe to get immediate fabric swatch updates and secret royal discounts.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="bg-[#382328] p-4 rounded-2xl text-xs text-[#DFB76C] font-semibold text-center border border-[#593940]">
                Welcome to the Family! Use code <strong className="text-white underline">ROYAL10</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#231518] border border-[#52373C] rounded-2xl px-4 py-3 text-xs text-white placeholder:text-[#8A6B72] outline-none focus:border-[#DFB76C]"
                />
                <button
                  type="submit"
                  className="bg-[#DFB76C] hover:bg-[#E5C37A] text-[#231518] px-5 py-3 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 shrink-0"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          
          {/* Col 1: Brand Info & Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Khushika Collection Logo" className="h-16 w-auto object-contain" />
            </div>

            <p className="text-xs text-[#D4BAB0] font-light leading-relaxed max-w-sm">
              <strong>Kaushika Collection</strong> (Khushika Collection) is a luxury atelier dedicated to exquisite unstitched suit sets. We weave timeless Indian heritage, pure Zari embroideries, and generous 3-meter fabric cuts for modern royalty.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#D4BAB0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFB76C]" />
                <span>Delhi • Jaipur • Mumbai</span>
              </div>
            </div>
          </div>

          {/* Col 2: Unstitched Fabric Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB76C]">Fabric Catalog</h4>
            <ul className="space-y-2 text-xs text-[#D4BAB0]">
              {['Pure Silk', 'Velvet', 'Chanderi Silk', 'Organza', 'Pashmina', 'Cotton Lawn'].map((f) => (
                <li key={f}>
                  <a 
                    href="#collections" 
                    onClick={() => onSelectCategory(f)}
                    className="hover:text-white transition block"
                  >
                    {f} Suits
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Care & Atelier Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB76C]">Boutique Atelier</h4>
            <ul className="space-y-2 text-xs text-[#D4BAB0]">
              <li>
                <a href="#fabric-inspector" className="hover:text-white transition">Fabric Cut Guide (3m Specs)</a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-white transition">Stitching Blueprint Tool</a>
              </li>
              <li>
                <button onClick={onOpenAtelier} className="hover:text-white transition text-left">VIP Trousseau Consultation</button>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB76C]">Helpline &amp; Support</h4>
            <div className="space-y-2 text-xs text-[#D4BAB0]">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition">
                <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:care@kaushikacollection.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>care@kaushikacollection.com</span>
              </a>
              <p className="text-[11px] text-[#A0888C] pt-2">
                Mon - Sat: 10:00 AM - 8:00 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Security Bar */}
        <div className="pt-8 border-t border-[#3B252A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A0888C]">
          <div>
            © {new Date().getFullYear()} <strong>Kaushika Collection</strong> (Khushika Collection). All Rights Reserved. Crafted for Regal Elegance.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFB76C]" /> 100% Authentic Zari &amp; Silk
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
