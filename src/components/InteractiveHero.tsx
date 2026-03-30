import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const systemNodes = [
  { title: 'Lead intake', value: 'Qualified signal', tone: 'bg-sky-100 text-sky-700 border-sky-200/70', width: 'w-[13rem]' },
  { title: 'Decision layer', value: 'Rules + AI review', tone: 'bg-violet-100 text-violet-700 border-violet-200/70', width: 'w-[12rem]' },
  { title: 'Ops routing', value: 'CRM, tasks, support', tone: 'bg-emerald-100 text-emerald-700 border-emerald-200/70', width: 'w-[12.5rem]' },
  { title: 'Customer layer', value: 'Portals and product flow', tone: 'bg-cyan-100 text-cyan-700 border-cyan-200/70', width: 'w-[13.5rem]' },
] as const;

function SystemsCanvas() {
  const prefersReducedMotion = useReducedMotion();
  const laneTransition = prefersReducedMotion ? { duration: 0 } : { duration: 26, repeat: Infinity, ease: 'easeInOut' as const };
  const canvasTransition = prefersReducedMotion ? { duration: 0 } : { duration: 30, repeat: Infinity, ease: 'easeInOut' as const };
  const footerTransition = prefersReducedMotion ? { duration: 0 } : { duration: 32, repeat: Infinity, ease: 'easeInOut' as const };
  const pulseTransition = prefersReducedMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' as const };
  const pathTransitionA = prefersReducedMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' as const };
  const pathTransitionB = prefersReducedMotion ? { duration: 0 } : { duration: 11, repeat: Infinity, ease: 'easeInOut' as const };
  const pathTransitionC = prefersReducedMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#eff5fb_0%,#f7fbff_18%,#ffffff_48%,#f6f8fc_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,29,58,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(14,29,58,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-5 top-[14%] grid gap-3 sm:gap-4 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          {systemNodes.slice(0, 2).map((node) => (
            <div key={node.title} className="min-w-0 flex-1 rounded-[1.2rem] border border-white/80 bg-white/92 p-3 shadow-[0_12px_24px_rgba(17,19,21,0.06)]">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">{node.title}</p>
              <p className="mt-2 text-xs font-semibold leading-snug text-ink">{node.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[1.5rem] border border-white/80 bg-[#111827] p-4 text-white shadow-[0_16px_34px_rgba(17,19,21,0.12)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/45">System monitor</p>
            <div className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">Live</div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['AI', 'Data', 'Ops'].map((label) => (
              <div key={label} className="rounded-[0.9rem] border border-white/10 bg-white/6 px-2.5 py-3">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [-40, 40, -40] }}
        transition={laneTransition}
        className="absolute left-[-4%] right-[-4%] top-[14%] hidden lg:flex items-center justify-between"
      >
        {systemNodes.map((node) => (
          <div key={node.title} className={`${node.width} rounded-[1.6rem] border bg-white/92 p-4 shadow-[0_18px_42px_rgba(17,19,21,0.08)] ${node.tone}`}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-80">{node.title}</p>
            <p className="mt-3 text-sm font-semibold leading-snug">{node.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [52, -52, 52] }}
        transition={canvasTransition}
        className="absolute left-[-2%] right-[-2%] top-[39%] hidden lg:flex items-center justify-around"
      >
        <div className="w-[18rem] rounded-[2rem] border border-white/80 bg-[#111827] p-5 text-white shadow-[0_24px_54px_rgba(17,19,21,0.16)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">System monitor</p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">Signal routing</p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <motion.div
                  animate={prefersReducedMotion ? undefined : { width: ['32%', '74%', '56%', '68%'] }}
                  transition={pulseTransition}
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['AI', 'Data', 'Ops'].map((label) => (
                <div key={label} className="rounded-[1rem] border border-white/10 bg-white/5 p-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/38">{label}</p>
                  <div className="mt-3 h-7 rounded-lg bg-white/8" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[14rem] rounded-[1.8rem] border border-brand-100/70 bg-white/92 p-4 shadow-[0_18px_44px_rgba(17,19,21,0.08)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Flow handoff</p>
          <div className="mt-4 space-y-3">
            {['Qualified lead', 'Project scope', 'Delivery route'].map((item, index) => (
              <div key={item} className="rounded-[1rem] border border-brand-100/70 bg-soft px-3 py-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-brand-300">0{index + 1}</p>
                <p className="mt-1 text-sm font-medium text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[20rem] rounded-[2rem] border border-white/80 bg-white/92 p-5 shadow-[0_22px_50px_rgba(17,19,21,0.1)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Operating canvas</p>
          <div className="mt-5 rounded-[1.4rem] border border-brand-100/70 bg-soft p-4">
            <div className="mb-4 flex gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-200" />
              <div className="h-2 w-2 rounded-full bg-brand-200" />
              <div className="h-2 w-2 rounded-full bg-brand-200" />
            </div>
            <div className="grid gap-3">
              <div className="h-3 w-2/3 rounded-full bg-brand-200/80" />
              <div className="h-3 w-full rounded-full bg-brand-100" />
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-[1rem] bg-white p-3 shadow-sm">
                  <div className="h-2 w-1/2 rounded-full bg-sky-200" />
                  <div className="mt-3 h-10 rounded-xl bg-soft" />
                </div>
                <div className="rounded-[1rem] bg-white p-3 shadow-sm">
                  <div className="h-2 w-1/2 rounded-full bg-emerald-200" />
                  <div className="mt-3 h-10 rounded-xl bg-soft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [-48, 48, -48] }}
        transition={footerTransition}
        className="absolute left-[-6%] right-[-6%] bottom-[10%] hidden lg:flex items-center justify-between"
      >
        {['Conversion path', 'Automation state', 'Platform clarity', 'Delivery rhythm'].map((label, index) => (
          <div key={label} className={`rounded-[1.5rem] border border-white/80 bg-white/88 px-5 py-4 shadow-[0_14px_34px_rgba(17,19,21,0.08)] ${index % 2 === 0 ? 'rotate-[-4deg]' : 'rotate-[4deg]'}`}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-300">{label}</p>
            <div className="mt-3 h-2 w-28 rounded-full bg-brand-100" />
          </div>
        ))}
      </motion.div>

      <svg className="absolute inset-0 hidden lg:block" viewBox="0 0 1600 900" fill="none" aria-hidden="true">
        <motion.path
          d="M180 210C320 210 332 290 500 290C650 290 688 210 820 210C970 210 972 292 1124 292C1288 292 1286 214 1420 214"
          stroke="url(#lineA)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          animate={prefersReducedMotion ? undefined : { pathLength: [0.2, 1, 0.2], opacity: [0.25, 0.65, 0.25] }}
          transition={pathTransitionA}
        />
        <motion.path
          d="M280 500C420 500 460 420 640 420C788 420 828 506 988 506C1148 506 1190 420 1330 420"
          stroke="url(#lineB)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="12 16"
          animate={prefersReducedMotion ? undefined : { pathLength: [1, 0.25, 1], opacity: [0.2, 0.55, 0.2] }}
          transition={pathTransitionB}
        />
        <motion.path
          d="M310 690C430 690 506 626 648 626C806 626 852 708 1018 708C1154 708 1222 650 1334 650"
          stroke="url(#lineC)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="12 18"
          animate={prefersReducedMotion ? undefined : { pathLength: [0.35, 1, 0.35], opacity: [0.18, 0.48, 0.18] }}
          transition={pathTransitionC}
        />
        <defs>
          <linearGradient id="lineA" x1="180" y1="210" x2="1420" y2="214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="lineB" x1="280" y1="500" x2="1330" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="lineC" x1="310" y1="690" x2="1334" y2="650" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_14%,rgba(255,255,255,0.08)_38%,rgba(255,255,255,0.34)_68%,rgba(255,255,255,0.78)_100%)]" />
    </div>
  );
}

export default function InteractiveHero() {
  const prefersReducedMotion = useReducedMotion();
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <section className="relative overflow-hidden bg-paper pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16">
      <SystemsCanvas />

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/22 via-paper/8 to-paper/38 lg:from-paper/6 lg:via-paper/0 lg:to-paper/22" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[48rem] overflow-hidden rounded-[2rem] border border-black/5 bg-white/96 px-5 py-7 shadow-[0_24px_70px_rgba(17,19,21,0.14)] sm:rounded-[2.5rem] sm:px-8 sm:py-8 lg:px-9 lg:py-9"
        >
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-brand-100 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-accent shadow-[0_8px_20px_rgba(17,19,21,0.05)]">
              For Startups And Growing Businesses
            </div>

            <h1 className="mx-auto mt-6 max-w-[9.5ch] text-[clamp(2.85rem,7vw,5.35rem)] font-bold leading-[0.92] text-ink">
              Custom software, AI tools, and automation systems that remove bottlenecks and scale with your business.
            </h1>

            <p className="mx-auto mt-5 max-w-[34rem] text-base leading-relaxed text-brand-400 sm:text-[1.05rem] md:text-[1.12rem]">
              Web apps, internal tools, AI workflows, and automation layers built around your real operations.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/portfolio"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-transparent px-4 py-4 text-sm font-semibold text-brand-400 transition-colors hover:text-ink"
              >
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={openChat}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-7 py-4 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(17,19,21,0.04)] transition-colors hover:border-accent hover:text-accent"
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

            <div className="mt-6 rounded-[1.25rem] border border-brand-100 bg-soft/75 px-4 py-3 text-center shadow-[0_8px_20px_rgba(17,19,21,0.03)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Built around real operating pressure</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-400">
                Shaped for founders, operators, and growing teams in SaaS, commerce, services, and operations-heavy businesses.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['AI-centered delivery', 'AI is used where it creates leverage, not where it creates noise.'],
                ['Custom systems', 'We build around the way the business actually sells, operates, and delivers.'],
                ['Built for scale', 'The goal is cleaner execution now and stronger infrastructure later.'],
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
