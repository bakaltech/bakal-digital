import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
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

function SectionBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-14 sm:py-18 lg:py-24 ${className}`}>{children}</section>;
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
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.7rem] md:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">{text}</p>
    </div>
  );
}

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`panel-dark ${className}`}>{children}</div>;
}

function SupportingCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="panel-dark-soft p-4 sm:p-5">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{label}</p>
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/62">{text}</p>
    </div>
  );
}

function LibraryTile({
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
    <Panel className="flex h-full flex-col overflow-hidden">
      <Link to={`/portfolio/${projectId}`} className="block">
        <div className="aspect-[1.18/1] overflow-hidden border-b border-white/10 bg-[#0d1220]">
          <BrandedVisual variant={projectId as VisualVariant} title={title} className="h-full rounded-none" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{category}</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/62 sm:text-base">{description}</p>
        <Link
          to={`/portfolio/${projectId}`}
          className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:text-accent"
        >
          Open study
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Panel>
  );
}

export default function Portfolio() {
  const featuredProject = projects.find((project) => project.id === 'acengeers');
  const conceptProjects = projects.filter((project) => project.id !== 'acengeers');
  const demoLead = proofDemos.find((demo) => demo.id === 'nexus-ai');

  if (!featuredProject || !demoLead) {
    return null;
  }

  return (
    <div className="min-h-screen bg-paper text-white">
      <section className="relative overflow-hidden bg-grid-dark pb-14 pt-18 sm:pb-18 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),transparent_28%),radial-gradient(circle_at_center,_rgba(138,180,248,0.08),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />

        <div className="relative mx-auto max-w-[88rem] px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Case studies</p>
              <h1 className="mx-auto max-w-[10ch] text-balance text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[5.8rem]">
                Explore work through a cleaner, scalable grid system.
              </h1>
              <p className="mx-auto mt-6 max-w-4xl text-balance text-lg leading-relaxed text-white/50 sm:text-[1.7rem]">
                Shipped launches, product demos, and concept studies presented with one consistent rail structure and one expandable case-study library.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-[2.7rem]">Explore cases</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/42 sm:text-base">Selected launches, interactive demos, and supporting studies.</p>
            </div>
            <div className="hidden min-w-[18rem] rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 md:flex md:items-center md:justify-between">
              <span className="text-lg text-white/62">All work</span>
              <span className="text-white/42">{projects.length + proofDemos.length} items</span>
            </div>
          </div>
        </div>
      </section>

      <SectionBlock className="bg-[#151515]">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
          <Panel className="overflow-hidden p-5 sm:p-6 lg:p-8">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Featured launch</p>
                <h2 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.7rem] md:text-[3.35rem]">
                  {featuredProject.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">{featuredProject.description}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to={`/portfolio/${featuredProject.id}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/[0.1] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
                  >
                    Open full case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    Live site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black min-h-[18rem] sm:min-h-[24rem] lg:min-h-[30rem]">
                <AcengeersShowcase activeFeature={1} />
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <SupportingCard
                label="Business problem"
                title="Weak trust and no conversion path"
                text={projectContext[featuredProject.id as ProjectContextId].pressurePoint}
              />
              <SupportingCard
                label="Commercial outcome"
                title="A stronger first impression"
                text={projectContext[featuredProject.id as ProjectContextId].commercialOutcome}
              />
              <SupportingCard
                label="Focus area"
                title={featuredProject.features[0]?.title ?? 'Lead capture path'}
                text={featuredProject.features[0]?.description ?? featuredProject.solution}
              />
            </div>
          </Panel>
        </div>
      </SectionBlock>

      <SectionBlock className="bg-grid-dark-soft border-y border-white/6">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
          <Panel className="overflow-hidden p-5 sm:p-6 lg:p-8">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Working demo</p>
                <h2 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.7rem] md:text-[3.35rem]">
                  {demoLead.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">{demoLead.whyItMatters}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to={`/portfolio/${demoLead.id}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/[0.1] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
                  >
                    Open demo case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1220] min-h-[18rem] sm:min-h-[24rem] lg:min-h-[30rem]">
                <DemoPreview id={demoLead.id} />
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {proofDemos.filter((demo) => demo.id !== demoLead.id).slice(0, 3).map((demo) => (
                <div key={demo.id}>
                  <SupportingCard label={demo.eyebrow} title={demo.title} text={demo.summary} />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </SectionBlock>

      <SectionBlock className="bg-[#151515]">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Case study library"
              title="A bottom grid that can expand without changing the layout language."
              text="This section follows one card anatomy, one image ratio, and one spacing rhythm so more case studies can be added without redesigning the page."
            />
            <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/42">
              {conceptProjects.length} supporting case studies
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {conceptProjects.map((project) => (
              <div key={project.id}>
                <LibraryTile
                  projectId={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="bg-grid-dark-soft border-y border-white/6">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
            <SectionIntro
              eyebrow="Delivery standard"
              title="Business impact and delivery discipline belong in one final proof layer."
              text="The page closes with the impact metrics and build process so the work feels operationally credible, not just visually polished."
            />

            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {impactMetrics.map((metric) => (
                  <div key={metric.label}>
                    <Panel className="p-5 sm:p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{metric.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/62">{metric.detail}</p>
                    </Panel>
                  </div>
                ))}
              </div>
              <Panel className="p-5 sm:p-6">
                <div className="grid gap-4">
                  {deliverySteps.map((step) => (
                    <div
                      key={step.step}
                      className="grid gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-sm font-semibold text-accent">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/62 sm:text-base">{step.detail}</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/42">
                        {step.artifact}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
