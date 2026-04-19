import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandedVisual from '../components/BrandedVisual';
import AcengeersShowcase from '../components/AcengeersShowcase';
import HeroShowreel from '../components/HeroShowreel';
import {
  DarkPanel,
  PageContainer,
  PageSection,
  SectionHeader,
  SectionStack,
  SoftPanel,
} from '../components/PageScaffold';
import { projects } from '../data/projects';
import { projectContext, type ProjectContextId } from '../data/projectContext';
import { impactMetrics, deliverySteps } from '../data/proof';
import { services } from '../data/services';

function openChat(query?: string) {
  window.dispatchEvent(new CustomEvent('open-chat', query ? { detail: { query } } : undefined));
}

export default function Home() {
  const featuredLaunch = projects.find((project) => project.id === 'acengeers');
  const showcaseProjects = projects.filter((project) => project.id !== 'acengeers').slice(0, 3);
  const serviceOffers = services.slice(0, 4);

  if (!featuredLaunch) {
    return null;
  }

  return (
    <div className="bg-paper text-white">
      <section className="relative overflow-hidden bg-grid-dark pb-14 pt-18 sm:pb-18 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),transparent_28%),radial-gradient(circle_at_center,_rgba(138,180,248,0.08),transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />

        <PageContainer className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Bakal Digital</p>
              <h1 className="mx-auto max-w-[11ch] text-balance text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[5.35rem]">
                From weak digital layers to scalable software systems.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-relaxed text-white/52 sm:text-[1.45rem]">
                We design and build websites, portals, SaaS foundations, automation systems, and AI workflows that map to how the business actually sells, operates, and delivers.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 sm:mt-12">
            <DarkPanel className="overflow-hidden p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-black min-h-[18rem] sm:min-h-[24rem] lg:min-h-[28rem]">
                <HeroShowreel />
              </div>
            </DarkPanel>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/[0.1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => openChat('I need help figuring out which system or product we should build first.')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              <MessageSquare className="h-4 w-4" />
              Open project intake
            </button>
          </div>
        </PageContainer>
      </section>

      <PageSection className="bg-[#151515]">
        <PageContainer>
          <SectionHeader
            eyebrow="Offer shapes"
            title="A smaller set of build types, presented in one repeatable grid."
            text="The homepage should explain the service model quickly, without turning into a long stack of unrelated section designs."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceOffers.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <DarkPanel className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/72">
                      {service.icon}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
                      {service.theme.label}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-[14ch] text-2xl font-semibold tracking-tight text-white">{service.offerTitle}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/62 sm:text-base">{service.homepageSummary}</p>

                  <SoftPanel className="mt-6 p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">Outcome</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/74">{service.outcomes[0]}</p>
                  </SoftPanel>

                  <Link
                    to={`/services/${service.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:text-accent"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </DarkPanel>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </PageSection>

      <PageSection className="bg-grid-dark-soft border-y border-white/6">
        <PageContainer>
          <SectionStack
            header={
              <SectionHeader
                eyebrow="Proof by example"
                title="The problem, build direction, and business gain should all be visible at a glance."
                text="This section compresses the commercial reasoning into a fast-scanning format instead of asking the visitor to decode long paragraphs."
              />
            }
          >
            <div className="grid gap-4 lg:grid-cols-3">
              {[featuredLaunch, ...showcaseProjects.slice(0, 2)].map((project) => {
                const context = projectContext[project.id as ProjectContextId];

                return (
                  <div key={project.id}>
                    <DarkPanel className="flex h-full flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                          {project.status === 'launch' ? 'Live launch' : project.category}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/42">{project.title}</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                      <div className="mt-4 grid gap-3">
                        <SoftPanel className="p-4">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">Problem</p>
                          <p className="mt-2 text-sm leading-relaxed text-white/62">{context.pressurePoint}</p>
                        </SoftPanel>
                        <SoftPanel className="p-4">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">Build</p>
                          <p className="mt-2 text-sm leading-relaxed text-white/62">{project.solution}</p>
                        </SoftPanel>
                        <SoftPanel className="p-4">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">Gain</p>
                          <p className="mt-2 text-sm leading-relaxed text-white/62">{context.commercialOutcome}</p>
                        </SoftPanel>
                      </div>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                          to={`/portfolio/${project.id}`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.1] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
                        >
                          Open case study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => openChat(`I want a build shaped like ${project.title} for my business.`)}
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                        >
                          Ask about this
                        </button>
                      </div>
                    </DarkPanel>
                  </div>
                );
              })}
            </div>
          </SectionStack>
        </PageContainer>
      </PageSection>

      <PageSection className="bg-[#151515]">
        <PageContainer>
          <SectionStack
            header={
              <SectionHeader
                eyebrow="Selected work"
                title="A cleaner case-study grid that can scale without changing the layout language."
                text="The grid uses one shell, one spacing rhythm, and one card anatomy so the work library can grow without becoming chaotic."
              />
            }
            aside={
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Explore case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[featuredLaunch, ...showcaseProjects.slice(0, 3)].map((project) => (
                <div key={project.id}>
                  <DarkPanel className="flex h-full flex-col overflow-hidden">
                    <div className="aspect-[1.18/1] overflow-hidden border-b border-white/10 bg-[#0e1220]">
                      {project.id === 'acengeers' ? (
                        <div className="h-full bg-black">
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
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{project.category}</p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/62 sm:text-base">{project.description}</p>
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:text-accent"
                      >
                        Open study
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </DarkPanel>
                </div>
              ))}
            </div>
          </SectionStack>
        </PageContainer>
      </PageSection>

      <PageSection className="bg-grid-dark-soft border-y border-white/6">
        <PageContainer>
          <SectionStack
            header={
              <SectionHeader
                eyebrow="Delivery standard"
                title="The delivery model should feel as deliberate as the interface itself."
                text="This closes the page with the practical standards behind the work: what changes, how the delivery runs, and why the engagement stays reliable."
              />
            }
          >
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:items-start">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
                {impactMetrics.map((metric) => (
                  <div key={metric.label}>
                    <DarkPanel className="p-5 sm:p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{metric.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/62">{metric.detail}</p>
                    </DarkPanel>
                  </div>
                ))}
              </div>

              <DarkPanel className="p-5 sm:p-6">
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
              </DarkPanel>
            </div>
          </SectionStack>
        </PageContainer>
      </PageSection>

      <section className="bg-[#121212] py-16 sm:py-20 lg:py-24 text-white">
        <PageContainer>
          <DarkPanel className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Start here</p>
                <h2 className="max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.8rem] md:text-[3.65rem]">
                  Ready to replace the weak layer that is slowing the business down?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">
                  Tell us whether the pressure is in the website, the product, the workflow, or the operations layer, and we will help map the strongest next move.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Website or portal rebuild',
                    'SaaS or internal product foundation',
                    'AI-assisted workflow design',
                    'Automation and ops cleanup',
                  ].map((item) => (
                    <div key={item}>
                      <SoftPanel className="flex items-start gap-3 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <p className="text-sm leading-relaxed text-white/74">{item}</p>
                      </SoftPanel>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/[0.1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-[#101114]"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openChat('I need help deciding what should be rebuilt first in the business.')}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Open project intake
                  </button>
                </div>
              </div>
            </div>
          </DarkPanel>
        </PageContainer>
      </section>
    </div>
  );
}
