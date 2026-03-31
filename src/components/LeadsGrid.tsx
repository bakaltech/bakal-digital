import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShoppingBag, X } from 'lucide-react';
import { isValidEmail } from '../lib/validation';

const needs = [
  { id: 'platform', title: 'Website, portal, or product layer', icon: Globe },
  { id: 'ai', title: 'AI workflow or assistant', icon: Cpu },
  { id: 'commerce', title: 'Commerce and checkout', icon: ShoppingBag },
  { id: 'data', title: 'Automation and reporting', icon: Database },
];

export default function LeadsGrid() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [step, setStep] = React.useState<'needs' | 'contact' | 'success'>('needs');
  const [formStartedAt] = React.useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '', website: '' });
  const messageLength = formData.message.trim().length;
  const hasValidEmail = isValidEmail(formData.email);
  const canSubmit = formData.name.trim().length > 0 && hasValidEmail && messageLength >= 20;

  const toggleNeed = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      setError('Please add your name so we can route the brief properly.');
      return;
    }

    if (!hasValidEmail) {
      setError('Please enter a valid business email for follow-up.');
      return;
    }

    if (messageLength < 20) {
      setError('Please share a bit more detail about what is broken and what should improve.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company: '', source: 'hero-intake', interests: selected, startedAt: formStartedAt }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || `Hero intake failed with status ${response.status}`);
      }

      setStep('success');
      setFormData({ name: '', email: '', message: '', website: '' });
      setSelected([]);
    } catch (submissionError) {
      console.error('Hero form error:', submissionError);
      setError(submissionError instanceof Error ? submissionError.message : 'We could not send this right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <AnimatePresence mode="wait">
        {step === 'needs' && (
          <motion.div key="needs-step" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-5 sm:space-y-6">
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Project Focus</p>
              <p className="text-sm sm:text-base text-brand-400 leading-relaxed max-w-xl mx-auto">
                Choose the business area that needs attention first. We use this to route the brief and keep the next step focused.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {needs.map((need) => {
                const isSelected = selected.includes(need.id);
                return (
                  <button
                    key={need.id}
                    type="button"
                    onClick={() => toggleNeed(need.id)}
                    className={`relative min-h-[108px] sm:min-h-[116px] p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 ${isSelected ? 'bg-ink border-ink text-white shadow-xl' : 'bg-soft border-brand-100/50 text-brand-400 hover:border-accent hover:bg-white'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-accent text-white' : 'bg-white text-brand-400'}`}>
                      <need.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-center leading-tight">{need.title}</span>
                    {isSelected && (
                      <div className="absolute top-2 right-2 text-accent">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button disabled={selected.length === 0} onClick={() => setStep('contact')} className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-ink transition-all shadow-lg hover:bg-accent disabled:opacity-50">
                Continue To Brief
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 'contact' && (
          <motion.div key="contact-step" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass p-5 sm:p-6 rounded-3xl border border-white/20 shadow-2xl relative text-left">
            <button type="button" onClick={() => setStep('needs')} className="absolute top-4 right-4 p-2 hover:bg-soft rounded-full transition-colors text-brand-400">
              <X className="w-4 h-4" />
            </button>
            <div className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-2">Quick Intake</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2">Describe the business problem, not just the deliverable.</h3>
              <p className="text-sm sm:text-base text-brand-400 leading-relaxed">Selected focus: {selected.map((id) => needs.find((need) => need.id === id)?.title).join(', ')}</p>
            </div>
            <div className="space-y-3">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hero-website">Website</label>
                <input id="hero-website" value={formData.website} onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))} tabIndex={-1} autoComplete="off" />
              </div>
              <input value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} type="text" aria-invalid={!!error && formData.name.trim().length === 0} aria-describedby={error ? 'hero-brief-error' : undefined} placeholder="Full name" className="w-full px-5 py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent text-ink text-sm" />
              <input value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} type="email" aria-invalid={!!formData.email && !hasValidEmail} aria-describedby={error ? 'hero-brief-error' : undefined} placeholder="Business email" className="w-full px-5 py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent text-ink text-sm" />
              <textarea value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} aria-invalid={!!error && messageLength < 20} aria-describedby={error ? 'hero-brief-error' : undefined} placeholder="What is broken today, what should work better after this is built, and what is driving the urgency?" rows={4} className="w-full px-5 py-4 rounded-xl bg-soft border border-brand-100/50 focus:outline-none focus:border-accent text-ink text-sm resize-none" />
              <div className="flex items-center justify-between gap-3 text-xs text-brand-400">
                <p>Enough detail helps us recommend the right next move.</p>
                <p className={messageLength >= 20 ? 'text-emerald-700 font-semibold' : ''}>{messageLength}/20 minimum</p>
              </div>
              {error && <p id="hero-brief-error" className="text-sm text-red-600" role="alert">{error}</p>}
              <button type="button" onClick={() => void handleSubmit()} disabled={isSubmitting || !canSubmit} className="w-full py-4 rounded-xl bg-ink text-white font-bold text-sm hover:bg-accent transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Project Brief'}
              </button>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div key="success-step" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass p-8 rounded-3xl border border-white/20 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-100/50 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">Brief received</h3>
            <p className="text-brand-400 leading-relaxed">Your project focus and notes are in. We can now review the friction point properly and respond with the strongest next step.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
