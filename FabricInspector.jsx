import React, { useState } from 'react';
import { Scissors, Layers, CheckCircle2, Ruler, Sparkles, HelpCircle, ChevronRight } from 'lucide-react';

export default function FabricInspector({ onCustomizerClick }) {
  const [selectedPart, setSelectedPart] = useState('kameez');

  const parts = {
    kameez: {
      title: "Top (Kameez / Kurti Fabric)",
      length: "3.0 Meters Uncut Length",
      width: "44 to 48 Inches Extra Wide Span",
      details: "High thread-count silk or micro-velvet fabric with neck yoke motif embroidery, front panel heavy zari threadwork, and sleeve borders.",
      suitableFor: ["Long Flared Anarkali", "Straight Designer Kurti", "A-Line Knee Length", "Angrakha Style (up to 5XL)"],
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    },
    bottom: {
      title: "Bottom (Trouser / Salwar Fabric)",
      length: "2.5 Meters Uncut Length",
      width: "44 Inches Standard Width",
      details: "High density Shantoon / Raw Silk / Cotton Cambric matching bottom fabric, soft against the skin, opaque and zero shrinkage.",
      suitableFor: ["Flared Palazzo Pants", "Traditional Patiala Salwar", "Pencil Cigarette Trousers", "Lehenga Skirt Flare"],
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
    },
    dupatta: {
      title: "Dupatta (Drape Fabric)",
      length: "2.4 to 2.5 Meters Finished Length",
      width: "36 to 40 Inches Regal Drape Width",
      details: "Finished sheer tissue organza, pure chiffon, or Banarasi silk dupatta featuring all-over zari bootis and hand-scalloped borders.",
      suitableFor: ["Shoulder Pinning", "Full Regal Drape", "Lehenga Style Wrap", "Cape Drape"],
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    },
    trim: {
      title: "Border & Embellishment Patches",
      length: "Custom Cut Trims & Patch Sets",
      width: "3.5 Inches Intricate Zari Lace",
      details: "Separate embroidered patches for sleeve cuffs, daman (bottom hemline), and neck cutout bordering to enhance boutique finish.",
      suitableFor: ["Sleeve Hem Styling", "Kurti Daman Border", "Trouser Bottom Hem Accent", "Neckline Outline"],
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    }
  };

  const activeData = parts[selectedPart];

  return (
    <section id="fabric-inspector" className="py-16 bg-[#FFFBF7] border-b border-[#EFE3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5EBE6] text-[#8A4E54] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5 text-[#C58B88]" />
            <span>UNSTITCHED FABRIC TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#231518]">
            The Anatomy of a Kaushika Unstitched Suit
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A4E] font-light">
            Every set from Kaushika Collection includes generous, un-cut premium fabric components. Click on any section below to inspect exact measurements and stitching possibilities.
          </p>
        </div>

        {/* Interactive Breakdown Frame */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5B8AC]/40 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Part Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#8A4E54] mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#DFB76C]" /> Select Component to Inspect:
            </h3>

            {Object.keys(parts).map((key) => {
              const item = parts[key];
              const isSelected = selectedPart === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedPart(key)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#231518] text-[#F3E5C8] border-[#231518] shadow-md scale-[1.01]'
                      : 'bg-[#FAF5EF] text-[#231518] border-[#EFE3DB] hover:border-[#C58B88]/60 hover:bg-[#F5EBE6]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isSelected ? 'text-[#DFB76C]' : 'text-[#8A4E54]'}`}>
                      {item.length}
                    </span>
                    <h4 className="text-sm font-semibold font-serif-luxury">{item.title}</h4>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-[#DFB76C]' : 'text-[#A0888C]'}`} />
                </button>
              );
            })}

            {/* Customizer CTA Link */}
            <div className="pt-4 border-t border-[#EFE3DB]">
              <button
                onClick={onCustomizerClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C58B88]/15 hover:bg-[#C58B88]/25 text-[#8A4E54] font-semibold text-xs py-3 rounded-xl transition border border-[#C58B88]/40"
              >
                <Scissors className="w-4 h-4 text-[#8A4E54]" />
                <span>Launch Interactive Tailoring Guide</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Details Display */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 bg-[#FAF5EF] p-6 rounded-2xl border border-[#E5D5CC]">
            
            {/* Image Preview */}
            <div className="relative rounded-xl overflow-hidden shadow-md h-64 sm:h-auto">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#231518]/90 text-[#DFB76C] text-[10px] uppercase font-bold px-2.5 py-1 rounded-full backdrop-blur">
                {activeData.length}
              </div>
            </div>

            {/* Part Specs & Details */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8A4E54] uppercase tracking-widest block">COMPONENTS SPECIFICATION</span>
                <h3 className="text-xl font-serif-luxury font-bold text-[#231518] mt-1">{activeData.title}</h3>
                <p className="text-xs text-[#5E4A4E] mt-2 leading-relaxed font-light">{activeData.details}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E5D5CC]">
                <h5 className="text-xs font-bold text-[#231518] uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C58B88]" /> Ideal For Tailoring:
                </h5>
                <ul className="grid grid-cols-1 gap-1">
                  {activeData.suitableFor.map((style, idx) => (
                    <li key={idx} className="text-xs text-[#4A383C] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C58B88]" />
                      <span>{style}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5B8AC]/40 text-[11px] text-[#6E5A5E] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <span>
                  <strong>Custom Fitting Note:</strong> Unstitched fabric allows total freedom for custom necklines, sleeve lengths, and waist fits up to size 5XL (52 inches bust).
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
