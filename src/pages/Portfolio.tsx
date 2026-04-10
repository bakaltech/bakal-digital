import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ExternalLink, Github, Search } from 'lucide-react';
import { projects } from '../data/projects';
import { projectContext, type ProjectContextId } from '../data/projectContext';
import { deliverySteps, impactMetrics, proofDemos } from '../data/proof';
import BrandedVisual, { type VisualVariant } from '../components/BrandedVisual';
import {
  LuminaPortalDemo,
  NexusAIOpsDemo,
  OrbitOpsDemo,
  VelocityCommerceDemo,
} from '../components/ChartDemo';
import AcengeersShowcase from '../components/AcengeersShowcase';

function DemoPreview({ id }: { id: (typeof proofDemos)[number]['id'] }) {
  switch (id) {
    case 'nexus-ai':
      return <NexusAIOpsDemo activeFeature={0} />;
    case 'lumina-saas':
      return <LuminaPortalDemo activeFeature={0} />;
    case 'velocity-ecommerce':
      return <VelocityCommerceDemo activeFeature={0} />;
    case 'orbit-automation':
      return <OrbitOpsDemo activeFeature={0} />;
    default:
      return null;
  }
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-4xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-300 sm:text-lg">{text}</p>
    </div>
  );
}

function DarkShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,19,31,0.96)_0%,rgba(10,12,20,0.98)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-4">
      <p className="text-xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-brand-300">{label}</p>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'AI Systems', 'SaaS', 'E-commerce', 'Automation'];
  const featuredProject = projects.find((project) => project.id === 'acengeers');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.id === 'acengeers') {
        return false;
      }

      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        projectContext[project.id as ProjectContextId].pressurePoint.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-[#05070c] pt-24 pb-20 text-white sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <section className="mb-16 md:mb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">Work</p>
              <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Built to feel clear, premium, and commercially useful.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-300 sm:text-xl">
                A more organized showcase of real launches, focused product demos, and case studies with stronger hierarchy, cleaner spacing, and less noise.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/portfolio/acengeers"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
                >
                  Open featured launch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>

            <DarkShell className="overflow-hidden p-4 sm:p-5">
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_18rem]">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d1220]">
                  <AcengeersShowcase activeFeature={0} />
                </div>
                <div className="grid gap-4">
                  {[
                    ['Featured launch', 'Acengeers leads the page as the flagship website case study.'],
                    ['Cleaner structure', 'Each section now has one job instead of trying to do everything.'],
                    ['Better scale', 'Desktop gets a stronger rhythm and mobile gets fewer cramped blocks.'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{title}</p>
                      <p className="text-sm leading-relaxed text-brand-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DarkShell>
          </div>
        </section>

        {featuredProject ? (
          <section className="mb-20 md:mb-24">
            <DarkShell className="overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Featured launch
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">{featuredProject.category}</span>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{featuredProject.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-brand-300 sm:text-lg">{featuredProject.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business problem</p>
                      <p className="text-sm leading-relaxed text-brand-300">
                        {projectContext[featuredProject.id as ProjectContextId].pressurePoint}
                      </p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Commercial outcome</p>
                      <p className="text-sm leading-relaxed text-brand-300">
                        {projectContext[featuredProject.id as ProjectContextId].commercialOutcome}
                      </p>
                    </div>
                  </div>

                  {featuredProject.metricHighlights ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {featuredProject.metricHighlights.map((metric) => (
                        <div key={metric.label}>
                          <MiniMetric label={metric.label} value={metric.value} />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to={`/portfolio/${featuredProject.id}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
                    >
                      Open full case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      Live site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {featuredProject.repoUrl ? (
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                      >
                        Repository
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d1220]">
                    <AcengeersShowcase activeFeature={1} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {featuredProject.features.slice(0, 2).map((feature) => (
                      <div key={feature.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Focus area</p>
                        <h3 className="text-lg font-semibold tracking-tight text-white">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-300">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DarkShell>
          </section>
        ) : null}

        <section className="mb-20 md:mb-24">
          <SectionHeader
            eyebrow="Start building"
            title="Three ways to review the work without fighting the layout."
            text="The page is now organized into one featured launch, focused demos, and a supporting set of concept studies so each layer has a clear purpose."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Featured website launch',
                text: 'A stronger flagship presentation for Acengeers so shipped website work gets the visual weight it deserves.',
                cta: 'Open Acengeers',
                to: '/portfolio/acengeers',
                preview: <AcengeersShowcase activeFeature={2} />,
              },
              {
                title: 'Interactive product demos',
                text: 'Smaller, more isolated demos that show workflow behavior without collapsing into a grid of tiny previews.',
                cta: 'See demos below',
                to: '#working-demos',
                preview: <DemoPreview id="nexus-ai" />,
              },
              {
                title: 'Supporting case studies',
                text: 'A cleaner secondary layer for concept studies so the page keeps range without losing hierarchy.',
                cta: 'Browse studies',
                to: '#case-studies',
                preview: <BrandedVisual variant={'lumina-saas' as VisualVariant} title="Lumina Client Portal" className="rounded-[1.3rem]" />,
              },
            ].map((item) => (
              <div key={item.title}>
                <DarkShell className="overflow-hidden p-5 sm:p-6">
                <div className="mb-5 overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#0d1220]">{item.preview}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{item.text}</p>
                <Link
                  to={item.to}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                </DarkShell>
              </div>
            ))}
          </div>
        </section>

        <section id="working-demos" className="mb-20 scroll-mt-32 md:mb-24">
          <SectionHeader
            eyebrow="Product demos"
            title="Focused demonstrations that stay organized and easy to scan."
            text="Each demo sits inside the same modular shell, so the page feels consistent even while the product categories change."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {proofDemos.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <DarkShell className="h-full p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      {demo.eyebrow}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                      {projects.find((project) => project.id === demo.id)?.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{demo.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{demo.summary}</p>

                  <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1220]">
                    <div className="aspect-[16/10]">
                      <DemoPreview id={demo.id} />
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Why this matters</p>
                    <p className="text-sm leading-relaxed text-brand-300 sm:text-base">{demo.whyItMatters}</p>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/portfolio/${demo.id}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
                    >
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('open-chat', {
                            detail: { query: `I want a system like the ${demo.title.toLowerCase()} example.` },
                          }),
                        )
                      }
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      Ask about this build
                    </button>
                  </div>
                </DarkShell>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="mb-20 scroll-mt-32 md:mb-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <SectionHeader
              eyebrow="Case studies"
              title="A supporting grid that feels cleaner, calmer, and easier to browse."
              text="The concept studies still show range, but they now sit inside a tighter visual system instead of competing with the flagship launch."
            />

            <div className="space-y-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <Search className="h-4 w-4 text-brand-300" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search projects"
                  className="block w-full rounded-full border border-white/12 bg-white/[0.04] py-3.5 pl-12 pr-6 text-sm text-white placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                      filter === cat
                        ? 'bg-accent text-white'
                        : 'border border-white/12 bg-white/[0.04] text-brand-300 hover:border-accent hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <DarkShell className="h-full p-5 sm:p-6">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1220]">
                    <div className="aspect-[16/10]">
                      <BrandedVisual variant={project.id as VisualVariant} title={project.title} className="rounded-[1.5rem]" />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{project.category}</span>
                    <div className="h-[1px] w-8 bg-white/10" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">Case Study</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{project.description}</p>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business context</p>
                    <p className="text-sm leading-relaxed text-brand-300">
                      {projectContext[project.id as ProjectContextId].pressurePoint}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
                    >
                      Open case study
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('open-chat', {
                            detail: { query: `I want to build a workflow like ${project.title} for my business.` },
                          }),
                        )
                      }
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      Ask about this workflow
                    </button>
                  </div>
                </DarkShell>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <SectionHeader
            eyebrow="Outcomes"
            title="A cleaner proof layer that keeps business impact visible."
            text="The portfolio should not only look polished. It should show the kinds of commercial improvements the work is meant to create."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label}>
                <DarkShell className="p-5 sm:p-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">{metric.label}</p>
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{metric.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{metric.detail}</p>
                </DarkShell>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeader
              eyebrow="Delivery model"
              title="A modular process that stays clear from diagnosis to launch."
              text="The same structure that makes the page easier to understand also reflects how the projects themselves are run."
            />

            <div className="grid gap-4">
              {deliverySteps.map((item) => (
                <div key={item.step}>
                  <DarkShell className="p-5 sm:p-6">
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold text-accent">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-300 sm:text-base">{item.detail}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                      {item.artifact}
                    </div>
                  </div>
                  </DarkShell>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
