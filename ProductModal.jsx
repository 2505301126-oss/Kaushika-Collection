import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Scissors, Check, ShieldCheck, Sparkles, MessageCircle, Truck } from 'lucide-react';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [needStitching, setNeedStitching] = useState(false);
  const [neckStyle, setNeckStyle] = useState('Sweetheart Yoke');
  const [bottomStyle, setBottomStyle] = useState('Flared Palazzo');
  const [isZoomed, setIsZoomed] = useState(false);

  const stitchingFee = needStitching ? 1490 : 0;
  const totalPrice = product.price + stitchingFee;

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      needStitching,
      stitchingFee,
      customOptions: needStitching ? { neckStyle, bottomStyle } : null,
      finalPrice: totalPrice
    });
    onClose();
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Kaushika Collection! I would like to inquire/order the unstitched suit: *${product.name}* (ID: ${product.id}). ${needStitching ? `With Custom Stitching (${neckStyle}, ${bottomStyle})` : 'Unstitched Fabric Set'}. Price: ₹${totalPrice}. Please confirm availability!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Card Window */}
      <div className="relative bg-[#FFFFFF] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#E5B8AC] grid lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#231518]/80 text-[#F3E5C8] hover:bg-[#231518] hover:text-white flex items-center justify-center transition shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery & Fabric Zoom */}
        <div className="lg:col-span-6 bg-[#FAF5EF] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EFE3DB]">
          <div className="space-y-4">
            
            {/* Main Preview */}
            <div 
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5B8AC]/50 cursor-zoom-in bg-[#FFFFFF]"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
              <div className="absolute bottom-3 left-3 bg-[#231518]/90 text-[#DFB76C] text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur">
                {isZoomed ? 'Click to Zoom Out' : 'Click Photo to Inspect Weave'}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition ${
                    activeImageIndex === idx ? 'border-[#C58B88] ring-2 ring-[#C58B88]/30 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Quick Assurance Badges */}
          <div className="mt-6 pt-4 border-t border-[#E5D5CC] grid grid-cols-2 gap-3 text-xs text-[#5E4A4E]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C58B88]" />
              <span>100% Original Fabric</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#DFB76C]" />
              <span>Free Express Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: Specifications & Stitching Options */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="bg-[#C58B88]/15 text-[#8A4E54] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {product.fabricType} • {product.occasion}
                </span>
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-2 rounded-full border transition ${
                    isWishlisted ? 'bg-[#C58B88] text-white border-[#C58B88]' : 'border-[#E5B8AC] text-[#231518] hover:bg-[#FAF5EF]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>

              <h2 className="text-2xl font-serif-luxury font-bold text-[#231518] mt-2">
                {product.name}
              </h2>
              <p className="text-xs text-[#6E5A5E] mt-1 font-light">{product.tagline}</p>
            </div>

            {/* Pricing Section */}
            <div className="bg-[#FAF5EF] p-4 rounded-2xl border border-[#E5B8AC]/40 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#8A4E54] uppercase tracking-wider font-semibold block">Total Package Price</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold text-[#231518]">₹{totalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-[#A0888C] line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <span className="bg-[#231518] text-[#F3E5C8] text-xs font-bold px-3 py-1.5 rounded-xl">
                {needStitching ? 'Fabric + Custom Tailoring' : 'Unstitched Fabric Set'}
              </span>
            </div>

            {/* Unstitched Fabric Component Checklist */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A4E54] flex items-center gap-1.5">
                <Scissors className="w-4 h-4 text-[#DFB76C]" /> Included Unstitched Cut Measurements:
              </h4>
              <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EFE3DB] space-y-1.5 text-xs text-[#231518]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C58B88] shrink-0 mt-0.5" />
                  <span><strong>Top (Kameez):</strong> {product.components.top}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C58B88] shrink-0 mt-0.5" />
                  <span><strong>Bottom (Trouser):</strong> {product.components.bottom}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C58B88] shrink-0 mt-0.5" />
                  <span><strong>Dupatta:</strong> {product.components.dupatta}</span>
                </div>
                {product.components.extras && (
                  <div className="flex items-start gap-2 text-[#8A4E54]">
                    <Sparkles className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                    <span><strong>Bonus Trim:</strong> {product.components.extras}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Stitching Service Option */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#231518] flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needStitching}
                    onChange={(e) => setNeedStitching(e.target.checked)}
                    className="w-4 h-4 accent-[#C58B88] rounded cursor-pointer"
                  />
                  <span>Add Kaushika Boutique Stitching (+ ₹1,490)</span>
                </label>
                <span className="text-[10px] bg-[#DFB76C]/30 text-[#8A4E54] font-bold px-2 py-0.5 rounded">Tailored in 7 Days</span>
              </div>

              {needStitching && (
                <div className="bg-[#F5EBE6] p-4 rounded-xl space-y-3 text-xs border border-[#E5B8AC] animate-fadeIn">
                  <div>
                    <label className="block font-semibold text-[#231518] mb-1">Select Kameez Neck Style:</label>
                    <select
                      value={neckStyle}
                      onChange={(e) => setNeckStyle(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#C58B88]/50 rounded-lg p-2 text-xs outline-none"
                    >
                      <option value="Sweetheart Yoke">Sweetheart Embroidered Yoke</option>
                      <option value="Royal V-Neck Cut">Royal V-Neck Cutout</option>
                      <option value="Boat Neck Lace Accent">Boat Neck with Lace Accent</option>
                      <option value="High Collar Keyhole">High Collar Keyhole</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#231518] mb-1">Select Bottom Style:</label>
                    <select
                      value={bottomStyle}
                      onChange={(e) => setBottomStyle(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#C58B88]/50 rounded-lg p-2 text-xs outline-none"
                    >
                      <option value="Flared Palazzo">Flared Wide Palazzo Pants</option>
                      <option value="Straight Pencil Trousers">Straight Pencil Cut Trousers</option>
                      <option value="Patiala Salwar">Traditional Pleated Patiala Salwar</option>
                      <option value="Sharara Bottoms">Layered Flared Sharara</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#EFE3DB] space-y-2">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#231518] hover:bg-[#3B252A] text-[#F3E5C8] py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg active:scale-98"
            >
              <ShoppingBag className="w-4 h-4 text-[#DFB76C]" />
              <span>Add to Bag — ₹{totalPrice.toLocaleString('en-IN')}</span>
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 transition shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant Order &amp; Inquiry via WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
