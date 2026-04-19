import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CookieConsent from './CookieConsent';
import { projects } from '../data/projects';
import { services } from '../data/services';

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
    <div className="relative flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/16 bg-white/[0.03] text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
      <div className="absolute inset-0 rounded-[1rem] bg-[radial-gradient(circle_at_top_right,_rgba(138,180,248,0.32),_transparent_58%)]" />
      <span className="relative text-lg font-semibold">B</span>
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
    </div>
    <span className="font-semibold tracking-tight text-white transition-colors group-hover:text-accent sm:text-lg">
      Bakal <span className="text-white/55">Digital</span>
    </span>
  </>
);

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Bakal Digital | AI-Powered Products And Custom Systems',
    description: 'Bakal Digital helps startups and growing businesses build AI-powered products, websites, custom software, and operational systems once generic tools stop being enough.',
  },
  '/portfolio': {
    title: 'Work & Demos | Bakal Digital',
    description: 'Review Bakal Digital case studies, working demos, and delivery examples for AI products, platforms, commerce, and operational software.',
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
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
    <nav className="fixed inset-x-0 top-0 z-[80] px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-[88rem] items-center justify-between rounded-[1.6rem] border px-4 py-3 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? 'border-white/12 bg-[#141414]/88 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl'
            : 'border-white/10 bg-[#141414]/72 backdrop-blur-xl'
        }`}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Bakal Digital home">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-white/68 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={openChat}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            <MessageSquare className="h-4 w-4" />
            Project intake
          </button>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.1] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white transition-colors hover:border-white/20 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[88px] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              className="relative mx-4 mt-3 overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#171717] shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:hidden"
            >
              <div className="grid gap-5 px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Navigate</p>
                {primaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between gap-4 text-lg font-semibold text-white/84 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
                <div className="grid gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      openChat();
                    }}
                    className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 font-semibold text-white"
                  >
                    Open project intake
                  </button>
                  <Link to="/contact" className="w-full rounded-2xl bg-white/10 px-5 py-3 text-center font-semibold text-white">
                    Get started
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
    <footer className="border-t border-white/8 bg-[#121212] pb-12 pt-20">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_1fr] lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <BrandMark />
            </div>
            <p className="max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
              Bakal Digital helps teams replace generic tools with stronger digital products, cleaner workflow systems, and more credible customer-facing software.
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Built for</span>
              <span className="text-sm text-white/58">Founders, operators, and growing teams across SaaS, commerce, and services.</span>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Navigate</p>
            <div className="grid gap-3">
              {primaryLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-white/62 transition-colors hover:text-white">
                  {link.name}
                </Link>
              ))}
              <Link to="/privacy" className="text-white/62 transition-colors hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-white/62 transition-colors hover:text-white">Terms of Service</Link>
            </div>
          </div>

          <div className="panel-dark p-6 sm:p-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Start here</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Need a better system than the one you have now?</h3>
            <p className="mt-3 leading-relaxed text-white/62">
              Use the project intake if the scope still needs shaping, or start a direct inquiry if you already know what needs to be improved.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                <MessageSquare className="h-4 w-4" />
                Open project intake
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.1] px-5 py-3 font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-center text-sm text-white/45 md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} Bakal Digital. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em] text-[11px]">AI-powered products, websites, software, and systems for growing teams</p>
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

  return (
    <div className="min-h-screen bg-paper font-sans text-brand-500">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#101114]"
      >
        Skip to main content
      </a>
      <SeoManager />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 pt-[88px] sm:pt-[92px]">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
