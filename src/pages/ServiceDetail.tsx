import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { services } from '../data/services';

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
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-brand-400 hover:text-ink transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>

        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-3xl bg-soft border border-brand-100/50 flex items-center justify-center mb-8 text-ink">
              {service.icon}
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Service Detail</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-6">{service.title}</h1>
            <p className="text-xl text-brand-400 leading-relaxed mb-8">{service.longDescription}</p>

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

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-[2.5rem] bg-soft border border-brand-100/50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Best for</p>
            <div className="grid gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white border border-brand-100/40 p-5">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-brand-400 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <section className="py-16 border-t border-brand-100/30">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">What is included</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">A focused scope built around outcomes, not filler.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={feature} className="rounded-[2rem] bg-soft border border-brand-100/50 p-7">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-ink font-semibold mb-5">0{index + 1}</div>
                <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{feature}</h3>
                <p className="text-brand-400 leading-relaxed">This capability is adapted to the business context, current constraints, and the next stage of growth.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-brand-100/30">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Technology Stack</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">Tools chosen for maintainability and speed.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-5 py-3 rounded-full bg-soft border border-brand-100/50 text-ink font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
