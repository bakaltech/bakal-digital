import React from 'react';
import { Globe, BarChart3, Bot, Database, ShoppingBag, Workflow } from 'lucide-react';

export type VisualVariant =
  | 'ai'
  | 'platform'
  | 'commerce'
  | 'data'
  | 'studio'
  | 'acengeers'
  | 'nexus-ai'
  | 'lumina-saas'
  | 'velocity-ecommerce'
  | 'orbit-automation';

type BrandedVisualProps = {
  variant: VisualVariant;
  title?: string;
  compact?: boolean;
  narrow?: boolean;
  className?: string;
};

const variantConfig: Record<VisualVariant, { icon: React.ElementType; eyebrow: string; accent: string; glow: string; panel: string }> = {
  ai: { icon: Bot, eyebrow: 'AI products', accent: 'from-sky-400/80 to-blue-600/80', glow: 'bg-sky-400/20', panel: 'from-slate-950 via-slate-900 to-slate-800' },
  platform: { icon: Globe, eyebrow: 'Custom platforms', accent: 'from-cyan-400/80 to-blue-500/80', glow: 'bg-cyan-400/20', panel: 'from-slate-950 via-slate-900 to-slate-800' },
  commerce: { icon: ShoppingBag, eyebrow: 'Commerce systems', accent: 'from-amber-300/80 to-orange-500/80', glow: 'bg-orange-400/20', panel: 'from-zinc-950 via-stone-900 to-slate-800' },
  data: { icon: Database, eyebrow: 'Automation and data', accent: 'from-emerald-300/80 to-teal-500/80', glow: 'bg-emerald-400/20', panel: 'from-slate-950 via-slate-900 to-slate-800' },
  studio: { icon: Workflow, eyebrow: 'Studio systems', accent: 'from-sky-400/80 to-indigo-500/80', glow: 'bg-sky-400/20', panel: 'from-slate-950 via-slate-900 to-slate-800' },
  acengeers: { icon: Globe, eyebrow: 'Service website', accent: 'from-amber-300/80 to-orange-500/80', glow: 'bg-amber-300/25', panel: 'from-[#26170d] via-[#4c2f12] to-[#d97706]' },
  'nexus-ai': { icon: Bot, eyebrow: 'AI ops', accent: 'from-sky-400/80 to-blue-600/80', glow: 'bg-sky-400/20', panel: 'from-slate-950 via-slate-900 to-slate-800' },
  'lumina-saas': { icon: BarChart3, eyebrow: 'Client portal', accent: 'from-fuchsia-300/80 to-indigo-500/80', glow: 'bg-fuchsia-400/20', panel: 'from-[#171a2b] via-[#1c2440] to-[#111827]' },
  'velocity-ecommerce': { icon: ShoppingBag, eyebrow: 'Headless commerce', accent: 'from-amber-300/80 to-orange-500/80', glow: 'bg-orange-400/20', panel: 'from-[#1e1714] via-[#2b2019] to-[#171a1f]' },
  'orbit-automation': { icon: Workflow, eyebrow: 'Automation control', accent: 'from-emerald-300/80 to-cyan-500/80', glow: 'bg-emerald-400/20', panel: 'from-[#0f1720] via-[#12202d] to-[#101827]' },
};

const signalRows = ['Signal routing', 'Decision layer', 'Workflow health'];

export default function BrandedVisual({ variant, title, compact = false, narrow = false, className = '' }: BrandedVisualProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;
  const titleClassName = compact
    ? 'text-lg sm:text-[1.2rem]'
    : narrow
      ? 'text-[1.45rem] md:text-[1.9rem] xl:text-[2.1rem]'
      : 'text-[1.85rem] md:text-[2.35rem]';
  const titleWidthClassName = compact ? 'max-w-[8ch]' : narrow ? 'max-w-[7ch] md:max-w-[8ch]' : 'max-w-[8.5ch]';

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${config.panel} ${className}`}>
      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${config.glow}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent_35%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,auto,36px_36px,36px_36px] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />

      <div className={`relative z-10 flex h-full flex-col ${narrow ? 'justify-start' : 'justify-between'} ${compact ? 'p-4' : narrow ? 'p-4 md:p-5 xl:p-6' : 'p-7 md:p-8'}`}>
        <div className="flex items-start justify-between gap-4">
          <div className={`min-w-0 ${compact ? 'pt-1' : narrow ? 'pt-1 md:pt-2' : 'pt-2'}`}>
            <p className={`font-bold uppercase text-white/55 ${narrow ? 'mb-3 text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.3em]' : 'mb-4 text-[10px] tracking-[0.3em]'}`}>
              {config.eyebrow}
            </p>
            <h3 className={`${titleClassName} ${titleWidthClassName} text-balance font-semibold tracking-tight leading-[1.02] text-white drop-shadow-[0_8px_18px_rgba(15,23,42,0.2)]`}>
              {title ?? 'System direction'}
            </h3>
          </div>
          <div className={`flex shrink-0 ${compact ? 'h-10 w-10' : narrow ? 'h-11 w-11 md:h-12 md:w-12' : 'h-12 w-12'} items-center justify-center rounded-2xl bg-gradient-to-br ${config.accent} text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]`}>
            <Icon className={compact ? 'h-4 w-4' : narrow ? 'h-4 w-4 md:h-5 md:w-5' : 'h-5 w-5'} />
          </div>
        </div>

        <div className={`grid ${compact ? 'mt-5 gap-3' : narrow ? 'mt-6 gap-3 md:mt-7' : 'mt-8 gap-4'}`}>
          <div className={`rounded-[1.5rem] border border-white/10 bg-white/8 backdrop-blur-sm ${narrow ? 'p-3.5' : 'p-4'}`}>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/50" />
              <div className="h-2 w-2 rounded-full bg-white/25" />
              <div className="h-2 w-2 rounded-full bg-white/15" />
            </div>
            <div className="grid gap-2">
              <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
              <div className="h-2.5 w-full rounded-full bg-white/20" />
              <div className="h-2.5 w-4/5 rounded-full bg-white/15" />
            </div>
          </div>

          <div className={`grid ${compact ? 'grid-cols-2 gap-3' : narrow ? 'grid-cols-1 gap-2.5' : 'grid-cols-3 gap-3'}`}>
            {signalRows.map((row, index) => (
              <div key={row} className={`rounded-[1.25rem] border border-white/10 bg-black/15 ${narrow ? 'p-2.5' : 'p-3'}`}>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.26em] text-white/45">0{index + 1}</p>
                <p className={`${compact ? 'text-xs' : narrow ? 'text-[0.84rem] md:text-[0.92rem]' : 'text-sm'} font-medium leading-relaxed text-white/88 break-words`}>{row}</p>
              </div>
            ))}
          </div>

          <div className={`rounded-[1.5rem] border border-white/10 bg-black/20 ${narrow ? 'p-3.5' : 'p-4'}`}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">Momentum</p>
              <p className="text-xs font-medium text-white/70">Live system</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full w-[72%] rounded-full bg-gradient-to-r ${config.accent}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
