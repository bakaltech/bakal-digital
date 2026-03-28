import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadsGrid from './LeadsGrid';

const galleryImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522542550221-31fd19255a7a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551434678-d270f9a4891b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
];

interface GalleryItemProps {
  key?: React.Key;
  src: string;
  index: number;
  layer: number;
}

const GalleryItem = ({ src, index, layer }: GalleryItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, zIndex: 10 }}
      className="relative flex-shrink-0 w-32 h-20 sm:w-48 sm:h-32 md:w-64 md:h-44 rounded-2xl overflow-hidden shadow-md border border-white/10 group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={src}
        alt={`Project ${index}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
        <p className="text-white text-[10px] font-bold uppercase tracking-widest">Project {index + 1}</p>
      </div>
    </motion.div>
  );
};

export default function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Layer transforms
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [50, -50]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [50, -50]);
  const layer4Y = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-paper flex items-center justify-center">
      {/* Background Multi-layer Gallery */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none scale-110 rotate-[-10deg]">
        {/* Layer 1: Horizontal Left */}
        <motion.div 
          style={{ x: layer1X }}
          className="absolute top-[-10%] left-[-20%] flex gap-8 whitespace-nowrap"
        >
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <GalleryItem key={`l1-${i}`} src={src} index={i} layer={1} />
          ))}
        </motion.div>

        {/* Layer 2: Horizontal Right */}
        <motion.div 
          style={{ x: layer2X }}
          className="absolute top-[25%] right-[-20%] flex gap-8 whitespace-nowrap"
        >
          {[...galleryImages, ...galleryImages].reverse().map((src, i) => (
            <GalleryItem key={`l2-${i}`} src={src} index={i} layer={2} />
          ))}
        </motion.div>

        {/* Layer 3: Vertical Up */}
        <motion.div 
          style={{ y: layer3Y }}
          className="absolute left-[10%] top-[-50%] flex flex-col gap-8"
        >
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <GalleryItem key={`l3-${i}`} src={src} index={i} layer={3} />
          ))}
        </motion.div>

        {/* Layer 4: Vertical Down */}
        <motion.div 
          style={{ y: layer4Y }}
          className="absolute right-[10%] top-[-50%] flex flex-col gap-8"
        >
          {[...galleryImages, ...galleryImages].reverse().map((src, i) => (
            <GalleryItem key={`l4-${i}`} src={src} index={i} layer={4} />
          ))}
        </motion.div>

        {/* Layer 5: Diagonal / Extra Density */}
        <motion.div 
          style={{ x: layer1X, y: layer4Y }}
          className="absolute top-[60%] left-[-10%] flex gap-8 whitespace-nowrap opacity-40 blur-[2px]"
        >
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <GalleryItem key={`l5-${i}`} src={src} index={i} layer={5} />
          ))}
        </motion.div>
      </div>

      {/* Readability Overlay */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/20 via-paper/60 to-paper/20 backdrop-blur-[2px]" />

      {/* Content Overlay Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-3xl w-full text-center relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-200/10 blur-[100px] rounded-full" />

          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold text-ink leading-[1.05] tracking-tight mb-8">
            Your vision starts <br />
            <span className="text-brand-300 italic serif">with Bakàl.</span>
          </h1>
          
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-brand-400 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
            We architect high-performance digital systems and elite brand experiences that drive growth and innovation.
          </p>

          <div className="w-full max-w-lg mx-auto">
            <LeadsGrid />
          </div>

          <p className="mt-8 text-[10px] sm:text-xs text-brand-400 font-bold tracking-[0.3em] uppercase opacity-60">
            Partner with us to build your next elite digital product.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400">Scroll</span>
      </motion.div>
    </section>
  );
}
