import React from 'react';
import { Bot, Globe, ShoppingCart, Cloud, Zap, BarChart } from 'lucide-react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortTitle: string;
  offerTitle: string;
  description: string;
  features: string[];
  benefits: string[];
  longDescription: string;
  technologies: string[];
  signature: string;
  buyer: string;
  problem: string;
  homepageSummary: string;
  ctaLabel: string;
  idealFor: string[];
  outcomes: string[];
  engagementSteps: {
    title: string;
    detail: string;
  }[];
  theme: {
    accent: string;
    soft: string;
    chip: string;
    ring: string;
    visual: 'ai' | 'platform' | 'commerce' | 'data' | 'lumina-saas';
    label: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-development',
    icon: <Bot className="h-8 w-8 text-brand-500" />,
    title: 'AI Development',
    shortTitle: 'AI products',
    offerTitle: 'Build AI workflows people can actually use',
    description: 'AI assistants, product features, and intelligent workflows designed to solve real business problems instead of acting like demos.',
    longDescription: 'We build AI products and AI-powered workflows that are grounded in real operational value. That can include website assistants, lead qualification flows, internal copilots, summarization pipelines, or domain-specific tools that help a team respond faster, reduce manual work, and make better decisions.',
    signature: 'Best when a business wants AI to improve response speed, qualification, support, or internal execution without turning the product into a gimmick.',
    buyer: 'Startups and teams turning AI from an idea into a working product or workflow.',
    problem: 'The business wants AI to handle a real job, but the current flow is manual, slow, or stuck at the demo stage.',
    homepageSummary: 'AI assistants, copilots, and product features that reduce manual handling and route the next action cleanly.',
    ctaLabel: 'See AI workflow scope',
    features: [
      'AI Assistants & Chatbots',
      'Lead Qualification Flows',
      'Internal Copilots',
      'Content & Summary Pipelines',
      'Structured Prompt Workflows',
      'AI Product MVPs',
    ],
    benefits: [
      'Turn AI into something useful and deployable',
      'Reduce repetitive work across customer and internal workflows',
      'Create better first-response and intake experiences',
      'Launch AI features that fit the product instead of distracting from it',
    ],
    idealFor: ['Service businesses handling high inbound volume', 'Teams exploring AI MVPs or assistant features', 'Operations that need faster triage and response'],
    outcomes: ['Shorter intake and support cycles', 'Higher-quality lead capture and qualification', 'Cleaner handoff from conversation to action'],
    engagementSteps: [
      { title: 'Map the decision point', detail: 'We define where AI should assist, what context it needs, and where human review still matters.' },
      { title: 'Design the interaction', detail: 'We shape the prompt flow, user interface, and fallback logic so the experience feels guided and useful.' },
      { title: 'Deploy with guardrails', detail: 'We connect the workflow to the business systems and make sure outputs route somewhere practical.' },
    ],
    technologies: ['OpenAI', 'Anthropic', 'Google AI', 'Python', 'Node.js', 'TypeScript'],
    theme: {
      accent: 'text-sky-600',
      soft: 'from-sky-50 via-white to-blue-50',
      chip: 'bg-sky-100 text-sky-700',
      ring: 'border-sky-200/70',
      visual: 'ai',
      label: 'AI systems',
    },
  },
  {
    id: 'custom-web-platforms',
    icon: <Globe className="h-8 w-8 text-brand-500" />,
    title: 'Custom Web Platforms',
    shortTitle: 'Platforms',
    offerTitle: 'Build websites and platforms that fit the real workflow',
    description: 'Tailored websites, portals, and digital products built around your exact service model, workflow, and customer journey.',
    longDescription: 'We design and build custom web platforms that are clearer, faster, and more aligned with how the business actually operates. That may be a premium marketing site, a customer portal, a booking or onboarding flow, or a more complex web application that needs strong UX and reliable engineering.',
    signature: 'Best when off-the-shelf website patterns no longer match the way your business sells, serves, or operates.',
    buyer: 'Founders and growing businesses that need a stronger website, portal, or product layer.',
    problem: 'The offer is hard to understand, the path to action is weak, or the business needs more than a template can support.',
    homepageSummary: 'Websites, portals, and product flows built around how the business actually sells, serves, and delivers.',
    ctaLabel: 'See platform scope',
    features: [
      'Marketing Websites',
      'Customer Portals',
      'React & Next.js Development',
      'API Design & Integration',
      'Performance Optimization',
      'Responsive Product Interfaces',
    ],
    benefits: [
      'Explain the offer more clearly and convert better',
      'Build tools that fit the business instead of forcing generic software',
      'Improve speed, responsiveness, and trust across the user journey',
      'Create a stronger digital foundation for future features and growth',
    ],
    idealFor: ['Founders repositioning their digital presence', 'Teams that need client portals or operational interfaces', 'Businesses outgrowing templated site builders'],
    outcomes: ['Sharper positioning and conversion paths', 'Interfaces tailored to your real workflow', 'A stronger foundation for future platform features'],
    engagementSteps: [
      { title: 'Clarify the journey', detail: 'We map what users need to understand, do, and trust at each stage of the platform.' },
      { title: 'Shape the product layer', detail: 'We design the content structure, screens, interactions, and system logic around real business needs.' },
      { title: 'Launch for scale', detail: 'We build for maintainability, responsiveness, and future expansion instead of one-off pages.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Vercel', 'Node.js', 'PostgreSQL'],
    theme: {
      accent: 'text-cyan-700',
      soft: 'from-cyan-50 via-white to-blue-50',
      chip: 'bg-cyan-100 text-cyan-700',
      ring: 'border-cyan-200/70',
      visual: 'platform',
      label: 'Platform build',
    },
  },
  {
    id: 'ecommerce-systems',
    icon: <ShoppingCart className="h-8 w-8 text-brand-500" />,
    title: 'E-commerce Systems',
    shortTitle: 'Commerce',
    offerTitle: 'Fix the revenue path from product story to payment',
    description: 'Storefronts and revenue flows built to sell clearly, operate smoothly, and scale without unnecessary friction.',
    longDescription: 'We create e-commerce experiences that do more than look good. The work covers storefront design, product architecture, checkout flow improvement, subscription or recurring revenue systems, and the backend logic needed to keep commerce operations clean.',
    signature: 'Best when revenue depends on a clean product story, a smoother checkout flow, and fewer operational bottlenecks behind the store.',
    buyer: 'Brands that need a storefront and backend flow strong enough to support growth.',
    problem: 'The business is losing confidence or revenue across product presentation, checkout, subscriptions, or post-purchase operations.',
    homepageSummary: 'Storefronts, checkout systems, and revenue operations designed to reduce friction and support scale.',
    ctaLabel: 'See commerce scope',
    features: [
      'Custom Storefronts',
      'Payment Integrations',
      'Subscription Billing',
      'Conversion Flow Design',
      'Catalog & Inventory Logic',
      'Localization & Multi-currency',
    ],
    benefits: [
      'Reduce friction in the buying journey',
      'Improve trust and conversion across the storefront',
      'Support more complex offers such as subscriptions or mixed catalogs',
      'Connect commerce operations to the rest of the business cleanly',
    ],
    idealFor: ['Brands improving conversion and average order value', 'Stores adding subscriptions or recurring revenue', 'Commerce teams needing cleaner operations behind checkout'],
    outcomes: ['Stronger product presentation and trust', 'Lower friction from product page to payment', 'Better alignment between storefront and operations'],
    engagementSteps: [
      { title: 'Audit the revenue path', detail: 'We identify where users hesitate, abandon, or lose confidence across the buying journey.' },
      { title: 'Refine the storefront', detail: 'We improve merchandising, product architecture, checkout pacing, and conversion details.' },
      { title: 'Connect the backend flow', detail: 'We align billing, fulfillment, and reporting so the business can support growth cleanly.' },
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    theme: {
      accent: 'text-amber-700',
      soft: 'from-amber-50 via-white to-orange-50',
      chip: 'bg-amber-100 text-amber-700',
      ring: 'border-amber-200/70',
      visual: 'commerce',
      label: 'Commerce flow',
    },
  },
  {
    id: 'saas-development',
    icon: <Cloud className="h-8 w-8 text-brand-500" />,
    title: 'SaaS Development',
    shortTitle: 'SaaS',
    offerTitle: 'Launch software with a real product spine',
    description: 'Multi-user software products with structured onboarding, billing, permissions, and room to grow.',
    longDescription: 'We help founders and teams build SaaS products that feel coherent from the first release. That includes shaping the product architecture, user roles, account flows, billing setup, dashboards, and the core workflows that make the platform valuable to customers.',
    signature: 'Best when you need a real product foundation, not just a clickable prototype or a stack of disconnected screens.',
    buyer: 'Founders building a product that needs real users, real accounts, and room to grow.',
    problem: 'The software idea is moving beyond mockups and now needs product architecture, onboarding, billing, and operational logic that can hold up.',
    homepageSummary: 'Multi-user software products with onboarding, permissions, billing, and a foundation built for expansion.',
    ctaLabel: 'See SaaS scope',
    features: [
      'Multi-tenant Architecture',
      'Authentication & Roles',
      'Subscription Systems',
      'Onboarding Flows',
      'Usage Reporting',
      'Product Dashboards',
    ],
    benefits: [
      'Launch software products with a stronger operational foundation',
      'Handle users, accounts, and billing more cleanly',
      'Build for future growth instead of rewriting the core too early',
      'Create a more premium product experience from day one',
    ],
    idealFor: ['Founders launching SaaS MVPs with real customers in mind', 'Teams modernizing internal products into sellable software', 'Products that need accounts, billing, and permissions from the start'],
    outcomes: ['Cleaner onboarding and activation', 'A product architecture built for real users and expansion', 'More confidence in launching and iterating'],
    engagementSteps: [
      { title: 'Define the product spine', detail: 'We decide what the first release must support across users, accounts, permissions, and billing.' },
      { title: 'Build the core experience', detail: 'We shape dashboards, onboarding, workflows, and product UI around the value the software delivers.' },
      { title: 'Prepare for growth', detail: 'We structure the product so it can absorb more users, more features, and more complexity cleanly.' },
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Auth.js', 'Prisma', 'Redis'],
    theme: {
      accent: 'text-fuchsia-700',
      soft: 'from-fuchsia-50 via-white to-indigo-50',
      chip: 'bg-fuchsia-100 text-fuchsia-700',
      ring: 'border-fuchsia-200/70',
      visual: 'lumina-saas',
      label: 'SaaS product',
    },
  },
  {
    id: 'automation-systems',
    icon: <Zap className="h-8 w-8 text-brand-500" />,
    title: 'Automation Systems',
    shortTitle: 'Automation',
    offerTitle: 'Replace repeated admin work with trusted automation',
    description: 'Connected workflows that reduce manual work, improve consistency, and make the business easier to run.',
    longDescription: 'We design automations around the way your team already works. That can mean lead routing, CRM updates, internal approvals, notification systems, reporting handoffs, or API-based workflows that connect tools which currently operate in silos.',
    signature: 'Best when the business is losing time to repeated admin work, messy handoffs, and tools that do not talk to each other.',
    buyer: 'Teams running on spreadsheets, handoffs, and disconnected tools that keep slowing execution down.',
    problem: 'Work is getting duplicated, delayed, or dropped because the systems do not talk to each other cleanly.',
    homepageSummary: 'Routing, approvals, tool sync, and operational logic that reduce repeated work and missed handoffs.',
    ctaLabel: 'See automation scope',
    features: [
      'Workflow Automation',
      'Tool & API Integrations',
      'Internal Operations Tools',
      'Notification & Routing Systems',
      'Data Synchronization',
      'Event-driven Workflows',
    ],
    benefits: [
      'Reduce repetitive admin work and human error',
      'Create cleaner handoffs across the team',
      'Keep tools in sync without constant manual updates',
      'Improve response speed across customer and internal operations',
    ],
    idealFor: ['Teams juggling multiple tools and manual updates', 'Operations that need routing, approvals, or sync flows', 'Businesses trying to reduce bottlenecks without hiring immediately'],
    outcomes: ['Less repetitive work and fewer missed handoffs', 'Faster internal response and execution cycles', 'Better visibility into where workflows break'],
    engagementSteps: [
      { title: 'Find the friction', detail: 'We map where work gets duplicated, delayed, or dropped between tools and people.' },
      { title: 'Build the workflow layer', detail: 'We create the triggers, routing logic, and integrations that reduce manual effort.' },
      { title: 'Monitor and refine', detail: 'We make the automation observable so the team can trust it and improve it over time.' },
    ],
    technologies: ['Zapier', 'Make.com', 'n8n', 'Node.js', 'Python', 'GitHub Actions'],
    theme: {
      accent: 'text-emerald-700',
      soft: 'from-emerald-50 via-white to-teal-50',
      chip: 'bg-emerald-100 text-emerald-700',
      ring: 'border-emerald-200/70',
      visual: 'data',
      label: 'Automation layer',
    },
  },
  {
    id: 'data-intelligence',
    icon: <BarChart className="h-8 w-8 text-brand-500" />,
    title: 'Data Intelligence',
    shortTitle: 'Reporting',
    offerTitle: 'Turn scattered reporting into a usable decision layer',
    description: 'Dashboards, reporting layers, and decision tools that turn scattered information into something clear and useful.',
    longDescription: 'We help businesses organize and surface the data they need to make better decisions. That may involve analytics dashboards, business reporting, operational visibility tools, or data pipelines that consolidate information from different systems into one cleaner view.',
    signature: 'Best when decisions are being slowed down by scattered reporting, unclear metrics, or too much manual reconciliation.',
    buyer: 'Operators and leaders who need one trustworthy view of what is working, slipping, or slowing down.',
    problem: 'Important signals are spread across too many tools, and the team is still stitching together answers by hand.',
    homepageSummary: 'Dashboards, reporting, and visibility layers that turn disconnected signals into useful operating guidance.',
    ctaLabel: 'See reporting scope',
    features: [
      'Custom Dashboards',
      'Business Reporting',
      'Operational Visibility Tools',
      'Data Visualization',
      'Source Integration',
      'Decision Support Workflows',
    ],
    benefits: [
      'See the business more clearly across teams and systems',
      'Reduce time spent gathering and reconciling information manually',
      'Spot performance issues and opportunities faster',
      'Create a stronger foundation for strategic decisions and AI workflows',
    ],
    idealFor: ['Leaders needing faster operational visibility', 'Teams pulling reports manually across disconnected systems', 'Businesses preparing for smarter automation or AI use'],
    outcomes: ['Clearer reporting and decision support', 'Less time spent stitching information together', 'A stronger data layer for future systems and AI'],
    engagementSteps: [
      { title: 'Define what matters', detail: 'We identify the signals, metrics, and reporting views that actually change decisions.' },
      { title: 'Unify the sources', detail: 'We connect the systems and shape the model so the data becomes easier to trust.' },
      { title: 'Design for action', detail: 'We turn the reporting layer into dashboards and workflows that help teams respond, not just observe.' },
    ],
    technologies: ['D3.js', 'Power BI', 'BigQuery', 'Snowflake', 'Python', 'PostgreSQL'],
    theme: {
      accent: 'text-violet-700',
      soft: 'from-violet-50 via-white to-slate-50',
      chip: 'bg-violet-100 text-violet-700',
      ring: 'border-violet-200/70',
      visual: 'data',
      label: 'Data layer',
    },
  },
];
