import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, Smartphone, Star } from 'lucide-react';

function BrowserShell({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-100/60 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 border-b border-brand-100/60 bg-white/90 px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-200" />
        <div className="h-2.5 w-2.5 rounded-full bg-brand-200" />
        <div className="h-2.5 w-2.5 rounded-full bg-brand-200" />
        <div className="ml-4 rounded-full border border-brand-100 bg-soft px-4 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-400">
          Showcase mode
        </div>
        <div className={`ml-auto h-2.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      </div>
      <div className="relative min-h-[24rem] overflow-hidden bg-soft">{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">{children}</p>;
}

export default function AcengeersShowcase({ activeFeature }: { activeFeature: number }) {
  if (activeFeature === 0) {
    return (
      <BrowserShell accent="from-amber-300 to-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_38%),linear-gradient(135deg,#f59e0b_0%,#f97316_48%,#facc15_100%)]" />
        <div className="absolute left-[8%] top-[16%] h-16 w-16 rounded-full bg-white/25 blur-sm" />
        <div className="absolute left-[22%] top-[12%] h-10 w-10 rounded-full bg-white/20 blur-sm" />
        <div className="absolute right-[10%] top-[24%] h-24 w-24 rounded-full bg-white/20 blur-md" />
        <div className="absolute left-[58%] bottom-[16%] h-20 w-20 rounded-full bg-white/15 blur-md" />

        <div className="relative grid h-full gap-6 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10">
          <div className="flex flex-col justify-center text-white">
            <SectionLabel>First impression</SectionLabel>
            <h3 className="mt-4 max-w-[12ch] text-4xl font-semibold tracking-tight md:text-5xl">Cleaning that feels easy to trust.</h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/86 md:text-base">
              The hero is built to feel brighter, more premium, and more intentional than a generic local-services homepage. Trust markers and the primary quote action sit inside the opening frame instead of getting buried below the fold.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-white/88">
              <span className="rounded-full border border-white/25 bg-white/12 px-3 py-2">5-star rated</span>
              <span className="rounded-full border border-white/25 bg-white/12 px-3 py-2">Insured team</span>
              <span className="rounded-full border border-white/25 bg-white/12 px-3 py-2">Eco-friendly options</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg">
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                Explore services
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-md gap-4">
              <div className="rounded-[1.8rem] border border-white/30 bg-white/16 p-6 text-white shadow-[0_18px_40px_rgba(68,35,5,0.2)] backdrop-blur-md">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">Hero visual</p>
                    <p className="mt-2 text-2xl font-semibold">Immersive motion without clutter</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">??</div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['Service clarity', '4 detailed offers'],
                  ['Trust cues', 'Visible from top'],
                  ['Action path', 'Quote CTA anchored'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.4rem] border border-white/25 bg-white/12 p-4 text-white backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">{label}</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BrowserShell>
    );
  }

  if (activeFeature === 1) {
    return (
      <BrowserShell accent="from-sky-400 to-blue-600">
        <div className="grid h-full gap-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 md:grid-cols-[0.95fr_1.05fr] md:p-9">
          <div className="grid gap-4">
            {[
              ['Residential Cleaning', 'Weekly, bi-weekly, and monthly care'],
              ['Commercial Cleaning', 'Offices, retail, and recurring upkeep'],
              ['Move In / Out', 'Deep cleaning for transitions'],
            ].map(([title, text], index) => (
              <div key={title} className={`rounded-[1.6rem] border p-5 shadow-sm transition-transform ${index === 0 ? 'border-accent/25 bg-white -translate-y-1' : 'border-brand-100/60 bg-soft/70'}`}>
                <SectionLabel>Service card</SectionLabel>
                <h3 className="mt-3 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-400">{text}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-brand-100/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-7">
            <SectionLabel>Detail page</SectionLabel>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-brand-100 bg-gradient-to-br from-sky-50 to-cyan-100">
              <div className="h-44 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.9),_transparent_40%),linear-gradient(135deg,#e0f2fe_0%,#7dd3fc_65%,#38bdf8_100%)]" />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h3 className="text-2xl font-semibold text-ink">Residential Cleaning</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-400">
                  Visitors can move from interest to fit-check quickly because each service has its own dedicated page, clearer benefit framing, and a direct quote path.
                </p>
              </div>
              <div className="rounded-full bg-soft px-4 py-2 text-sm font-semibold text-ink">Starting at $120 / visit</div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['Clear scope', 'Trust-building detail', 'Direct quote action'].map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-brand-100/60 bg-soft px-4 py-3 text-sm font-medium text-brand-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserShell>
    );
  }

  if (activeFeature === 2) {
    return (
      <BrowserShell accent="from-emerald-300 to-cyan-500">
        <div className="grid h-full gap-6 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-6 md:p-9">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Happy clients', '527'],
              ['Years operating', '12'],
              ['Eco-friendly choice', '100%'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.6rem] border border-brand-100/60 bg-white p-5 shadow-sm">
                <SectionLabel>Counter</SectionLabel>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">{value}</p>
                <p className="mt-2 text-sm text-brand-400">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-brand-100/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Social proof rail</SectionLabel>
                <h3 className="mt-3 text-2xl font-semibold text-ink">Proof that keeps moving without feeling gimmicky.</h3>
              </div>
              <div className="hidden rounded-full border border-brand-100 bg-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400 md:block">
                Hover pauses the motion
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ['Absolutely spotless. The team was punctual and professional.', 'Sarah J.'],
                ['Flexible scheduling, strong communication, and a cleaner finish.', 'Mark W.'],
                ['Move-out cleaning was handled flawlessly from start to finish.', 'Emily C.'],
              ].map(([quote, author]) => (
                <div key={author} className="rounded-[1.5rem] border border-brand-100/60 bg-soft p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-brand-400">"{quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-ink">{author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserShell>
    );
  }

  return (
    <BrowserShell accent="from-fuchsia-300 to-indigo-500">
      <div className="grid h-full gap-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9">
        <div className="rounded-[2rem] border border-brand-100/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <SectionLabel>Quote path</SectionLabel>
              <h3 className="mt-3 text-2xl font-semibold text-ink">Simple contact flow with visible feedback.</h3>
            </div>
            <MessageSquare className="h-6 w-6 text-accent" />
          </div>
          <div className="mt-6 grid gap-3">
            {['Name', 'Email', 'Message'].map((field) => (
              <div key={field} className="rounded-[1.1rem] border border-brand-100/60 bg-soft px-4 py-3 text-sm text-brand-300">
                {field}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-[1.3rem] border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <span className="inline-flex items-center gap-2 font-medium">
              <ShieldCheck className="h-4 w-4" />
              Demo submission confirms success clearly.
            </span>
            <Sparkles className="h-4 w-4" />
          </div>
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
            Send message
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[17rem] rounded-[2.2rem] border border-ink/10 bg-ink p-3 shadow-[0_26px_60px_rgba(15,23,42,0.22)]">
            <div className="rounded-[1.8rem] bg-white p-4">
              <div className="mx-auto h-1.5 w-16 rounded-full bg-brand-100" />
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <SectionLabel>Mobile nav</SectionLabel>
                  <h3 className="mt-2 text-lg font-semibold text-ink">Responsive and easy to scan</h3>
                </div>
                <Smartphone className="h-5 w-5 text-accent" />
              </div>
              <div className="mt-5 grid gap-3">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <div key={item} className="rounded-[1rem] border border-brand-100/60 bg-soft px-4 py-3 text-sm font-medium text-ink">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1rem] border border-brand-100/60 bg-soft px-4 py-3 text-sm text-brand-400">
                The conversion path stays intact even on smaller screens.
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserShell>
  );
}
