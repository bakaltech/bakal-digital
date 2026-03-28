import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CookieConsent from './CookieConsent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Work', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-[70] transition-all duration-700 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'py-4 bg-paper/80 backdrop-blur-xl border-b border-brand-100/20' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 group">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-ink rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-lg md:text-xl">B</span>
              </div>
              <span className="font-bold text-lg md:text-xl tracking-tighter text-ink group-hover:text-accent transition-colors hidden sm:block">
                Bakàl <span className="text-brand-300 font-medium">Digital</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="group relative bg-ink text-white px-8 py-3 rounded-full text-sm font-bold overflow-hidden transition-all shadow-lg hover:shadow-accent/20"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2 hover:bg-soft rounded-xl transition-colors z-[90]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-paper md:hidden flex flex-col overflow-hidden"
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-brand-100/10 flex-shrink-0">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-ink rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">B</span>
                </div>
                <span className="font-bold text-lg md:text-xl tracking-tighter text-ink">
                  Bakàl <span className="text-brand-300 font-medium">Digital</span>
                </span>
              </Link>
              {/* Close button is handled by the main toggle button which is z-indexed above this overlay */}
              <div className="w-8 h-8 md:w-10 md:h-10" /> 
            </div>
            
            {/* Mobile Links */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-8 space-y-4 md:space-y-6 overflow-y-auto py-8 md:py-12">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-3 md:gap-4"
                  >
                    <span className="text-[10px] md:text-xs font-bold text-accent opacity-40 group-hover:opacity-100 transition-opacity tracking-widest">0{idx + 1}</span>
                    <span className="text-2xl md:text-[clamp(2.5rem,10vw,4rem)] font-bold text-ink tracking-tight hover:text-accent transition-colors leading-none">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

        <div className="pt-12 md:pt-16 border-t border-brand-100/20 bg-soft/30 flex-shrink-0 pb-safe">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative block w-full bg-ink text-white text-center py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold overflow-hidden transition-all shadow-xl active:scale-[0.98] mb-6 md:mb-8"
                >
                  <span className="relative z-10">Start a Project</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                </Link>
                <div className="flex justify-between items-center px-2">
                  <div className="flex gap-4 md:gap-6">
                    {['TW', 'LI', 'IG'].map(s => (
                      <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-400 hover:text-accent transition-colors">{s}</a>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">Bakàl © 2024</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper border-t border-brand-100/10 pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="pt-16 border-t border-brand-100/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center text-white text-lg font-bold">B</div>
                <span className="text-lg font-bold tracking-tight text-ink">Bakàl Digital</span>
              </div>
              <p className="text-sm text-brand-400 max-w-sm leading-relaxed">
                We build future-ready web and AI experiences for brands that want to lead with strategy, creativity, and measurable impact.
              </p>
              <div className="flex gap-3">
                {['TW', 'LI', 'IG'].map((s) => (
                  <a key={s} href="#" className="text-sm font-bold text-brand-400 hover:text-accent transition-colors">{s}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink mb-4">Quick links</h3>
              <ul className="space-y-2">
                {['Work', 'Services', 'About', 'Contact', 'Portfolio'].map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'Work' ? '/portfolio' : `/${item.toLowerCase()}`}
                      className="text-sm text-brand-400 hover:text-ink transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink mb-4">Stay in touch</h3>
              <p className="text-sm text-brand-400 mb-3">Join our mailing list for insights and launch updates.</p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink"
                />
                <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-ink text-white font-semibold hover:bg-accent transition-all">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-brand-100/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-brand-400">
              © {new Date().getFullYear()} Bakàl Digital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <a href="#" className="text-brand-400 hover:text-ink transition-colors">Privacy Policy</a>
              <a href="#" className="text-brand-400 hover:text-ink transition-colors">Terms of Service</a>
              <span className="text-brand-300 text-xs uppercase tracking-widest">Designed for high-growth brands</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
