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
            AI, platforms, automation, <br /> and digital systems built with intent.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-3xl">
            We help businesses turn ideas, friction points, and growth opportunities into usable digital products. That can mean an AI assistant, a custom platform, a commerce engine, an internal tool, or a cleaner data workflow.
          </p>
        </motion.div>
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
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-400 leading-relaxed mb-5 sm:mb-6 font-normal">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-8 sm:mb-10">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-400/70">
                          <span className="mr-2 sm:mr-3 w-1.5 h-1.5 bg-ink/70 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-5 sm:pt-6 border-t border-ink/8 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ink group-hover:text-accent transition-colors">
                      Explore Capability
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
              A practical path from problem <br className="hidden md:block" /> to working system.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative">
            <div className="absolute top-12 left-0 w-full h-[1px] bg-brand-100/50 hidden lg:block -z-10" />

            {[
              { step: '01', title: 'Discovery', desc: 'We clarify the business problem, the user journey, and the leverage point before proposing features.' },
              { step: '02', title: 'System Design', desc: 'We shape the product structure, data flow, automation logic, and interface direction before build starts.' },
              { step: '03', title: 'Build', desc: 'Design, frontend, backend, integrations, and content come together in a focused implementation cycle.' },
              { step: '04', title: 'Launch & Improve', desc: 'We test, deploy, and refine the product so it keeps working after the first release.' },
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

      <TechMarquee />
    </div>
  );
}
