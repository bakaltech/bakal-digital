import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import BrandedVisual from './BrandedVisual';

export default function ServicesPreview() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? '');

  const activeService = useMemo(
    () => services.find((service) => service.id === activeId) ?? services[0],
    [activeId],
  );

  if (!activeService) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 md:py-32 bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-10 sm:mb-14 md:mb-20">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">
            Explore The Capabilities
          </p>
          <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5 sm:mb-8">
            See how each service takes shape before you even open the detail page.
          </h2>
          <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-3xl">
            The best way to build trust right now is to let people experience the thinking. Each capability below carries a different operational shape, not just a different label.
          </p>
        </div>

        <div className="grid xl:grid-cols-[0.86fr_1.14fr] gap-6 sm:gap-8 md:gap-10 items-start">
          <div className="grid gap-3 sm:gap-4">
            {services.map((service) => {
              const isActive = service.id === activeService.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={`text-left rounded-[1.5rem] sm:rounded-[1.75rem] border p-5 sm:p-6 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-br ${service.theme.soft} ${service.theme.ring} shadow-[0_20px_50px_rgba(17,19,21,0.07)]`
                      : 'bg-white border-brand-100/50 hover:border-brand-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] ${service.theme.chip} mb-4`}>
                        {service.theme.label}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2">{service.title}</h3>
                      <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{service.signature}</p>
                    </div>
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${isActive ? `${service.theme.ring} bg-white/75` : 'border-brand-100/60 bg-soft'}`}>
                      {service.icon}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[2rem] sm:rounded-[2.5rem] border ${activeService.theme.ring} bg-gradient-to-br ${activeService.theme.soft} p-5 sm:p-7 md:p-8 shadow-[0_24px_60px_rgba(17,19,21,0.08)]`}
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-5 sm:gap-6 items-stretch">
              <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-brand-100/40 shadow-lg min-h-[280px] sm:min-h-[340px]">
                <BrandedVisual variant={activeService.theme.visual} title={activeService.title} className="rounded-[1.5rem] sm:rounded-[2rem]" />
              </div>

              <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-ink text-white p-5 sm:p-6 md:p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50 mb-3">Active Service Preview</p>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{activeService.title}</h3>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] ${activeService.theme.chip}`}>
                    {activeService.theme.label}
                  </span>
                </div>

                <div className="grid gap-3 mb-6">
                  {activeService.outcomes.map((outcome, index) => (
                    <div key={outcome} className="rounded-[1.25rem] bg-white/7 border border-white/10 p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/45 mb-2">0{index + 1}</p>
                      <p className="text-sm sm:text-base text-white/88 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 mb-3">Typical Scope</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeService.features.slice(0, 4).map((feature) => (
                      <span key={feature} className="px-3 py-2 rounded-full bg-white/8 border border-white/12 text-xs font-medium text-white/82">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/services/${activeService.id}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white transition-colors"
                    >
                      View Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('open-chat', {
                            detail: { query: `I want to explore ${activeService.title} for my business.` },
                          }),
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white font-semibold hover:border-white/35 transition-colors"
                    >
                      Ask About This
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
