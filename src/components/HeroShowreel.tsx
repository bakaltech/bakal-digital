import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BrandedVisual from './BrandedVisual';

const scenes = [
  {
    id: 'intro',
    eyebrow: 'Bakal Digital',
    label: 'Studio opener',
    accent: 'from-[#8ab4f8] via-[#4f7de8] to-[#0b1020]',
  },
  {
    id: 'ux',
    eyebrow: 'Web Experience',
    label: 'Case study reveal',
    accent: 'from-[#f48a2a] via-[#e36f21] to-[#1a1a1d]',
  },
  {
    id: 'ai',
    eyebrow: 'AI Systems',
    label: 'Intelligence layer',
    accent: 'from-[#8ab4f8] via-[#2c57c7] to-[#0b1020]',
  },
  {
    id: 'saas',
    eyebrow: 'SaaS Platforms',
    label: 'System dashboard',
    accent: 'from-[#8ab4f8] via-[#1d2f63] to-[#0b0d13]',
  },
] as const;

function ReelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,#0f1014_0%,#090a0d_100%)] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className="absolute inset-x-0 top-0 z-20 flex h-12 items-center gap-2 border-b border-white/8 bg-black/28 px-4 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
          Bakal Digital showreel
        </div>
      </div>
      <div className="absolute inset-x-0 top-12 bottom-0">{children}</div>
    </div>
  );
}

function IntroScene() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#050608] px-6 py-8 text-center sm:px-8">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.18),transparent_30%)]"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.45, opacity: 1 }}
        transition={{ duration: 2.6, ease: 'easeOut' }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ scale: 0.86, filter: 'blur(10px)', opacity: 0 }}
        animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">Bakal Digital</p>
        <h3 className="mt-6 text-[13vw] font-semibold uppercase leading-[0.8] tracking-[-0.06em] text-white sm:text-[10vw]">
          Bakal
        </h3>
        <h3 className="text-[13vw] font-semibold uppercase leading-[0.8] tracking-[-0.06em] text-accent sm:text-[10vw]">
          Digital
        </h3>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm uppercase tracking-[0.28em] text-white/48 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          Websites, systems, AI layers
        </motion.p>
      </motion.div>
    </div>
  );
}

