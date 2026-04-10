import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ExternalLink, Github, Search } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { projectContext, type ProjectContextId } from '../data/projectContext';
import { deliverySteps, impactMetrics, proofDemos, proofQuestions } from '../data/proof';
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

function DemoSnapshot({ id, feature }: { id: Project['id']; feature: number }) {
  switch (id) {
    case 'acengeers':
      return <AcengeersShowcase activeFeature={feature} />;
    case 'nexus-ai':
      return <NexusAIOpsDemo activeFeature={feature} />;
    case 'lumina-saas':
      return <LuminaPortalDemo activeFeature={feature} />;
    case 'velocity-ecommerce':
      return <VelocityCommerceDemo activeFeature={feature} />;
    case 'orbit-automation':
      return <OrbitOpsDemo activeFeature={feature} />;
    default:
      return null;
  }
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Web Experience', 'AI Systems', 'SaaS', 'E-commerce', 'Automation'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
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
        <div className="mb-14 max-w-5xl sm:mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">Work & Demos</p>
            <h1 className="mb-6 text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-5xl md:mb-8 md:text-7xl">
              Selected work, polished demos, and case studies that show how the build actually thinks.
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-brand-400 sm:text-xl md:text-2xl">
              Review shipped website work, interactive product slices, and structured case studies so you can judge the clarity, craft, and commercial logic for yourself.
            </p>
          </motion.div>
        </div>

        <div className="mb-12 grid gap-4 md:mb-16 md:grid-cols-3">
          {[
            ['Shipped launches', 'Real website work presented in a stronger showcase format so the product decisions are easy to read.'],
            ['Interactive demos', 'Focused product slices that show how AI flows, portals, commerce paths, and operations tools can actually behave.'],
            ['Case studies', 'Structured examples that connect business context, build direction, and commercial outcome.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 shadow-sm sm:p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{title}</p>
              <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{text}</p>
            </div>
          ))}
        </div>

        <section className="py-4 sm:py-6 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="rounded-[1.9rem] border border-brand-100/50 bg-white p-6 shadow-sm sm:p-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Founder Profile</p>
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.8rem] border border-brand-100/60 bg-soft text-2xl font-semibold text-ink">
                  BD
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Builder-led from first diagnosis to final handoff.</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-400 sm:text-base">
                    Bakal Digital is run as a direct build partner for founders, operators, and growing teams that need software, AI workflows, and product systems tied to real business pressure. The studio stays close to the problem framing, the UX decisions, and the implementation shape so the work does not lose clarity between strategy and build.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Direct communication', 'The person framing the requirement stays close to the build.'],
                ['Commercial reasoning', 'Every screen, workflow, and system choice has to support revenue, delivery, or operations.'],
                ['Scope control', 'Projects are shaped around what needs to work first so momentum is real from the start.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.6rem] border border-brand-100/50 bg-soft p-5 shadow-sm">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{title}</p>
                  <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="working-demos" className="scroll-mt-32 py-8 sm:py-10 md:py-12">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between sm:mb-12">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Product Demonstrations</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                Interactive demonstrations that show how the studio shapes real product behavior, not just polished static screens.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-400 sm:text-lg">
                These demos are intentionally small and focused. They show interface quality, workflow logic, and system behavior in motion instead of relying on still images and promises.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-accent">
              Start from your requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
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

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {demo.whatItShows.map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-brand-100/50 bg-soft px-4 py-3">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">What it shows</p>
                      <p className="text-sm leading-relaxed text-brand-400">{item}</p>
                    </div>
                  ))}
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

        <section id="concept-studies" className="scroll-mt-32 py-16 sm:py-18 md:py-20">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end sm:mb-14">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Launches & Case Studies</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                Shipped launches and case studies that connect the business problem, the build direction, and the commercial outcome.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-400 sm:text-lg">
                This mix lets you review both real website work and structured concept cases, so the quality of the thinking is visible whether the project is already live or still presented as a directed concept.
              </p>
            </div>
          </div>

          <div className="mb-12 grid gap-4 md:grid-cols-4 sm:mb-14">
            {proofQuestions.map((question) => (
              <div key={question} className="rounded-[1.4rem] border border-brand-100/50 bg-soft p-5 shadow-sm">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Evaluation point</p>
                <p className="text-sm leading-relaxed text-brand-400 sm:text-base">{question}</p>
              </div>
            ))}
          </div>

          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center sm:mb-16">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
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

            <div className="group relative w-full md:w-80">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                <Search className="h-4 w-4 text-brand-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by project or business context..."
                className="block w-full rounded-full border border-brand-100/50 bg-soft py-3.5 pl-12 pr-6 text-sm text-ink shadow-sm transition-all placeholder:text-brand-400 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
              />
            </div>
          </div>

          <motion.div layout className="grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-x-12 sm:gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group flex flex-col"
                >
                  <div className="block">
                    <Link to={`/portfolio/${project.id}`} className="block">
                      <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-soft shadow-sm transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                        <BrandedVisual variant={project.id as VisualVariant} title={project.title} className="rounded-[2.5rem]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                      <div className="flex items-start justify-between px-2">
                        <div className="max-w-[82%]">
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.category}</span>
                            <div className="h-[1px] w-8 bg-brand-100" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
                              {project.status === 'launch' ? 'Live Launch' : 'Case Study'}
                            </span>
                          </div>
                          <h3 className="mb-3 text-2xl font-semibold tracking-tight text-ink transition-colors duration-500 group-hover:text-accent md:text-3xl">
                            {project.title}
                          </h3>
                          <p className="line-clamp-2 text-base leading-relaxed text-brand-400 md:text-lg">{project.description}</p>
                          <div className="mt-5 grid gap-3">
                            <div className="rounded-[1.1rem] border border-brand-100/50 bg-soft px-4 py-3">
                              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business context</p>
                              <p className="line-clamp-2 text-sm leading-relaxed text-brand-400">
                                {projectContext[project.id as ProjectContextId].pressurePoint}
                              </p>
                            </div>
                            <div className="rounded-[1.1rem] border border-brand-100/50 bg-white px-4 py-3">
                              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Commercial outcome</p>
                              <p className="line-clamp-2 text-sm leading-relaxed text-brand-400">
                                {projectContext[project.id as ProjectContextId].commercialOutcome}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </Link>

                    <div className="px-2">
                      {project.metricHighlights ? (
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {project.metricHighlights.slice(0, 4).map((metric) => (
                            <div key={metric.label} className="rounded-[1.1rem] border border-brand-100/50 bg-white px-4 py-3">
                              <p className="text-lg font-semibold tracking-tight text-ink">{metric.value}</p>
                              <p className="mt-1 text-xs leading-relaxed text-brand-400">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {[0, 1].map((feature) => (
                          <div key={feature} className="overflow-hidden rounded-[1.1rem] border border-brand-100/50 bg-soft">
                            <div className="border-b border-brand-100/50 px-3 py-2">
                              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Screen {feature + 1}</p>
                            </div>
                            <div className="aspect-[16/10]">
                              <DemoSnapshot id={project.id} feature={feature} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        {project.status === 'launch' && project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-100 bg-soft px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                          >
                            Live site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : null}
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                          >
                            Repository
                            <Github className="h-4 w-4" />
                          </a>
                        ) : null}
                        <button
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            window.dispatchEvent(
                              new CustomEvent('open-chat', {
                                detail: { query: `I want to build a workflow like ${project.title} for my business.` },
                              }),
                            );
                          }}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
                        >
                          Ask about this workflow
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 ? (
            <div className="py-28 text-center">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink">No case study matches that view</h3>
              <p className="mb-10 text-lg text-brand-400">Try a different category or search term.</p>
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

        <section className="py-16 sm:py-18 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Typical Outcomes</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                Evidence should point to business change, not just interface polish.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-400 sm:text-lg">
                These are typical targets for this kind of work, not client-specific claims. They show the kinds of improvements the studio is usually trying to create when the right system is put in place.
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

        <section id="delivery-process" className="scroll-mt-32 py-16 sm:py-18 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Delivery Model</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
                A delivery model that moves from requirements to shipped system without losing clarity in the middle.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-400 sm:text-lg">
                Buyers do not only need taste. They need confidence that the project can be scoped, run, built, and launched in a way that stays commercially useful all the way through.
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

        <section className="py-16 sm:py-18 md:py-20">
          <div className="rounded-[2rem] border border-brand-100/50 bg-soft p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">What You Can Review Here</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                  The studio can think clearly, design carefully, and build software around the way the business actually works.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'You can review interactive product behavior, not just hero visuals.',
                  'You can see how problems are translated into concrete build directions.',
                  'You can evaluate the delivery rhythm before starting a project.',
                  'You can decide whether the work feels commercially useful before you ever inquire.',
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
