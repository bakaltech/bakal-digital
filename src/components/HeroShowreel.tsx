import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type BrandFilmScene = {
  id: string;
  eyebrow: string;
  label: string;
  line: string;
  accent: string;
  component: React.ComponentType;
};

function FilmFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.55rem] border border-white/8 bg-[#040506] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center gap-2 border-b border-white/8 bg-black/24 px-4 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
          Bakal Digital brand film
        </div>
      </div>
      <div className="absolute inset-x-0 top-12 bottom-0">{children}</div>
    </div>
  );
}

function WeakLayerScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#07080b_0%,#040506_100%)]">
      <motion.div
        className="absolute inset-0 opacity-55"
        animate={{ backgroundPosition: ['0px 0px', '42px 42px'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.08),transparent_44%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8">
        <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">The weak layer</p>
            <h3 className="mt-5 max-w-[9ch] text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
              Weak digital layers slow strong businesses.
            </h3>
          </motion.div>

          <div className="relative h-[18rem] sm:h-[21rem]">
            <motion.div
              className="absolute left-[6%] top-[8%] h-[44%] w-[30%] rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
            >
              <div className="p-4">
                <div className="h-2 w-16 rounded-full bg-white/18" />
                <div className="mt-4 h-11 rounded-xl bg-white/[0.05]" />
                <div className="mt-3 h-11 rounded-xl bg-white/[0.04]" />
                <motion.div
                  className="mt-4 h-1.5 w-14 rounded-full bg-accent/55"
                  animate={{ width: ['10%', '48%', '14%'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute right-[8%] top-[14%] h-[28%] w-[22%] rounded-[1.2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.75 }}
            >
              <div className="p-4">
                <motion.div
                  className="h-7 w-7 rounded-full border-2 border-accent/55 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute left-[18%] bottom-[8%] h-[42%] w-[58%] rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28, duration: 1 }}
            >
              <div className="grid h-full gap-3 p-4 sm:grid-cols-[1fr_0.9fr]">
                <div className="space-y-3">
                  <div className="h-10 rounded-xl bg-white/[0.05]" />
                  <div className="h-16 rounded-xl bg-white/[0.04]" />
                  <div className="h-12 rounded-xl bg-white/[0.04]" />
                </div>
                <div className="space-y-3">
                  <div className="h-20 rounded-[1rem] bg-white/[0.05]" />
                  <div className="h-12 rounded-xl bg-white/[0.04]" />
                  <div className="h-12 rounded-xl bg-white/[0.04]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostOfChaosScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#0b0c0f_0%,#050608_100%)]">
      <motion.div
        className="absolute inset-0 opacity-45"
        animate={{ backgroundPosition: ['0px 0px', '0px 52px'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '100% 52px',
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8">
        <div className="w-full max-w-5xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">The cost of chaos</p>
            <h3 className="mt-5 text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl">
              Manual steps. Fragmented tools. Lost clarity.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              'Missed message',
              'Broken flow',
              'Spreadsheet error',
              'Overlapping tasks',
              'Slow handoff',
            ].map((item, index) => (
              <motion.div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + index * 0.08, duration: 0.7 }}
              >
                <div className="h-2 w-12 rounded-full bg-white/18" />
                <div className="mt-4 h-12 rounded-xl bg-white/[0.05]" />
                <div className="mt-3 h-12 rounded-xl bg-white/[0.04]" />
                <p className="mt-4 text-sm font-semibold text-white/76">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RebuildLayerScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#f4f4f1_0%,#eceef4_100%)] text-[#111111]">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.18),transparent_44%)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8">
        <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">Rebuild the layer</p>
            <h3 className="mt-5 max-w-[9ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-5xl">
              We rebuild the digital layer so the business can scale again.
            </h3>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
            initial={{ scale: 0.95, opacity: 0.7, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-11 items-center gap-2 border-b border-black/8 px-4">
              <div className="h-2.5 w-2.5 rounded-full bg-black/18" />
              <div className="h-2.5 w-2.5 rounded-full bg-black/18" />
              <div className="h-2.5 w-2.5 rounded-full bg-black/18" />
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[0.88fr_1.12fr] sm:p-5">
              <div className="space-y-3">
                <div className="h-10 rounded-xl bg-black/5" />
                <div className="h-20 rounded-xl bg-black/5" />
                <div className="h-14 rounded-xl bg-black/5" />
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-[1.2rem] bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.24),transparent_42%),linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)]" />
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      className="h-14 rounded-xl bg-black/5"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + item * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                <div className="h-14 rounded-xl bg-black/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MomentumScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#0a0d11_0%,#050608_100%)]">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.16),transparent_44%)]"
        animate={{ opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8">
        <div className="w-full max-w-5xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">When the system works</p>
            <h3 className="mt-5 text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl">
              Clarity. Speed. Confidence.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Websites', 'Sharper conversion paths'],
              ['Portals', 'Cleaner internal handling'],
              ['AI systems', 'Better operations with control'],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_36px_rgba(0,0,0,0.26)]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + index * 0.1, duration: 0.8 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">{title}</p>
                <div className="mt-4 h-24 rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
                <p className="mt-4 text-sm font-semibold text-white">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseScene() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#040506] px-6 py-8 text-center">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.18),transparent_32%)]"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 1 }}
        transition={{ duration: 2.8, ease: 'easeOut' }}
      />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">Replace the weak layer</p>
        <h3 className="mt-6 text-[11vw] font-semibold uppercase leading-[0.84] tracking-[-0.08em] text-white sm:text-[9vw]">
          Bakal
          <br />
          Digital
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0c111a]">Start your project</div>
        </div>
      </motion.div>
    </div>
  );
}

