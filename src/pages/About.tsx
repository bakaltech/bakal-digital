import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const principles = [
    {
      icon: Compass,
      title: 'Clarity before complexity',
      description: 'We simplify the offer, the navigation, and the user journey before adding more surface area or features.',
    },
    {
      icon: Layers3,
      title: 'Strategy inside the design',
      description: 'Visual polish matters, but the structure underneath it is what actually improves trust and conversion.',
    },
    {
      icon: Workflow,
      title: 'Systems that scale with you',
      description: 'We think beyond the launch and design for future updates, integrations, and cleaner internal workflows.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest, durable execution',
      description: 'No fake momentum, no inflated claims, and no fragile shortcuts that make the site harder to maintain later.',
    },
  ];

  return (
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">About</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink leading-[1.04] tracking-tight mb-8">A small studio built to make digital brands feel sharper, calmer, and more credible.</h1>
            <p className="text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">Bakal Digital is designed around one core idea: many businesses do not need a massive agency, they need a focused partner who can improve the structure, message, and feel of the website in a way customers instantly trust.</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-brand-100/40 aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80" alt="Bakal Digital studio direction" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">How We Work</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-8">Less agency theatre. More focused execution.</h2>
            <p className="text-lg md:text-xl text-brand-400 leading-relaxed mb-6">The process is intentionally lean. We identify what is creating friction, prioritize the changes that improve confidence and conversion, and make sure the site can keep evolving after launch.</p>
            <p className="text-lg md:text-xl text-brand-400 leading-relaxed">That can mean repositioning the homepage, tightening service messaging, building a cleaner intake flow, or improving the visual system so the business looks more established than it did before.</p>
          </div>
          <div className="grid gap-6">
            {[
              'Audit what feels unfinished, unclear, or untrustworthy.',
              'Refocus the structure around clearer user decisions.',
              'Polish the interface so it feels intentional, not templated.',
              'Build the supporting systems that make the site useful, not just attractive.',
            ].map((point) => (
              <div key={point} className="rounded-[2rem] bg-paper border border-brand-100/50 p-7">
                <p className="text-lg text-ink leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Principles</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">What makes the work feel premium.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {principles.map((principle) => (
              <motion.div key={principle.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-soft border border-brand-100/50 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-5"><principle.icon className="w-5 h-5" /></div>
                <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{principle.title}</h3>
                <p className="text-brand-400 leading-relaxed text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-6">Next Step</p>
          <h2 className="text-4xl md:text-7xl font-semibold text-white tracking-tight leading-[1.06] mb-8">If the website feels close but not fully there, that is exactly where we can help.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white transition-colors">
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
