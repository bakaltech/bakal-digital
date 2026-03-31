import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import TechMarquee from '../components/TechMarquee';
import { ChevronRight } from 'lucide-react';
import BrandedVisual from '../components/BrandedVisual';

export default function Services() {
  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 md:pt-32 pb-0">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 sm:mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6 sm:mb-8">Capabilities</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-ink leading-[1.05] mb-6 sm:mb-10 tracking-tight">
            Offers built around the points where growth, operations, and product quality usually start to break.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-3xl">
            Each service is a response to a concrete business problem: manual handling, weak conversion paths, shaky product foundations, disconnected tools, or reporting that still needs too much human stitching.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Best fit</p>
            <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
              Startups launching something real, and growing businesses replacing weak websites, brittle workflows, or disconnected operations with systems that can actually scale.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Best used when</p>
            <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
              The strongest results come when the business needs real product structure, workflow improvement, automation, or a stronger conversion layer, not just a surface-level refresh.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Proof before inquiry</p>
          <p className="text-base sm:text-lg text-brand-400 leading-relaxed">
            If you want to judge the build quality first, the proof library shows working demos, concept studies, and the delivery rhythm behind each type of engagement.
          </p>
          <Link to="/portfolio" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors">
            Review the proof library
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  to={`/services/${service.id}`}
                  className={`flex flex-col bg-gradient-to-br ${service.theme.soft} p-5 sm:p-6 md:p-8 rounded-[1.75rem] sm:rounded-[2.25rem] shadow-sm hover:shadow-2xl transition-all duration-700 group h-full border ${service.theme.ring} relative overflow-hidden`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
                  <div className="absolute -right-12 -top-12 w-44 h-44 blur-[60px] rounded-full bg-white/60 transition-colors duration-700" />

                  <div className="relative z-10 mb-6 sm:mb-8 rounded-[1.5rem] overflow-hidden border border-white/60 shadow-lg">
                    <BrandedVisual variant={service.theme.visual} title={service.title} compact className="rounded-[1.5rem]" />
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.22em] ${service.theme.chip} mb-4`}>
                      {service.theme.label}
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-white/80 border border-white/70 flex items-center justify-center mb-5 ${service.theme.accent}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-3 sm:mb-4 tracking-tight">
                      {service.offerTitle}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">
                      {service.title}
                    </p>
                    <p className="text-sm sm:text-base text-brand-400 leading-relaxed mb-5 sm:mb-6 font-normal">
                      {service.problem}
                    </p>
                    <div className="space-y-2 mb-8 sm:mb-10">
                      {service.outcomes.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-400/70">
                          <span className="mr-2 sm:mr-3 w-1.5 h-1.5 bg-ink/70 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-5 sm:pt-6 border-t border-ink/8 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ink group-hover:text-accent transition-colors">
                      {service.ctaLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 sm:mb-16 md:mb-24 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Our Process</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
              A direct path from business friction <br className="hidden md:block" /> to a system people can actually rely on.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative">
            <div className="absolute top-12 left-0 w-full h-[1px] bg-brand-100/50 hidden lg:block -z-10" />

            {[
              { step: '01', title: 'Find the leverage', desc: 'We define what is actually slowing growth, delivery, or conversion before we recommend structure.' },
              { step: '02', title: 'Design the system', desc: 'We shape the interface, product logic, data flow, and operational handoffs before build starts.' },
              { step: '03', title: 'Build with discipline', desc: 'Design, frontend, backend, integrations, and content move in one implementation cycle instead of siloed handoffs.' },
              { step: '04', title: 'Launch and refine', desc: 'We deploy, QA, and tighten the system so it keeps performing after the first release.' },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-paper border border-brand-100/50 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-100 mb-6 sm:mb-8 tracking-[-0.04em] group-hover:bg-soft group-hover:text-accent transition-all duration-500 shadow-sm">
                  {phase.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-3 sm:mb-4 tracking-tight">{phase.title}</h3>
                <p className="text-base md:text-lg text-brand-400 leading-relaxed font-normal">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-ink text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-6">Next Step</p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-white tracking-tight leading-[1.06] mb-8">
            If you already know where the friction is, the fastest move is to start from the right service.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white transition-colors">
              Start a Project
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:border-white/40 transition-colors"
            >
              Open Quick Brief
            </button>
          </div>
        </div>
      </section>

      <TechMarquee />
    </div>
  );
}