const brandFilmScenes: BrandFilmScene[] = [
  {
    id: 'weak',
    eyebrow: 'Opening',
    label: 'The weak layer',
    line: 'Weak digital layers slow strong businesses.',
    accent: 'from-[#8ab4f8] via-[#223862] to-[#080b12]',
    component: WeakLayerScene,
  },
  {
    id: 'chaos',
    eyebrow: 'Rising tension',
    label: 'The cost of chaos',
    line: 'Manual steps. Fragmented tools. Lost clarity.',
    accent: 'from-[#4a5368] via-[#22252d] to-[#090a0d]',
    component: CostOfChaosScene,
  },
  {
    id: 'rebuild',
    eyebrow: 'The turn',
    label: 'Rebuild the layer',
    line: 'We rebuild the digital layer so the business can scale again.',
    accent: 'from-[#f48a2a] via-[#8ab4f8] to-[#e9eef9]',
    component: RebuildLayerScene,
  },
  {
    id: 'momentum',
    eyebrow: 'Momentum returns',
    label: 'When the system works',
    line: 'Clarity. Speed. Confidence.',
    accent: 'from-[#8ab4f8] via-[#365ec9] to-[#0b1020]',
    component: MomentumScene,
  },
  {
    id: 'close',
    eyebrow: 'Closing',
    label: 'Replace the weak layer',
    line: 'Start your project.',
    accent: 'from-[#8ab4f8] via-[#27314a] to-[#040506]',
    component: CloseScene,
  },
];

export default function HeroShowreel() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % brandFilmScenes.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  const scene = brandFilmScenes[activeScene];
  const CurrentScene = scene.component;

  return (
    <div className="relative h-full min-h-[18rem] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div
        className={`pointer-events-none absolute inset-x-[12%] top-8 h-28 rounded-full bg-gradient-to-r ${scene.accent} opacity-55 blur-[80px] transition-all duration-1000`}
      />

      <FilmFrame>
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            className="h-full"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.992 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-white/8 bg-black/24 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{scene.eyebrow}</p>
              <p className="mt-2 text-sm font-semibold text-white">{scene.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/54 sm:text-sm">{scene.line}</p>
            </div>
            <div className="flex flex-1 gap-2 lg:max-w-sm">
              {brandFilmScenes.map((item, index) => (
                <div key={item.id} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: index === activeScene ? '100%' : index < activeScene ? '100%' : '0%' }}
                    transition={{ duration: index === activeScene ? 5.7 : 0.45, ease: 'linear' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FilmFrame>
    </div>
  );
}
