import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import { projects } from '../data/projects';
import InteractiveHero from '../components/InteractiveHero';
import BrandedVisual from '../components/BrandedVisual';
import ServicesPreview from '../components/ServicesPreview';

interface CategoryCardProps {
  category: {
    title: string;
    description: string;
    icon: React.ElementType;
    outcomes: string[];
    label: string;
    cta: string;
  };
  idx: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative flex min-h-[26rem] flex-col overflow-hidden rounded-[1.9rem] border border-brand-100/60 bg-white shadow-[0_14px_34px_rgba(17,19,21,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(17,19,21,0.11)]"
  >
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-white via-white to-soft" />
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-soft/90 to-transparent" />
    <div className="relative flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100/80 bg-soft text-brand-400 transition-colors duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-white">
          <category.icon className="w-5 h-5" />
        </div>
        <span className="rounded-full border border-brand-100 bg-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
          {category.label}
        </span>
      </div>

      <div className="mt-8">
        <h3 className="max-w-[11ch] text-[1.7rem] sm:text-[1.95rem] font-semibold leading-[0.98] text-ink">
          {category.title}
        </h3>
        <p className="mt-4 max-w-[29ch] text-sm sm:text-[15px] leading-relaxed text-brand-400">
          {category.description}
        </p>
      </div>

      <div className="mt-auto pt-7">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">Where it helps</p>
        <div className="mb-6 grid gap-2">
          {category.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
            <div key={outcome} className="rounded-[1rem] border border-brand-100/70 bg-soft px-3 py-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-300">0{outcomeIndex + 1}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{outcome}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-ink transition-colors hover:text-accent">
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
  const categories = [
    {
      title: 'AI Products',
      description: 'Internal copilots, assistant flows, and product features that shorten response time and improve execution.',
      icon: Cpu,
      outcomes: ['Shorter lead qualification and support cycles', 'AI features that solve a real operational task'],
      label: 'AI systems',
      cta: 'See AI systems',
    },
    {
      title: 'Custom Platforms',
      description: 'Client portals, internal tools, and service platforms built around the way the business actually runs.',
      icon: Globe,
      outcomes: ['Clearer paths from interest to action', 'Tools shaped around the real workflow, not a template'],
      label: 'Platform build',
      cta: 'See platform work',
    },
    {
      title: 'Commerce Systems',
      description: 'Storefronts, product structure, and checkout systems designed to improve conversion and reduce friction.',
      icon: ShoppingBag,
      outcomes: ['Stronger product presentation and offer clarity', 'Cleaner checkout, order flow, and revenue capture'],
      label: 'Commerce flow',
      cta: 'See commerce systems',
    },
    {
      title: 'Automation & Data',
      description: 'Connected automations, reporting, and operational logic that remove drag and surface the right signal faster.',
      icon: Database,
      outcomes: ['Less repeated admin and fewer missed handoffs', 'Reporting that shows where the business is actually slowing down'],
      label: 'Operational systems',
      cta: 'See automation systems',
    },
  ];

  return (
    <div className="bg-paper overflow-hidden">
      <InteractiveHero />

      <section className="py-14 sm:py-20 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)] lg:gap-14 items-end mb-10 sm:mb-14 md:mb-18">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">What We Build</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.8rem] font-semibold text-ink leading-[0.98] tracking-tight">
                The systems we build when templates, plugins, and patchwork workflows stop being enough.
              </h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base sm:text-lg md:text-[1.12rem] text-brand-400 leading-relaxed">
                This work is for startups launching real products and for growing businesses that need better websites, custom software, stronger operations, and AI-powered systems once generic tools start creating drag.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {['Launch readiness', 'Operational scale', 'Customer trust', 'AI leverage'].map((item) => (
                  <span key={item} className="rounded-full border border-brand-100 bg-soft px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4">
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 items-start">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">Who We Work With</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-[3.4rem] font-semibold text-ink leading-[0.98] tracking-tight">
                Built for teams that need more than another generic build.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-brand-400 leading-relaxed">
                We are best when the business is trying to launch something real, modernize what is already there, or replace the operational drag that off-the-shelf tools can no longer handle cleanly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  title: 'Startups building a real product',
                  text: 'Founders who need a serious website, app, SaaS platform, or AI-enabled product foundation instead of a one-off design pass.',
                },
                {
                  title: 'Growing businesses replacing manual work',
                  text: 'Teams that have outgrown spreadsheets, disconnected tools, and repetitive handling across sales, onboarding, support, or reporting.',
                },
                {
                  title: 'Operators who need custom systems',
                  text: 'Businesses that need internal tools, portals, automations, and better workflow logic because templates no longer match the way they operate.',
                },
                {
                  title: 'Brands that need a stronger digital layer',
                  text: 'Companies whose positioning, website, and product experience now need to look sharper and work harder at the same time.',
                },
              ].map((item, idx) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="rounded-[1.6rem] border border-brand-100/50 bg-white p-5 sm:p-7 shadow-sm">
                  <div className="w-11 h-11 rounded-2xl bg-soft border border-brand-100/50 flex items-center justify-center text-accent mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="py-14 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 md:mb-24 gap-5 sm:gap-8">
            <div className="max-w-4xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 md:mb-6">Selected Concepts</p>
              <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Concept studies that show how we would solve real product and systems problems.
              </h2>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-brand-400 leading-relaxed">
                These are not inflated client claims. They are concept directions built to show how we think about structure, user flow, interface quality, and system design when the goal is to launch something credible and scalable.
              </p>
            </div>
            <Link to="/portfolio" className="flex items-center text-base sm:text-lg font-semibold text-ink hover:text-accent transition-colors group">
              See concept studies
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-24">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-14 sm:py-20 md:py-32 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-12 md:gap-16 items-start relative">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Delivery Standard</p>
            <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-5 sm:mb-8">
              Clear standards in the work, the process, and the handoff.
            </h2>
            <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-2xl">
              Strong delivery should feel visible before a contract is signed. The site, the brief flow, the service structure, and the way projects are presented should all prove the same thing: the work is disciplined, concrete, and built to hold up.
            </p>
            <div className="mt-8 sm:mt-10 grid gap-4">
              {[
                'Strategy, UX, design, frontend, backend, and automation are treated as one operating system.',
                'Guided brief, direct inquiry, and service pathways are working flows, not decorative UI.',
                'Concept studies are labeled honestly so buyers can separate directional work from public launches.',
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

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Honest proof model', text: 'Public concepts are labeled clearly, and deeper examples can be shared directly when the opportunity is qualified.' },
              { title: 'Real intake, not fake polish', text: 'The guided brief, contact flow, and service pathways all route through live working logic.' },
              { title: 'Cross-disciplinary execution', text: 'The work is shaped across message, UX, design, frontend, backend, and automation instead of siloed handoffs.' },
              { title: 'Built for the business layer', text: 'The goal is not just a polished interface. It is a system that helps sales, operations, and delivery move cleanly.' },
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
