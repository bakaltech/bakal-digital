import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink, Github, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';
import {
  LuminaPortalDemo,
  NexusAIOpsDemo,
  OrbitOpsDemo,
  VelocityCommerceDemo,
} from '../components/ChartDemo';
import AcengeersShowcase from '../components/AcengeersShowcase';
import BrandedVisual, { type VisualVariant } from '../components/BrandedVisual';
import { projectContext, type ProjectContextId } from '../data/projectContext';

function ConceptNote() {
  return (
    <div className="rounded-[2rem] border border-brand-100/50 bg-white p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-100/50 bg-soft text-accent">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">What You Are Seeing</p>
          <p className="leading-relaxed text-brand-400">
            This section is an interactive concept simulation built to show how the product or workflow could behave. It is tailored to the case study, but it is not presented as a live client system.
          </p>
        </div>
      </div>
    </div>
  );
}

function LaunchNote() {
  return (
    <div className="rounded-[2rem] border border-brand-100/50 bg-white p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-100/50 bg-soft text-accent">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Showcase Notes</p>
          <p className="leading-relaxed text-brand-400">
            This walkthrough is based on a real shipped website. The interface here is curated to highlight the design decisions, conversion logic, and responsive behavior in a cleaner, more presentation-grade format.
          </p>
        </div>
      </div>
    </div>
  );
}

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
  const isLaunch = project.status === 'launch';
  const heroLabel = isLaunch ? 'Live Launch' : 'Concept Study';
  const visualVariant = project.id as VisualVariant;

  const renderDemo = () => {
    switch (project.id) {
      case 'acengeers':
        return <AcengeersShowcase activeFeature={activeFeature} />;
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/portfolio" className="group mb-12 inline-flex items-center text-sm font-semibold text-brand-400 transition-colors hover:text-ink">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-6 inline-flex items-center rounded-full border border-brand-100/50 bg-soft px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent md:text-xs">
                {heroLabel} | {project.category}
              </div>
              <h1 className="mb-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-7xl">{project.title}</h1>
              <p className="mb-10 text-lg leading-relaxed text-brand-400 md:text-2xl">{project.description}</p>

              {isLaunch && (project.year || project.role || project.launchFacts?.length) ? (
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {project.year ? (
                    <div className="rounded-[1.35rem] border border-brand-100/50 bg-white p-4 shadow-sm">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Year</p>
                      <p className="text-sm font-medium text-ink">{project.year}</p>
                    </div>
                  ) : null}
                  {project.role ? (
                    <div className="rounded-[1.35rem] border border-brand-100/50 bg-white p-4 shadow-sm">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Role</p>
                      <p className="text-sm font-medium text-ink">{project.role}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="mb-8 flex flex-wrap gap-3">
                {isLaunch && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                  >
                    Visit live site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    View repository
                    <Github className="h-4 w-4" />
                  </a>
                ) : null}
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Build something similar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mb-10 grid gap-4">
                <div className="rounded-[1.6rem] border border-brand-100/50 bg-soft p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Best for</p>
                  <p className="text-base leading-relaxed text-brand-400">{context.audience}</p>
                </div>
                <div className="rounded-[1.6rem] border border-brand-100/50 bg-white p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Commercial lens</p>
                  <p className="text-base leading-relaxed text-brand-400">{context.commercialOutcome}</p>
                </div>
              </div>

              {project.metricHighlights ? (
                <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {project.metricHighlights.map((metric) => (
                    <div key={metric.label} className="rounded-[1.4rem] border border-brand-100/50 bg-white p-4 shadow-sm">
                      <p className="text-2xl font-semibold tracking-tight text-ink">{metric.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {isLaunch && project.launchFacts ? (
                <div className="mb-10 grid gap-3 sm:grid-cols-2">
                  {project.launchFacts.map((fact) => (
                    <div key={fact.label} className="rounded-[1.35rem] border border-brand-100/50 bg-soft p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{fact.label}</p>
                      <p className="text-sm leading-relaxed text-brand-400">{fact.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-brand-100/50 bg-soft px-4 py-2 text-sm font-medium text-ink">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border border-brand-100/50 shadow-2xl"
            >
              <BrandedVisual variant={visualVariant} title={project.title} className="rounded-[3rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">01. Business context</div>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">What is breaking in the current system.</h2>
            <p className="text-base leading-relaxed text-brand-400 md:text-lg">{context.pressurePoint}</p>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">02. Direction</div>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">What the product layer should do next.</h2>
            <p className="text-base leading-relaxed text-brand-400 md:text-lg">{project.solution}</p>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">03. Outcome</div>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">Why this direction is commercially useful.</h2>
            <p className="text-base leading-relaxed text-brand-400 md:text-lg">{project.results}</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">Experience Walkthrough</p>
            <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              {isLaunch
                ? 'Show the shipped experience through the moments that create trust, clarity, and conversion.'
                : 'Break the concept into the moments that actually matter.'}
            </h2>
            <p className="text-lg leading-relaxed text-brand-400">
              {isLaunch
                ? 'Instead of dumping screenshots and development notes, this walkthrough stages the moments that matter most: first impression, service clarity, proof, and the path to inquiry.'
                : 'Each demo is tailored to the concept so visitors can judge the interaction logic, not just read a description of it.'}
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              {project.features.map((feature, idx) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full rounded-[1.75rem] border p-6 text-left transition-all ${
                    activeFeature === idx ? 'border-brand-100 bg-soft shadow-sm' : 'border-transparent bg-transparent hover:bg-soft/60'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className={`text-xl font-semibold tracking-tight md:text-2xl ${activeFeature === idx ? 'text-ink' : 'text-brand-400'}`}>
                      {feature.title}
                    </h3>
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeFeature === idx ? 'rotate-180 text-ink' : 'text-brand-400'}`} />
                  </div>
                  <AnimatePresence>
                    {activeFeature === idx ? (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-base leading-relaxed text-brand-400">{feature.description}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] border border-brand-100/50 bg-soft shadow-2xl sm:aspect-[16/10] md:rounded-[3rem]">
                <div className="absolute inset-x-0 top-0 z-10 flex h-12 items-center gap-2 border-b border-brand-100/50 bg-paper/80 px-6 backdrop-blur-md">
                  <div className="h-3 w-3 rounded-full bg-brand-100" />
                  <div className="h-3 w-3 rounded-full bg-brand-100" />
                  <div className="h-3 w-3 rounded-full bg-brand-100" />
                  <div className="ml-4 rounded-full border border-brand-100/50 bg-white px-5 py-1.5 text-[11px] text-brand-400">
                    {isLaunch ? 'Premium case study walkthrough' : 'Interactive concept demo'}
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="absolute inset-0 flex flex-col items-center justify-center pt-12"
                  >
                    {renderDemo()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {isLaunch ? <LaunchNote /> : <ConceptNote />}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand-400">Next Step</p>
          <Link to="/contact" className="group inline-block">
            <h2 className="mb-10 text-4xl font-semibold leading-[1.04] tracking-tight text-white transition-colors group-hover:text-accent md:text-7xl">
              {isLaunch
                ? 'Need a website that feels this clear, premium, and commercially sharp for your own business?'
                : 'Need this level of direction for your own product, platform, or system?'}
            </h2>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand-400 text-white transition-all duration-500 group-hover:bg-white group-hover:text-ink">
              <ArrowRight className="h-7 w-7" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
