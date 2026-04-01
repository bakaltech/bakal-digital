import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Search } from 'lucide-react';
import { projects } from '../data/projects';
import { projectContext, type ProjectContextId } from '../data/projectContext';
import { deliverySteps, impactMetrics, proofDemos, proofQuestions } from '../data/proof';
import BrandedVisual from '../components/BrandedVisual';
import {
  LuminaPortalDemo,
  NexusAIOpsDemo,
  OrbitOpsDemo,
  VelocityCommerceDemo,
} from '../components/ChartDemo';

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

function DemoSnapshot({
  id,
  feature,
}: {
  id: (typeof proofDemos)[number]['id'];
  feature: number;
}) {
  switch (id) {
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

  const categories = ['All', 'AI Systems', 'SaaS', 'E-commerce', 'Automation'];

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
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mb-14 sm:mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Work & Demos</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-ink mb-6 sm:mb-8 tracking-tight leading-[1.04]">
              Selected work, working demos, and delivery examples.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-400 leading-relaxed max-w-4xl">
              Review product behavior, case studies, and delivery examples so you can evaluate the thinking, build quality, and operating discipline for yourself.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-12 sm:mb-14 md:mb-16">
          {[
            ['Product demos', 'Interactive product slices that show how AI flows, portals, commerce paths, and operations tools can actually behave.'],
            ['Case studies', 'Structured examples that connect business context, build direction, and commercial outcome.'],
            ['Delivery model', 'A visible delivery model that shows how work moves from requirements to shipped system.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 sm:p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{title}</p>
              <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <section className="py-4 sm:py-6 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="rounded-[1.9rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Founder Profile</p>
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.8rem] border border-brand-100/60 bg-soft text-2xl font-semibold text-ink">
                  BD
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">Builder-led from first diagnosis to final handoff.</h2>
                  <p className="mt-3 text-sm sm:text-base text-brand-400 leading-relaxed">
                    Bakal Digital is run as a direct build partner for founders, operators, and growing teams that need software, AI workflows, and product systems tied to real business pressure. The studio stays close to the problem framing, the UX decisions, and the implementation shape so the work does not lose clarity between strategy and build.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ['Direct communication', 'The person framing the requirement stays close to the build.'],
                ['Commercial reasoning', 'Every screen, workflow, and system choice has to support revenue, delivery, or operations.'],
                ['Scope control', 'Projects are shaped around what needs to work first so momentum is real from the start.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.6rem] border border-brand-100/50 bg-soft p-5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{title}</p>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="working-demos" className="scroll-mt-32 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 sm:mb-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Product Demonstrations</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Interactive demonstrations that show how the studio shapes real product behavior, not just polished static screens.
              </h2>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-brand-400 leading-relaxed">
                These demos are intentionally small and focused. They show interface quality, workflow logic, and system behavior in motion instead of relying on still images and promises.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-accent transition-colors">
              Start from your requirements
              <ArrowRight className="w-4 h-4" />
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
                className="rounded-[2rem] border border-brand-100/50 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    {demo.eyebrow}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                    {projects.find((project) => project.id === demo.id)?.category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink tracking-tight">{demo.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-brand-400 leading-relaxed">{demo.summary}</p>

                <div className="mt-5 rounded-[1.75rem] overflow-hidden border border-brand-100/50 bg-soft aspect-[16/10]">
                  <DemoPreview id={demo.id} />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {demo.whatItShows.map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-brand-100/50 bg-soft px-4 py-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-1">What it shows</p>
                      <p className="text-sm text-brand-400 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-brand-100/50 bg-soft px-4 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-2">Why this matters</p>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{demo.whyItMatters}</p>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/portfolio/${demo.id}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                  >
                    Open full case study
                    <ArrowRight className="w-4 h-4" />
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-14">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Case Studies</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Case studies that connect the business problem, the build direction, and the commercial outcome.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed max-w-3xl">
                These structured concept cases show how the work would be framed before code is written and before scope drifts into guesswork.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-12 sm:mb-14">
            {proofQuestions.map((question) => (
              <div key={question} className="rounded-[1.4rem] border border-brand-100/50 bg-soft p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Evaluation point</p>
                <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{question}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 mb-14 sm:mb-16">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    filter === cat
                      ? 'bg-ink text-white shadow-lg'
                      : 'bg-soft text-brand-400 hover:text-ink hover:bg-brand-100 border border-brand-100/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-brand-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by project or business context..."
                className="block w-full pl-12 pr-6 py-3.5 bg-soft border border-brand-100/50 rounded-full text-sm text-ink focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all placeholder:text-brand-400 shadow-sm"
              />
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-14 sm:gap-y-20">
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
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-soft mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                      <BrandedVisual
                        variant={project.id as 'nexus-ai' | 'lumina-saas' | 'velocity-ecommerce' | 'orbit-automation'}
                        title={project.title}
                        className="rounded-[2.5rem]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex justify-between items-start px-2">
                      <div className="max-w-[82%]">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.category}</span>
                          <div className="h-[1px] w-8 bg-brand-100" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">Case Study</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className="text-base md:text-lg text-brand-400 line-clamp-2 leading-relaxed">{project.description}</p>
                        <div className="mt-5 grid gap-3">
                          <div className="rounded-[1.1rem] border border-brand-100/50 bg-soft px-4 py-3">
                            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-1">Business context</p>
                            <p className="text-sm text-brand-400 leading-relaxed line-clamp-2">
                              {projectContext[project.id as ProjectContextId].pressurePoint}
                            </p>
                          </div>
                          <div className="rounded-[1.1rem] border border-brand-100/50 bg-white px-4 py-3">
                            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-1">Commercial outcome</p>
                            <p className="text-sm text-brand-400 leading-relaxed line-clamp-2">
                              {projectContext[project.id as ProjectContextId].commercialOutcome}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                    </Link>

                    <div className="px-2">
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {[0, 1].map((feature) => (
                            <div key={feature} className="overflow-hidden rounded-[1.1rem] border border-brand-100/50 bg-soft">
                              <div className="border-b border-brand-100/50 px-3 py-2">
                                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
                                  Screen {feature + 1}
                                </p>
                              </div>
                              <div className="aspect-[16/10]">
                                <DemoSnapshot id={project.id as (typeof proofDemos)[number]['id']} feature={feature} />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                          <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-100 bg-soft px-4 py-2 text-sm font-medium text-ink">
                            Discuss this engagement
                          </span>
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
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-28">
              <h3 className="text-2xl font-semibold text-ink mb-4 tracking-tight">No case study matches that view</h3>
              <p className="text-lg text-brand-400 mb-10">Try a different category or search term.</p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearch('');
                }}
                className="text-accent font-semibold hover:underline underline-offset-8"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        <section className="py-16 sm:py-18 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Typical Outcomes</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Evidence should point to business change, not just interface polish.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed">
                These are typical targets for this kind of work, not client-specific claims. They show the kinds of improvements the studio is usually trying to create when the right system is put in place.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.7rem] border border-brand-100/50 bg-white p-5 sm:p-6 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{metric.label}</p>
                  <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{metric.value}</p>
                  <p className="mt-3 text-sm sm:text-base text-brand-400 leading-relaxed">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery-process" className="scroll-mt-32 py-16 sm:py-18 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Delivery Model</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                A delivery model that moves from requirements to shipped system without losing clarity in the middle.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed">
                Buyers do not only need taste. They need confidence that the project can be scoped, run, built, and launched in a way that stays commercially useful all the way through.
              </p>
            </div>

            <div className="grid gap-4">
              {deliverySteps.map((item) => (
                <div key={item.step} className="rounded-[1.7rem] border border-brand-100/50 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100/60 bg-soft text-sm font-bold text-accent">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-brand-400 leading-relaxed">{item.detail}</p>
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
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">What You Can Review Here</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                  The studio can think clearly, design carefully, and build software around the way the business actually works.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'You can review interactive product behavior, not just hero visuals.',
                  'You can see how problems are translated into concrete build directions.',
                  'You can evaluate the delivery rhythm before starting a project.',
                  'You can decide whether the work feels commercially useful before you ever inquire.',
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-brand-100/50 bg-white p-5 shadow-sm">
                    <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{item}</p>
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
