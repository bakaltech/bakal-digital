import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import LeadsGrid from './LeadsGrid';
import BrandedVisual from './BrandedVisual';

const galleryVariants = ['ai', 'platform', 'commerce', 'data', 'studio'] as const;

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
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [40, -40]);
  const layer4Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[860px] w-full overflow-hidden bg-paper flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none scale-110 rotate-[-7deg]">
        <motion.div style={{ x: layer1X }} className="absolute top-[-4%] left-[-16%] flex gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`l1-${i}`} className="h-28 w-48 sm:h-36 sm:w-60 md:h-40 md:w-72 shrink-0 rounded-[1.75rem] overflow-hidden shadow-2xl">
              <BrandedVisual variant={galleryVariants[i % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: layer2X }} className="absolute top-[26%] right-[-20%] flex gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`l2-${i}`} className="h-28 w-48 sm:h-36 sm:w-60 md:h-40 md:w-72 shrink-0 rounded-[1.75rem] overflow-hidden shadow-2xl">
              <BrandedVisual variant={galleryVariants[(i + 2) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer3Y }} className="absolute left-[8%] top-[-40%] flex flex-col gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l3-${i}`} className="h-28 w-48 sm:h-36 sm:w-60 md:h-40 md:w-72 shrink-0 rounded-[1.75rem] overflow-hidden shadow-2xl">
              <BrandedVisual variant={galleryVariants[(i + 1) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: layer4Y }} className="absolute right-[8%] top-[-40%] flex flex-col gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`l4-${i}`} className="h-28 w-48 sm:h-36 sm:w-60 md:h-40 md:w-72 shrink-0 rounded-[1.75rem] overflow-hidden shadow-2xl">
              <BrandedVisual variant={galleryVariants[(i + 3) % galleryVariants.length]} compact title="" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-paper/30 via-paper/68 to-paper/28 backdrop-blur-[3px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-4xl w-full text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-200/10 blur-[100px] rounded-full" />

          <p className="text-[10px] sm:text-xs text-brand-400 font-bold tracking-[0.35em] uppercase opacity-80 mb-6">
            AI Products • Custom Platforms • Automation • Data Systems
          </p>

          <h1 className="text-[clamp(2.6rem,8vw,5.4rem)] font-bold text-ink leading-[1.02] tracking-tight mb-8">
            We build the digital systems <br />
            <span className="text-brand-300 italic serif">modern businesses grow on.</span>
          </h1>

          <p className="text-[clamp(1rem,2vw,1.25rem)] text-brand-400 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Bakal Digital designs AI-powered products, custom web platforms, automation workflows, and premium online experiences that help ambitious companies operate better and look sharper.
          </p>

          <div className="w-full max-w-2xl mx-auto">
            <LeadsGrid />
          </div>

          <p className="mt-8 text-[10px] sm:text-xs text-brand-400 font-bold tracking-[0.3em] uppercase opacity-60">
            Strategy, product thinking, design, development, and launch support in one focused studio.
          </p>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400">Scroll</span>
      </motion.div>
    </section>
  );
}
