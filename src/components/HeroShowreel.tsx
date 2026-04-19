import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type SceneDef = {
  id: string;
  label: string;
  eyebrow: string;
  accent: string;
  component: React.ComponentType;
};

function SceneContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

function IntroScene() {
  return (
    <SceneContainer className="bg-[#050505]">
      <motion.div
        className="z-10 px-6 text-center"
        initial={{ scale: 0.82, filter: 'blur(10px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-[12vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-white sm:text-[10vw]">
          Bakal
        </h3>
        <h3 className="text-[12vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-accent sm:text-[10vw]">
          Digital
        </h3>
        <motion.p
          className="mt-6 text-[min(2vw,18px)] font-medium uppercase tracking-[0.22em] text-white/48"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Websites, portals, SaaS, AI systems
        </motion.p>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,180,248,0.18),transparent_34%)]"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.55, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
    </SceneContainer>
  );
}

function UXUIScene() {
  return (
    <SceneContainer className="bg-[#E4E3E0] text-[#111111]">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-center border-b border-[#141414]/12 px-6 py-7 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
          <motion.p
            className="mb-4 text-sm uppercase tracking-[0.24em] text-[#111111]/42"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
          >
            01. Case Study
          </motion.p>
          <motion.h3
            className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            UX/UI
            <br />
            <span className="text-[#F27D26]">Mastery</span>
          </motion.h3>
          <motion.p
            className="mt-5 max-w-md text-sm leading-relaxed text-[#111111]/68 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Transforming complex workflows into cleaner, clearer interfaces with stronger hierarchy and better product rhythm.
          </motion.p>
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#d6d5d1] p-5 lg:w-1/2 lg:p-8">
          <motion.div
            className="flex aspect-video w-full max-w-xl flex-col rounded-xl border border-black/10 bg-white p-4 shadow-2xl sm:p-6"
            initial={{ y: '100%', rotate: 5 }}
            animate={{ y: 0, rotate: -2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex h-4 gap-2 border-b border-black/10 pb-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="flex flex-1 gap-4 sm:gap-6">
              <div className="w-1/3 rounded-lg bg-black/5" />
              <div className="flex w-2/3 flex-col gap-4">
                <div className="h-12 rounded-lg bg-[#F27D26]/20" />
                <div className="flex-1 rounded-lg bg-black/5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-5 top-5 rounded-lg border border-black/10 bg-white p-4 shadow-xl lg:right-8 lg:top-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <div className="mb-2 h-2 w-20 rounded bg-black/80" />
            <div className="h-2 w-28 rounded bg-black/20" />
          </motion.div>
        </div>
      </div>
    </SceneContainer>
  );
}

function AIScene() {
  return (
    <SceneContainer className="bg-[#050505]">
      <motion.div
        className="absolute inset-0 opacity-35"
        initial={{ scale: 1.16, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 3.5 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(138,180,248,0.15), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)',
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 py-8 text-center">
        <motion.div
          className="mb-6 h-20 w-px bg-gradient-to-b from-transparent to-[#F27D26]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        />
        <motion.p
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F27D26]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          02. Intelligence layer
        </motion.p>
        <motion.h3
          className="text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          AI-powered
          <br />
          <span className="font-normal italic text-white/48">solutions</span>
        </motion.h3>

        <div className="relative mt-8 flex h-40 w-full max-w-4xl items-end justify-around gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:h-48 sm:p-8">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t-sm bg-[#F27D26]/85"
              initial={{ height: 0 }}
              animate={{ height: `${18 + ((i * 13) % 74)}%` }}
              transition={{ delay: 0.85 + i * 0.04, duration: 0.45, type: 'spring' }}
            />
          ))}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505] to-transparent mix-blend-overlay"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </SceneContainer>
  );
}

