import React from 'react';
import { Heart, Eye, ShoppingBag, Star, Sparkles, Scissors } from 'lucide-react';

export default function ProductCard({ 
  product, 
  isWishlisted, 
  onToggleWishlist, 
  onQuickView, 
  onAddToCart 
}) {
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E5B8AC]/40 hover:border-[#C58B88] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF5EF] cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />

        {/* Hover Secondary Image or Soft Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="bg-[#231518]/90 text-[#F3E5C8] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur shadow">
            {product.fabricType}
          </span>
          {product.bestseller && (
            <span className="bg-[#DFB76C] text-[#231518] text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Bestseller
            </span>
          )}
        </div>

        {/* Top Right Wishlist & Quick View Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition shadow-md ${
              isWishlisted
                ? 'bg-[#C58B88] text-white'
                : 'bg-white/90 text-[#231518] hover:bg-white hover:text-[#C58B88]'
            }`}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-8 h-8 rounded-full bg-white/90 text-[#231518] hover:bg-white hover:text-[#C58B88] flex items-center justify-center transition shadow-md opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-200"
            title="Quick View Specs"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Fabric Cut Tag on Image */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#231518]/80 backdrop-blur text-white text-[10px] py-1.5 px-3 rounded-xl flex items-center justify-between opacity-95">
          <span className="flex items-center gap-1 text-[#DFB76C] font-semibold">
            <Scissors className="w-3 h-3" /> Unstitched Suit Set
          </span>
          <span className="text-[#D4BAB0]">Top: 3.0m | Bottom: 2.5m</span>
        </div>
      </div>

      {/* Product Information Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          
          {/* Work Type & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#8A4E54] font-medium text-[11px] uppercase tracking-wider">
              {product.workType}
            </span>
            <div className="flex items-center gap-1 text-[#DFB76C] font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-[#DFB76C]" />
              <span>{product.rating}</span>
              <span className="text-[#A0888C] font-normal text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-serif-luxury font-bold text-[#231518] group-hover:text-[#C58B88] transition cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6E5A5E] font-light line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-2 border-t border-[#EFE3DB] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-[#231518]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#A0888C] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] font-bold text-[#8A4E54]">
              SAVE {discountPercent}% OFF
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#231518] hover:bg-[#3B252A] text-[#F3E5C8] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  );
}
