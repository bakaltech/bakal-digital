import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import { projects } from '../data/projects';
import InteractiveHero from '../components/InteractiveHero';
import BrandedVisual from '../components/BrandedVisual';
import ServicesPreview from '../components/ServicesPreview';
import { services } from '../data/services';
import { projectContext, type ProjectContextId } from '../data/projectContext';

interface CategoryCardProps {
  category: {
    buyer: string;
    title: string;
    offerTitle: string;
    description: string;
    outcomes: string[];
    features: string[];
    label: string;
    cta: string;
    icon: React.ReactNode;
    id: string;
  };
  idx: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-[1.9rem] border border-brand-100/60 bg-white shadow-[0_14px_34px_rgba(17,19,21,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(17,19,21,0.11)] sm:min-h-[26rem] lg:min-h-[28rem]"
  >
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-white via-white to-soft" />
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-soft/90 to-transparent" />
    <div className="relative flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100/80 bg-soft text-brand-400 transition-colors duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-white">
          {category.icon}
        </div>
        <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
          {category.label}
        </span>
      </div>

      <div className="mt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
          {category.buyer}
        </p>
        <h3 className="mt-4 max-w-[16ch] text-balance text-[1.7rem] sm:max-w-[14ch] sm:text-[1.95rem] font-semibold leading-[0.98] text-ink">
          {category.offerTitle}
        </h3>
        <p className="mt-4 text-lg font-semibold leading-tight text-ink">
          {category.title}
        </p>
        <p className="mt-4 max-w-[29ch] text-sm sm:text-[15px] leading-relaxed text-brand-400">
          {category.description}
        </p>
      </div>

      <div className="mt-auto pt-7">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">What gets built</p>
        <div className="mb-6 grid gap-2">
          {category.features.slice(0, 2).map((feature, featureIndex) => (
            <div key={feature} className="rounded-[1rem] border border-brand-100/70 bg-soft px-3 py-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-300">0{featureIndex + 1}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{feature}</p>
            </div>
          ))}
        </div>
        <div className="mb-6 rounded-[1rem] border border-brand-100/70 bg-white px-3 py-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">What improves</p>
          <p className="mt-1 text-sm leading-relaxed text-brand-400">{category.outcomes[0]}</p>
        </div>
        <Link to={`/services/${category.id}`} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-ink transition-colors hover:text-accent">
          {category.cta}
          <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: (typeof projects)[number]; idx: number }> = ({ project, idx }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative flex flex-col">
    <Link to={`/portfolio/${project.id}`} className="block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-soft mb-6 sm:mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
        <BrandedVisual variant={project.id as 'nexus-ai' | 'lumina-saas' | 'velocity-ecommerce' | 'orbit-automation'} title={project.title} className="rounded-[2rem] sm:rounded-[2.5rem]" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="flex justify-between items-start px-1 sm:px-2 gap-4">
        <div className="max-w-[80%]">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 sm:mb-3">{project.category}</p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-2 sm:mb-3 tracking-tight">{project.title}</h3>
          <p className="text-base sm:text-lg text-brand-400 font-normal leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500 shrink-0">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const proofProjects = projects.slice(0, 3);
  const categories = services.slice(0, 4).map((service) => ({
    id: service.id,
    buyer: service.buyer,
    title: service.shortTitle,
    offerTitle: service.offerTitle,
    description: service.homepageSummary,
    icon: service.icon,
    outcomes: service.outcomes,
    features: service.features,
    label: service.theme.label,
    cta: service.ctaLabel,
  }));

  return (
    <div className="bg-paper overflow-hidden">
      <InteractiveHero />

      <section className="py-14 sm:py-20 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)] xl:gap-14 items-end mb-10 sm:mb-14 md:mb-18">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">What We Build</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.8rem] font-semibold text-ink leading-[0.98] tracking-tight">
                Pick the build shape that matches the bottleneck.
              </h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base sm:text-lg md:text-[1.12rem] text-brand-400 leading-relaxed">
                These offers are packaged around concrete deliverables: websites and portals, SaaS foundations, AI workflows, internal tools, and automation systems that fix real pressure points.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {['Websites and portals', 'SaaS and apps', 'AI workflows', 'Automation systems'].map((item) => (
                  <span key={item} className="rounded-full border border-brand-100 bg-soft px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-brand-100/50 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-2">Proof of range</p>
                <p className="text-sm sm:text-base text-brand-400 leading-relaxed">
                  Delivered and concepted across SaaS products, commerce systems, internal tools, AI workflows, portals, and automation layers.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 2xl:grid-cols-4">
            {categories.map((cat, idx) => (
              <CategoryCard
                key={cat.title}
                category={cat}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-28 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">Choose Your Path</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.4rem] font-semibold text-ink leading-[0.98] tracking-tight">
                The site should help the right buyer recognize the right path quickly.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed">
                Most inquiries land in one of three buckets: launching or upgrading a product, replacing manual operational drag, or fixing a weak digital layer that is hurting conversion and trust.
              </p>
              <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
                If one of these feels like your situation, the next move should feel obvious.
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-brand-100/50 bg-white p-6 sm:p-7 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Best fit</p>
                <p className="text-sm sm:text-base text-brand-400 leading-relaxed">
                  Best for teams who need real software, automation, product structure, or a stronger conversion layer, not just a cosmetic reskin with no system behind it.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {[
                {
                  title: 'Launching or upgrading a product',
                  text: 'Best when the business needs a real website, portal, app, or SaaS foundation with enough product structure to launch and grow.',
                  cta: 'See product-facing services',
                  href: '/services',
                },
                {
                  title: 'Replacing manual operational drag',
                  text: 'Best when work is still moving through spreadsheets, inboxes, disconnected tools, or patchwork automations across sales, onboarding, and delivery.',
                  cta: 'See automation and ops proof',
                  href: '/portfolio',
                },
                {
                  title: 'Fixing a weak digital layer',
                  text: 'Best when the current website, storefront, or customer flow is leaking trust, confusing the offer, or undercutting conversion.',
                  cta: 'See proof before inquiry',
                  href: '/portfolio',
                },
              ].map((item, idx) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="rounded-[1.6rem] border border-brand-100/50 bg-white p-5 sm:p-7 shadow-sm">
                  <div className="w-11 h-11 rounded-2xl bg-soft border border-brand-100/50 flex items-center justify-center text-accent mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{item.text}</p>
                  <Link to={item.href} className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink transition-colors hover:text-accent">
                    {item.cta}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="py-14 sm:py-20 md:py-28 bg-paper border-y border-brand-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Proof In Practice</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.4rem] font-semibold text-ink tracking-tight leading-[1]">
                Three proof stories that show the problem, the build, and the business gain at a glance.
              </h2>
              <p className="mt-5 text-base sm:text-lg md:text-[1.08rem] text-brand-400 leading-relaxed">
                The point of this section is speed: you should be able to scan the pressure point, see what gets built, and decide whether the approach feels commercially useful in under a minute.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-2">What to look for</p>
                <p className="text-sm sm:text-base text-brand-400 leading-relaxed">
                  Does the problem sound real, does the build shape make sense, and does the result map to revenue, operations, or delivery quality? That is the standard each engagement is designed around.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {proofProjects.map((project) => {
                const context = projectContext[project.id as ProjectContextId];

                return (
                  <div key={project.id} className="rounded-[1.7rem] border border-brand-100/50 bg-white p-5 sm:p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                        {project.title}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-brand-400 leading-relaxed">{context.audience}</p>
                    <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)_minmax(0,1fr)]">
                      <div className="rounded-[1.2rem] border border-brand-100/50 bg-soft px-4 py-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-2">Problem</p>
                        <p className="text-sm leading-relaxed text-brand-400">{context.pressurePoint}</p>
                      </div>
                      <div className="rounded-[1.2rem] border border-brand-100/50 bg-white px-4 py-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-2">What we would build</p>
                        <p className="text-sm leading-relaxed text-brand-400">{project.solution}</p>
                      </div>
                      <div className="rounded-[1.2rem] border border-brand-100/50 bg-soft px-4 py-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent mb-2">Result</p>
                        <p className="text-sm leading-relaxed text-brand-400">{context.commercialOutcome}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link to={`/portfolio/${project.id}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
                        Open proof study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          window.dispatchEvent(
                            new CustomEvent('open-chat', {
                              detail: { query: `I want a build shaped like ${project.title} for my business.` },
                            }),
                          )
                        }
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        Ask about this example
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 md:mb-24 gap-5 sm:gap-8">
            <div className="max-w-4xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 md:mb-6">Selected Concepts</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Concept studies that make the thinking visible before you ever hire us.
              </h2>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-brand-400 leading-relaxed">
                These are honest concept directions. Each one shows how we would structure the product, the interface, and the system logic when the goal is to make something credible, useful, and scalable.
              </p>
              <p className="mt-4 max-w-3xl text-base sm:text-lg text-ink leading-relaxed">
                These examples show how we structure real products, workflows, and systems before writing a single line of code.
              </p>
            </div>
            <Link to="/portfolio" className="flex items-center text-base sm:text-lg font-semibold text-ink hover:text-accent transition-colors group">
              See proof library
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid xl:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-24">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-14 sm:py-20 md:py-32 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid xl:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-12 md:gap-16 items-start relative">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Delivery Standard</p>
            <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-5 sm:mb-8">
              The product should feel sharp because the delivery system behind it is sharp.
            </h2>
            <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-2xl">
              Strong execution is not something you discover after signing. The site, the service paths, the brief flow, and the project language should already show a delivery rhythm you can trust.
            </p>
            <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed max-w-2xl">
              Every project includes clear milestones, weekly progress, and a delivery rhythm that keeps the build moving.
            </p>
            <div className="mt-8 sm:mt-10 grid gap-4">
              {[
                'Strategy, UX, design, frontend, backend, and automation are handled as one connected build, not siloed handoffs.',
                'The guided brief, direct inquiry, and service pathways work like real product surfaces, not decorative UI.',
                'Concept studies are labeled honestly so buyers can judge the thinking on its own terms.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-brand-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: '1. Brief and bottleneck audit', text: 'Start with the pressure point, current workflow, business goal, and what must improve first.' },
              { title: '2. Direction and scope', text: 'Turn that into a clear build shape, scope boundary, and delivery plan the team can actually follow.' },
              { title: '3. Design and implementation', text: 'Move through UX, interface, frontend, backend, and automation without breaking the logic between them.' },
              { title: '4. QA, launch, and refinement', text: 'Ship with clean handoff, visible progress, and enough structure to keep improving after launch.' },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="rounded-[1.5rem] sm:rounded-[2rem] border border-brand-100/50 bg-white p-5 sm:p-7 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h3>
                <p className="text-brand-400 leading-relaxed text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-paper border-t border-brand-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Typical Starting Points</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.4rem] font-semibold text-ink tracking-tight leading-[1]">
                Enough scope clarity to decide whether the engagement fits.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed">
                Not every project starts at the same depth. Some teams need a sharper website or portal first. Others need an automation layer, a SaaS foundation, or an internal system that clears repeated operational drag.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  title: 'Digital layer rebuild',
                  text: 'Website, portal, or conversion-path work when the business needs sharper positioning, stronger UX, and a clearer path to action.',
                },
                {
                  title: 'Product and platform build',
                  text: 'SaaS, app, portal, or internal tool work when the idea is moving beyond mockups and needs product logic that can hold up.',
                },
                {
                  title: 'Workflow and automation cleanup',
                  text: 'AI routing, approvals, reporting, and system sync when the team is still doing too much by hand.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 sm:p-6 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{item.title}</p>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Results We Aim For</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.4rem] font-semibold text-ink tracking-tight leading-[1]">
                The work should change how the business runs, not just how the interface looks.
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
              {[
                'Reduced manual work across intake, support, and operations',
                'Faster onboarding and clearer paths to action',
                'Cleaner workflows between the tools and the team',
                'Higher-conviction conversion paths and stronger product clarity',
              ].map((result) => (
                <div key={result} className="rounded-[1.5rem] border border-brand-100/50 bg-soft p-5 sm:p-6 shadow-sm">
                  <p className="text-sm sm:text-base text-ink leading-relaxed font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-32 bg-ink relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[2rem] sm:text-5xl md:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-6 sm:mb-10 md:mb-12">
              Ready to fix what is slowing the business down?
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-brand-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl font-normal leading-relaxed mx-auto md:mx-0">
              Tell us whether the pressure is in the website, the product, the workflow, the automation layer, or the internal tooling, and we will help map the strongest next move.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 text-base md:text-xl font-medium rounded-full text-ink bg-white hover:bg-accent hover:text-white transition-all shadow-2xl">
                Start a Project
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-6 text-base md:text-lg font-medium rounded-full border border-white/15 text-white hover:border-white/40 transition-all">
                Review Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4" />
      </section>
    </div>
  );
}
