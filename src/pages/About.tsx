import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandedVisual from '../components/BrandedVisual';

export default function About() {
  const principles = [
    {
      icon: Compass,
      title: 'Clarity before complexity',
      description: 'We define the real business problem first so the product, platform, or automation solves something meaningful instead of adding noise.',
    },
    {
      icon: Layers3,
      title: 'Product thinking inside the design',
      description: 'The interface matters, but so do the flows, integrations, prompts, handoffs, and decisions underneath it.',
    },
    {
      icon: Workflow,
      title: 'Systems that scale with you',
      description: 'We think beyond launch and build for future expansion, cleaner operations, and stronger internal workflows.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest, durable execution',
      description: 'No inflated claims, no fragile shortcuts, and no bloated process that slows down good work.',
    },
  ];

  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 sm:mb-24 md:mb-28">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">About</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-ink leading-[1.04] tracking-tight mb-6 sm:mb-8">
              A digital product studio focused on AI, platforms, automation, and premium execution.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">
              Bakal Digital helps businesses turn ideas, service offers, and operational friction into better digital systems. Sometimes that is a polished public website. Sometimes it is an AI assistant, a custom workflow, a commerce engine, or a client-facing platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 sm:mb-24 md:mb-28">
        <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-brand-100/40 aspect-[5/4] md:aspect-[21/9]">
          <BrandedVisual variant="studio" title="Operational clarity, premium execution" className="rounded-[3rem]" />
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">How We Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6 sm:mb-8">
              Lean enough to move quickly. Deep enough to build something real.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed mb-6">
              We are not trying to create agency theatre. The goal is to understand the problem, shape the right system, and deliver an experience that feels sharp, usable, and commercially useful.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed">
              That may involve repositioning the brand, simplifying the user journey, wiring up automations, designing an AI-assisted flow, or building a platform that supports the next stage of growth.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              'Audit the message, workflow, and friction points across the current experience.',
              'Identify where AI, automation, or product design can create real leverage.',
              'Design the structure so users can understand, act, and move forward with confidence.',
              'Build the system so it stays useful after launch instead of becoming another fragile layer.',
            ].map((point) => (
              <div key={point} className="rounded-[1.75rem] sm:rounded-[2rem] bg-paper border border-brand-100/50 p-6 sm:p-7">
                <p className="text-base sm:text-lg text-ink leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 sm:mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Principles</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">How we keep the work sharp.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {principles.map((principle) => (
              <motion.div key={principle.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.75rem] sm:rounded-[2rem] bg-soft border border-brand-100/50 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-5"><principle.icon className="w-5 h-5" /></div>
                <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{principle.title}</h3>
                <p className="text-brand-400 leading-relaxed text-base sm:text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-ink text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-6">Next Step</p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-white tracking-tight leading-[1.06] mb-8">
            If the business needs a stronger digital system, this is exactly the kind of work we are built for.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white transition-colors">
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
