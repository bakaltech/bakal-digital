import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandedVisual from '../components/BrandedVisual';
import AcengeersShowcase from '../components/AcengeersShowcase';
import { projects } from '../data/projects';
import { projectContext, type ProjectContextId } from '../data/projectContext';
import { impactMetrics, deliverySteps } from '../data/proof';
import { services } from '../data/services';

function openChat(query?: string) {
  window.dispatchEvent(new CustomEvent('open-chat', query ? { detail: { query } } : undefined));
}

function SectionShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
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
      <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-[2.7rem] md:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-400 sm:text-lg">{text}</p>
    </div>
  );
}

function WhitePanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.75rem] border border-brand-100/60 bg-white shadow-[0_20px_50px_rgba(17,19,21,0.05)] ${className}`}>
      {children}
    </div>
  );
}

function DarkPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,28,0.98)_0%,rgba(9,11,18,0.98)_100%)] text-white shadow-[0_28px_80px_rgba(0,0,0,0.18)] ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const featuredLaunch = projects.find((project) => project.id === 'acengeers');
  const showcaseProjects = projects.filter((project) => project.id !== 'acengeers').slice(0, 4);
  const serviceOffers = services.slice(0, 4);

  if (!featuredLaunch) {
    return null;
  }

  return (
    <div className="bg-paper overflow-hidden">
      <section className="relative overflow-hidden border-b border-brand-100/30 bg-paper pt-28 sm:pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,102,204,0.10),_transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,19,21,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,21,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(20rem,1.12fr)] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Bakal Digital</p>
              <h1 className="max-w-[10.8ch] text-[2.8rem] font-semibold leading-[0.92] tracking-tight text-ink sm:text-[4.4rem] lg:text-[5.65rem]">
                Build software and AI systems around how the business actually works.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-400 sm:text-lg md:text-xl">
                Websites, portals, SaaS foundations, internal tools, and automation systems for businesses that have outgrown generic software and surface-level redesigns.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openChat('I want help deciding what kind of system or product we need.')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <MessageSquare className="h-4 w-4" />
                  Open project intake
                </button>
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-transparent px-2 py-3 text-sm font-semibold text-brand-400 transition-colors hover:text-ink"
                >
                  Review work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Best fit', 'Growing teams replacing manual work, weak product flows, or underpowered digital layers.'],
                  ['What gets built', 'Customer-facing products, internal systems, AI workflows, and conversion-focused websites.'],
                  ['What improves', 'Less operational drag, clearer user journeys, and stronger commercial performance.'],
                ].map(([label, text]) => (
                  <div key={label}>
                    <WhitePanel className="p-4 sm:p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{label}</p>
                      <p className="mt-3 text-sm leading-relaxed text-brand-400">{text}</p>
                    </WhitePanel>
                  </div>
                ))}
              </div>
            </motion.div>

            <DarkPanel className="overflow-hidden p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0c1020]">
                <AcengeersShowcase activeFeature={0} />
              </div>
            </DarkPanel>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Core offers"
            title="A smaller set of offer shapes with clearer commercial logic."
            text="The site should make it obvious what kind of build we do, who it is for, and what business pressure it relieves without forcing the visitor through decorative filler."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceOffers.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <WhitePanel className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100 bg-soft text-brand-400">
                      {service.icon}
                    </div>
                    <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                      {service.theme.label}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{service.buyer}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-ink">{service.offerTitle}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-400 sm:text-base">{service.homepageSummary}</p>

                  <div className="mt-6 rounded-[1.2rem] border border-brand-100/60 bg-soft p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-300">What improves</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{service.outcomes[0]}</p>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink transition-colors hover:text-accent"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </WhitePanel>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-soft border-y border-brand-100/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
            <SectionIntro
              eyebrow="Proof by example"
              title="The problem, the build direction, and the business gain should all be visible fast."
              text="Instead of long case-study descriptions on the homepage, this section compresses the commercial reasoning into a format buyers can evaluate quickly."
            />

            <div className="grid gap-4">
              {[featuredLaunch, ...showcaseProjects.slice(0, 2)].map((project) => {
                const context = projectContext[project.id as ProjectContextId];

                return (
                  <div key={project.id}>
                    <WhitePanel className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                          {project.status === 'launch' ? 'Live launch' : project.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">{project.title}</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
                      <div className="mt-4 grid gap-4 xl:grid-cols-3">
                        <div className="rounded-[1.15rem] border border-brand-100/60 bg-soft p-4">
                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Problem</p>
                          <p className="mt-2 text-sm leading-relaxed text-brand-400">{context.pressurePoint}</p>
                        </div>
                        <div className="rounded-[1.15rem] border border-brand-100/60 bg-white p-4">
                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Build</p>
                          <p className="mt-2 text-sm leading-relaxed text-brand-400">{project.solution}</p>
                        </div>
                        <div className="rounded-[1.15rem] border border-brand-100/60 bg-soft p-4">
                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">Gain</p>
                          <p className="mt-2 text-sm leading-relaxed text-brand-400">{context.commercialOutcome}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                          to={`/portfolio/${project.id}`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
                        >
                          Open case study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => openChat(`I want a build shaped like ${project.title} for my business.`)}
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                        >
                          Ask about this
                        </button>
                      </div>
                    </WhitePanel>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-end">
            <SectionIntro
              eyebrow="Selected work"
              title="A modular project grid that makes the product thinking visible before the sales conversation starts."
              text="The homepage should preview the quality of the work without turning into a second portfolio page."
            />
            <div className="xl:justify-self-end">
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                View all case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[featuredLaunch, ...showcaseProjects.slice(0, 3)].map((project) => (
              <div key={project.id}>
                <WhitePanel className="flex h-full flex-col overflow-hidden">
                  <div className="aspect-[1.18/1] overflow-hidden border-b border-brand-100/60 bg-soft">
                    {project.id === 'acengeers' ? (
                      <div className="h-full bg-[#0d1220]">
                        <AcengeersShowcase activeFeature={2} />
                      </div>
                    ) : (
                      <BrandedVisual
                        variant={project.id as 'nexus-ai' | 'lumina-saas' | 'velocity-ecommerce' | 'orbit-automation'}
                        title={project.title}
                        className="h-full rounded-none"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{project.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-400 sm:text-base">{project.description}</p>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink transition-colors hover:text-accent"
                    >
                      Open study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </WhitePanel>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-soft border-y border-brand-100/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
            <SectionIntro
              eyebrow="Delivery standard"
              title="The delivery model should feel as clear as the interface itself."
              text="This closes the page with the practical standards behind the work: what changes, how the delivery runs, and why the engagement feels reliable."
            />

            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {impactMetrics.map((metric) => (
                  <div key={metric.label}>
                    <DarkPanel className="p-5 sm:p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{metric.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/72">{metric.detail}</p>
                    </DarkPanel>
                  </div>
                ))}
              </div>

              <WhitePanel className="p-5 sm:p-6">
                <div className="grid gap-4">
                  {deliverySteps.map((step) => (
                    <div
                      key={step.step}
                      className="grid gap-4 rounded-[1.25rem] border border-brand-100/60 bg-soft p-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-accent shadow-sm">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-400 sm:text-base">{step.detail}</p>
                      </div>
                      <div className="rounded-full border border-brand-100 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                        {step.artifact}
                      </div>
                    </div>
                  ))}
                </div>
              </WhitePanel>
            </div>
          </div>
        </div>
      </SectionShell>

      <section className="bg-ink py-16 sm:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Start here</p>
              <h2 className="max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight sm:text-[2.9rem] md:text-[3.8rem]">
                Ready to replace the weak layer that is slowing the business down?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                Tell us whether the pressure is in the website, the product, the workflow, or the operations layer, and we will help map the strongest next move.
              </p>
            </div>

            <DarkPanel className="border-white/12 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Website or portal rebuild',
                  'SaaS or internal product foundation',
                  'AI-assisted workflow design',
                  'Automation and ops cleanup',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-white/80">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openChat('I need help deciding what should be rebuilt first in the business.')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30"
                >
                  <MessageSquare className="h-4 w-4" />
                  Open project intake
                </button>
              </div>
            </DarkPanel>
          </div>
        </div>
      </section>
    </div>
  );
}
