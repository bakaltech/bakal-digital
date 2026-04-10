import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
    <div className="min-h-screen bg-paper pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">Work & Demos</p>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
              <div className="max-w-5xl">
                <h1 className="mb-6 text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-7xl">
                  Selected work that shows how the studio improves real products, websites, and systems.
                </h1>
                <p className="max-w-4xl text-lg leading-relaxed text-brand-400 sm:text-xl md:text-2xl">
                  Review one featured launch, focused interactive demos, and a tighter set of case studies so the thinking stays clear on both desktop and mobile.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <Link
                  to="/portfolio/acengeers"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  See flagship case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['Featured launch', 'A real website launch presented as a polished case study instead of a flat gallery.'],
              ['Focused demos', 'Smaller product slices that show interaction logic, not just still screens.'],
              ['Commercial framing', 'Every project is presented through the problem, direction, and business outcome.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 shadow-sm sm:p-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{title}</p>
                <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {featuredProject ? (
          <section className="mb-20 md:mb-24">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-4xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Featured Launch</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                  A stronger way to showcase shipped website work.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-400 sm:text-lg">
                  Acengeers is positioned as the flagship web experience on the page so visitors immediately understand the level of craft, structure, and conversion thinking behind the work.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Live site
                  <ExternalLink className="h-4 w-4" />
                </a>
                {featuredProject.repoUrl ? (
                  <a
                    href={featuredProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Repository
                    <Github className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center">
              <div className="space-y-5">
                <div className="rounded-[2rem] border border-brand-100/50 bg-white p-6 shadow-sm md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Live Launch
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">{featuredProject.category}</span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{featuredProject.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-400 md:text-lg">{featuredProject.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-brand-100/50 bg-soft px-4 py-4">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business problem</p>
                      <p className="text-sm leading-relaxed text-brand-400">
                        {projectContext[featuredProject.id as ProjectContextId].pressurePoint}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-brand-100/50 bg-white px-4 py-4">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Commercial outcome</p>
                      <p className="text-sm leading-relaxed text-brand-400">
                        {projectContext[featuredProject.id as ProjectContextId].commercialOutcome}
                      </p>
                    </div>
                  </div>

                  {featuredProject.metricHighlights ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {featuredProject.metricHighlights.map((metric) => (
                        <div key={metric.label} className="rounded-[1.2rem] border border-brand-100/50 bg-soft px-4 py-4">
                          <p className="text-xl font-semibold tracking-tight text-ink">{metric.value}</p>
                          <p className="mt-1 text-xs leading-relaxed text-brand-400">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={`/portfolio/${featuredProject.id}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                    >
                      Open full case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('open-chat', {
                            detail: { query: `I want a website with the same quality and clarity as ${featuredProject.title}.` },
                          }),
                        )
                      }
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      Ask about this build
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.5rem] border border-brand-100/50 bg-soft shadow-[0_24px_80px_rgba(17,19,21,0.08)]">
                <AcengeersShowcase activeFeature={0} />
              </div>
            </div>
          </section>
        ) : null}

        <section id="working-demos" className="mb-20 scroll-mt-32 md:mb-24">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Interactive Demos</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                Focused product slices that show how the studio thinks in motion.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-400 sm:text-lg">
                These are smaller than full launches by design. Each one isolates a product behavior or workflow so visitors can judge the UX and system logic clearly.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {proofDemos.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                className="rounded-[2rem] border border-brand-100/50 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    {demo.eyebrow}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                    {projects.find((project) => project.id === demo.id)?.category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{demo.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-400 sm:text-base">{demo.summary}</p>

                <div className="mt-5 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-brand-100/50 bg-soft">
                  <DemoPreview id={demo.id} />
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-brand-100/50 bg-soft px-4 py-4">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Why this matters</p>
                  <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{demo.whyItMatters}</p>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/portfolio/${demo.id}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                  >
                    Open full case study
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
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Ask about this build
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="mb-20 scroll-mt-32 md:mb-24">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Case Studies</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                A tighter set of concept studies with clearer hierarchy and less clutter.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-400 sm:text-lg">
                The supporting case studies stay visible, but the page no longer forces every project to carry the same weight as the featured launch.
              </p>
            </div>

            <div className="w-full md:w-80">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <Search className="h-4 w-4 text-brand-400" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by project or business context..."
                  className="block w-full rounded-full border border-brand-100/50 bg-soft py-3.5 pl-12 pr-6 text-sm text-ink shadow-sm transition-all placeholder:text-brand-400 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-ink text-white shadow-lg'
                    : 'border border-brand-100/50 bg-soft text-brand-400 hover:bg-brand-100 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="rounded-[2rem] border border-brand-100/50 bg-white p-5 shadow-sm sm:p-6"
                >
                  <Link to={`/portfolio/${project.id}`} className="block">
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[2rem] bg-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                      <BrandedVisual variant={project.id as VisualVariant} title={project.title} className="rounded-[2rem]" />
                    </div>
                  </Link>

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.category}</span>
                    <div className="h-[1px] w-8 bg-brand-100" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">Case Study</span>
                  </div>

                  <Link to={`/portfolio/${project.id}`} className="block">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-accent md:text-3xl">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-base leading-relaxed text-brand-400">{project.description}</p>

                  <div className="mt-5 rounded-[1.2rem] border border-brand-100/50 bg-soft px-4 py-4">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business context</p>
                    <p className="text-sm leading-relaxed text-brand-400">
                      {projectContext[project.id as ProjectContextId].pressurePoint}
                    </p>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-brand-100/50 bg-soft">
                    <div className="border-b border-brand-100/50 px-4 py-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Preview</p>
                    </div>
                    <div className="aspect-[16/10]">
                      <DemoPreview id={project.id as (typeof proofDemos)[number]['id']} />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
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
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      Ask about this workflow
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink">No case study matches that view</h3>
              <p className="mb-8 text-lg text-brand-400">Try a different category or search term.</p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearch('');
                }}
                className="font-semibold text-accent underline-offset-8 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : null}
        </section>

        <section className="mb-20 md:mb-24">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Typical Outcomes</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                Evidence should point to business change, not just interface polish.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-400 sm:text-lg">
                The goal is always a clearer path to trust, conversion, operational clarity, or better delivery control.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.7rem] border border-brand-100/50 bg-white p-5 shadow-sm sm:p-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">{metric.label}</p>
                  <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{metric.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-400 sm:text-base">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery-process" className="mb-20 scroll-mt-32 md:mb-24">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Delivery Model</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                A delivery model that moves from requirements to shipped system without losing clarity.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-400 sm:text-lg">
                Projects are framed, scoped, built, and launched with visible momentum instead of black-box delivery.
              </p>
            </div>

            <div className="grid gap-4">
              {deliverySteps.map((item) => (
                <div key={item.step} className="rounded-[1.7rem] border border-brand-100/50 bg-white p-5 shadow-sm sm:p-6">
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100/60 bg-soft text-sm font-bold text-accent">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-400 sm:text-base">{item.detail}</p>
                    </div>
                    <div className="rounded-full border border-brand-100 bg-soft px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                      {item.artifact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-4">
          <div className="rounded-[2rem] border border-brand-100/50 bg-soft p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Why This Page Works Better</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                  One featured launch, clearer supporting work, and a much cleaner reading rhythm.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'The flagship project creates a clear first impression instead of competing with every other card.',
                  'The supporting case studies still show range, but they no longer overload the page with miniature previews.',
                  'Desktop has stronger hierarchy, and mobile has fewer dense blocks to fight through.',
                  'The page now sells the work more like a serious studio portfolio and less like a compressed project archive.',
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-brand-100/50 bg-white p-5 shadow-sm">
                    <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
