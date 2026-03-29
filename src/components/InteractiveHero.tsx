import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandedVisual from './BrandedVisual';

const galleryVariants = ['ai', 'platform', 'commerce', 'data', 'studio'] as const;
const collageRows = [
  ['ai', 'platform', 'commerce', 'data', 'studio', 'platform'],
  ['commerce', 'data', 'ai', 'studio', 'platform', 'commerce'],
  ['studio', 'ai', 'data', 'platform', 'commerce', 'studio'],
] as const;

export default function InteractiveHero() {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <section className="relative overflow-hidden bg-paper pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#edf4fb_0%,#f5f9fe_20%,#ffffff_50%,#f5f8fc_100%)]" />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-[-10%] top-[4%] hidden lg:grid gap-5 opacity-[0.92]">
          {collageRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              animate={{ x: rowIndex % 2 === 0 ? [0, -160, 0] : [0, 160, 0] }}
              transition={{ duration: 34 + rowIndex * 4, repeat: Infinity, ease: 'linear' }}
              className={`flex gap-5 ${rowIndex === 1 ? 'translate-x-[-6%]' : rowIndex === 2 ? 'translate-x-[8%]' : ''}`}
            >
              {[...row, ...row].map((variant, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className={`shrink-0 overflow-hidden rounded-[1.8rem] border-[10px] border-white shadow-[0_18px_42px_rgba(17,19,21,0.16)] ${
                    rowIndex === 1 ? 'h-40 w-72' : 'h-36 w-64'
                  }`}
                >
                  <BrandedVisual variant={variant} compact title="" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_16%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.36)_74%,rgba(255,255,255,0.74)_100%)]" />
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/34 via-paper/16 to-paper/60 lg:from-paper/10 lg:via-paper/6 lg:to-paper/42" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[48rem] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 bg-white px-5 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9 shadow-[0_22px_60px_rgba(17,19,21,0.14)]"
        >
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/8 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky-200/25 blur-[120px]" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-brand-100 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-accent shadow-[0_8px_20px_rgba(17,19,21,0.05)]">
              AI Products, Platforms, Automation, and Data Systems
            </div>

            <h1 className="mx-auto mt-6 max-w-[9.5ch] text-[clamp(2.85rem,7vw,5.35rem)] font-bold leading-[0.92] text-ink">
                Digital systems that help the business move faster.
            </h1>

            <p className="mx-auto mt-5 max-w-[34rem] text-base leading-relaxed text-brand-400 sm:text-[1.05rem] md:text-[1.12rem]">
              We design AI products, custom platforms, automation layers, and customer-facing systems that make sales clearer, operations smoother, and growth easier to support.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/services"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-transparent px-4 py-4 text-sm font-semibold text-brand-400 transition-colors hover:text-ink"
              >
                See Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={openChat}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white/88 px-7 py-4 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(17,19,21,0.04)] transition-colors hover:border-accent hover:text-accent"
              >
                <MessageSquare className="h-4 w-4" />
                Open Quick Brief
              </button>
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['Sharper positioning', 'Clearer offers, cleaner journeys, stronger trust.'],
                ['Operational systems', 'Tools and workflows shaped around real business flow.'],
                ['One delivery partner', 'Strategy, design, engineering, and launch support together.'],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-[1.35rem] border border-brand-100 bg-white p-4 text-left shadow-[0_10px_24px_rgba(17,19,21,0.04)]">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">{title}</p>
                  <p className="text-sm leading-relaxed text-brand-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
