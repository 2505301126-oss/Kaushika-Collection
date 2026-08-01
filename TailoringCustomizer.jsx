import React, { useState } from 'react';
import { Scissors, Sparkles, Check, Download, RefreshCw, Layers, Palette } from 'lucide-react';

export default function TailoringCustomizer({ onSelectSuitForCustomization }) {
  const [silhouette, setSilhouette] = useState('Anarkali Flare');
  const [neckline, setNeckline] = useState('Sweetheart Zari Patch');
  const [bottomCut, setBottomCut] = useState('Flared Palazzo');
  const [dupattaStyle, setDupattaStyle] = useState('Shoulder Pin Drape');
  const [copied, setCopied] = useState(false);

  const silhouettes = ['Straight Classic Kurti', 'Anarkali Flare', 'Angrakha Wrap', 'A-Line Knee Kurti'];
  const necklines = ['Sweetheart Zari Patch', 'Royal V-Cutout', 'Pearl Boat Neck', 'Keyhole Collar'];
  const bottomCuts = ['Flared Palazzo', 'Cigarette Pencil Pant', 'Patiala Pleats', 'Sharara Flounce'];
  const dupattaStyles = ['Shoulder Pin Drape', 'One-Side Arm Drape', 'Head Veil Drape', 'Double Shoulder Wrap'];

  const handleCopySpecs = () => {
    const text = `KAUSHIKA COLLECTION TAILORING SPECIFICATION:\n• Kurti Silhouette: ${silhouette}\n• Neckline Design: ${neckline}\n• Bottom Cut: ${bottomCut}\n• Dupatta Style: ${dupattaStyle}\n\nFabric Cut: Top 3.0m | Bottom 2.5m | Dupatta 2.4m`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="customizer" className="py-16 bg-[#231518] text-[#F3E5C8] relative overflow-hidden border-y border-[#3D252A]">
      
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#382328] text-[#DFB76C] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-[#593940]">
            <Scissors className="w-3.5 h-3.5" />
            <span>INTERACTIVE STITCHING GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-white">
            Design Your Dream Unstitched Suit
          </h2>
          <p className="text-sm sm:text-base text-[#D4BAB0] font-light">
            Visualize your ideal silhouette before handing your Kaushika unstitched suit fabric to your boutique tailor.
          </p>
        </div>

        {/* Interactive Customizer Workbench */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#2E1C20] p-6 sm:p-8 rounded-3xl border border-[#52373C] shadow-2xl">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Silhouette */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#DFB76C] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DFB76C] text-[#231518] flex items-center justify-center text-[10px] font-extrabold">1</span>
                <span>Kameez Silhouette Cut:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {silhouettes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSilhouette(item)}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition ${
                      silhouette === item
                        ? 'bg-[#DFB76C] text-[#231518] border-[#DFB76C] font-bold shadow'
                        : 'bg-[#231518] text-[#D4BAB0] border-[#452D32] hover:border-[#DFB76C]/60'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Neckline */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#DFB76C] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DFB76C] text-[#231518] flex items-center justify-center text-[10px] font-extrabold">2</span>
                <span>Embroidered Neckline Style:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {necklines.map((item) => (
                  <button
                    key={item}
                    onClick={() => setNeckline(item)}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition ${
                      neckline === item
                        ? 'bg-[#DFB76C] text-[#231518] border-[#DFB76C] font-bold shadow'
                        : 'bg-[#231518] text-[#D4BAB0] border-[#452D32] hover:border-[#DFB76C]/60'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Bottom Cut */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#DFB76C] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DFB76C] text-[#231518] flex items-center justify-center text-[10px] font-extrabold">3</span>
                <span>Bottom / Trouser Cut:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {bottomCuts.map((item) => (
                  <button
                    key={item}
                    onClick={() => setBottomCut(item)}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition ${
                      bottomCut === item
                        ? 'bg-[#DFB76C] text-[#231518] border-[#DFB76C] font-bold shadow'
                        : 'bg-[#231518] text-[#D4BAB0] border-[#452D32] hover:border-[#DFB76C]/60'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Dupatta Drape */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#DFB76C] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DFB76C] text-[#231518] flex items-center justify-center text-[10px] font-extrabold">4</span>
                <span>Dupatta Drape Style:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dupattaStyles.map((item) => (
                  <button
                    key={item}
                    onClick={() => setDupattaStyle(item)}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition ${
                      dupattaStyle === item
                        ? 'bg-[#DFB76C] text-[#231518] border-[#DFB76C] font-bold shadow'
                        : 'bg-[#231518] text-[#D4BAB0] border-[#452D32] hover:border-[#DFB76C]/60'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Live Preview Card */}
          <div className="lg:col-span-5 bg-[#231518] p-6 rounded-2xl border border-[#593940] space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#3D252A] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C58B88]">YOUR TAILORING SPECIFICATION</span>
                <h3 className="text-lg font-serif-luxury font-bold text-white">Custom Suit Blueprint</h3>
              </div>
              <Sparkles className="w-5 h-5 text-[#DFB76C]" />
            </div>

            {/* Live Spec Card */}
            <div className="space-y-3 text-xs bg-[#2E1C20] p-4 rounded-xl border border-[#452D32]">
              <div className="flex justify-between py-1 border-b border-[#3D252A]">
                <span className="text-[#A0888C]">Kameez Cut:</span>
                <span className="font-bold text-[#F3E5C8]">{silhouette}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3D252A]">
                <span className="text-[#A0888C]">Neckline Style:</span>
                <span className="font-bold text-[#F3E5C8]">{neckline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3D252A]">
                <span className="text-[#A0888C]">Bottom Style:</span>
                <span className="font-bold text-[#F3E5C8]">{bottomCut}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#A0888C]">Dupatta Drape:</span>
                <span className="font-bold text-[#F3E5C8]">{dupattaStyle}</span>
              </div>
            </div>

            <div className="bg-[#DFB76C]/10 p-3 rounded-xl border border-[#DFB76C]/30 text-[11px] text-[#D4BAB0] flex items-center gap-2">
              <Scissors className="w-4 h-4 text-[#DFB76C] shrink-0" />
              <span>Fabric Provided: 3.0m Top + 2.5m Bottom + 2.4m Dupatta. Fits up to size 5XL seamlessly.</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopySpecs}
                className="w-full bg-[#DFB76C] hover:bg-[#E5C37A] text-[#231518] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow"
              >
                {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{copied ? 'Tailoring Blueprint Copied!' : 'Copy Blueprint for Your Master Tailor'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
