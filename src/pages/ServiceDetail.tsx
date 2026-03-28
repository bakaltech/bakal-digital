import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { services } from '../data/services';
import BrandedVisual from '../components/BrandedVisual';

const openChat = (serviceTitle: string) => {
  window.dispatchEvent(
    new CustomEvent('open-chat', {
      detail: { query: `I need help with ${serviceTitle}.` },
    }),
  );
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-paper pt-36 pb-24 px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-ink tracking-tight mb-4">Service not found</h1>
        <p className="text-brand-400 mb-8">The service you requested is not available.</p>
        <Link to="/services" className="inline-flex items-center gap-2 text-ink hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-brand-400 hover:text-ink transition-colors mb-8 sm:mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 sm:gap-14 items-start mb-16 sm:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.22em] ${service.theme.chip} mb-6`}>
              {service.theme.label}
            </div>
            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} flex items-center justify-center mb-8 ${service.theme.accent}`}>
              {service.icon}
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Service Detail</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.02] mb-6">{service.title}</h1>
            <p className="text-lg sm:text-xl text-brand-400 leading-relaxed mb-6">{service.longDescription}</p>
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl">{service.signature}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => openChat(service.title)} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
                <MessageSquare className="w-4 h-4" />
                Discuss this service
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-100 bg-white text-ink font-semibold hover:border-accent hover:text-accent transition-colors">
                Send direct inquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-100/50 aspect-[4/3] md:aspect-[16/11]">
              <BrandedVisual variant={service.theme.visual} title={service.title} className="rounded-[2rem] sm:rounded-[2.5rem]" />
            </div>
            <div className={`rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} p-6 sm:p-8 md:p-10`}>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Best for</p>
              <div className="grid gap-4">
                {service.idealFor.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 border border-white/70 p-5">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${service.theme.accent}`} />
                    <p className="text-brand-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <section className="py-12 sm:py-16 border-t border-brand-100/30">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 sm:gap-10 md:gap-14 items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Where it creates leverage</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-5">A more specific shape for how this service helps.</h2>
              <p className="text-base sm:text-lg text-brand-400 leading-relaxed">Each engagement is tailored, but the strongest outcomes usually show up in these areas.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {service.outcomes.map((outcome, index) => (
                <div key={outcome} className={`rounded-[1.5rem] bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} p-5 sm:p-6`}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-4">0{index + 1}</p>
                  <p className="text-base text-ink leading-relaxed font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-brand-100/30">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Engagement shape</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">A practical path from idea or friction point to a working system.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {service.engagementSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} flex items-center justify-center font-semibold mb-5 ${service.theme.accent}`}>0{index + 1}</div>
                <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{step.title}</h3>
                <p className="text-brand-400 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-brand-100/30">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">What is included</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">A focused scope built around outcomes, not filler.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {service.features.map((feature, index) => (
              <div key={feature} className={`rounded-[1.75rem] bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} p-6 sm:p-7`}>
                <div className={`w-11 h-11 rounded-2xl bg-white/80 border border-white/70 flex items-center justify-center font-semibold mb-5 ${service.theme.accent}`}>0{index + 1}</div>
                <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{feature}</h3>
                <p className="text-brand-400 leading-relaxed">This capability is adapted to the business context, current constraints, and the next stage of growth.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-brand-100/30">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 md:gap-14 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Technology Stack</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-5">Tools chosen for maintainability and speed.</h2>
              <p className="text-base sm:text-lg text-brand-400 leading-relaxed">We choose the stack based on product fit, maintainability, speed to launch, and what your team can realistically support long term.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span key={tech} className={`px-5 py-3 rounded-full bg-gradient-to-br ${service.theme.soft} border ${service.theme.ring} text-ink font-medium`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
