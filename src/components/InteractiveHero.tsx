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
    <section className="relative overflow-hidden bg-paper pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-14">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#eef4fb_0%,#f8fbff_22%,#ffffff_52%,#f6f8fb_100%)]" />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ x: layer1X }} className="absolute left-[-2%] top-[4%] hidden lg:flex gap-5 rotate-[-6deg]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l1-${i}`} className="h-36 w-64 shrink-0 rounded-[1.8rem] overflow-hidden border-[10px] border-white shadow-[0_18px_40px_rgba(17,19,21,0.14)]">
              <BrandedVisual variant={galleryVariants[i % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: layer2X }} className="absolute right-[-1%] top-[10%] hidden lg:flex gap-5 rotate-[7deg]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l2-${i}`} className="h-36 w-64 shrink-0 rounded-[1.8rem] overflow-hidden border-[10px] border-white shadow-[0_18px_40px_rgba(17,19,21,0.14)]">
              <BrandedVisual variant={galleryVariants[(i + 2) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer3Y }} className="absolute left-[4%] top-[58%] hidden xl:flex flex-col gap-5 rotate-[-9deg]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`l3-${i}`} className="h-32 w-56 shrink-0 rounded-[1.6rem] overflow-hidden border-[8px] border-white shadow-[0_18px_38px_rgba(17,19,21,0.13)]">
              <BrandedVisual variant={galleryVariants[(i + 1) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer4Y }} className="absolute right-[7%] top-[60%] hidden xl:flex flex-col gap-5 rotate-[10deg]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`l4-${i}`} className="h-32 w-56 shrink-0 rounded-[1.6rem] overflow-hidden border-[8px] border-white shadow-[0_18px_38px_rgba(17,19,21,0.13)]">
              <BrandedVisual variant={galleryVariants[(i + 3) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,rgba(255,255,255,0.18)_48%,rgba(255,255,255,0.62)_100%)]" />
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/40 via-paper/28 to-paper/68 lg:from-paper/18 lg:via-paper/10 lg:to-paper/52" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[62rem]"
        >
          <div className="rounded-[2rem] sm:rounded-[2.35rem] border border-brand-100/60 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_20px_56px_rgba(17,19,21,0.08)]">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-5">
              <div className="overflow-hidden rounded-[1.75rem] border border-brand-100/40 shadow-lg">
                <BrandedVisual variant="studio" title="Systems create momentum" className="min-h-[15rem] sm:min-h-[17rem] lg:min-h-full" />
              </div>

              <div className="rounded-[1.75rem] border border-brand-100/50 bg-white p-5 sm:p-6">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-[34rem]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">Quick Project Intake</p>
                    <h2 className="mt-3 text-2xl sm:text-[2rem] font-semibold text-ink leading-tight">
                      Tell us what needs to improve first.
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-400">
                      Choose your focus area and send a short brief. We use that to route the project properly and recommend the right next step.
                    </p>
                  </div>

                  <div className="inline-flex self-start rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-400">
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
