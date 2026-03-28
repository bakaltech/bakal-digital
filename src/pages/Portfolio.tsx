import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Web Platforms', 'E-commerce', 'AI Systems', 'SaaS', 'Automation'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                            project.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-paper pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink mb-10 tracking-tight leading-[1.05]">
              Selected works <br /> from our studio.
            </h1>
            <p className="text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-2xl">
              Explore a selection of our recent projects, from intelligent SaaS platforms to high-performance e-commerce experiences.
            </p>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 md:mb-24">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-500 ${
                  filter === cat
                    ? 'bg-ink text-white shadow-xl scale-105'
                    : 'bg-soft text-brand-400 hover:text-ink hover:bg-brand-100 border border-brand-100/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-brand-400 group-focus-within:text-accent transition-colors" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="block w-full pl-10 pr-4 md:pl-12 md:pr-6 py-3 md:py-3.5 bg-soft border border-brand-100/50 rounded-full text-sm text-ink focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all placeholder:text-brand-400 shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col"
              >
                <Link to={`/portfolio/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-soft mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                        View Case Study <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start px-2">
                    <div className="max-w-[75%] md:max-w-[85%]">
                      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                          {project.category}
                        </span>
                        <div className="h-[1px] w-6 md:w-8 bg-brand-100" />
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-ink mb-2 md:mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-brand-400 line-clamp-2 font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-semibold text-ink mb-4 tracking-tight">No projects found</h3>
            <p className="text-lg text-brand-400 font-normal mb-10">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setFilter('All'); setSearch(''); }}
              className="text-accent font-semibold hover:underline underline-offset-8"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
