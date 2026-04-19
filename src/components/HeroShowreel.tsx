import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type FilmScene = {
  id: string;
  eyebrow: string;
  label: string;
  line: string;
  accent: string;
  component: React.ComponentType;
};

function FilmFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.55rem] border border-white/8 bg-[#050505] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center gap-2 border-b border-white/8 bg-black/24 px-4 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
          Bakal Digital film
        </div>
      </div>
      <div className="absolute inset-x-0 top-12 bottom-0">{children}</div>
    </div>
  );
}

function BrandIgnitionScene() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#040507] px-6 py-8 text-center">
      <motion.div
        className="absolute inset-0 opacity-65"
        animate={{ backgroundPosition: ['0px 0px', '48px 48px'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.16),transparent_32%)]"
        initial={{ scale: 0.65, opacity: 0 }}
        animate={{ scale: 1.45, opacity: 1 }}
        transition={{ duration: 3.2, ease: 'easeOut' }}
      />
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.9, opacity: 0, filter: 'blur(12px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">Bakal Digital</p>
        <h3 className="mt-6 text-[13vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-white sm:text-[10vw]">
          Systems
        </h3>
        <h3 className="text-[13vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-accent sm:text-[10vw]">
          In Motion
        </h3>
      </motion.div>
    </div>
  );
}

function CloseCropScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#0a0c11_0%,#050608_100%)]">
      <motion.div
        className="absolute left-[8%] top-[14%] h-[58%] w-[34%] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm"
        initial={{ x: -32, opacity: 0.65, scale: 0.96 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-[10%] rounded-[1.5rem] bg-[radial-gradient(circle_at_top_right,rgba(138,180,248,0.4),transparent_34%),linear-gradient(180deg,#131826_0%,#0f1117_100%)]"
          animate={{ scale: [1, 1.03, 1], x: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        className="absolute right-[12%] top-[18%] h-[24%] w-[24%] rounded-[1.5rem] border border-white/10 bg-white/[0.05] shadow-[0_18px_40px_rgba(0,0,0,0.26)] backdrop-blur-sm"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="p-4">
          <div className="h-2 w-14 rounded-full bg-white/20" />
          <div className="mt-4 h-12 rounded-xl bg-accent/14" />
          <div className="mt-3 h-2 w-20 rounded-full bg-white/12" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[8%] bottom-[14%] h-[38%] w-[40%] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
        initial={{ x: 36, opacity: 0.65, scale: 0.96 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid h-full gap-3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <div className="h-10 rounded-xl bg-white/[0.06]" />
            <div className="h-20 rounded-xl bg-white/[0.05]" />
            <div className="h-14 rounded-xl bg-white/[0.04]" />
          </div>
          <div className="space-y-3">
            <motion.div
              className="h-24 rounded-[1.2rem] bg-[radial-gradient(circle_at_top_right,rgba(244,138,42,0.32),transparent_42%),linear-gradient(180deg,#161d2b_0%,#10131a_100%)]"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="h-14 rounded-xl bg-white/[0.05]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + item * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.08),transparent_45%)]"
        animate={{ opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function WideRevealScene() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#111318_0%,#08090c_100%)] px-6 py-8">
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{ backgroundPosition: ['0px 0px', '42px 42px'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.11),transparent_42%)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0f14] shadow-[0_35px_90px_rgba(0,0,0,0.38)]"
        initial={{ scale: 0.93, y: 24, opacity: 0.6 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex h-11 items-center gap-2 border-b border-white/8 px-4">
          <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-4 h-2.5 w-24 rounded-full bg-accent/28" />
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,#181c28_0%,#11131a_100%)] p-4 text-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">Service layer</p>
            <h4 className="mt-4 max-w-[8ch] text-3xl font-semibold leading-[0.94] tracking-[-0.05em]">
              Websites that carry more weight.
            </h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Websites', 'Portals', 'SaaS', 'AI systems'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/82">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,#fff8ef_0%,#eef4ff_100%)] p-4 text-[#111111]">
              <div className="grid gap-3 sm:grid-cols-[1fr_0.92fr]">
                <div className="rounded-[1.2rem] bg-[linear-gradient(180deg,#ff992f_0%,#ffb72e_100%)] p-4 text-white">
                  <p className="max-w-[7ch] text-3xl font-semibold leading-[0.94]">Clear offers. Stronger demand.</p>
                  <div className="mt-4 flex gap-2">
                    <div className="h-9 flex-1 rounded-full bg-white/90" />
                    <div className="h-9 flex-1 rounded-full bg-black/82" />
                  </div>
                </div>
                <div className="grid gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-12 rounded-xl bg-[#111111]/6" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.3rem] bg-[#11141b] p-4 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Portal reveal</p>
                <div className="mt-4 h-24 rounded-[1rem] bg-[radial-gradient(circle_at_top_right,rgba(138,180,248,0.34),transparent_42%),linear-gradient(180deg,#1a2230_0%,#11151d_100%)]" />
              </div>
              <div className="rounded-[1.3rem] bg-[#11141b] p-4 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">AI layer</p>
                <div className="mt-4 flex h-24 items-end gap-2 rounded-[1rem] bg-[#0d1118] p-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="w-full rounded-t-sm bg-accent/85" style={{ height: `${20 + item * 10}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CollaborationScene() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#59583f_0%,#323327_100%)] px-6 py-8">
      <motion.div
        className="absolute inset-0 opacity-18"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), transparent 22%), radial-gradient(circle at 70% 62%, rgba(255,255,255,0.1), transparent 18%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/54">Strategy + Build</p>
            <h3 className="mt-5 max-w-[9ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl">
              Premium outcomes need aligned direction.
            </h3>
          </motion.div>

          <div className="relative h-[20rem] sm:h-[24rem]">
            <motion.div
              className="absolute left-[6%] top-[10%] h-[58%] w-[34%] rounded-[2.2rem] border border-white/18 bg-white/12 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 28, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.24 }}
            >
              <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_28%),linear-gradient(180deg,#6a6a4b_0%,#454536_100%)] p-4">
                <div className="h-full w-full rounded-[1.6rem] bg-black/8" />
              </div>
            </motion.div>

            <motion.div
              className="absolute right-[8%] bottom-[8%] h-[66%] w-[40%] rounded-[2.5rem] border border-white/18 bg-white/10 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 28, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ delay: 0.34, type: 'spring', bounce: 0.24 }}
            >
              <div className="h-full w-full rounded-[2.2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,#666649_0%,#3a3a2d_100%)] p-4">
                <div className="h-full w-full rounded-[1.8rem] bg-black/8" />
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border border-white/16 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.48, duration: 0.75 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58">Working session</p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Closer thinking, cleaner products</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/14" />
              </div>
              <div className="mt-5 grid gap-3">
                {['Offer clarity', 'Product structure', 'System decisions'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const filmScenes: FilmScene[] = [
  {
    id: 'brand',
    eyebrow: 'Bakal Digital',
    label: 'Brand ignition',
    line: 'Digital systems that feel clear, premium, and built to move.',
    accent: 'from-[#8ab4f8] via-[#4f7de8] to-[#0b1020]',
    component: BrandIgnitionScene,
  },
  {
    id: 'crop',
    eyebrow: 'Cinematic crop',
    label: 'Closer product details',
    line: 'Closer crops. Slower movement. Stronger curiosity.',
    accent: 'from-[#8ab4f8] via-[#203768] to-[#080b12]',
    component: CloseCropScene,
  },
  {
    id: 'reveal',
    eyebrow: 'Service reveal',
    label: 'Website, portal, SaaS, AI',
    line: 'Wider reveals for the products we actually offer.',
    accent: 'from-[#f48a2a] via-[#8ab4f8] to-[#141821]',
    component: WideRevealScene,
  },
  {
    id: 'collaboration',
    eyebrow: 'Collaboration',
    label: 'Direction + execution',
    line: 'Strategy, design, and build shaped in one system.',
    accent: 'from-[#aab79d] via-[#6b6d51] to-[#343527]',
    component: CollaborationScene,
  },
];

export default function HeroShowreel() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % filmScenes.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  const scene = filmScenes[activeScene];
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
              {filmScenes.map((item, index) => (
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
