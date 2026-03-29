import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadsGrid from './LeadsGrid';
import BrandedVisual from './BrandedVisual';

const galleryVariants = ['ai', 'platform', 'commerce', 'data', 'studio'] as const;

export default function InteractiveHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [28, -28]);
  const layer4Y = useTransform(smoothY, [-0.5, 0.5], [-28, 28]);

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <section className="relative min-h-[860px] lg:min-h-[980px] w-full overflow-hidden bg-paper pt-24 sm:pt-30 md:pt-34 pb-16 sm:pb-20 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,102,204,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(0,102,204,0.08),_transparent_26%),linear-gradient(to_bottom,#f8fafc_0%,#ffffff_42%,#f5f7fb_100%)]" />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ x: layer1X }} className="absolute left-[-6%] top-[6%] hidden lg:flex gap-6 rotate-[-7deg]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l1-${i}`} className="h-40 w-72 shrink-0 rounded-[1.9rem] overflow-hidden border border-white/60 shadow-[0_28px_60px_rgba(17,19,21,0.12)]">
              <BrandedVisual variant={galleryVariants[i % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: layer2X }} className="absolute right-[-8%] top-[17%] hidden lg:flex gap-6 rotate-[8deg]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l2-${i}`} className="h-40 w-72 shrink-0 rounded-[1.9rem] overflow-hidden border border-white/60 shadow-[0_28px_60px_rgba(17,19,21,0.12)]">
              <BrandedVisual variant={galleryVariants[(i + 2) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer3Y }} className="absolute left-[5%] top-[45%] hidden xl:flex flex-col gap-6 rotate-[-10deg]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`l3-${i}`} className="h-36 w-64 shrink-0 rounded-[1.75rem] overflow-hidden border border-white/60 shadow-[0_22px_48px_rgba(17,19,21,0.11)]">
              <BrandedVisual variant={galleryVariants[(i + 1) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer4Y }} className="absolute right-[8%] top-[52%] hidden xl:flex flex-col gap-6 rotate-[11deg]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`l4-${i}`} className="h-36 w-64 shrink-0 rounded-[1.75rem] overflow-hidden border border-white/60 shadow-[0_22px_48px_rgba(17,19,21,0.11)]">
              <BrandedVisual variant={galleryVariants[(i + 3) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_24%,rgba(255,255,255,0.68)_58%,rgba(255,255,255,0.9)_100%)]" />
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/62 via-paper/70 to-paper/86 lg:from-paper/30 lg:via-paper/40 lg:to-paper/72" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[54rem] overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] border border-white/70 bg-white/82 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 shadow-[0_30px_90px_rgba(17,19,21,0.12)] backdrop-blur-2xl"
        >
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/8 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky-200/25 blur-[120px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-brand-100/70 bg-white/84 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-accent shadow-[0_10px_24px_rgba(17,19,21,0.04)]">
              AI Products, Platforms, Automation, and Data Systems
            </div>

            <h1 className="mx-auto mt-6 max-w-[10.5ch] text-[clamp(2.9rem,8vw,5.8rem)] font-bold leading-[0.93] text-ink">
                Digital systems that help the business move faster.
            </h1>

            <p className="mx-auto mt-6 max-w-[40rem] text-base leading-relaxed text-brand-400 sm:text-[1.08rem] md:text-[1.2rem]">
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
                <div key={title} className="rounded-[1.5rem] border border-white/60 bg-white/72 p-4 text-left shadow-[0_12px_28px_rgba(17,19,21,0.04)]">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">{title}</p>
                  <p className="text-sm leading-relaxed text-brand-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto -mt-3 max-w-[58rem] sm:-mt-5"
        >
          <div className="rounded-[1.8rem] sm:rounded-[2.25rem] border border-white/70 bg-white/84 p-3 sm:p-4 shadow-[0_24px_64px_rgba(17,19,21,0.12)] backdrop-blur-2xl">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-[1.6rem] border border-brand-100/40 shadow-lg">
                <BrandedVisual variant="studio" title="Systems create momentum" className="min-h-[15rem] sm:min-h-[17rem]" />
              </div>
              <div className="rounded-[1.6rem] border border-brand-100/50 bg-white/82 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">Quick Project Intake</p>
                    <p className="mt-2 max-w-[28rem] text-sm leading-relaxed text-brand-400">
                      Choose what you want to improve first, then send a short brief so we can route the right next step.
                    </p>
                  </div>
                  <div className="hidden sm:flex rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-400">
                    Fastest path to contact
                  </div>
                </div>
                <LeadsGrid />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
