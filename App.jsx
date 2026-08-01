import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FabricInspector from './components/FabricInspector';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import TailoringCustomizer from './components/TailoringCustomizer';
import VIPAtelierModal from './components/VIPAtelierModal';
import ReviewsSection from './components/ReviewsSection';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';

import { PRODUCTS, FABRICS, OCCASIONS, WORK_TYPES } from './data/products';
import { Filter, SlidersHorizontal, Sparkles, Check, Heart, ShoppingBag, X } from 'lucide-react';

export default function App() {
  // State management
  const [selectedFabric, setSelectedFabric] = useState('All Fabrics');
  const [selectedOccasion, setSelectedOccasion] = useState('All Occasions');
  const [selectedWork, setSelectedWork] = useState('All Craftwork');
  const [sortBy, setSortBy] = useState('featured');

  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAtelierOpen, setIsAtelierOpen] = useState(false);

  // Cart & Wishlist persistence
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('kaushika_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('kaushika_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('kaushika_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('kaushika_wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Cart operations
  const handleAddToCart = (productToAdd) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === productToAdd.id && item.needStitching === productToAdd.needStitching
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...productToAdd, quantity: 1 }];
    });
    showToast(`" ${productToAdd.name} " added to your Shopping Bag!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from your Wishlist.`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Saved " ${product.name} " to Wishlist!`);
    }
  };

  // Filtering products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesFabric = selectedFabric === 'All Fabrics' || product.fabricType === selectedFabric;
    const matchesOccasion = selectedOccasion === 'All Occasions' || product.occasion === selectedOccasion;
    const matchesWork = selectedWork === 'All Craftwork' || product.workType === selectedWork;
    return matchesFabric && matchesOccasion && matchesWork;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EF]">
      
      {/* Toast Notification Floating Bar */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-[#231518] text-[#F3E5C8] border border-[#DFB76C]/50 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#DFB76C]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeCategory={selectedFabric}
        onSelectCategory={(fabric) => {
          setSelectedFabric(fabric);
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAtelier={() => setIsAtelierOpen(true)}
      />

      {/* Hero Header Banner */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onFilterFabric={(fabric) => {
          setSelectedFabric(fabric);
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Unstitched Suit Component Inspector (Top, Bottom, Dupatta specs) */}
      <FabricInspector
        onCustomizerClick={() => {
          const el = document.getElementById('customizer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Catalog Grid & Filters Section */}
      <section id="collections" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Catalog Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EFE3DB] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#F5EBE6] text-[#8A4E54] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>THE ROYAL CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#231518]">
              Unstitched Suit Masterpieces
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5A5E] font-light mt-1">
              Showing {filteredProducts.length} handcrafted unstitched suit sets with authentic zari, organza &amp; silk cuts.
            </p>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8A4E54] font-semibold flex items-center gap-1 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFFFFF] border border-[#E5B8AC] text-[#231518] text-xs font-medium rounded-xl px-3 py-2 outline-none cursor-pointer shadow-xs"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Client Rating</option>
            </select>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5B8AC]/40 shadow-xs">
          
          {/* Fabric Type Pills */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A4E54] block">Filter by Fabric Type:</span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {FABRICS.map((fabric) => (
                <button
                  key={fabric}
                  onClick={() => setSelectedFabric(fabric)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition shrink-0 ${
                    selectedFabric === fabric
                      ? 'bg-[#231518] text-[#F3E5C8] shadow'
                      : 'bg-[#FAF5EF] text-[#4A383C] hover:bg-[#F5EBE6] border border-[#E5B8AC]/50'
                  }`}
                >
                  {fabric}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion & Craftwork Pills */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-[#EFE3DB]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A4E54] block mb-1.5">Occasion:</span>
              <div className="flex flex-wrap gap-1.5">
                {OCCASIONS.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition ${
                      selectedOccasion === occ
                        ? 'bg-[#C58B88] text-white'
                        : 'bg-[#FAF5EF] text-[#5E4A4E] hover:bg-[#F5EBE6]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A4E54] block mb-1.5">Embellishment Work:</span>
              <div className="flex flex-wrap gap-1.5">
                {WORK_TYPES.map((work) => (
                  <button
                    key={work}
                    onClick={() => setSelectedWork(work)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition ${
                      selectedWork === work
                        ? 'bg-[#C58B88] text-white'
                        : 'bg-[#FAF5EF] text-[#5E4A4E] hover:bg-[#F5EBE6]'
                    }`}
                  >
                    {work}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#FFFFFF] rounded-3xl border border-[#E5B8AC]/40 p-8 space-y-3">
            <h3 className="text-xl font-serif-luxury text-[#231518]">No Unstitched Suits Found</h3>
            <p className="text-xs text-[#6E5A5E]">Try clearing your fabric or craftwork filters to view all pieces.</p>
            <button
              onClick={() => {
                setSelectedFabric('All Fabrics');
                setSelectedOccasion('All Occasions');
                setSelectedWork('All Craftwork');
              }}
              className="bg-[#231518] text-[#F3E5C8] px-5 py-2 rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.some((w) => w.id === product.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setActiveModalProduct(p)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

      </section>

      {/* Interactive Tailoring Customizer */}
      <TailoringCustomizer />

      {/* Verified Reviews Section */}
      <ReviewsSection />

      {/* Footer Component */}
      <Footer
        onSelectCategory={(fabric) => {
          setSelectedFabric(fabric);
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAtelier={() => setIsAtelierOpen(true)}
      />

      {/* Modal Viewers */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.some((w) => w.id === activeModalProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setActiveModalProduct(product)}
      />

      {/* Wishlist Drawer / Modal */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between border-l border-[#E5B8AC]">
            <div className="p-5 bg-[#231518] text-[#F3E5C8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#C58B88] fill-[#C58B88]" />
                <h2 className="text-lg font-serif-luxury font-bold">Your Saved Wishlist</h2>
              </div>
              <button onClick={() => setIsWishlistOpen(false)} className="p-1 text-[#D4BAB0] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {wishlist.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#6E5A5E]">
                  You have not saved any unstitched suits yet. Click the heart icon on any suit card to save it!
                </div>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF5EF] border border-[#EFE3DB]">
                    <div className="flex items-center gap-3">
                      <img src={item.images[0]} alt={item.name} className="w-12 h-14 object-cover rounded-xl border border-[#E5B8AC]" />
                      <div>
                        <span className="text-[10px] text-[#8A4E54] font-bold uppercase">{item.fabricType}</span>
                        <h4 className="text-xs font-bold font-serif-luxury text-[#231518] line-clamp-1">{item.name}</h4>
                        <span className="text-xs font-bold text-[#231518]">₹{item.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          handleAddToCart(item);
                          setIsWishlistOpen(false);
                        }}
                        className="bg-[#231518] text-[#F3E5C8] p-2 rounded-xl text-xs hover:bg-[#3B252A]"
                        title="Add to Bag"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#DFB76C]" />
                      </button>
                      <button
                        onClick={() => handleToggleWishlist(item)}
                        className="text-[#A0888C] hover:text-[#C58B88] p-1"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIP Atelier Appointment Modal */}
      <VIPAtelierModal
        isOpen={isAtelierOpen}
        onClose={() => setIsAtelierOpen(false)}
      />

    </div>
  );
}