function SaaSScene() {
  return (
    <SceneContainer className="bg-[#151619] text-white">
      <div className="flex h-full w-full flex-col px-5 py-6 sm:px-8 sm:py-8">
        <div className="z-10 mb-6 flex items-end justify-between border-b border-white/10 pb-5 sm:mb-8">
          <div>
            <motion.h3
              className="text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              SaaS Platforms
            </motion.h3>
            <motion.p
              className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              End-to-end architecture
            </motion.p>
          </div>
          <motion.div
            className="hidden text-right md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F27D26]">System status</div>
            <div className="text-sm text-white/48">Scalable, secure, performant</div>
          </motion.div>
        </div>

        <div className="z-10 grid flex-1 gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          <motion.div
            className="flex flex-col rounded-xl border border-white/5 bg-[#1c1d22] p-4 sm:p-6"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-5 flex h-10 items-center justify-between border-b border-white/5 pb-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">Main metrics</div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-[#F27D26]" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="relative flex flex-1 items-center justify-center border-y border-dashed border-white/10">
              <motion.svg className="absolute h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,80 Q50,20 100,50 T200,60 T300,20 T400,90"
                  fill="none"
                  stroke="#F27D26"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.75 }}
                />
                <motion.path
                  d="M0,80 Q50,20 100,50 T200,60 T300,20 T400,90 L400,100 L0,100 Z"
                  fill="url(#hero-grad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 1.45 }}
                />
                <defs>
                  <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F27D26" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1c1d22" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div
              className="flex-1 rounded-xl border border-white/5 bg-[#1c1d22] p-4 sm:p-6"
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="mb-4 border-b border-white/5 pb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
                Active users
              </div>
              <div className="text-4xl font-light tracking-[-0.05em]">124,592</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F27D26]">+12.4% vs last week</div>
            </motion.div>
            <motion.div
              className="flex-1 rounded-xl bg-[#F27D26] p-4 text-black sm:p-6"
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
            >
              <div className="mb-4 border-b border-black/10 pb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/52">
                Performance
              </div>
              <div className="text-4xl font-medium tracking-[-0.05em]">99.9%</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/62">Uptime verified</div>
            </motion.div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
}

function MobileScene() {
  return (
    <SceneContainer className="bg-[#f5f2ed] text-black">
      <div className="absolute left-0 top-0 z-20 flex w-full justify-between p-6 sm:p-8">
        <motion.div
          className="text-[10px] uppercase tracking-[0.28em] text-black/42 [writing-mode:vertical-rl] rotate-180"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          04. Connected ecosystems
        </motion.div>
        <motion.p
          className="text-xl italic sm:text-2xl"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mobile Apps
        </motion.p>
      </div>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-8">
        <motion.h3
          className="absolute z-0 whitespace-nowrap text-[16vw] font-semibold tracking-[-0.08em] text-black/5"
          animate={{ x: ['10%', '-10%'] }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        >
          IOS ANDROID
        </motion.h3>

        <div className="relative z-10 flex items-center gap-6 sm:gap-10">
          <motion.div
            className="relative flex h-[24rem] w-44 flex-col overflow-hidden rounded-[2.2rem] border-8 border-black/10 bg-white p-4 shadow-2xl sm:h-[30rem] sm:w-56 sm:rounded-[2.7rem]"
            initial={{ y: 90, rotate: -5, opacity: 0 }}
            animate={{ y: 0, rotate: -9, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.35, duration: 1.3 }}
          >
            <div className="absolute inset-x-0 top-0 mx-auto h-5 w-1/3 rounded-b-2xl bg-black/10" />
            <div className="mt-4 h-24 w-full rounded-2xl bg-gradient-to-br from-[#F27D26] to-[#e06714]" />
            <div className="mt-5 h-5 w-3/4 rounded bg-black/10" />
            <div className="mt-3 h-3 w-1/2 rounded bg-black/5" />
            <div className="mt-6 flex flex-1 flex-col gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex h-16 items-center rounded-xl bg-black/5 p-3">
                  <div className="mr-3 h-9 w-9 rounded-full bg-black/10" />
                  <div className="flex-1">
                    <div className="mb-2 h-2.5 w-2/3 rounded bg-black/10" />
                    <div className="h-2 w-1/3 rounded bg-black/5" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative hidden h-[30rem] w-56 flex-col overflow-hidden rounded-[2.7rem] border-8 border-white/10 bg-black p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)] md:flex"
            initial={{ y: -40, rotate: 5, opacity: 0 }}
            animate={{ y: 14, rotate: 5, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.35, duration: 1.3, delay: 0.18 }}
          >
            <div className="absolute inset-x-0 top-0 mx-auto h-5 w-1/3 rounded-b-2xl bg-white/10" />
            <div className="mt-5 flex justify-between border-b border-white/10 pb-4">
              <div className="h-3 w-1/3 rounded bg-white/20" />
              <div className="h-8 w-8 rounded-full bg-white/10" />
            </div>
            <div className="mt-5 grid flex-1 grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square rounded-2xl bg-white/5" />
              ))}
            </div>
            <div className="mt-5 flex h-14 items-center justify-around rounded-2xl bg-white/10 px-4">
              <div className="h-5 w-5 rounded bg-white/20" />
              <div className="h-5 w-5 rounded bg-white/20" />
              <div className="h-5 w-5 rounded bg-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </SceneContainer>
  );
}

