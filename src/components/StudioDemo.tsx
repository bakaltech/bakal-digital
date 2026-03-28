import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Layout, Shield, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const DemoCard = ({ mode }: { mode: 'standard' | 'elite' }) => {
  const isElite = mode === 'elite';

  return (
    <motion.div
      layout
      className={`relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden transition-all duration-700 ${
        isElite 
          ? 'bg-ink shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10' 
          : 'bg-white shadow-xl border border-brand-100'
      }`}
    >
      {/* Background Elements */}
      <AnimatePresence mode="wait">
        {isElite ? (
          <motion.div
            key="elite-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-200/10 blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          </motion.div>
        ) : (
          <motion.div
            key="standard-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-soft/50"
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <motion.div layout>
            <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ${isElite ? 'text-accent' : 'text-brand-400'}`}>
              System Status
            </p>
            <h3 className={`text-3xl md:text-4xl font-semibold tracking-tight ${isElite ? 'text-white' : 'text-ink'}`}>
              {isElite ? 'Elite Performance' : 'Standard Build'}
            </h3>
          </motion.div>
          <motion.div 
            layout
            className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isElite ? 'bg-accent text-white' : 'bg-brand-100 text-brand-400'}`}
          >
            {isElite ? <Zap className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Latency', elite: '0.4ms', standard: '124ms' },
            { label: 'Security', elite: 'Lvl 99', standard: 'Basic' },
            { label: 'Design', elite: 'Elite', standard: 'Template' },
            { label: 'Growth', elite: '+420%', standard: '+12%' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isElite ? 'text-white/40' : 'text-brand-300'}`}>
                {stat.label}
              </p>
              <motion.p 
                key={`${mode}-${stat.label}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xl font-semibold ${isElite ? 'text-white' : 'text-ink'}`}
              >
                {isElite ? stat.elite : stat.standard}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div 
          layout
          className={`h-1.5 w-full rounded-full overflow-hidden ${isElite ? 'bg-white/10' : 'bg-brand-100'}`}
        >
          <motion.div 
            initial={{ width: '10%' }}
            animate={{ width: isElite ? '100%' : '30%' }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`h-full rounded-full ${isElite ? 'bg-accent shadow-[0_0_12px_rgba(0,102,255,0.5)]' : 'bg-brand-400'}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function StudioDemo() {
  const [mode, setMode] = useState<'standard' | 'elite'>('elite');

  return (
    <section className="py-24 md:py-48 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Interactive Demo</p>
            <h2 className="text-4xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-10">
              Experience the <br /> <span className="serif italic text-brand-300">Bakal Standard.</span>
            </h2>
            <p className="text-xl text-brand-400 leading-relaxed font-normal mb-12 max-w-xl">
              Toggle between a standard digital build and our elite architectural standard to see how we redefine both design and functionality.
            </p>

            <div className="flex p-1.5 bg-soft rounded-full border border-brand-100/50 w-fit mb-12">
              <button
                onClick={() => setMode('standard')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  mode === 'standard' ? 'bg-white text-ink shadow-md' : 'text-brand-400 hover:text-ink'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setMode('elite')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  mode === 'elite' ? 'bg-ink text-white shadow-lg' : 'text-brand-400 hover:text-ink'
                }`}
              >
                Bakal Elite
              </button>
            </div>

            <div className="space-y-6">
              {[
                'Hardware-accelerated animations',
                'Sub-second server response times',
                'Custom-engineered design systems',
                'Enterprise-grade security protocols'
              ].map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${mode === 'elite' ? 'bg-accent/10 text-accent' : 'bg-brand-100 text-brand-300'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className={`text-lg font-medium ${mode === 'elite' ? 'text-ink' : 'text-brand-400'}`}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <DemoCard mode={mode} />
            
            {/* Floating Badges */}
            <AnimatePresence>
              {mode === 'elite' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: 20 }}
                    className="absolute -top-8 -right-8 glass p-6 rounded-3xl shadow-2xl border border-white/20 z-20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Performance</p>
                        <p className="text-xl font-bold text-ink">99.9%</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -20 }}
                    className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-2xl border border-white/20 z-20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-200/20 flex items-center justify-center text-brand-300">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Security</p>
                        <p className="text-xl font-bold text-ink">Encrypted</p>
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



