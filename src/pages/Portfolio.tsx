import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ExternalLink, Github } from 'lucide-react';
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
      className={`rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,28,0.98)_0%,rgba(9,11,18,0.98)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.34)] ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{children}</p>;
}

function SectionBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-12 sm:py-14 lg:py-16 ${className}`}>{children}</section>;
}

function MiniInfoCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{label}</p>
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-300">{text}</p>
    </div>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-brand-300">{label}</p>
    </div>
  );
}

function RailPanel({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
  visual,
  miniCards,
}: {
  eyebrow: string;
  title: string;
  text: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual: React.ReactNode;
  miniCards: { label: string; title: string; text: string }[];
}) {
  return (
    <Shell className="overflow-hidden p-5 sm:p-6 lg:p-8">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.7rem] md:text-[3.35rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-300 sm:text-lg">{text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to={primaryTo}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f7dff]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                {secondaryLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1020]">{visual}</div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {miniCards.map((item) => (
          <div key={`${item.label}-${item.title}`}>
            <MiniInfoCard label={item.label} title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </Shell>
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
    <Shell className="flex h-full flex-col overflow-hidden">
      <Link to={`/portfolio/${projectId}`} className="block">
        <div className="aspect-[1.18/1] overflow-hidden border-b border-white/10 bg-[#0d1220]">
          <BrandedVisual
            variant={projectId as VisualVariant}
            title={title}
            className="h-full rounded-none"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{category}</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-300 sm:text-base">{description}</p>
        <Link
          to={`/portfolio/${projectId}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
        >
          Open study
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Shell>
  );
}

export default function Portfolio() {
  const featuredProject = projects.find((project) => project.id === 'acengeers');
  const conceptProjects = projects.filter((project) => project.id !== 'acengeers');
  const launchProject = featuredProject;
  const demoLead = proofDemos.find((demo) => demo.id === 'nexus-ai');
  const demoSupport = proofDemos.filter((demo) => demo.id !== 'nexus-ai').slice(0, 3);
  const processCards = deliverySteps.slice(0, 3);

  if (!launchProject || !demoLead) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#05070c] pb-20 pt-24 text-white sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden pb-10 pt-6 sm:pb-16 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(40,90,255,0.16),_transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]" />

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(20rem,1.12fr)] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>Work</Eyebrow>
              <h1 className="mt-5 max-w-[10.5ch] text-4xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.35rem]">
                Case studies structured like a scalable product surface.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-300 sm:text-lg md:text-xl">
                A cleaner system of modular rails, supporting cards, and predictable grid logic that can keep growing without becoming noisy.
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

            <Shell className="overflow-hidden p-3 sm:p-4">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_14rem]">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0c1020]">
                  <AcengeersShowcase activeFeature={0} />
                </div>
                <div className="grid gap-4">
                  <MiniInfoCard
                    label="Grid logic"
                    title="One shell, repeatable rails"
                    text="Every major section now uses the same panel grammar so expansion stays disciplined."
                  />
                  <MiniInfoCard
                    label="Structure"
                    title="Large lead, smaller support"
                    text="The page now gives one dominant visual per rail, then smaller cards underneath to support it."
                  />
                </div>
              </div>
            </Shell>
          </div>
        </section>

        <SectionBlock>
          <RailPanel
            eyebrow="Featured launch"
            title="A shipped website launch presented as the flagship proof point."
            text={launchProject.description}
            primaryLabel="Open full case study"
            primaryTo={`/portfolio/${launchProject.id}`}
            secondaryLabel="Live site"
            secondaryHref={launchProject.liveUrl}
            visual={<AcengeersShowcase activeFeature={1} />}
            miniCards={[
              {
                label: 'Business problem',
                title: 'Weak trust and no conversion path',
                text: projectContext[launchProject.id as ProjectContextId].pressurePoint,
              },
              {
                label: 'Commercial outcome',
                title: 'A stronger first impression',
                text: projectContext[launchProject.id as ProjectContextId].commercialOutcome,
              },
              ...(launchProject.features.slice(0, 1).map((feature) => ({
                label: 'Focus area',
                title: feature.title,
                text: feature.description,
              }))),
            ]}
          />
        </SectionBlock>

        <SectionBlock>
          <RailPanel
            eyebrow="Working demos"
            title="Interactive demonstrations arranged inside the same scalable rail system."
            text={demoLead.whyItMatters}
            primaryLabel="Open main demo"
            primaryTo={`/portfolio/${demoLead.id}`}
            visual={<DemoPreview id={demoLead.id} />}
            miniCards={demoSupport.map((demo) => ({
              label: demo.eyebrow,
              title: demo.title,
              text: demo.summary,
            }))}
          />
        </SectionBlock>

        <SectionBlock>
          <RailPanel
            eyebrow="Commercial proof"
            title="Impact signals and delivery discipline held in one cleaner operational rail."
            text="Instead of scattering proof into separate sections, the page now keeps the business impact and process story in one compact place."
            primaryLabel="Talk through a build"
            primaryTo="/contact"
            visual={
              <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-2">
                {impactMetrics.slice(0, 4).map((metric) => (
                  <div key={metric.label}>
                    <StatPill value={metric.value} label={metric.label} />
                  </div>
                ))}
              </div>
            }
            miniCards={processCards.map((item) => ({
              label: item.step,
              title: item.title,
              text: item.detail,
            }))}
          />
        </SectionBlock>

        <SectionBlock className="pb-6 sm:pb-8">
          <div className="mb-8 sm:mb-10">
            <Eyebrow>Case study library</Eyebrow>
            <h2 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.7rem] md:text-[3.35rem]">
              A modular grid for concept work that can expand without changing the page system.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-300 sm:text-lg">
              This grid uses the same shell, spacing rhythm, and card logic as the rails above, so adding more studies later stays clean.
            </p>
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
        </SectionBlock>
      </div>
    </div>
  );
}
