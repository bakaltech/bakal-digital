import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Heart, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Precision',
      description: 'We build with exactness. Every line of code, every pixel, and every system architecture is crafted with intention and accuracy.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what is possible, integrating the latest AI and web technologies to keep our clients ahead.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We act as an extension of your team. True partnership is the foundation of every successful digital system we build.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Empathy',
      description: 'We design for humans first. Technology should serve people, making their lives easier, more productive, and more enjoyable.'
    }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Lead Engineer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of AI Integration',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60'
    },
    {
      name: 'Marcus Johnson',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="min-h-screen bg-paper pt-40 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-48">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">The Studio</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink leading-[1.05] mb-10 tracking-tight">
              We architect the systems <br /> that power the future.
            </h1>
            <p className="text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-2xl">
              Bakàl Digital is a premier product studio. We partner with ambitious companies to build intelligent, scalable, and beautifully crafted software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
            alt="Team collaborating"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Story & Mission */}
      <section className="py-24 md:py-48 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold text-ink mb-8 md:mb-10 tracking-tight leading-tight">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-brand-400 leading-relaxed font-normal">
                Founded on the belief that software should be both powerful and elegant, Bakàl Digital started as a small team of passionate engineers and designers. We saw a gap between complex enterprise systems that were hard to use, and beautiful consumer apps that lacked depth.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-xl text-brand-400 leading-relaxed font-normal mb-8 md:mb-10">
                Our mission is to bridge that gap. We build intelligent digital systems that combine the robust architecture needed for scale with the intuitive design required for adoption. By integrating AI into our development process and the products we build, we deliver solutions faster and smarter than traditional agencies.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-accent transition-colors group text-lg">
                Work with us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-48 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
              The principles <br className="hidden md:block" /> that guide us.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center mb-8 text-ink border border-brand-100/50">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-4 tracking-tight">{value.title}</h3>
                <p className="text-lg text-brand-400 leading-relaxed font-normal">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-48 bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">The Team</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-tight">
              The minds behind <br className="hidden md:block" /> the systems.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6 md:mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">Elite Talent</p>
                    <p className="text-white text-base md:text-lg font-semibold tracking-tight">{member.name}</p>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-ink mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-brand-400 font-normal text-sm md:text-base">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
