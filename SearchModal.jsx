import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.fabricType.toLowerCase().includes(q) ||
      p.workType.toLowerCase().includes(q) ||
      p.occasion.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4 animate-fadeIn">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#E5B8AC] p-6 space-y-4">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[#EFE3DB] pb-4">
          <Search className="w-5 h-5 text-[#C58B88] absolute left-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search velvet, silk, organza, zardosi, pashmina..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-8 pr-10 py-1 text-base text-[#231518] placeholder:text-[#A0888C] placeholder:font-light outline-none font-serif-luxury"
          />
          <button onClick={onClose} className="p-1 text-[#A0888C] hover:text-[#231518]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-[11px] text-[#8A4E54] font-bold uppercase shrink-0">Popular:</span>
          {['Velvet', 'Chanderi', 'Organza', 'Zardosi', 'Tilla', 'Pashmina'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs bg-[#FAF5EF] hover:bg-[#231518] hover:text-white px-3 py-1 rounded-full text-[#4A383C] border border-[#E5B8AC]/60 transition shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-80 overflow-y-auto space-y-3 pt-2">
          {filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#6E5A5E]">
              No unstitched suits match "{query}". Try searching "Silk" or "Velvet".
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF5EF] hover:bg-[#F5EBE6] border border-[#EFE3DB] cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <img src={product.images[0]} alt={product.name} className="w-12 h-14 object-cover rounded-xl border border-[#E5B8AC]" />
                  <div>
                    <span className="text-[10px] text-[#8A4E54] font-bold uppercase">{product.fabricType}</span>
                    <h4 className="text-xs font-bold font-serif-luxury text-[#231518]">{product.name}</h4>
                    <span className="text-[11px] text-[#6E5A5E]">{product.workType}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#231518]">₹{product.price.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4 text-[#C58B88]" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
