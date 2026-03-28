import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, Shield, ChevronRight, ShoppingBag, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import { projects } from '../data/projects';
import InteractiveHero from '../components/InteractiveHero';
import StudioDemo from '../components/StudioDemo';
import BrandedVisual from '../components/BrandedVisual';

interface CategoryCardProps {
  category: {
    title: string;
    description: string;
    icon: React.ElementType;
    visual: 'ai' | 'platform' | 'commerce' | 'data';
  };
  idx: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative aspect-[1.18/1] sm:aspect-[4/5] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-soft border border-brand-100/50 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <BrandedVisual variant={category.visual} title={category.title} />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-500" />
    <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end">
      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
        <category.icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-tight">{category.title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-4 sm:mb-6 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">{category.description}</p>
      <Link to="/services" className="inline-flex items-center text-white text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">
        View Details
        <ArrowRight className="ml-2 w-3 h-3" />
      </Link>
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
    { title: 'AI Products', description: 'Assistants, workflows, and product features that make AI practical inside the business.', icon: Cpu, visual: 'ai' as const },
    { title: 'Custom Platforms', description: 'Tailored web platforms, portals, and operational tools built around your exact process.', icon: Globe, visual: 'platform' as const },
    { title: 'Commerce Systems', description: 'Storefronts and conversion flows designed to sell cleanly and scale without friction.', icon: ShoppingBag, visual: 'commerce' as const },
    { title: 'Automation & Data', description: 'Connected workflows, reporting, and internal systems that reduce manual work and surface insight.', icon: Database, visual: 'data' as const },
  ];

  return (
    <div className="bg-paper overflow-hidden">
      <InteractiveHero />

      <section className="py-16 sm:py-20 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mb-12 sm:mb-14 md:mb-24">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">What We Build</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6 sm:mb-8">
              Digital products, systems, and experiences designed to move the business forward.
            </h2>
            <p className="text-lg sm:text-xl text-brand-400 leading-relaxed max-w-3xl">
              We help companies launch sharper digital products, modernize customer-facing platforms, automate operational work, and create cleaner paths from interest to action.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.title} category={cat} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">Selected Concepts</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                A look at the kinds of products, systems, and journeys we can shape.
              </h2>
            </div>
            <Link to="/portfolio" className="flex items-center text-base sm:text-lg font-semibold text-ink hover:text-accent transition-colors group">
              View all concepts
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 sm:gap-y-16 md:gap-y-24">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <StudioDemo />

      <section className="py-16 sm:py-20 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.05fr_1.2fr] gap-8 sm:gap-12 md:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 sm:mb-6">Trust Signals</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-6 sm:mb-8">
              Proof where we have it. Clarity where we do not.
            </h2>
            <p className="text-lg sm:text-xl text-brand-400 leading-relaxed max-w-2xl">
              We do not inflate results or invent client stories. When a project is public, we can show it. When it is confidential or still taking shape, we show the thinking, structure, and delivery standard behind the work instead.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Concept studies, clearly labeled', text: 'Portfolio pieces are marked as concept directions so expectations stay honest.' },
              { title: 'Real inquiry handling', text: 'Lead forms, guided brief, and contact requests all route through secure working flows.' },
              { title: 'References available when appropriate', text: 'For qualified opportunities, deeper project context and additional examples can be shared directly.' },
              { title: 'Focused delivery model', text: 'Strategy, UX, design, frontend, backend, and automation are shaped as one system instead of siloed handoffs.' },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="rounded-[1.75rem] sm:rounded-[2rem] border border-brand-100/50 bg-soft p-5 sm:p-7">
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

      <section className="py-16 sm:py-20 md:py-32 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-6 sm:mb-8">How We Think</p>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-6 sm:mb-10 serif italic">
                Good digital work is not just visible. It is operational.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-brand-400 leading-relaxed font-normal mb-8 sm:mb-12 max-w-xl">
                We care about the page design, but we care just as much about the workflow behind it. The strongest sites help people decide, convert, onboard, and continue cleanly.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                {[
                  { title: 'AI Utility', desc: 'Useful assistants and intelligent workflows' },
                  { title: 'Platform Clarity', desc: 'Interfaces that make complex services easier to understand' },
                  { title: 'Automation', desc: 'Connected systems that remove repetitive work' },
                  { title: 'Trust', desc: 'A digital presence that feels premium and credible' },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-lg font-semibold text-ink">{item.title}</span>
                    </div>
                    <p className="text-brand-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[5/4] md:aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group">
              <BrandedVisual variant="studio" title="Systems create momentum" className="rounded-[2rem] sm:rounded-[3rem]" />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
              <div className="absolute top-6 right-6 sm:top-12 sm:right-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center p-4 sm:p-6 text-center">
                <p className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest leading-tight">Systems Create Momentum</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-24">
            {[
              { icon: Workflow, title: 'Smarter Operations', desc: 'We design the flows behind the interface so intake, handoff, reporting, and internal execution feel cleaner.' },
              { icon: Globe, title: 'Stronger Digital Products', desc: 'From public websites to client-facing platforms, we build experiences that explain the offer and support growth.' },
              { icon: Shield, title: 'More Credible Presence', desc: 'Premium design, tighter structure, and better systems help the business feel more established at every touchpoint.' },
            ].map((prop, idx) => (
              <motion.div key={prop.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-soft flex items-center justify-center mb-6 sm:mb-10 border border-brand-100/50 group-hover:bg-ink group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <prop.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-4 sm:mb-6 tracking-tight group-hover:text-accent transition-colors duration-500">{prop.title}</h3>
                <p className="text-base sm:text-lg text-brand-400 leading-relaxed font-normal">{prop.desc}</p>
                <div className="mt-6 sm:mt-8 h-[1px] w-12 bg-brand-100 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32 bg-ink relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-semibold text-white leading-[1.05] md:leading-[1.05] tracking-tight mb-6 sm:mb-10 md:mb-12">
              Ready to turn the idea into a product, platform, or system that actually works?
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-brand-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl font-normal leading-relaxed mx-auto md:mx-0">
              Tell us what you are building, what is slowing the business down, and where AI, automation, design, or engineering can create leverage.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 text-base md:text-xl font-medium rounded-full text-ink bg-white hover:bg-accent hover:text-white transition-all shadow-2xl">
              Start a Project
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4" />
      </section>
    </div>
  );
}
