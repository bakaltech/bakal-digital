import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'AI Systems', 'SaaS', 'E-commerce', 'Automation'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink mb-8 tracking-tight leading-[1.04]">Selected concepts and delivery directions.</h1>
            <p className="text-xl md:text-2xl text-brand-400 leading-relaxed max-w-3xl">These concept studies show the kind of product, service, and brand systems we can shape for new and growing businesses.</p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-ink text-white shadow-lg' : 'bg-soft text-brand-400 hover:text-ink hover:bg-brand-100 border border-brand-100/50'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none"><Search className="h-4 w-4 text-brand-400" /></div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search concepts..." className="block w-full pl-12 pr-6 py-3.5 bg-soft border border-brand-100/50 rounded-full text-sm text-ink focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all placeholder:text-brand-400 shadow-sm" />
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group flex flex-col">
                <Link to={`/portfolio/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-soft mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-start px-2">
                    <div className="max-w-[82%]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.category}</span>
                        <div className="h-[1px] w-8 bg-brand-100" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">Concept Study</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">{project.title}</h3>
                      <p className="text-base md:text-lg text-brand-400 line-clamp-2 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="w-11 h-11 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500"><ChevronRight className="w-5 h-5" /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-28">
            <h3 className="text-2xl font-semibold text-ink mb-4 tracking-tight">No concepts found</h3>
            <p className="text-lg text-brand-400 mb-10">Try adjusting your search or filters.</p>
            <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-accent font-semibold hover:underline underline-offset-8">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
