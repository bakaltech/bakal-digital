import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CookieConsent from './CookieConsent';

const primaryLinks = [
  { name: 'Work', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const openChat = () => {
  window.dispatchEvent(new CustomEvent('open-chat'));
};

const BrandMark = () => (
  <>
    <div className="w-9 h-9 bg-ink rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
      <span className="text-white font-bold text-lg">B</span>
    </div>
    <span className="font-bold text-xl tracking-tight text-ink transition-colors group-hover:text-accent">
      Bakal <span className="text-brand-400 font-medium">Digital</span>
    </span>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${isScrolled ? 'bg-paper/88 backdrop-blur-xl border-b border-brand-100/40 py-4' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <BrandMark />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {primaryLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-ink hover:text-accent'}`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button type="button" onClick={openChat} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-brand-100 bg-white text-ink text-sm font-semibold hover:border-accent hover:text-accent transition-colors">
              <MessageSquare className="w-4 h-4" />
              Quick Brief
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-semibold hover:bg-accent transition-colors shadow-lg">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button type="button" className="md:hidden p-2 rounded-xl text-ink hover:bg-soft transition-colors" aria-label="Toggle menu" onClick={() => setIsOpen((value) => !value)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className="md:hidden bg-paper border-t border-brand-100/30">
            <div className="px-6 py-8 flex flex-col gap-6">
              {primaryLinks.map((link, index) => (
                <Link key={link.path} to={link.path} className="flex items-center gap-4 text-2xl font-semibold text-ink hover:text-accent transition-colors">
                  <span className="text-xs text-accent uppercase tracking-[0.3em]">0{index + 1}</span>
                  {link.name}
                </Link>
              ))}

              <div className="grid gap-3 pt-4 border-t border-brand-100/40">
                <button type="button" onClick={() => { setIsOpen(false); openChat(); }} className="w-full px-6 py-4 rounded-2xl border border-brand-100 bg-white text-ink font-semibold">
                  Open Quick Brief
                </button>
                <Link to="/contact" className="w-full px-6 py-4 rounded-2xl bg-ink text-white font-semibold text-center">
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-paper border-t border-brand-100/20 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-accent/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_1fr] gap-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-5"><BrandMark /></div>
            <p className="text-brand-400 text-lg leading-relaxed max-w-xl">Bakal Digital is a remote-first studio for founders and growing brands that need sharper positioning, better-performing websites, and cleaner digital systems.</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-5">Navigate</p>
            <div className="grid gap-3">
              {primaryLinks.map((link) => (<Link key={link.path} to={link.path} className="text-brand-400 hover:text-ink transition-colors">{link.name}</Link>))}
              <Link to="/privacy" className="text-brand-400 hover:text-ink transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-brand-400 hover:text-ink transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-soft border border-brand-100/50 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">Start Here</p>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">Need a better digital presence?</h3>
            <p className="text-brand-400 leading-relaxed mb-6">Use the guided brief for a fast start, or send a project inquiry with your timeline, goals, and current website status.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openChat} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-brand-100 text-ink font-semibold hover:border-accent hover:text-accent transition-colors">
                <MessageSquare className="w-4 h-4" />
                Guided Brief
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-brand-100/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-400">
          <p>© {new Date().getFullYear()} Bakal Digital. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em] text-[11px]">Remote-first studio · Built for clarity, speed, and trust</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-paper">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