function UXScene() {
  return (
    <div className="grid h-full bg-[#e7e4de] text-[#141414] lg:grid-cols-[0.96fr_1.04fr]">
      <div className="flex flex-col justify-center border-b border-[#141414]/10 px-6 py-7 lg:border-b-0 lg:border-r lg:px-10">
        <motion.p
          className="text-sm uppercase tracking-[0.26em] text-[#141414]/42"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          01. Case Study
        </motion.p>
        <motion.h3
          className="mt-4 max-w-[8ch] text-4xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Web experience that feels obvious.
        </motion.h3>
        <motion.p
          className="mt-5 max-w-md text-sm leading-relaxed text-[#141414]/62 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          The same idea from the old reel, but branded for Bakal: clearer interfaces, stronger product framing, less clutter.
        </motion.p>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden bg-[#d9d5cf] p-5 sm:p-7">
        <motion.div
          className="absolute right-6 top-6 rounded-2xl border border-[#141414]/10 bg-white px-4 py-3 shadow-xl"
          initial={{ opacity: 0, y: -26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75 }}
        >
          <div className="h-2 w-20 rounded-full bg-[#141414]" />
          <div className="mt-2 h-2 w-28 rounded-full bg-[#141414]/20" />
        </motion.div>

        <motion.div
          className="w-full max-w-[34rem] overflow-hidden rounded-[1.35rem] border border-[#141414]/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
          initial={{ y: '18%', rotate: 4, opacity: 0.65 }}
          animate={{ y: 0, rotate: -2, opacity: 1 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex h-10 items-center gap-2 border-b border-[#141414]/8 px-4">
            <div className="h-2.5 w-2.5 rounded-full bg-[#141414]/18" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#141414]/18" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#141414]/18" />
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-[0.78fr_1.22fr] sm:p-5">
            <div className="space-y-3">
              <div className="h-11 rounded-xl bg-[#141414]/5" />
              <div className="h-20 rounded-xl bg-[#141414]/5" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="h-16 rounded-xl bg-[#141414]/5"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.6 + item * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-28 rounded-[1.1rem] bg-[radial-gradient(circle_at_top_right,rgba(244,138,42,0.34),transparent_42%),linear-gradient(180deg,#fff8ef_0%,#eef4ff_100%)]" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-16 rounded-xl bg-[#141414]/5" />
                ))}
              </div>
              <div className="h-16 rounded-xl bg-[#141414]/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AIScene() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[#06070a] px-6 py-8 text-center">
      <motion.div
        className="absolute inset-0 opacity-65"
        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(138,180,248,0.14), transparent 22%), linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 48%, transparent 100%)',
        }}
      />
      <motion.div
        className="h-20 w-px bg-gradient-to-b from-transparent to-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.p
        className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        02. Intelligence Layer
      </motion.p>
      <motion.h3
        className="mt-4 max-w-[9ch] text-4xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.75 }}
      >
        AI systems that stay usable.
      </motion.h3>

      <div className="relative mt-8 flex w-full max-w-4xl items-end gap-2 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:h-48">
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            className="w-full rounded-t-sm bg-gradient-to-t from-accent to-[#c9ddff]"
            initial={{ height: 0 }}
            animate={{ height: `${22 + ((index * 19) % 74)}%` }}
            transition={{ delay: 0.45 + index * 0.04, duration: 0.55, type: 'spring' }}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#05070d] to-transparent mix-blend-overlay"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

function SaaSScene() {
  return (
    <div className="flex h-full flex-col bg-[#12141a] px-5 py-6 text-white sm:px-7 sm:py-8">
      <div className="flex items-end justify-between border-b border-white/8 pb-5">
        <div>
          <motion.h3
            className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            SaaS platforms
          </motion.h3>
          <motion.p
            className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/42"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            End-to-end architecture
          </motion.p>
        </div>
        <motion.div
          className="hidden text-right md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">System status</div>
          <div className="mt-2 text-sm text-white/52">Scalable, secure, performant</div>
        </motion.div>
      </div>

      <div className="grid flex-1 gap-4 pt-5 lg:grid-cols-[1.45fr_0.55fr]">
        <motion.div
          className="rounded-[1.35rem] border border-white/8 bg-[#181b22] p-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="flex items-center justify-between border-b border-white/8 pb-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">Main metrics</div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div className="h-2 w-2 rounded-full bg-white/18" />
            </div>
          </div>
          <div className="relative mt-5 h-[12rem] overflow-hidden rounded-[1rem] border border-white/6 bg-[#11141b]">
            <motion.svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <motion.path
                d="M0,140 Q40,120 80,80 T160,90 T240,60 T320,70 T400,36"
                fill="none"
                stroke="#8ab4f8"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.7, delay: 0.5 }}
              />
              <motion.path
                d="M0,140 Q40,120 80,80 T160,90 T240,60 T320,70 T400,36 L400,180 L0,180 Z"
                fill="url(#hero-reel-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.26 }}
                transition={{ delay: 1.05, duration: 0.8 }}
              />
              <defs>
                <linearGradient id="hero-reel-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8ab4f8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#11141b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <motion.div
            className="rounded-[1.35rem] border border-white/8 bg-[#181b22] p-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">Active users</div>
            <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">124,592</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">+12.4% this week</div>
          </motion.div>

          <motion.div
            className="rounded-[1.35rem] bg-accent p-4 text-[#0c111a]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.65 }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0c111a]/52">Performance</div>
            <div className="mt-4 text-4xl font-semibold tracking-[-0.05em]">99.9%</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0c111a]/62">Uptime verified</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const sceneComponents: Record<(typeof scenes)[number]['id'], React.ComponentType> = {
  intro: IntroScene,
  ux: UXScene,
  ai: AIScene,
  saas: SaaSScene,
};

export default function HeroShowreel() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  const scene = scenes[activeScene];
  const CurrentScene = sceneComponents[scene.id];

  return (
    <div className="relative h-full min-h-[18rem] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div
        className={`pointer-events-none absolute inset-x-[12%] top-8 h-28 rounded-full bg-gradient-to-r ${scene.accent} opacity-55 blur-[80px] transition-all duration-700`}
      />

      <ReelFrame>
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            className="h-full"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 border-t border-white/8 bg-black/24 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{scene.eyebrow}</p>
              <p className="mt-2 text-sm font-semibold text-white">{scene.label}</p>
            </div>
            <div className="flex flex-1 gap-2 sm:max-w-sm">
              {scenes.map((item, index) => (
                <div key={item.id} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: index === activeScene ? '100%' : index < activeScene ? '100%' : '0%' }}
                    transition={{ duration: index === activeScene ? 3.05 : 0.35, ease: 'linear' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReelFrame>
    </div>
  );
}
