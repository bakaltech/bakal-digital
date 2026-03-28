import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock3, MessageSquare, Send, Sparkles } from 'lucide-react';

const openChat = () => {
  window.dispatchEvent(new CustomEvent('open-chat'));
};

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', company: '', message: '' });
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
        body: JSON.stringify({ ...formData, source: 'contact-page', interests: [] }),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (submissionError) {
      console.error('Contact form error:', submissionError);
      setError('Your message could not be sent right now. Please try again or use the guided brief.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Contact</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink leading-[1.04] tracking-tight mb-8">
              Tell us what you want to build, automate, or improve next.
            </h1>
            <p className="text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">
              Share the business context, the friction point, and the outcome you are aiming for. We can help shape the right next move across AI products, websites, platforms, automation, commerce, or internal systems.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div className="lg:col-span-5 space-y-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            {[
              { icon: Clock3, title: 'Fast project triage', text: 'Best for founders and growing teams who want a clear recommendation without a heavy agency process.' },
              { icon: Sparkles, title: 'Strategic and premium', text: 'We care about the experience, but also the system behind it: workflows, structure, messaging, and execution.' },
              { icon: MessageSquare, title: 'Two ways to start', text: 'Use the form for a direct message, or open the guided brief if you want help structuring the scope first.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-soft border border-brand-100/50 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-5"><item.icon className="w-5 h-5" /></div>
                <h2 className="text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h2>
                <p className="text-brand-400 leading-relaxed">{item.text}</p>
              </div>
            ))}

            <button type="button" onClick={openChat} className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors shadow-xl">
              <MessageSquare className="w-5 h-5" />
              Open Guided Brief
            </button>
          </motion.div>

          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="bg-soft rounded-[2.5rem] border border-brand-100/50 p-8 md:p-12 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-10 md:py-16">
                  <div className="w-20 h-20 rounded-full bg-white border border-brand-100/50 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-accent" /></div>
                  <h3 className="text-3xl font-semibold text-ink tracking-tight mb-4">Message received</h3>
                  <p className="text-lg text-brand-400 max-w-xl mx-auto leading-relaxed mb-8">Thanks for reaching out. Your project request has been captured and we can follow up from there.</p>
                  <button type="button" onClick={() => setIsSuccess(false)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
                    Send another message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required placeholder="Tell us what the business does, what you want to launch or improve, and what outcome matters most." className="w-full px-5 py-4 rounded-2xl bg-white border border-brand-100/50 text-ink placeholder:text-brand-400 focus:outline-none focus:border-accent resize-none" />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-ink text-white font-semibold hover:bg-accent transition-colors disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Send Project Request'}
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
