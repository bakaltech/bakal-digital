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

function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,28,0.98)_0%,rgba(10,12,18,0.98)_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.34)] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionBlock({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-14 lg:py-16 ${className}`}>
      {children}
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] md:text-[3.35rem]">{title}</h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-300 sm:text-lg">{text}</p>
    </div>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4">
      <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-brand-300">{label}</p>
    </div>
  );
}

function CaseCard({
  projectId,
  title,
  category,
  description,
}: {
  projectId: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <Shell className="h-full p-5 sm:p-6">
      <Link to={`/portfolio/${projectId}`} className="block">
        <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0e1320]">
          <div className="aspect-[4/3]">
            <BrandedVisual
              variant={projectId as VisualVariant}
              title={title}
              className="rounded-[1.4rem]"
            />
          </div>
        </div>
      </Link>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{category}</span>
        <div className="h-px w-8 bg-white/10" />
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">Case study</span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{description}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to={`/portfolio/${projectId}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
        >
          Open case study
          <ChevronRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent('open-chat', {
                detail: { query: `I want to build a workflow like ${title} for my business.` },
              }),
            )
          }
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
        >
          Ask about this
        </button>
      </div>
    </Shell>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'AI Systems', 'SaaS', 'E-commerce', 'Automation'];
  const featuredProject = projects.find((project) => project.id === 'acengeers');

  const supportingProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.id === 'acengeers') {
        return false;
      }

      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        projectContext[project.id as ProjectContextId].pressurePoint
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-[#05070c] pb-20 pt-24 text-white sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden pb-12 pt-6 sm:pb-16 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(40,90,255,0.12),_transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.12]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">Work</p>
              <h1 className="mx-auto max-w-[13ch] text-4xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Case studies designed to feel clear, calm, and commercially sharp.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-300 sm:text-lg md:text-xl">
                One flagship launch, a tighter case-study grid, and a cleaner proof layer that makes the work easier to scan on desktop and stronger on mobile.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </div>
        </section>

        {featuredProject ? (
          <SectionBlock>
            <SectionIntro
              eyebrow="Featured launch"
              title="A real website launch given the weight of a proper flagship case study."
              text="Acengeers now leads the page as the main proof point instead of fighting for attention in a crowded card grid."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
              <Shell className="p-6 sm:p-7 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Live launch
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                    {featuredProject.category}
                  </span>
                </div>

                <h2 className="max-w-[12ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-300 sm:text-lg">
                  {featuredProject.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Business problem</p>
                    <p className="text-sm leading-relaxed text-brand-300">
                      {projectContext[featuredProject.id as ProjectContextId].pressurePoint}
                    </p>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
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
                        <StatPill value={metric.value} label={metric.label} />
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
              </Shell>

              <div className="grid gap-5">
                <Shell className="overflow-hidden p-3 sm:p-4">
                  <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d1220]">
                    <AcengeersShowcase activeFeature={0} />
                  </div>
                </Shell>
                <div className="grid gap-4 md:grid-cols-2">
                  {featuredProject.features.slice(0, 2).map((feature) => (
                    <div key={feature.title}>
                      <Shell className="p-5">
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Focus area</p>
                        <h3 className="text-lg font-semibold tracking-tight text-white">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-300">{feature.description}</p>
                      </Shell>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionBlock>
        ) : null}

        <SectionBlock id="case-studies" className="scroll-mt-32">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-end">
            <SectionIntro
              eyebrow="Explore cases"
              title="A tighter grid that feels calmer, more visual, and easier to browse."
              text="The supporting case studies now work as a clean secondary layer instead of competing with the flagship project."
            />

            <div className="space-y-4 xl:justify-self-end xl:w-full xl:max-w-sm">
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

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <div key={project.id}>
                <CaseCard
                  projectId={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="working-demos" className="scroll-mt-32">
          <SectionIntro
            eyebrow="Focused demos"
            title="Smaller product slices that still feel structured and premium."
            text="Each demo is presented inside the same visual system so the page stays coherent while still showing product range."
          />

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {proofDemos.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <Shell className="h-full p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      {demo.eyebrow}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                      {projects.find((project) => project.id === demo.id)?.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{demo.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{demo.summary}</p>

                  <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d1220]">
                    <div className="aspect-[16/10]">
                      <DemoPreview id={demo.id} />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/portfolio/${demo.id}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
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
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      Ask about this
                    </button>
                  </div>
                </Shell>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock>
          <SectionIntro
            eyebrow="Outcomes"
            title="A cleaner proof layer that keeps business impact visible."
            text="The page should not only look premium. It should also make the commercial intent of the work easy to understand."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label}>
                <Shell className="h-full p-5 sm:p-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">{metric.label}</p>
                  <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{metric.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{metric.detail}</p>
                </Shell>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock className="pb-6 sm:pb-8">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
            <SectionIntro
              eyebrow="Delivery model"
              title="A modular process that stays clear from diagnosis to launch."
              text="The page structure mirrors the way the work is delivered: clear framing, visible steps, and less unnecessary noise in the middle."
            />

            <div className="grid gap-4">
              {deliverySteps.map((item) => (
                <div key={item.step}>
                  <Shell className="p-5 sm:p-6">
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
                  </Shell>
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
}
