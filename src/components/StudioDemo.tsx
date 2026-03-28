import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Shield, Cpu } from 'lucide-react';

const DemoCard = ({ mode }: { mode: 'standard' | 'elite' }) => {
  const isElite = mode === 'elite';

  return (
    <motion.div
      layout
      className={`relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-700 ${
        isElite
          ? 'bg-ink shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10'
          : 'bg-white shadow-xl border border-brand-100'
      }`}
    >
      <AnimatePresence mode="wait">
        {isElite ? (
          <motion.div key="elite-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-transparent to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-200/10 blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50" />
          </motion.div>
        ) : (
          <motion.div key="standard-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-soft/70">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(29,29,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(29,29,31,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-5 sm:p-8 md:p-12 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <motion.div layout>
            <p className={`text-[10px] font-bold uppercase tracking-[0.26em] sm:tracking-[0.3em] mb-3 sm:mb-4 ${isElite ? 'text-accent' : 'text-brand-400'}`}>
              System Status
            </p>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight ${isElite ? 'text-white' : 'text-ink'}`}>
              {isElite ? 'Bakal Standard' : 'Generic Delivery'}
            </h3>
          </motion.div>
          <motion.div layout className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${isElite ? 'bg-accent text-white' : 'bg-brand-100 text-brand-400'}`}>
            {isElite ? <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> : <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            { label: 'Messaging', elite: 'Clear', standard: 'Crowded' },
            { label: 'System Design', elite: 'Integrated', standard: 'Fragmented' },
            { label: 'Trust Signal', elite: 'Premium', standard: 'Template' },
            { label: 'Ops Readiness', elite: 'Live', standard: 'Manual' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isElite ? 'text-white/40' : 'text-brand-300'}`}>
                {stat.label}
              </p>
              <motion.p key={`${mode}-${stat.label}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`text-lg sm:text-xl font-semibold ${isElite ? 'text-white' : 'text-ink'}`}>
                {isElite ? stat.elite : stat.standard}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div layout className={`h-1.5 w-full rounded-full overflow-hidden ${isElite ? 'bg-white/10' : 'bg-brand-100'}`}>
          <motion.div initial={{ width: '10%' }} animate={{ width: isElite ? '100%' : '30%' }} transition={{ duration: 1, ease: 'circOut' }} className={`h-full rounded-full ${isElite ? 'bg-accent shadow-[0_0_12px_rgba(0,102,255,0.5)]' : 'bg-brand-400'}`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function StudioDemo() {
  const [mode, setMode] = useState<'standard' | 'elite'>('elite');

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-6 sm:mb-8">Interactive Demo</p>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-6 sm:mb-10">
              Experience the <br /> <span className="serif italic text-brand-300">Bakal Standard.</span>
            </h2>
            <p className="text-lg sm:text-xl text-brand-400 leading-relaxed font-normal mb-8 sm:mb-12 max-w-xl">
              Toggle between a generic build and our preferred delivery standard to see how structure, trust, and system quality reshape the experience.
            </p>

            <div className="flex p-1.5 bg-soft rounded-full border border-brand-100/50 w-fit mb-8 sm:mb-12">
              <button onClick={() => setMode('standard')} className={`px-5 sm:px-8 py-3 rounded-full text-sm font-bold transition-all ${mode === 'standard' ? 'bg-white text-ink shadow-md' : 'text-brand-400 hover:text-ink'}`}>
                Generic
              </button>
              <button onClick={() => setMode('elite')} className={`px-5 sm:px-8 py-3 rounded-full text-sm font-bold transition-all ${mode === 'elite' ? 'bg-ink text-white shadow-lg' : 'text-brand-400 hover:text-ink'}`}>
                Bakal Standard
              </button>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                'Sharper structure and narrative flow',
                'Cleaner operational handoffs',
                'Custom system thinking, not template assembly',
                'A stronger trust signal at every touchpoint',
              ].map((feature, i) => (
                <motion.div key={feature} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${mode === 'elite' ? 'bg-accent/10 text-accent' : 'bg-brand-100 text-brand-300'}`}>
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className={`text-base sm:text-lg font-medium ${mode === 'elite' ? 'text-ink' : 'text-brand-400'}`}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative max-w-xl lg:max-w-none mx-auto w-full">
            <DemoCard mode={mode} />

            <AnimatePresence>
              {mode === 'elite' && (
                <>
                  <motion.div initial={{ opacity: 0, scale: 0.5, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.5, x: 20 }} className="hidden md:block absolute -top-8 -right-8 glass p-6 rounded-3xl shadow-2xl border border-white/20 z-20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">System</p>
                        <p className="text-xl font-bold text-ink">Integrated</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, scale: 0.5, x: -20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.5, x: -20 }} className="hidden md:block absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-2xl border border-white/20 z-20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-200/20 flex items-center justify-center text-brand-300">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Signal</p>
                        <p className="text-xl font-bold text-ink">Premium</p>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
