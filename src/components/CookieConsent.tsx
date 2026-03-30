import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1600);
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
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] z-[60]">
          <div role="dialog" aria-live="polite" aria-label="Cookie preferences" className="bg-white rounded-2xl shadow-2xl border border-brand-100/50 p-6 overflow-hidden relative">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl opacity-70" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-soft rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-100/50 text-accent"><ShieldCheck size={20} /></div>
                <div>
                  <h3 className="font-semibold text-ink text-lg leading-tight">Privacy matters</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-400 mt-1">Cookie preferences</p>
                </div>
                <button type="button" onClick={() => handleConsent('declined')} aria-label="Dismiss cookie banner" className="ml-auto text-brand-400 hover:text-ink transition-colors"><X size={18} /></button>
              </div>
              <p className="text-sm text-brand-400 leading-relaxed mb-6">We use essential cookies to keep the site working, plus optional analytics cookies to understand where people are engaging and where the experience still needs work.</p>
              <div className="flex gap-3">
                <button onClick={() => handleConsent('accepted')} className="flex-1 bg-ink text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-accent transition-colors">Allow analytics</button>
                <button onClick={() => handleConsent('declined')} className="flex-1 bg-soft text-ink px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-100 transition-colors border border-brand-100/50">Keep essentials only</button>
              </div>
              <div className="mt-4 text-center">
                <Link to="/privacy" className="text-[11px] text-brand-400 hover:text-accent transition-colors underline underline-offset-2">Read the privacy policy</Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
