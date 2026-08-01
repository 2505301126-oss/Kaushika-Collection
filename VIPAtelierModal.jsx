import React, { useState } from 'react';
import { X, Sparkles, PhoneCall, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';

export default function VIPAtelierModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Bridal Trousseau');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Kaushika Atelier! My name is ${name || 'Client'}. I would like to book a VIP Trousseau Consultation for ${occasion}. Contact: ${phone}.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-[#231518] text-[#F3E5C8] w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-[#DFB76C]/40 shadow-2xl space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D4BAB0] hover:text-white p-1 rounded-full bg-[#3B252A]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#3B252A] text-[#DFB76C] text-xs font-semibold px-3 py-1 rounded-full border border-[#593940]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KAUSHIKA PRIVATE ATELIER</span>
          </div>
          <h2 className="text-2xl font-serif-luxury text-white">VIP Bridal &amp; Styling Consultation</h2>
          <p className="text-xs text-[#D4BAB0] font-light">
            Need custom fabric swatches or bulk wedding trousseau boxes? Book a 1-on-1 session with our master stylist.
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4 py-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#DFB76C]/20 text-[#DFB76C] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif-luxury text-white">Appointment Requested!</h3>
            <p className="text-xs text-[#D4BAB0]">
              Our senior fashion curator will reach out to you via WhatsApp / Call within 2 hours.
            </p>
            <button
              onClick={handleWhatsAppDirect}
              className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect Immediately on WhatsApp</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#DFB76C] mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Radhika Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#2E1C20] border border-[#593940] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-[#8A6B72] outline-none focus:border-[#DFB76C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#DFB76C] mb-1">WhatsApp Phone Number:</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#2E1C20] border border-[#593940] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-[#8A6B72] outline-none focus:border-[#DFB76C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#DFB76C] mb-1">Select Consultation Type:</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-[#2E1C20] border border-[#593940] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#DFB76C]"
              >
                <option value="Bridal Trousseau">Bridal Trousseau Box (10+ Suits)</option>
                <option value="Custom Zari Embroidery">Custom Zari Embroidery Request</option>
                <option value="Fabric Swatch Box">Physical Fabric Swatch Box Delivery</option>
                <option value="Styling Guidance">Personal Stylist Video Call</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#DFB76C] hover:bg-[#E5C37A] text-[#231518] py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Consultation Slot</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
