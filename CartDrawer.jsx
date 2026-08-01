import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Sparkles, Tag, ArrowRight, ShieldCheck, CheckCircle, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.finalPrice || item.price) * item.quantity, 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const freeShippingThreshold = 5000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 250;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'ROYAL10') {
      setAppliedDiscount(10);
      setDiscountMessage('ROYAL10 Applied! 10% Royal Discount Saved.');
    } else if (couponCode.trim().toUpperCase() === 'KAUSHIKA15') {
      setAppliedDiscount(15);
      setDiscountMessage('KAUSHIKA15 Applied! 15% VIP Discount Saved.');
    } else {
      setDiscountMessage('Invalid Code. Try ROYAL10 or KAUSHIKA15');
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    triggerConfetti();
    setTimeout(() => {
      setOrderComplete(true);
      setIsCheckingOut(false);
    }, 1200);
  };

  const handleWhatsAppOrder = () => {
    const summary = cartItems.map(i => `• ${i.name} (Qty: ${i.quantity}) ${i.needStitching ? '[Custom Tailored]' : '[Unstitched Fabric]'}`).join('\n');
    const text = encodeURIComponent(
      `Hello Kaushika Collection! I want to confirm my order:\n\n${summary}\n\n*Total Amount: ₹${finalTotal.toLocaleString('en-IN')}*\n\nPlease process my unstitched suit parcel!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between border-l border-[#E5B8AC]">
        
        {/* Header */}
        <div className="p-5 bg-[#231518] text-[#F3E5C8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#DFB76C]" />
            <h2 className="text-lg font-serif-luxury font-bold tracking-wide">Your Shopping Bag</h2>
            <span className="bg-[#3B252A] text-[#DFB76C] text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full text-[#D4BAB0] hover:text-white hover:bg-[#3B252A] transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-[#FAF5EF] px-5 py-3 border-b border-[#EFE3DB]">
          {subtotal >= freeShippingThreshold ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4E54]">
              <Sparkles className="w-4 h-4 text-[#DFB76C]" />
              <span>Congratulations! You unlocked FREE Express Pan-India Delivery.</span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-[#5E4A4E]">
                <span>Free Express Shipping Meter</span>
                <span className="font-bold text-[#8A4E54]">Add ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more</span>
              </div>
              <div className="w-full bg-[#E5D5CC] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#DFB4A0] to-[#C58B88] h-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Content Body */}
        {orderComplete ? (
          <div className="p-8 text-center flex-1 flex flex-col justify-center items-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#C58B88]/20 text-[#8A4E54] flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#C58B88]" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-[#231518]">Order Confirmed!</h3>
            <p className="text-xs text-[#5E4A4E] leading-relaxed">
              Thank you for shopping with <strong>Kaushika Collection</strong>. Your unstitched suit parcel is being prepared with original luxury packaging.
            </p>
            <div className="bg-[#FAF5EF] p-4 rounded-2xl w-full text-left space-y-1 border border-[#E5B8AC]">
              <span className="text-[10px] text-[#8A4E54] font-bold uppercase tracking-wider block">Order Reference</span>
              <p className="text-xs font-mono font-bold text-[#231518]">KS-CONF-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p className="text-[11px] text-[#6E5A5E]">Total Paid: ₹{finalTotal.toLocaleString('en-IN')}</p>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order Receipt to WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClearCart();
                setOrderComplete(false);
                onClose();
              }}
              className="text-xs text-[#8A4E54] underline hover:text-[#231518]"
            >
              Continue Shopping
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="p-8 text-center flex-1 flex flex-col justify-center items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F5EBE6] text-[#C58B88] flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif-luxury text-[#231518]">Your Bag is Empty</h3>
            <p className="text-xs text-[#6E5A5E] font-light max-w-xs">
              Explore our unstitched suit collections to add handcrafted Zardosi, Organza, or Silk fabric sets.
            </p>
            <button
              onClick={onClose}
              className="bg-[#231518] text-[#F3E5C8] px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#3B252A] transition"
            >
              Browse Catalog
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-[#EFE3DB]">
            {cartItems.map((item) => {
              const itemTotal = (item.finalPrice || item.price) * item.quantity;

              return (
                <div key={item.id + (item.needStitching ? '-stitched' : '')} className="pt-4 first:pt-0 flex gap-3">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover rounded-xl border border-[#E5B8AC]/50 shrink-0" 
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold font-serif-luxury text-[#231518] line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#A0888C] hover:text-[#C58B88] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[10px] text-[#8A4E54] font-semibold block">
                        {item.fabricType} • {item.needStitching ? 'Custom Tailored (+₹1,490)' : 'Unstitched 3m Cut'}
                      </span>

                      {item.customOptions && (
                        <div className="text-[10px] text-[#6E5A5E] bg-[#FAF5EF] p-1.5 rounded mt-1 border border-[#E5D5CC]">
                          Neck: {item.customOptions.neckStyle} | Bottom: {item.customOptions.bottomStyle}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#E5B8AC] rounded-lg bg-[#FAF5EF]">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#E5D5CC] text-[#231518] rounded-l"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#231518]">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#E5D5CC] text-[#231518] rounded-r"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#231518]">
                        ₹{itemTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && !orderComplete && (
          <div className="p-5 bg-[#FAF5EF] border-t border-[#EFE3DB] space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-[#C58B88] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Promo Code (e.g. ROYAL10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E5B8AC] rounded-xl pl-8 pr-3 py-2 text-xs uppercase font-semibold text-[#231518] placeholder:lowercase placeholder:font-normal outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#231518] text-[#F3E5C8] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#3B252A] transition"
              >
                Apply
              </button>
            </form>
            {discountMessage && (
              <p className={`text-[11px] font-medium ${appliedDiscount > 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                {discountMessage}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5E4A4E] pt-2 border-t border-[#E5D5CC]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#231518]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Royal Discount ({appliedDiscount}%)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Pan-India Delivery</span>
                <span className="font-semibold text-[#231518]">
                  {shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#231518] pt-2 border-t border-[#E5D5CC]">
                <span>Total Amount</span>
                <span className="text-base text-[#231518]">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Final Checkout CTA */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#231518] hover:bg-[#3B252A] text-[#F3E5C8] py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg active:scale-98"
            >
              {isCheckingOut ? (
                <span>Securing Royal Parcel...</span>
              ) : (
                <>
                  <span>Proceed to Express Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#DFB76C]" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#8A4E54]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C58B88]" />
              <span>100% Secure Checkout • Authentic Fabric Guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
