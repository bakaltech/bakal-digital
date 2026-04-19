import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Bot, LayoutDashboard, Sparkles, Wand2 } from 'lucide-react';
import BrandedVisual from './BrandedVisual';
import { projects } from '../data/projects';

const featuredProject = projects.find((project) => project.id === 'acengeers');
const conceptProjects = projects.filter((project) => project.id !== 'acengeers').slice(0, 3);

if (!featuredProject) {
  throw new Error('Acengeers project is required for the hero showreel.');
}

const reelScenes = [
  {
    id: 'intro',
    label: 'Studio reel',
    eyebrow: 'Site-native motion',
    title: 'A sharper way to preview what we build.',
    body:
      'The reel now behaves like a premium product canvas, not a fake video player. It introduces the studio fast, then rotates through real work categories and proof.',
    accent: 'from-[#8ab4f8] via-[#5d8ef1] to-[#23252c]',
  },
  {
    id: 'launch',
    label: 'Live launch',
    eyebrow: 'Acengeers launch',
    title: featuredProject.title,
    body: featuredProject.solution,
    accent: 'from-[#f48a2a] via-[#ef7b21] to-[#f5c347]',
  },
  {
    id: 'systems',
    label: 'System builds',
    eyebrow: 'Product directions',
    title: 'Portals, AI ops, and delivery systems built on one grid language.',
    body:
      'The reel groups the studio offer into repeatable product shapes, so the story scales without turning into unrelated slides.',
    accent: 'from-[#8ab4f8] via-[#4e74d9] to-[#1b2234]',
  },
  {
    id: 'proof',
    label: 'Commercial proof',
    eyebrow: 'Why it matters',
    title: 'The story closes on outcomes, not ornament.',
    body:
      'Each sequence points back to clearer offers, stronger trust, better-fit leads, and delivery systems that are easier to operate as the business grows.',
    accent: 'from-[#8ab4f8] via-[#252935] to-[#121212]',
  },
] as const;

function FrameLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">{children}</p>;
}

function PulseDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/55" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
    </span>
  );
}

function ReelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.55rem] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,#121317_0%,#0b0c10_100%)] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-2 border-b border-white/8 bg-black/28 px-4 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
          Bakal Digital reel
        </div>
      </div>
      <div className="absolute inset-x-0 top-12 bottom-0">{children}</div>
    </div>
  );
}