function CollaborationScene() {
  return (
    <SceneContainer className="bg-[#5a5a40] text-white">
      <motion.div
        className="absolute inset-0 opacity-18"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), transparent 22%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1), transparent 18%)',
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex-1">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/54"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
          >
            05. Collaboration
          </motion.p>
          <motion.h3
            className="mt-5 max-w-[10ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Strategy, design, and build should move together.
          </motion.h3>
          <motion.p
            className="mt-5 max-w-md text-sm leading-relaxed text-white/74 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            The product is better when messaging, interface, systems, and delivery are shaped in the same conversation.
          </motion.p>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <motion.div
            className="absolute left-4 top-10 h-56 w-44 rounded-[2.6rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.26 }}
          >
            <div className="h-full w-full rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%),linear-gradient(180deg,#6c6c4f_0%,#464633_100%)] p-4">
              <div className="h-full w-full rounded-[2rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.04))]" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-2 bottom-6 h-64 w-48 rounded-[2.8rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ delay: 0.45, type: 'spring', bounce: 0.26 }}
          >
            <div className="h-full w-full rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_26%),linear-gradient(180deg,#6a6a4b_0%,#3b3b2a_100%)] p-4">
              <div className="h-full w-full rounded-[2.1rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.04))]" />
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 w-full max-w-sm rounded-[1.8rem] border border-white/16 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58">Working session</p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">From diagnosis to shipped direction</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/14" />
            </div>
            <div className="mt-5 grid gap-3">
              {['Offer clarity', 'Flow structure', 'System decisions'].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + index * 0.12 }}
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SceneContainer>
  );
}

function OutroScene() {
  return (
    <SceneContainer className="bg-[#050505]">
      <div className="z-10 w-full px-4 text-center">
        <motion.p
          className="mb-7 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let&apos;s build something better
        </motion.p>

        <div className="overflow-hidden py-2">
          <motion.h3
            className="text-[14vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Bakal
          </motion.h3>
        </div>
        <div className="overflow-hidden pb-2">
          <motion.h3
            className="text-[14vw] font-semibold uppercase leading-[0.8] tracking-[-0.08em] text-transparent"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Digital
          </motion.h3>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <div className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0c111a]">Start a project</div>
          <div className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">View portfolio</div>
        </motion.div>
      </div>
    </SceneContainer>
  );
}

const showreelScenes: SceneDef[] = [
  {
    id: 'intro',
    label: 'Studio opener',
    eyebrow: 'Bakal Digital',
    accent: 'from-[#8ab4f8] via-[#5d8ef1] to-[#10131b]',
    component: IntroScene,
  },
  {
    id: 'ux',
    label: 'Case study reveal',
    eyebrow: 'Web Experience',
    accent: 'from-[#f48a2a] via-[#e36f21] to-[#242018]',
    component: UXUIScene,
  },
  {
    id: 'ai',
    label: 'Intelligence layer',
    eyebrow: 'AI Systems',
    accent: 'from-[#8ab4f8] via-[#345ec9] to-[#0a1020]',
    component: AIScene,
  },
  {
    id: 'saas',
    label: 'System dashboard',
    eyebrow: 'SaaS Platforms',
    accent: 'from-[#8ab4f8] via-[#223c77] to-[#0a0c14]',
    component: SaaSScene,
  },
  {
    id: 'mobile',
    label: 'Mobile ecosystem',
    eyebrow: 'Mobile Apps',
    accent: 'from-[#f48a2a] via-[#f0b44f] to-[#cfc8bc]',
    component: MobileScene,
  },
  {
    id: 'collaboration',
    label: 'Collaboration layer',
    eyebrow: 'Strategy + Build',
    accent: 'from-[#a8b5a0] via-[#6d6f52] to-[#3a3b2c]',
    component: CollaborationScene,
  },
  {
    id: 'outro',
    label: 'Studio close',
    eyebrow: 'Bakal Digital',
    accent: 'from-[#8ab4f8] via-[#22293d] to-[#050505]',
    component: OutroScene,
  },
];

function ReelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.55rem] border border-white/8 bg-[#050505] sm:min-h-[24rem] lg:min-h-[28rem]">
      <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center gap-2 border-b border-white/8 bg-black/28 px-4 backdrop-blur-sm">
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

export default function HeroShowreel() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % showreelScenes.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const scene = showreelScenes[activeScene];
  const CurrentScene = scene.component;

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
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-white/8 bg-black/24 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{scene.eyebrow}</p>
              <p className="mt-2 text-sm font-semibold text-white">{scene.label}</p>
            </div>
            <div className="flex flex-1 gap-2 sm:max-w-sm">
              {showreelScenes.map((item, index) => (
                <div key={item.id} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: index === activeScene ? '100%' : index < activeScene ? '100%' : '0%' }}
                    transition={{ duration: index === activeScene ? 4.8 : 0.45, ease: 'linear' }}
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
