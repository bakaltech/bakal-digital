import React, { useEffect, useMemo, useState } from 'react';
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
    <div className="relative w-10 h-10 rounded-[1.1rem] bg-ink flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-[1.03] shadow-[0_12px_30px_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(78,161,255,0.35),_transparent_55%)]" />
      <span className="relative text-white font-bold text-lg">B</span>
      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#4EA1FF]" />
    </div>
    <span className="font-bold text-xl tracking-tight text-ink transition-colors group-hover:text-accent">
      Bakal <span className="text-brand-400 font-medium">Digital</span>
    </span>
  </>
);

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Bakal Digital | AI Products, Platforms, Automation',
    description: 'Bakal Digital builds AI products, custom platforms, automation systems, commerce experiences, and premium digital infrastructure for modern businesses.',
  },
  '/portfolio': {
    title: 'Work | Bakal Digital',
    description: 'Explore concept studies and digital product directions across AI, commerce, systems, and platform design.',
  },
  '/about': {
    title: 'About | Bakal Digital',
    description: 'Learn how Bakal Digital approaches AI products, custom platforms, automation systems, and premium digital execution.',
  },
  '/services': {
    title: 'Services | Bakal Digital',
    description: 'Discover Bakal Digital services across AI development, custom platforms, automation systems, commerce, SaaS, and data intelligence.',
  },
  '/contact': {
    title: 'Contact | Bakal Digital',
    description: 'Start a project with Bakal Digital across AI products, websites, platforms, automation, commerce, and digital systems.',
  },
  '/privacy': {
    title: 'Privacy Policy | Bakal Digital',
    description: 'Read the privacy policy for Bakal Digital.',
  },
  '/terms': {
    title: 'Terms of Service | Bakal Digital',
    description: 'Read the terms of service for Bakal Digital.',
  },
};

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
    <nav className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${isScrolled ? 'bg-paper/88 backdrop-blur-xl border-b border-brand-100/40 py-4 shadow-[0_12px_30px_rgba(17,19,21,0.04)]' : 'bg-transparent py-7'}`}>
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
            <button type="button" onClick={openChat} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-brand-100 bg-white/90 text-ink text-sm font-semibold hover:border-accent hover:text-accent transition-colors shadow-[0_10px_20px_rgba(17,19,21,0.04)]">
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
        <div className="grid lg:grid-cols-[1.45fr_0.8fr_1fr] gap-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-5"><BrandMark /></div>
            <p className="text-brand-400 text-lg leading-relaxed max-w-xl">
              Bakal Digital is a remote-first studio for businesses that need stronger digital products, cleaner automation, sharper platforms, and more credible customer-facing experiences.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-5">Navigate</p>
            <div className="grid gap-3">
              {primaryLinks.map((link) => (<Link key={link.path} to={link.path} className="text-brand-400 hover:text-ink transition-colors">{link.name}</Link>))}
              <Link to="/privacy" className="text-brand-400 hover:text-ink transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-brand-400 hover:text-ink transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-soft border border-brand-100/50 p-8 shadow-[0_20px_50px_rgba(17,19,21,0.05)]">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">Start Here</p>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">Need a stronger product or system?</h3>
            <p className="text-brand-400 leading-relaxed mb-6">Use the guided brief for a fast project triage, or send a direct inquiry with your goals, timeline, and current challenges.</p>
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
          <p className="uppercase tracking-[0.25em] text-[11px]">Remote-first studio · AI, platforms, automation, and premium execution</p>
        </div>
      </div>
    </footer>
  );
};

function SeoManager() {
  const location = useLocation();

  const metadata = useMemo(() => {
    const exact = routeMetadata[location.pathname];
    if (exact) {
      return exact;
    }

    if (location.pathname.startsWith('/portfolio/')) {
      return {
        title: 'Case Study | Bakal Digital',
        description: 'Explore a Bakal Digital concept study across product direction, UX, systems, and implementation thinking.',
      };
    }

    if (location.pathname.startsWith('/services/')) {
      return {
        title: 'Service Detail | Bakal Digital',
        description: 'See how Bakal Digital approaches delivery across AI, platform, automation, commerce, and data work.',
      };
    }

    return routeMetadata['/'];
  }, [location.pathname]);

  useEffect(() => {
    document.title = metadata.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metadata.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    ogTitle?.setAttribute('content', metadata.title);
    ogDescription?.setAttribute('content', metadata.description);
    twitterTitle?.setAttribute('content', metadata.title);
    twitterDescription?.setAttribute('content', metadata.description);
  }, [metadata]);

  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-paper">
      <SeoManager />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