function IntroScene() {
  return (
    <div className="grid h-full gap-6 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
      <div className="flex flex-col justify-between">
        <div>
          <FrameLabel>Studio signal</FrameLabel>
          <h3 className="mt-4 max-w-[12ch] text-3xl font-semibold leading-[0.96] tracking-tight text-white sm:text-4xl">
            Build work that feels clear, premium, and ready to ship.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/56 sm:text-base">Short message. Strong frames. Real product energy.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {['Websites', 'Portals', 'AI systems'].map((title) => (
            <div key={title} className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-white/72">
                <PulseDot />
                <p className="text-sm font-semibold text-white">{title}</p>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid gap-4">
        <motion.div
          className="absolute -right-8 top-3 h-28 w-28 rounded-full bg-accent/18 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="grid h-full gap-4 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(135deg,rgba(138,180,248,0.18),rgba(93,142,241,0.06),rgba(18,18,18,0.12))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between">
            <FrameLabel>Visual rhythm</FrameLabel>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-accent">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              className="overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0e1320] p-4"
              initial={{ y: 18, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="h-2 w-2 rounded-full bg-white/14" />
                <div className="h-2 w-2 rounded-full bg-white/14" />
              </div>
              <div className="mt-4 rounded-[1rem] bg-[linear-gradient(180deg,#111827_0%,#0e172a_100%)] p-4">
                <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="space-y-3">
                    <div className="h-10 rounded-xl bg-white/[0.06]" />
                    <div className="h-20 rounded-xl bg-white/[0.05]" />
                    <div className="h-24 rounded-xl bg-accent/12" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-20 rounded-[1.1rem] bg-[radial-gradient(circle_at_top_right,rgba(138,180,248,0.42),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          className="h-16 rounded-xl bg-white/[0.06]"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 1.8 + item * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                    <div className="h-16 rounded-xl bg-white/[0.05]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              <motion.div
                className="rounded-[1.35rem] border border-white/8 bg-[#11141b] p-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Clarity</p>
                <p className="mt-3 text-lg font-semibold text-white">Show first. Explain second.</p>
              </motion.div>
              <motion.div
                className="rounded-[1.35rem] border border-white/8 bg-[#11141b] p-4"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Motion</p>
                <p className="mt-3 text-lg font-semibold text-white">Zoom, pulse, and sequence.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchScene() {
  return (
    <div className="grid h-full gap-5 p-5 sm:p-7 lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
      <motion.div
        className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(135deg,#f58626_0%,#f49a2f_40%,#f7cb4a_100%)] p-4 text-white shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-5"
        initial={{ scale: 0.96, opacity: 0.82 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rounded-[1.4rem] border border-white/18 bg-white/10 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <FrameLabel>Acengeers launch</FrameLabel>
            <div className="rounded-full border border-white/22 bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/76">
              Live
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="max-w-[8ch] text-4xl font-semibold leading-[0.92] tracking-tight">Cleaning that feels easy to trust.</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/84">Real launch proof with stronger service framing, clearer trust cues, and a more direct quote path.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Trust-first hero', '4 service routes', 'Lead capture'].map((item) => (
                  <span key={item} className="rounded-full border border-white/22 bg-white/12 px-3 py-2 text-xs font-semibold text-white/92">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.07))] p-3">
              <div className="rounded-[1.15rem] bg-[#fff8ef] p-3 text-[#111111] shadow-[0_18px_40px_rgba(117,54,0,0.14)]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#111111]/18" />
                  <div className="h-2 w-2 rounded-full bg-[#111111]/18" />
                  <div className="h-2 w-2 rounded-full bg-[#111111]/18" />
                  <div className="ml-auto h-2.5 w-16 rounded-full bg-[#f59e0b]" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_0.95fr]">
                  <div className="rounded-[1.1rem] bg-[linear-gradient(180deg,#ff9a30_0%,#ffb72e_100%)] p-4 text-white">
                    <p className="max-w-[8ch] text-3xl font-semibold leading-[0.95]">Cleaning that feels easy to trust.</p>
                    <div className="mt-4 flex gap-2">
                      <div className="h-9 flex-1 rounded-full bg-white/90" />
                      <div className="h-9 flex-1 rounded-full bg-black/85" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="rounded-[1rem] bg-white p-3 shadow-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/42">Feature panel</p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((item) => (
                          <motion.div
                            key={item}
                            className="h-14 rounded-xl bg-[#f4f4f4]"
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 1.6 + item * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1rem] bg-white p-3 shadow-sm">
                      <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.24),transparent_40%),linear-gradient(180deg,#f5f5f5_0%,#eef4ff_100%)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredProject.metricHighlights?.slice(0, 3).map((metric) => (
            <motion.div
              key={metric.label}
              className="rounded-[1.35rem] border border-white/8 bg-[#11141b] p-4"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{metric.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[1.45rem] border border-white/8 bg-[#11141b] p-5">
            <FrameLabel>Message</FrameLabel>
            <p className="mt-3 max-w-[18ch] text-2xl font-semibold leading-tight text-white">Real launch work. Not just polished screens.</p>
          </div>
          <div className="rounded-[1.45rem] border border-white/8 bg-[#11141b] p-5">
            <FrameLabel>Outcome</FrameLabel>
            <p className="mt-3 max-w-[18ch] text-2xl font-semibold leading-tight text-white">Clearer trust. Faster understanding. Better inquiry path.</p>
          </div>
          <div className="rounded-[1.45rem] border border-white/8 bg-[#11141b] p-5 sm:col-span-2">
            <FrameLabel>Feature proof</FrameLabel>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {featuredProject.features.slice(0, 3).map((feature) => (
                <div key={feature.title} className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemsScene() {
  return (
    <div className="grid h-full gap-5 p-5 sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
      <div className="flex flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[#101319] p-5">
        <div>
          <FrameLabel>Build categories</FrameLabel>
          <h3 className="mt-4 max-w-[12ch] text-3xl font-semibold leading-[0.98] tracking-tight text-white">
            One system. Multiple build directions.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/56">Same visual language, different products, cleaner scaling.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {conceptProjects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p>
                {project.id === 'nexus-ai' ? (
                  <Bot className="h-4 w-4 text-accent" />
                ) : project.id === 'lumina-saas' ? (
                  <LayoutDashboard className="h-4 w-4 text-accent" />
                ) : (
                  <Wand2 className="h-4 w-4 text-accent" />
                )}
              </div>
              <p className="mt-4 text-base font-semibold text-white">{project.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/54">{project.results}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {conceptProjects.slice(0, 2).map((project) => (
          <motion.div
            key={project.id}
            className="overflow-hidden rounded-[1.45rem] border border-white/8 bg-[#0b0f19]"
            initial={{ scale: 0.98, opacity: 0.75 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <div className="aspect-[1.08/1]">
              <BrandedVisual
                variant={project.id as 'nexus-ai' | 'lumina-saas'}
                title={project.title}
                className="h-full rounded-none"
              />
            </div>
            <div className="border-t border-white/8 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/44">{project.category}</p>
              <p className="mt-2 text-sm font-semibold text-white">{project.title}</p>
            </div>
          </motion.div>
        ))}

        <div className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(138,180,248,0.12),rgba(18,18,18,0.08))] p-5 sm:col-span-2">
          <FrameLabel>Scaling rule</FrameLabel>
          <p className="mt-3 max-w-[22ch] text-2xl font-semibold leading-tight text-white">More projects can slot in without breaking the layout.</p>
        </div>
      </div>
    </div>
  );
}

function ProofScene() {
  return (
    <div className="grid h-full gap-5 p-5 sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
      <div className="flex flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[#101319] p-5">
        <div>
          <FrameLabel>Commercial close</FrameLabel>
          <h3 className="mt-4 max-w-[10ch] text-3xl font-semibold leading-[0.98] tracking-tight text-white">
            Proof should point to business change.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/56">Short message, strong ending, clear next move.</p>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            ['Clearer offers', 'Visitors understand the shape of the engagement faster.'],
            ['Stronger trust', 'The work looks more deliberate and commercially credible.'],
            ['Better operations', 'Portals, AI, and workflows reduce friction after the sale too.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/54">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Website rebuilds', 'Replace weak messaging and broken structure'],
            ['Portals', 'Create cleaner client or internal operating layers'],
            ['AI workflows', 'Use automation where it creates real speed'],
            ['SaaS foundations', 'Build systems that can scale without collapsing'],
          ].map(([title, text]) => (
            <motion.div
              key={title}
              className="rounded-[1.25rem] border border-white/8 bg-[#11141b] p-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/54">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(138,180,248,0.16),rgba(18,18,18,0.02))] p-5">
          <FrameLabel>Next action</FrameLabel>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {['Open project intake', 'Review the work', 'Map the strongest next move'].map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/78">
                {item}
                <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const sceneComponents: Record<(typeof reelScenes)[number]['id'], React.ComponentType> = {
  intro: IntroScene,
  launch: LaunchScene,
  systems: SystemsScene,
  proof: ProofScene,
};

export default function HeroShowreel() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % reelScenes.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const scene = reelScenes[activeScene];
  const CurrentScene = sceneComponents[scene.id];

  return (
    <div className="relative h-full min-h-[18rem] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className={`pointer-events-none absolute inset-x-[12%] top-8 h-28 rounded-full bg-gradient-to-r ${scene.accent} opacity-55 blur-[80px] transition-all duration-700`} />
      <ReelFrame>
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-white/8 bg-black/24 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{scene.eyebrow}</p>
              <p className="mt-2 text-sm font-semibold text-white">{scene.label}</p>
            </div>
            <div className="flex flex-1 gap-2 sm:max-w-sm">
              {reelScenes.map((item, index) => (
                <div key={item.id} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: index === activeScene ? '100%' : index < activeScene ? '100%' : '0%' }}
                    transition={{ duration: index === activeScene ? 2.9 : 0.35, ease: 'linear' }}
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
