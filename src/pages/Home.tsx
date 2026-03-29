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
    visual: 'ai' | 'platform' | 'commerce' | 'data';
  };
  idx: number;
  className?: string;
}

const categoryVisualStyles: Record<CategoryCardProps['category']['visual'], { glow: string; orb: string; line: string }> = {
  ai: {
    glow: 'from-sky-500/12 via-blue-500/6 to-transparent',
    orb: 'from-sky-400 to-blue-600',
    line: 'bg-sky-400/70',
  },
  platform: {
    glow: 'from-cyan-500/12 via-blue-500/6 to-transparent',
    orb: 'from-cyan-400 to-sky-500',
    line: 'bg-cyan-400/70',
  },
  commerce: {
    glow: 'from-amber-400/12 via-orange-500/6 to-transparent',
    orb: 'from-amber-300 to-orange-500',
    line: 'bg-amber-400/75',
  },
  data: {
    glow: 'from-emerald-400/12 via-teal-500/6 to-transparent',
    orb: 'from-emerald-300 to-teal-500',
    line: 'bg-emerald-400/75',
  },
};

const CategoryVisual: React.FC<{ visual: CategoryCardProps['category']['visual']; icon: React.ElementType }> = ({ visual, icon: Icon }) => {
  const style = categoryVisualStyles[visual];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${style.glow}`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-[52%] bg-gradient-to-b from-white/10 via-white/4 to-transparent" />
      <div className={`absolute top-6 right-6 w-16 h-16 rounded-[1.4rem] bg-gradient-to-br ${style.orb} flex items-center justify-center shadow-[0_18px_34px_rgba(0,0,0,0.18)]`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="absolute inset-x-6 bottom-6 h-px bg-white/10" />
    </div>
  );
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, idx, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative min-h-[280px] sm:min-h-[340px] md:min-h-[360px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-soft border border-brand-100/50 shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}
  >
    <CategoryVisual visual={category.visual} icon={category.icon} />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/42 to-white/10 opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 p-5 sm:p-8 flex flex-col">
      <div>
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
          <category.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-[1.45rem] sm:text-[1.85rem] md:text-[1.95rem] font-semibold text-white mb-3 tracking-tight leading-[0.98] max-w-[11ch]">
          {category.title}
        </h3>
        <p className="text-white/78 text-sm sm:text-[15px] leading-relaxed max-w-[28ch]">
          {category.description}
        </p>
      </div>
      <div className="mt-auto pt-6">
        <Link to="/services" className="inline-flex items-center text-white text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
          View Details
          <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const CapabilityLeadCard: React.FC<{ category: CategoryCardProps['category'] }> = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative min-h-[380px] sm:min-h-[480px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-brand-100/50 bg-ink shadow-[0_28px_70px_rgba(17,19,21,0.14)]"
  >
    <CategoryVisual visual={category.visual} icon={category.icon} />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-white/10" />
    <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 flex flex-col">
      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/16 flex items-center justify-center mb-6">
        <category.icon className="w-6 h-6 text-white" />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/55 mb-4">Featured Capability</p>
      <h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-[0.95] max-w-[8ch] mb-5">{category.title}</h3>
      <p className="text-base sm:text-lg text-white/74 leading-relaxed max-w-[28ch]">{category.description}</p>

      <div className="mt-auto pt-8 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {['Clarity', 'Workflow', 'Structure', 'Trust'].map((item) => (
            <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/82">
              {item}
            </div>
          ))}
        </div>
        <Link to="/services" className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
          Explore Services
          <ArrowRight className="ml-2 w-4 h-4" />
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
    { title: 'AI Products', description: 'Assistants, workflows, and product features that make AI practical inside the business.', icon: Cpu, visual: 'ai' as const },
    { title: 'Custom Platforms', description: 'Tailored web platforms, portals, and operational tools built around your exact process.', icon: Globe, visual: 'platform' as const },
    { title: 'Commerce Systems', description: 'Storefronts and conversion flows designed to sell cleanly and scale without friction.', icon: ShoppingBag, visual: 'commerce' as const },
    { title: 'Automation & Data', description: 'Connected workflows, reporting, and internal systems that reduce manual work and surface insight.', icon: Database, visual: 'data' as const },
  ];

  return (
    <div className="bg-paper overflow-hidden">
      <InteractiveHero />

      <section className="py-14 sm:py-20 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">What We Build</p>
            <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5 sm:mb-8">
              Digital products, systems, and experiences designed to move the business forward.
            </h2>
            <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-3xl">
              We help companies launch sharper digital products, modernize customer-facing platforms, automate operational work, and create cleaner paths from interest to action.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 sm:gap-6 md:gap-8">
            <CapabilityLeadCard category={categories[0]} />
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
              {categories.slice(1).map((cat, idx) => (
                <CategoryCard
                  key={cat.title}
                  category={cat}
                  idx={idx}
                  className={idx === 2 ? 'lg:col-span-2' : ''}
                />
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
                A look at the kinds of products, systems, and journeys we can shape.
              </h2>
            </div>
            <Link to="/portfolio" className="flex items-center text-base sm:text-lg font-semibold text-ink hover:text-accent transition-colors group">
              View all concepts
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-widest text-accent mb-4 sm:mb-6">Trust And Delivery</p>
            <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-5 sm:mb-8">
              Proof where we have it. Clear standards everywhere else.
            </h2>
            <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-2xl">
              We do not invent outcomes or hide behind vague agency language. When a project is public, we show it. When it is not, we make the thinking, structure, and delivery standard visible instead.
            </p>
            <div className="mt-8 sm:mt-10 grid gap-4">
              {[
                'Strategy, UX, design, frontend, backend, and automation are treated as one system.',
                'Lead handling, guided brief, and direct inquiry flows are real and working.',
                'Concept studies are labeled honestly so visitors know what is demonstrative and what is live.',
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
              { title: 'Concept studies, clearly labeled', text: 'Portfolio pieces are marked as concept directions so expectations stay honest.' },
              { title: 'Real inquiry handling', text: 'Lead forms, guided brief, and contact requests all route through secure working flows.' },
              { title: 'References available when appropriate', text: 'For qualified opportunities, deeper project context and additional examples can be shared directly.' },
              { title: 'Focused delivery model', text: 'Strategy, UX, design, frontend, backend, and automation are shaped as one system instead of siloed handoffs.' },
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

      <section className="py-14 sm:py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6">How We Think</p>
            <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5 sm:mb-8">
              Good digital work is not just visible. It is operational.
            </h2>
            <p className="text-base sm:text-xl text-brand-400 leading-relaxed max-w-3xl">
              The strongest websites and products do more than look premium. They help people decide, convert, onboard, and continue without friction.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 sm:gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[5/4] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
              <BrandedVisual variant="studio" title="Systems create momentum" className="rounded-[2rem] sm:rounded-[3rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-transparent" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
              {[
                { title: 'AI Utility', desc: 'Useful assistants and intelligent workflows shaped around real business needs.' },
                { title: 'Platform Clarity', desc: 'Interfaces that make complex services easier to understand and easier to trust.' },
                { title: 'Automation', desc: 'Connected systems that remove repetitive work and improve internal flow.' },
                { title: 'Credibility', desc: 'A stronger digital presence that feels premium and operationally sound.' },
              ].map((item, idx) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.08 }} className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-brand-100/50 flex items-center justify-center text-accent mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">{item.title}</h3>
                  <p className="text-brand-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-32 bg-ink relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[2rem] sm:text-5xl md:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-6 sm:mb-10 md:mb-12">
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
