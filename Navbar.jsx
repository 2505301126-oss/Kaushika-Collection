import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, PhoneCall, Sparkles, ChevronDown } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSearch, 
  activeCategory, 
  onSelectCategory,
  onOpenAtelier
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('INR');

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#EFE3DB]">
      {/* Top Announcement Bar */}
      <div className="bg-[#231518] text-[#F3E5C8] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
            <span className="font-medium tracking-wide">
              FESTIVE ATELIER: Free Express Shipping &amp; Fabric Swatches Across India | Code: <strong className="text-[#DFB76C]">ROYAL10</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#D4BAB0]">
            <button onClick={onOpenAtelier} className="hover:text-white transition underline flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#DFB76C]" /> VIP Trousseau Consultation
            </button>
            <div className="hidden md:flex items-center gap-1">
              <span>Currency:</span>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-[#322024] text-[#F3E5C8] text-xs rounded border border-[#52373C] px-1 py-0.5 outline-none cursor-pointer"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="AED">AED</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Left: Mobile Toggle & Desktop Category Quick Links */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#261A1C] hover:text-[#C58B88] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide text-[#4A383C]">
            <a href="#collections" onClick={() => onSelectCategory('All Fabrics')} className="hover:text-[#C58B88] transition">
              Collections
            </a>
            <a href="#fabric-inspector" className="hover:text-[#C58B88] transition flex items-center gap-1">
              Fabric Breakdown <span className="bg-[#C58B88]/15 text-[#8A4E54] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">3m Cut</span>
            </a>
            <a href="#customizer" className="hover:text-[#C58B88] transition">
              Stitching Customizer
            </a>
            <a href="#about-us" className="hover:text-[#C58B88] transition">
              Our Heritage
            </a>
          </nav>
        </div>

        {/* Center: Official Brand Logo & Name */}
        <a href="#" className="flex flex-col items-center group">
          <img 
            src="/logo.png" 
            alt="Kaushika Collection Logo" 
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Right: Search, Wishlist & Cart Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={onOpenSearch}
            className="p-2 text-[#261A1C] hover:text-[#C58B88] transition rounded-full hover:bg-[#F5EBE6]"
            title="Search Suits"
          >
            <Search className="w-5 h-5" />
          </button>

          <button 
            onClick={onOpenWishlist}
            className="relative p-2 text-[#261A1C] hover:text-[#C58B88] transition rounded-full hover:bg-[#F5EBE6]"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C58B88] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {wishlistCount}
              </span>
            )}
          </button>

          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#231518] hover:bg-[#382328] text-[#F3E5C8] px-3.5 py-2 rounded-full shadow-md transition-all transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-[#DFB76C]" />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#DFB76C] text-[#231518] text-xs font-bold px-1.5 py-0.2 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFBF7] border-b border-[#EFE3DB] px-6 py-4 space-y-3 animate-fadeIn">
          <a 
            href="#collections" 
            onClick={() => { onSelectCategory('All Fabrics'); setMobileMenuOpen(false); }}
            className="block text-base font-serif-luxury font-medium text-[#261A1C] hover:text-[#C58B88]"
          >
            Unstitched Suit Catalog
          </a>
          <a 
            href="#fabric-inspector" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif-luxury font-medium text-[#261A1C] hover:text-[#C58B88]"
          >
            Fabric Cut Specs (Kameez, Dupatta, Bottom)
          </a>
          <a 
            href="#customizer" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif-luxury font-medium text-[#261A1C] hover:text-[#C58B88]"
          >
            Tailoring Style Customizer
          </a>
          <a 
            href="#reviews" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif-luxury font-medium text-[#261A1C] hover:text-[#C58B88]"
          >
            Customer Reviews &amp; Photos
          </a>
          <button 
            onClick={() => { onOpenAtelier(); setMobileMenuOpen(false); }}
            className="w-full mt-2 bg-[#C58B88] text-white py-2 rounded font-medium text-sm text-center"
          >
            Book VIP Trousseau Appointment
          </button>
        </div>
      )}
    </header>
  );
}
