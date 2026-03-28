import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, ChevronDown, CheckCircle2, ArrowRight, Activity, Database, BarChart3 } from 'lucide-react';
import { projects } from '../data/projects';
import { AnalyticsChart, IoTChart } from '../components/ChartDemo';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [activeFeature, setActiveFeature] = useState(0);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const renderDemo = () => {
    if (project.id === 'lumina-saas' && activeFeature === 2) {
      return <AnalyticsChart />;
    }
    if (project.id === 'orbit-automation' && (activeFeature === 0 || activeFeature === 2)) {
      return <IoTChart />;
    }

    return (
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-12">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-paper rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-8 shadow-sm text-ink">
          <span className="text-3xl md:text-4xl font-semibold tracking-tighter">{activeFeature + 1}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4 md:mb-6 tracking-tight">
          {project.features[activeFeature].title}
        </h3>
        <p className="text-base md:text-lg text-brand-400 max-w-md font-normal leading-relaxed">
          Interactive demonstration of this feature would load here. For now, this is a placeholder representing the demo viewer.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-paper pt-32 pb-32">
      {/* Hero */}
      <section className="relative pt-12 md:pt-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-ink mb-12 md:mb-16 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-soft text-accent text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6 md:mb-8 border border-brand-100/50">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-7xl font-semibold text-ink leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl text-brand-400 font-normal leading-relaxed mb-8 md:mb-12">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 md:px-5 md:py-2 bg-soft border border-brand-100/50 rounded-full text-xs md:text-sm font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-lg font-bold rounded-full text-white bg-ink overflow-hidden transition-all shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    Visit Live Site <ExternalLink className="ml-2 h-5 w-5" />
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] border border-brand-100/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-48 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">01. The Challenge</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6 md:mb-8 tracking-tight">Understanding the friction.</h2>
              <p className="text-base md:text-lg text-brand-400 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">02. The Solution</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6 md:mb-8 tracking-tight">Architecting for scale.</h2>
              <p className="text-base md:text-lg text-brand-400 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">03. The Results</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6 md:mb-8 tracking-tight">Measuring the impact.</h2>
              <p className="text-base md:text-lg text-brand-400 leading-relaxed font-normal">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Explorer */}
      <section className="py-24 md:py-48 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Deep Dive</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
              Interactive <br className="hidden md:block" /> Feature Explorer
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
            {/* Accordion List */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
              {project.features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transition-all border ${
                    activeFeature === idx
                      ? 'bg-soft border-brand-100 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-soft/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className={`text-xl md:text-2xl font-semibold tracking-tight ${activeFeature === idx ? 'text-ink' : 'text-brand-400'}`}>
                      {feature.title}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeFeature === idx ? 'rotate-180 text-ink' : 'text-brand-400'
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {activeFeature === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base md:text-lg text-brand-400 leading-relaxed font-normal">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Demo Viewer */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-soft border border-brand-100/50 aspect-[4/5] sm:aspect-[16/10] shadow-2xl flex items-center justify-center">
                {/* Browser Top Bar */}
                <div className="absolute top-0 inset-x-0 h-8 md:h-10 lg:h-12 bg-paper/80 backdrop-blur-md border-b border-brand-100/50 flex items-center px-3 md:px-4 lg:px-6 gap-1 md:gap-2 z-10">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-100" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-100" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-100" />
                  <div className="ml-3 md:ml-4 lg:ml-6 flex-1 flex justify-center">
                    <div className="px-3 py-1 md:px-4 md:py-1.5 lg:px-6 lg:py-1.5 bg-soft rounded-full text-[8px] md:text-[10px] text-brand-400 font-mono flex items-center gap-1 md:gap-2 border border-brand-100/50">
                      <CheckCircle2 size={8} className="text-accent" />
                      {project.liveUrl !== '#' ? project.liveUrl.replace('https://', '') : 'demo.bakaldigital.com'}
                    </div>
                  </div>
                </div>
                
                {/* Placeholder for demo */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 pt-8 md:pt-10 lg:pt-12 flex flex-col items-center justify-center"
                  >
                    {renderDemo()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-48 bg-ink text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-8">Next Project</p>
          <Link 
            to="/portfolio" 
            className="group inline-block"
          >
            <h2 className="text-5xl md:text-8xl font-semibold text-white mb-12 tracking-tight leading-none group-hover:text-accent transition-colors">
              Explore more <br /> selected works.
            </h2>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-brand-400 text-white group-hover:bg-white group-hover:text-ink transition-all duration-500">
              <ArrowRight className="w-10 h-10" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
