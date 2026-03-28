import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] z-[60]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-50 rounded-full blur-2xl opacity-50" />
            
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-100">
                  <ShieldCheck className="text-brand-600" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 italic text-lg leading-tight">
                    Privacy Matters
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-brand-600 mt-1">
                    Cookie Policy
                  </p>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
                We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking "Accept", you agree to our use of cookies.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleConsent('accepted')}
                  className="flex-1 bg-brand-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-700 transition-all shadow-md shadow-brand-600/20 active:scale-95"
                >
                  Accept All
                </button>
                <button
                  onClick={() => handleConsent('declined')}
                  className="flex-1 bg-slate-50 text-slate-600 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 transition-all border border-slate-200 active:scale-95"
                >
                  Decline
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <a href="#" className="text-[10px] text-slate-400 hover:text-brand-600 transition-colors underline underline-offset-2">
                  Read our full Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
