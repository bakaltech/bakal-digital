import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock3, MessageSquare, Send, ShieldCheck, Sparkles } from 'lucide-react';

const openChat = () => {
  window.dispatchEvent(new CustomEvent('open-chat'));
};

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', company: '', message: '', website: '' });
  const [formStartedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact-page', interests: [], startedAt: formStartedAt }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || `Contact request failed with status ${response.status}`);
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '', website: '' });
    } catch (submissionError) {
      console.error('Contact form error:', submissionError);
      setError(submissionError instanceof Error ? submissionError.message : 'Your message could not be sent right now. Please try again or use the guided brief.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-14 sm:mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Contact</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-ink leading-[1.04] tracking-tight mb-6 sm:mb-8">
              Tell us what needs to change, and what outcome matters most.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">
              Share the business context, the bottleneck, and the result you are trying to create. We will use that to determine fit and map the strongest next step.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div className="lg:col-span-5 space-y-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            {[ 
              { icon: Clock3, title: 'Fast first response', text: 'Best for teams that need a clear recommendation quickly instead of a drawn-out discovery cycle.' },
              { icon: Sparkles, title: 'Built around leverage', text: 'We focus on the bottleneck that changes conversion, clarity, or execution speed, not just surface polish.' },
              { icon: MessageSquare, title: 'Two clear starting points', text: 'Use the form if the problem is already clear. Use the guided brief if you want help shaping the scope.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] sm:rounded-[2rem] bg-soft border border-brand-100/50 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-5"><item.icon className="w-5 h-5" /></div>
                <h2 className="text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h2>
                <p className="text-brand-400 leading-relaxed">{item.text}</p>
              </div>
            ))}

            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-ink text-white p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent mb-5"><ShieldCheck className="w-5 h-5" /></div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">What happens next</h2>
              <div className="space-y-3 text-white/75 leading-relaxed">
                <p>We review the request, assess fit, and decide what kind of response will be most useful before replying.</p>
                <p>If the opportunity is aligned, the next step may be recommendations, scope direction, relevant examples, or a direct conversation.</p>
              </div>
            </div>

            <button type="button" onClick={openChat} className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors shadow-xl">
              <MessageSquare className="w-5 h-5" />
              Start With Guided Brief
            </button>
          </motion.div>

          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="bg-soft rounded-[2rem] sm:rounded-[2.5rem] border border-brand-100/50 p-6 sm:p-8 md:p-12 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-10 md:py-16">
                  <div className="w-20 h-20 rounded-full bg-white border border-brand-100/50 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-accent" /></div>
                  <h3 className="text-3xl font-semibold text-ink tracking-tight mb-4">Message received</h3>
                  <p className="text-lg text-brand-400 max-w-xl mx-auto leading-relaxed mb-8">Your project request is in. We now have enough context to assess fit and respond with the clearest next step.</p>
                  <button type="button" onClick={() => setIsSuccess(false)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
                    Send another message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">Name</label>
                      <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="w-full px-5 py-4 rounded-2xl bg-white border border-brand-100/50 text-ink placeholder:text-brand-400 focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">Email</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="w-full px-5 py-4 rounded-2xl bg-white border border-brand-100/50 text-ink placeholder:text-brand-400 focus:outline-none focus:border-accent" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">Company or brand</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Optional" className="w-full px-5 py-4 rounded-2xl bg-white border border-brand-100/50 text-ink placeholder:text-brand-400 focus:outline-none focus:border-accent" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">Project details</label>
                    <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required placeholder="What does the business do, what is not working well enough right now, and what should be measurably better after this project?" className="w-full px-5 py-4 rounded-2xl bg-white border border-brand-100/50 text-ink placeholder:text-brand-400 focus:outline-none focus:border-accent resize-none" />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-ink text-white font-semibold hover:bg-accent transition-colors disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Send Project Details'}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
