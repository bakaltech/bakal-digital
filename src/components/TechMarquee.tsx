import React from 'react';

const technologies = [
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/96bf48' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/008CDD' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
  { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-soft border-y border-brand-100/30 py-10 sm:py-12 md:py-20 relative flex flex-col items-center">
      <p className="text-brand-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.32em] sm:tracking-[0.4em] mb-8 sm:mb-10 md:mb-14 px-4 text-center">
        Deployed & Scaled on World-Class Infrastructure
      </p>

      <div className="absolute inset-y-0 left-0 w-10 sm:w-16 md:w-48 bg-gradient-to-r from-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-10 sm:w-16 md:w-48 bg-gradient-to-l from-soft to-transparent z-10 pointer-events-none" />

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="mx-4 sm:mx-6 md:mx-12 lg:mx-20 flex items-center gap-2 sm:gap-3 md:gap-5 group/item">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain grayscale opacity-35 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="text-base sm:text-lg md:text-3xl font-bold text-brand-200 group-hover/item:text-ink transition-colors cursor-default select-none tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
