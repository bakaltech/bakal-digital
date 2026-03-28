import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import TechMarquee from '../components/TechMarquee';
import { ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-paper pt-40 pb-0">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">Capabilities</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-ink leading-[1.05] mb-10 tracking-tight">
            AI, platforms, automation, <br /> and digital systems built with intent.
          </h1>
          <p className="text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-3xl">
            We help businesses turn ideas, friction points, and growth opportunities into usable digital products. That can mean an AI assistant, a custom platform, a commerce engine, an internal tool, or a cleaner data workflow.
          </p>
        </motion.div>
      </section>

      <section className="bg-soft py-24 md:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                  className="flex flex-col bg-paper p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 group h-full border border-brand-100/50 relative overflow-hidden"
                >
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-accent/5 blur-[60px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-soft rounded-2xl flex items-center justify-center mb-6 md:mb-8 lg:mb-10 text-ink group-hover:bg-ink group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-ink mb-3 md:mb-4 lg:mb-6 tracking-tight group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-brand-400 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-normal">
                      {service.description}
                    </p>
                    <div className="space-y-2 md:space-y-3 mb-8 md:mb-10 lg:mb-12">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-widest text-brand-400/60">
                          <span className="mr-2 md:mr-3 w-1 h-1 bg-accent rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 md:pt-8 border-t border-brand-100/30 flex items-center justify-between">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-ink group-hover:text-accent transition-colors">
                      Explore Capability
                    </span>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 md:mb-32 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
              A practical path from problem <br className="hidden md:block" /> to working system.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 relative">
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
                <div className="w-20 h-20 md:w-24 md:h-24 bg-paper border border-brand-100/50 rounded-3xl flex items-center justify-center text-4xl md:text-5xl font-semibold text-brand-100 mb-8 tracking-tighter group-hover:bg-soft group-hover:text-accent transition-all duration-500 shadow-sm">
                  {phase.step}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4 tracking-tight">{phase.title}</h3>
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
