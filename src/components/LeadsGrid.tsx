import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Palette, ShoppingBag, Cpu, ArrowRight, CheckCircle2, X } from 'lucide-react';

const needs = [
  { id: 'web', title: 'Web Architecture', icon: Layout, color: 'bg-accent' },
  { id: 'brand', title: 'Elite Branding', icon: Palette, color: 'bg-brand-200' },
  { id: 'shop', title: 'Headless Commerce', icon: ShoppingBag, color: 'bg-ink' },
  { id: 'ai', title: 'AI Automation', icon: Cpu, color: 'bg-brand-300' },
];

export default function LeadsGrid() {
  const [selected, setSelected] = useState<string[]>([]);
  const [step, setStep] = useState<'needs' | 'contact'>('needs');

  const toggleNeed = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full mx-auto mt-8">
      <AnimatePresence mode="wait">
        {step === 'needs' ? (
          <motion.div
            key="needs-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
              {needs.map((need) => {
                const isSelected = selected.includes(need.id);
                return (
                  <button
                    key={need.id}
                    onClick={() => toggleNeed(need.id)}
                    className={`relative p-3 sm:p-4 rounded-2xl border transition-all duration-500 flex flex-col items-center gap-2 sm:gap-3 group hover:-translate-y-1 ${
                      isSelected 
                        ? 'bg-ink border-ink text-white shadow-xl' 
                        : 'bg-soft border-brand-100/50 text-brand-400 hover:border-accent hover:bg-white'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                      isSelected ? 'bg-accent text-white' : 'bg-white text-brand-300 group-hover:text-accent'
                    }`}>
                      <need.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center leading-tight">{need.title}</span>
                    {isSelected && (
                      <motion.div
                        layoutId="check"
                        className="absolute top-1 right-1 sm:top-2 sm:right-2 text-accent"
                      >
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <button
                disabled={selected.length === 0}
                onClick={() => setStep('contact')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-ink transition-all shadow-lg hover:shadow-xl hover:bg-accent disabled:opacity-50 disabled:hover:bg-ink active:scale-[0.98]"
              >
                <span className="flex items-center">
                  Next Step <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="contact-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-6 rounded-3xl border border-white/20 shadow-2xl relative"
          >
            <button 
              onClick={() => setStep('needs')}
              className="absolute top-4 right-4 p-2 hover:bg-soft rounded-full transition-colors text-brand-400"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="text-center mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Final Step</p>
              <h3 className="text-2xl font-semibold text-ink tracking-tight">Architect your vision.</h3>
            </div>

            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink text-sm font-medium"
              />
              <input 
                type="email" 
                placeholder="Business Email"
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink text-sm font-medium"
              />
              <textarea 
                placeholder="Tell us about your project..."
                rows={3}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink text-sm font-medium resize-none"
              />
              <button className="w-full py-3 sm:py-4 rounded-xl bg-ink text-white font-bold text-sm hover:bg-accent transition-all shadow-xl active:scale-[0.99]">
                Submit Project Request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
