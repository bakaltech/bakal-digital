import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Bot, Gauge, Globe, Layers3, ShieldCheck, ShoppingCart, Sparkles, Workflow } from 'lucide-react';
import type { Service } from '../data/services';

type ShowcaseId =
  | 'ai-development'
  | 'custom-web-platforms'
  | 'ecommerce-systems'
  | 'saas-development'
  | 'automation-systems'
  | 'data-intelligence';

type ShowcaseStep = {
  label: string;
  title: string;
  detail: string;
  metric: string;
};

type ShowcaseContent = {
  eyebrow: string;
  title: string;
  summary: string;
  icon: React.ElementType;
  note: string;
  steps: ShowcaseStep[];
};

const showcaseContent: Record<ShowcaseId, ShowcaseContent> = {
  'ai-development': {
    eyebrow: 'Experience The Service',
    title: 'How an AI workflow should feel when it is actually usable.',
    summary: 'The strongest AI products guide the user, capture context, and route the outcome into a real next step.',
    icon: Bot,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Intake', title: 'Structured input over blank prompts', detail: 'Users get guided into the right request shape quickly, with less ambiguity and better downstream output.', metric: '47% less back-and-forth' },
      { label: 'Decision', title: 'Human-reviewed where it matters', detail: 'The workflow can escalate, summarize, or route based on risk, confidence, or business rules.', metric: '3 review paths' },
      { label: 'Routing', title: 'Connected to the operating system', detail: 'Outputs feed a CRM, task queue, or support flow instead of dying in the chat window.', metric: 'Live handoff ready' },
    ],
  },
  'custom-web-platforms': {
    eyebrow: 'Experience The Service',
    title: 'How a custom platform creates clarity instead of friction.',
    summary: 'A good platform helps users understand where they are, what they need to do, and why they should trust the next step.',
    icon: Globe,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Structure', title: 'Information architecture first', detail: 'The page and product structure are designed around decision-making, not just content blocks.', metric: '4 journey layers' },
      { label: 'Flow', title: 'Interfaces shaped around the real workflow', detail: 'Portals, onboarding flows, and operational screens are built around what the business actually needs users to do.', metric: 'Task-first UX' },
      { label: 'Trust', title: 'Premium details that support conversion', detail: 'Speed, responsiveness, hierarchy, and transition quality all shape whether the platform feels credible.', metric: 'Faster path to action' },
    ],
  },
  'ecommerce-systems': {
    eyebrow: 'Experience The Service',
    title: 'How a commerce system reduces drop-off across the buying path.',
    summary: 'The work is not only about a storefront. It is about confidence, pacing, and operational flow from discovery to payment.',
    icon: ShoppingCart,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Merchandising', title: 'Products framed to sell clearly', detail: 'Collections, product pages, and offer logic are designed to remove uncertainty and support decision-making.', metric: '+ clearer product story' },
      { label: 'Checkout', title: 'A smoother path to purchase', detail: 'Shipping, payment, and subscription logic are shaped so the checkout feels shorter and cleaner.', metric: '2-step flow' },
      { label: 'Ops', title: 'Back-office flow that supports scale', detail: 'Inventory, order routing, fulfillment, and reporting are connected so growth does not create chaos.', metric: 'Connected revenue ops' },
    ],
  },
  'saas-development': {
    eyebrow: 'Experience The Service',
    title: 'How a SaaS product starts feeling real, not just clickable.',
    summary: 'A credible SaaS foundation includes roles, onboarding, billing logic, and a product spine that can actually grow.',
    icon: Layers3,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Foundation', title: 'Account, role, and tenant logic', detail: 'We define who uses the product, how access works, and what the billing model needs to support from the start.', metric: 'Multi-user ready' },
      { label: 'Activation', title: 'Onboarding that gets users to value faster', detail: 'The first-run experience is built to reduce friction and guide the user into the product core loop.', metric: 'Clear activation path' },
      { label: 'Scale', title: 'A system that can absorb growth', detail: 'The product architecture is shaped for more users, more features, and better reporting without collapsing into rework.', metric: 'Growth-ready spine' },
    ],
  },
  'automation-systems': {
    eyebrow: 'Experience The Service',
    title: 'How automation should reduce work without creating black boxes.',
    summary: 'A strong automation layer is visible, observable, and designed around handoffs the team can actually trust.',
    icon: Workflow,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Trigger', title: 'Events that start the right workflows', detail: 'Forms, CRM changes, approvals, and internal updates can all trigger clear downstream actions.', metric: '6 source events' },
      { label: 'Logic', title: 'Routing built around real edge cases', detail: 'Conditional logic accounts for exceptions, escalation rules, and system failures instead of assuming perfect input.', metric: 'Guardrails included' },
      { label: 'Visibility', title: 'A team can see what is happening', detail: 'Status tracking and fallback paths make the automation trustworthy instead of invisible and brittle.', metric: 'Exception-aware' },
    ],
  },
  'data-intelligence': {
    eyebrow: 'Experience The Service',
    title: 'How a reporting layer becomes something teams can actually use.',
    summary: 'Good data work is not just charts. It is the translation of scattered signals into faster, better decisions.',
    icon: BarChart3,
    note: 'This is a service simulation, not a live client system.',
    steps: [
      { label: 'Signal', title: 'Separate signal from dashboard noise', detail: 'We decide which metrics matter, how they relate, and what a useful view should actually help someone decide.', metric: 'Decision-first reporting' },
      { label: 'Unify', title: 'Bring sources into one clearer layer', detail: 'Different systems become easier to compare once the model and terminology are aligned.', metric: 'Single source lens' },
      { label: 'Action', title: 'Turn reporting into operating guidance', detail: 'Dashboards should reveal what changed, where attention is needed, and what the next move should be.', metric: 'Faster issue detection' },
    ],
  },
};

