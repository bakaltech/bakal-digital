import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CookieConsent from './CookieConsent';
import { projects } from '../data/projects';
import { services } from '../data/services';

const primaryLinks = [
  { name: 'Proof', path: '/portfolio' },
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
    title: 'Bakal Digital | AI-Powered Products And Custom Systems',
    description: 'Bakal Digital helps startups and growing businesses build AI-powered products, websites, custom software, and operational systems once generic tools stop being enough.',
  },
  '/portfolio': {
    title: 'Proof Library | Bakal Digital',
    description: 'Review Bakal Digital proof assets, working demos, concept studies, and delivery process examples for AI products, platforms, commerce, and operational software.',
  },
  '/about': {
    title: 'About | Bakal Digital',
    description: 'Learn how Bakal Digital builds AI-powered products and custom systems for startups and growing businesses that need more than generic tools.',
  },
  '/services': {
    title: 'Services | Bakal Digital',
    description: 'See how Bakal Digital helps startups and growing businesses launch stronger websites, products, automations, and custom systems.',
  },
  '/contact': {
    title: 'Contact | Bakal Digital',
    description: 'Tell Bakal Digital what is slowing the business down and get the clearest next step for a website, product, platform, or operational system.',
  },
  '/privacy': {
    title: 'Privacy Policy | Bakal Digital',
    description: 'Read the privacy policy for Bakal Digital.',
  },
  '/terms': {
    title: 'Terms of Service | Bakal Digital',
    description: 'Read the terms of service for Bakal Digital.',
  },
  '/404': {
    title: 'Page Not Found | Bakal Digital',
    description: 'The page you requested could not be found.',
  },
};

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    <nav className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${isScrolled || !isHome ? 'bg-paper/94 backdrop-blur-xl border-b border-brand-100/40 py-3 md:py-4 shadow-[0_12px_30px_rgba(17,19,21,0.05)]' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 rounded-[1.5rem] md:rounded-none px-3 py-2 md:p-0 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/80 md:bg-transparent border border-brand-100/40 md:border-0 shadow-[0_10px_24px_rgba(17,19,21,0.04)] md:shadow-none' : 'bg-white/78 md:bg-transparent border border-brand-100/40 md:border-0 backdrop-blur md:backdrop-blur-none shadow-[0_8px_18px_rgba(17,19,21,0.03)] md:shadow-none'}`}>
          <Link to="/" className="flex items-center gap-3 group min-w-0" aria-label="Bakal Digital home">
            <BrandMark />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-ink hover:text-accent'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button type="button" onClick={openChat} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-brand-100 bg-white/92 text-ink text-sm font-semibold hover:border-accent hover:text-accent transition-colors shadow-[0_10px_20px_rgba(17,19,21,0.04)]">
              <MessageSquare className="w-4 h-4" />
              Quick Brief
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-semibold hover:bg-accent transition-colors shadow-lg">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-ink hover:bg-soft transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:hidden fixed inset-0 top-[72px] bg-paper/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className="md:hidden relative mx-4 mt-3 rounded-[2rem] border border-brand-100/40 bg-paper shadow-[0_25px_80px_rgba(17,19,21,0.08)] overflow-hidden">
              <div className="px-5 py-6 flex flex-col gap-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">Navigate</p>
                {primaryLinks.map((link, index) => (
                  <Link key={link.path} to={link.path} className="flex items-center justify-between gap-4 text-xl font-semibold text-ink hover:text-accent transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-accent uppercase tracking-[0.3em]">0{index + 1}</span>
                      {link.name}
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}

                <div className="grid gap-3 pt-5 border-t border-brand-100/40">
                  <button type="button" onClick={() => { setIsOpen(false); openChat(); }} className="w-full px-6 py-4 rounded-2xl border border-brand-100 bg-white text-ink font-semibold">
                    Open Quick Brief
                  </button>
                  <Link to="/contact" className="w-full px-6 py-4 rounded-2xl bg-ink text-white font-semibold text-center">
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-paper border-t border-brand-100/20 pt-20 md:pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-accent/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.45fr_0.8fr_1fr] gap-10 md:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-5"><BrandMark /></div>
            <p className="text-brand-400 text-base md:text-lg leading-relaxed max-w-xl">
              Bakal Digital helps startups and growing businesses replace generic tools with AI-powered products, stronger websites, custom software, and operational systems built to scale cleanly.
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
          <div className="rounded-[2rem] bg-soft border border-brand-100/50 p-6 md:p-8 shadow-[0_20px_50px_rgba(17,19,21,0.05)]">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">Start Here</p>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">Need a better system than the one you have now?</h3>
            <p className="text-brand-400 leading-relaxed mb-6">Use the quick brief if the problem still needs shaping, or start a direct project inquiry if you already know where the friction is.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openChat} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-brand-100 text-ink font-semibold hover:border-accent hover:text-accent transition-colors">
                <MessageSquare className="w-4 h-4" />
                Open Quick Brief
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-14 pt-6 border-t border-brand-100/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-400 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Bakal Digital. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em] text-[11px]">AI-powered products, websites, software, and systems for startups and growing teams</p>
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
      const project = projects.find((item) => location.pathname === `/portfolio/${item.id}`);
      return {
        title: project ? `${project.title} | Bakal Digital` : 'Case Study | Bakal Digital',
        description: project
          ? project.description
          : 'Explore a Bakal Digital concept study showing product direction, system design, and UX thinking for startups and growing businesses.',
      };
    }

    if (location.pathname.startsWith('/services/')) {
      const service = services.find((item) => location.pathname === `/services/${item.id}`);
      return {
        title: service ? `${service.title} | Bakal Digital` : 'Service Detail | Bakal Digital',
        description: service
          ? service.description
          : 'See how Bakal Digital approaches AI-powered products, websites, software, automation, and custom systems.',
      };
    }

    return routeMetadata['/404'];
  }, [location.pathname]);

  useEffect(() => {
    const ensureMetaTag = (selector: string, attributeName: string, attributeValue: string) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const ensureLinkTag = (rel: string) => {
      let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }
      return tag;
    };

    document.title = metadata.title;

    const currentUrl = window.location.href;
    const descriptionTag = ensureMetaTag('meta[name="description"]', 'name', 'description');
    const ogTitle = ensureMetaTag('meta[property="og:title"]', 'property', 'og:title');
    const ogDescription = ensureMetaTag('meta[property="og:description"]', 'property', 'og:description');
    const ogUrl = ensureMetaTag('meta[property="og:url"]', 'property', 'og:url');
    const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title');
    const twitterDescription = ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description');
    const canonicalLink = ensureLinkTag('canonical');

    descriptionTag.setAttribute('content', metadata.description);
    ogTitle.setAttribute('content', metadata.title);
    ogDescription.setAttribute('content', metadata.description);
    ogUrl.setAttribute('content', currentUrl);
    twitterTitle.setAttribute('content', metadata.title);
    twitterDescription.setAttribute('content', metadata.description);
    canonicalLink.setAttribute('href', currentUrl);
  }, [metadata]);

  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <SeoManager />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className={`flex-1 ${isHome ? '' : 'pt-[78px] md:pt-20'}`}>{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
