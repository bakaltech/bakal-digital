import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, Zap, Shield, ChevronRight, Layout, Palette, ShoppingBag, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import { projects } from '../data/projects';
import InteractiveHero from '../components/InteractiveHero';
import StudioDemo from '../components/StudioDemo';

interface CategoryCardProps {
  key?: React.Key;
  category: {
    title: string;
    description: string;
    icon: React.ElementType;
    image: string;
  };
  idx: number;
}

const CategoryCard = ({ category, idx }: CategoryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-soft border border-brand-100/50 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <img 
      src={category.image} 
      alt={category.title}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
        <category.icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{category.title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {category.description}
      </p>
      <Link to="/services" className="inline-flex items-center text-white text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">
        View Details <ArrowRight className="ml-2 w-3 h-3" />
      </Link>
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: any, idx: number }> = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative flex flex-col"
  >
    <Link to={`/portfolio/${project.id}`} className="block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-soft mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="flex justify-between items-start px-2">
        <div className="max-w-[80%]">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{project.category}</p>
          <h3 className="text-3xl font-semibold text-ink mb-3 tracking-tight">{project.title}</h3>
          <p className="text-lg text-brand-400 font-normal leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  const categories = [
    {
      title: 'Web Design',
      description: 'Cinematic digital experiences crafted with precision and performance.',
      icon: Layout,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Branding',
      description: 'Strategic identity systems that resonate with elite global audiences.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'E-commerce',
      description: 'High-conversion headless engines built for luxury retail brands.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent automation platforms that redefine operational efficiency.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-paper overflow-hidden">
      <InteractiveHero />

      {/* Category Grid */}
      <section className="py-24 md:py-48 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-6">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink leading-tight tracking-tight">
              Strategic solutions for <br className="hidden md:block" /> the next generation.
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.title} category={cat} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Featured Work */}
      <section className="py-24 md:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">Selected Works</p>
              <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
                Crafting digital <br className="hidden md:block" /> excellence.
              </h2>
            </div>
            <Link to="/portfolio" className="flex items-center text-lg font-semibold text-ink hover:text-accent transition-colors group">
              View all projects <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <StudioDemo />

      {/* Philosophy Section */}
      <section className="py-24 md:py-48 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Our Philosophy</p>
              <h2 className="text-4xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-10 serif italic">
                Design is not just <br className="hidden md:block" /> how it looks. It's <br className="hidden md:block" /> how it works.
              </h2>
              <p className="text-xl md:text-2xl text-brand-400 leading-relaxed font-normal mb-12 max-w-xl">
                We believe in the power of reduction. By removing the unnecessary, we reveal the essential. Our process is rigorous, opinionated, and focused on delivering high-value outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Quality', desc: 'Uncompromising standards' },
                  { title: 'Performance', desc: 'First-class architecture' },
                  { title: 'Intelligence', desc: 'User-centric systems' },
                  { title: 'Simplicity', desc: 'The ultimate sophistication' }
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
                alt="Studio Philosophy"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
              <div className="absolute top-12 right-12 w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center p-6 text-center">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-tight">
                  Crafting Digital Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 md:py-48 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {[
              {
                icon: Globe,
                title: 'Global Scale',
                desc: 'We build platforms that serve millions of users with sub-second latency and absolute reliability.'
              },
              {
                icon: Zap,
                title: 'Elite Speed',
                desc: 'Performance is a feature. We optimize every millisecond to ensure a seamless, high-velocity experience.'
              },
              {
                icon: Shield,
                title: 'Ironclad Security',
                desc: 'Enterprise-grade security protocols integrated into every layer of your digital infrastructure.'
              }
            ].map((prop, idx) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col group"
              >
                <div className="w-20 h-20 rounded-3xl bg-soft flex items-center justify-center mb-10 border border-brand-100/50 group-hover:bg-ink group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <prop.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-semibold text-ink mb-6 tracking-tight group-hover:text-accent transition-colors duration-500">{prop.title}</h3>
                <p className="text-lg text-brand-400 leading-relaxed font-normal">{prop.desc}</p>
                <div className="mt-8 h-[1px] w-12 bg-brand-100 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 bg-ink relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-8xl font-semibold text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-10 md:mb-12">
              Ready to build <br className="hidden md:block" /> something elite?
            </h2>
            <p className="text-lg md:text-2xl text-brand-400 mb-12 md:mb-16 max-w-2xl font-normal leading-relaxed mx-auto md:mx-0">
              We are currently accepting new projects for Q3 2026. Let's discuss how we can elevate your digital presence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-medium rounded-full text-ink bg-white hover:bg-accent hover:text-white transition-all shadow-2xl"
            >
              Get in Touch <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4" />
      </section>
    </div>
  );
}