const stepIcons = [Sparkles, ShieldCheck, Gauge];

export default function ServiceShowcase({ service }: { service: Service }) {
  const content = showcaseContent[service.id as ShowcaseId];
  const [activeStep, setActiveStep] = useState(0);

  const Icon = content.icon;
  const ActiveIcon = stepIcons[activeStep] ?? ArrowRight;

  const accentBar = useMemo(() => `${service.theme.soft} ${service.theme.ring}`, [service.theme.ring, service.theme.soft]);

  return (
    <section className="py-12 sm:py-16 border-t border-brand-100/30">
      <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 sm:gap-10 md:gap-14 items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">{content.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-5">{content.title}</h2>
          <p className="text-base sm:text-lg text-brand-400 leading-relaxed mb-8">{content.summary}</p>

          <div className="grid gap-3">
            {content.steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`text-left rounded-[1.5rem] border p-5 sm:p-6 transition-all duration-300 ${
                  index === activeStep
                    ? `bg-gradient-to-br ${accentBar} shadow-[0_16px_40px_rgba(17,19,21,0.06)]`
                    : 'bg-white border-brand-100/50 hover:border-brand-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-3">{step.label}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-brand-400 leading-relaxed">{step.detail}</p>
                  </div>
                  <span className={`shrink-0 inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] ${service.theme.chip}`}>
                    {step.metric}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-[2rem] sm:rounded-[2.5rem] border ${service.theme.ring} bg-gradient-to-br ${service.theme.soft} p-5 sm:p-7 md:p-8 shadow-[0_24px_60px_rgba(17,19,21,0.08)]`}
        >
          <div className="rounded-[1.5rem] bg-ink text-white p-5 sm:p-6 md:p-7 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_30%)]" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 mb-3">{service.theme.label}</p>
                <h3 className="max-w-[14ch] text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.02]">{content.steps[activeStep].title}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-white/7 border border-white/10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <ActiveIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 mb-1">Active Lens</p>
                      <p className="text-sm sm:text-base font-medium text-white/90">{content.steps[activeStep].label}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75">
                    {content.steps[activeStep].metric}
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="h-2.5 rounded-full bg-white/12 overflow-hidden">
                    <div className="h-full w-[78%] bg-white/80 rounded-full" />
                  </div>
                  <div className="h-2.5 rounded-full bg-white/12 overflow-hidden">
                    <div className="h-full w-[62%] bg-white/35 rounded-full" />
                  </div>
                  <div className="h-2.5 rounded-full bg-white/12 overflow-hidden">
                    <div className="h-full w-[46%] bg-white/25 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {content.steps.map((step, index) => (
                  <div
                    key={step.label}
                    className={`rounded-[1.25rem] border p-4 transition-all duration-300 ${
                      index === activeStep ? 'bg-white text-ink border-white' : 'bg-white/6 text-white border-white/10'
                    }`}
                  >
                    <p className={`text-[9px] font-bold uppercase tracking-[0.24em] mb-2 ${index === activeStep ? 'text-accent' : 'text-white/45'}`}>
                      0{index + 1}
                    </p>
                    <p className={`text-sm font-medium leading-relaxed ${index === activeStep ? 'text-ink' : 'text-white/88'}`}>{step.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] bg-white/7 border border-white/10 p-4 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 mb-3">What this should feel like</p>
                <p className="text-sm sm:text-base text-white/82 leading-relaxed">{content.steps[activeStep].detail}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 px-1">
            <p className="text-sm text-brand-400 leading-relaxed">{content.note}</p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat', { detail: { query: `Show me how ${service.title} could work for my business.` } }))}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors"
            >
              Ask for a tailored version
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

