import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import {
  ConceptDemoNote,
  LuminaPortalDemo,
  NexusAIOpsDemo,
  OrbitOpsDemo,
  VelocityCommerceDemo,
} from '../components/ChartDemo';
import BrandedVisual from '../components/BrandedVisual';
import { projectContext, type ProjectContextId } from '../data/projectContext';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setActiveFeature(0);
  }, [id]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const context = projectContext[project.id as ProjectContextId];

  const renderDemo = () => {
    switch (project.id) {
      case 'nexus-ai':
        return <NexusAIOpsDemo activeFeature={activeFeature} />;
      case 'lumina-saas':
        return <LuminaPortalDemo activeFeature={activeFeature} />;
      case 'velocity-ecommerce':
        return <VelocityCommerceDemo activeFeature={activeFeature} />;
      case 'orbit-automation':
        return <OrbitOpsDemo activeFeature={activeFeature} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-paper pt-32 pb-24">
      <section className="relative pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-ink mb-12 transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-soft text-accent text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6 border border-brand-100/50">Concept Study | {project.category}</div>
              <h1 className="text-4xl md:text-7xl font-semibold text-ink leading-[1.08] mb-6 tracking-tight">{project.title}</h1>
              <p className="text-lg md:text-2xl text-brand-400 leading-relaxed mb-10">{project.description}</p>
              <div className="grid gap-4 mb-10">
                <div className="rounded-[1.6rem] border border-brand-100/50 bg-soft p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-2">Best for</p>
                  <p className="text-base text-brand-400 leading-relaxed">{context.audience}</p>
                </div>
                <div className="rounded-[1.6rem] border border-brand-100/50 bg-white p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-2">Commercial lens</p>
                  <p className="text-base text-brand-400 leading-relaxed">{context.commercialOutcome}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-soft border border-brand-100/50 rounded-full text-sm font-medium text-ink">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] border border-brand-100/50">
              <BrandedVisual variant={project.id as 'nexus-ai' | 'lumina-saas' | 'velocity-ecommerce' | 'orbit-automation'} title={project.title} className="rounded-[3rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">01. Business context</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5 tracking-tight">What is breaking in the current system.</h2>
            <p className="text-base md:text-lg text-brand-400 leading-relaxed">{context.pressurePoint}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">02. Direction</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5 tracking-tight">What the product layer should do next.</h2>
            <p className="text-base md:text-lg text-brand-400 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">03. Outcome</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5 tracking-tight">Why this direction is commercially useful.</h2>
            <p className="text-base md:text-lg text-brand-400 leading-relaxed">{project.results}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">Explorer</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6">Break the concept into the moments that actually matter.</h2>
            <p className="text-lg text-brand-400 leading-relaxed">Each demo is tailored to the concept so visitors can judge the interaction logic, not just read a description of it.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              {project.features.map((feature, idx) => (
                <button key={feature.title} type="button" onClick={() => setActiveFeature(idx)} className={`w-full text-left p-6 rounded-[1.75rem] transition-all border ${activeFeature === idx ? 'bg-soft border-brand-100 shadow-sm' : 'bg-transparent border-transparent hover:bg-soft/60'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl md:text-2xl font-semibold tracking-tight ${activeFeature === idx ? 'text-ink' : 'text-brand-400'}`}>{feature.title}</h3>
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeFeature === idx ? 'rotate-180 text-ink' : 'text-brand-400'}`} />
                  </div>
                  <AnimatePresence>
                    {activeFeature === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-base text-brand-400 leading-relaxed">{feature.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-soft border border-brand-100/50 aspect-[4/5] sm:aspect-[16/10] shadow-2xl flex items-center justify-center">
                <div className="absolute top-0 inset-x-0 h-12 bg-paper/80 backdrop-blur-md border-b border-brand-100/50 flex items-center px-6 gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-brand-100" />
                  <div className="w-3 h-3 rounded-full bg-brand-100" />
                  <div className="w-3 h-3 rounded-full bg-brand-100" />
                  <div className="ml-4 px-5 py-1.5 bg-white rounded-full text-[11px] text-brand-400 border border-brand-100/50">Interactive concept demo</div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={activeFeature} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} className="absolute inset-0 pt-12 flex flex-col items-center justify-center">
                    {renderDemo()}
                  </motion.div>
                </AnimatePresence>
              </div>

              <ConceptDemoNote />
              <div className="rounded-[1.75rem] border border-brand-100/50 bg-white p-6 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Scope note</p>
                <p className="text-sm sm:text-base text-brand-400 leading-relaxed">
                  This is a concept study used to show decision-making, UX structure, and system thinking. It is not presented as a live client deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-6">Next Step</p>
          <Link to="/contact" className="group inline-block">
            <h2 className="text-4xl md:text-7xl font-semibold text-white mb-10 tracking-tight leading-[1.04] group-hover:text-accent transition-colors">Need this level of direction for your own product, platform, or system?</h2>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-brand-400 text-white group-hover:bg-white group-hover:text-ink transition-all duration-500">
              <ArrowRight className="w-7 h-7" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
