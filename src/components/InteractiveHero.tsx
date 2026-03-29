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
    <section className="relative min-h-[760px] lg:min-h-[920px] w-full overflow-hidden bg-paper pt-24 sm:pt-30 md:pt-34 pb-14 sm:pb-18 md:pb-22">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,102,204,0.07),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(0,102,204,0.06),_transparent_28%)]" />

      <div className="absolute inset-0 z-0 opacity-0 lg:opacity-30 pointer-events-none scale-105 rotate-[-4deg]">
        <motion.div style={{ x: layer1X }} className="absolute top-[8%] left-[-14%] flex gap-6 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l1-${i}`} className="h-28 w-48 xl:h-36 xl:w-64 shrink-0 rounded-[1.75rem] overflow-hidden shadow-xl">
              <BrandedVisual variant={galleryVariants[i % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: layer2X }} className="absolute top-[48%] right-[-16%] flex gap-6 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l2-${i}`} className="h-28 w-48 xl:h-36 xl:w-64 shrink-0 rounded-[1.75rem] overflow-hidden shadow-xl">
              <BrandedVisual variant={galleryVariants[(i + 2) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer3Y }} className="absolute left-[3%] top-[-12%] hidden xl:flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`l3-${i}`} className="h-36 w-64 shrink-0 rounded-[1.75rem] overflow-hidden shadow-xl">
              <BrandedVisual variant={galleryVariants[(i + 1) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer4Y }} className="absolute right-[4%] top-[-10%] hidden xl:flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`l4-${i}`} className="h-36 w-64 shrink-0 rounded-[1.75rem] overflow-hidden shadow-xl">
              <BrandedVisual variant={galleryVariants[(i + 3) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/84 via-paper/94 to-paper/84 lg:from-paper/68 lg:via-paper/88 lg:to-paper/78 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] border border-white/60 bg-white/74 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 shadow-[0_28px_80px_rgba(17,19,21,0.08)] backdrop-blur-2xl"
        >
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/8 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky-200/25 blur-[120px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,29rem)] lg:gap-10 xl:gap-14">
            <div className="relative z-10 pt-2 lg:pt-4">
              <div className="inline-flex items-center rounded-full border border-brand-100/70 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-accent shadow-[0_10px_24px_rgba(17,19,21,0.04)]">
                AI Products, Platforms, Automation, and Data Systems
              </div>

              <h1 className="mt-6 max-w-[11ch] text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.94] text-ink">
                Digital systems that help the business move faster.
              </h1>

              <p className="mt-6 max-w-[37rem] text-base leading-relaxed text-brand-400 sm:text-[1.08rem] md:text-[1.2rem]">
                We design AI products, custom platforms, automation layers, and customer-facing digital systems that make sales clearer, operations smoother, and growth easier to support.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent"
                >
                  Start a Project
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
                  to="/services"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-transparent px-4 py-4 text-sm font-semibold text-brand-400 transition-colors hover:text-ink"
                >
                  See Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Sharper positioning', 'Clearer offers, cleaner journeys, stronger trust.'],
                  ['Operational systems', 'Tools and workflows designed around real business flow.'],
                  ['One delivery partner', 'Strategy, design, engineering, and launch support together.'],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/60 bg-white/72 p-4 shadow-[0_12px_28px_rgba(17,19,21,0.04)]">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">{title}</p>
                    <p className="text-sm leading-relaxed text-brand-400">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[1.8rem] sm:rounded-[2.25rem] border border-brand-100/60 bg-white/70 p-3 sm:p-4 shadow-[0_18px_44px_rgba(17,19,21,0.06)]">
                <div className="overflow-hidden rounded-[1.6rem] border border-brand-100/40 shadow-lg">
                  <BrandedVisual variant="studio" title="Systems create momentum" className="min-h-[16rem] sm:min-h-[18rem]" />
                </div>
                <div className="mt-4 rounded-[1.6rem] border border-brand-100/50 bg-white/82 p-4 sm:p-5">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
