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
      title: 'Durable execution',
      description: 'Clear scope, reliable delivery, and no bloated process that slows down good work.',
    },
  ];

  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 sm:mb-24 md:mb-28">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">About</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-ink leading-[1.04] tracking-tight mb-6 sm:mb-8">
              We build AI-powered products and custom systems for startups and growing businesses that need more than generic tools.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">
              The work can look like a sharper website, a real SaaS platform, a client portal, an internal tool, a custom automation layer, or an AI-assisted product flow. The throughline is the same: build the digital system the business actually needs next.
            </p>
          </motion.div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Who this is for</p>
            <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
              Founders and operators who have a real business problem to solve: weak conversion, patchwork operations, manual drag, or a product that now needs a stronger foundation.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">How the studio is set up</p>
            <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
              The work is built for teams that need message, UX, product thinking, and implementation to stay connected instead of getting split across disconnected handoffs.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 sm:mb-24 md:mb-28">
        <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-brand-100/40 aspect-[5/4] md:aspect-[21/9]">
          <BrandedVisual variant="studio" title="Operational clarity, premium execution" className="rounded-[3rem]" />
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-soft border-y border-brand-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-10 md:gap-14 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Founder Note</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6 sm:mb-8">
              The studio is led like a build partner, not passed through layers of agency management.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed">
              Clients come here for direct thinking, clear tradeoffs, and a builder who can move from positioning into UX, product structure, and implementation without losing the thread.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.6rem] border border-brand-100/60 bg-soft text-xl font-semibold text-ink">
                  BD
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-2">What that means in practice</p>
                  <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
                    The same studio lead stays close to the problem framing, the UX decisions, the implementation shape, and the delivery rhythm. That keeps the work coherent and shortens the path from decision to shipped output.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ['Direct communication', 'Short path between the problem, the decision, and the work.'],
                ['Commercial focus', 'Every build choice has to support conversion, delivery, or operations.'],
                ['Scope discipline', 'Projects are framed around what needs to work first, not what sounds biggest.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-brand-100/50 bg-paper p-5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{title}</p>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-paper border-y border-brand-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Studio Point Of View</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6 sm:mb-8">
              The work is usually less about adding something new and more about removing what keeps slowing the business down.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed">
              That problem might show up in a weak website, manual handling, unclear onboarding, disconnected tools, or a product idea that still has no credible path to launch. The job is to identify the requirement and build the right layer around it.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: 'What clients are actually buying',
                text: 'A tighter offer, a stronger digital product, clearer workflow logic, and one team that can carry strategy, UX, design, and implementation together.',
              },
              {
                title: 'How the work is led',
                text: 'Each engagement is run with direct communication, a clear decision-maker, and a short path from discovery to build without unnecessary layers in the middle.',
              },
              {
                title: 'Why that matters',
                text: 'The result is not just a polished surface. It is a system that can sell, onboard, route, report, and operate with less operational drag.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{item.title}</p>
                <p className="text-base sm:text-lg text-brand-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">How We Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6 sm:mb-8">
              Lean enough to move decisively. Deep enough to build something real.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed mb-6">
              The job is to understand the requirement, design the right system around it, and ship something that holds up under real use.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-brand-400 leading-relaxed">
              That can involve positioning, UX, AI-assisted workflows, automation logic, product architecture, or the customer-facing layer that makes the whole thing easier to trust.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              'Audit the message, workflow, and operational gaps across the current experience.',
              'Define where AI, automation, UX, or product structure will create the most leverage first.',
              'Shape the system so users can understand, act, and move forward without confusion.',
              'Build the thing so it survives real use instead of becoming another fragile layer to manage.',
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
            If the business needs a stronger website, product, tool, or workflow layer, this is exactly the kind of build the studio is set up for.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white transition-colors">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:border-white/40 transition-colors">
              Review Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
