import React from 'react';
import { Bot, Globe, ShoppingCart, Cloud, Zap, BarChart } from 'lucide-react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  longDescription: string;
  technologies: string[];
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
    description: 'AI assistants, product features, and intelligent workflows designed to solve real business problems instead of acting like demos.',
    longDescription: 'We build AI products and AI-powered workflows that are grounded in real operational value. That can include website assistants, lead qualification flows, internal copilots, summarization pipelines, or domain-specific tools that help a team respond faster, reduce manual work, and make better decisions.',
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
    description: 'Tailored websites, portals, and digital products built around your exact service model, workflow, and customer journey.',
    longDescription: 'We design and build custom web platforms that are clearer, faster, and more aligned with how the business actually operates. That may be a premium marketing site, a customer portal, a booking or onboarding flow, or a more complex web application that needs strong UX and reliable engineering.',
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
    description: 'Storefronts and revenue flows built to sell clearly, operate smoothly, and scale without unnecessary friction.',
    longDescription: 'We create e-commerce experiences that do more than look good. The work covers storefront design, product architecture, checkout flow improvement, subscription or recurring revenue systems, and the backend logic needed to keep commerce operations clean.',
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
    description: 'Multi-user software products with structured onboarding, billing, permissions, and room to grow.',
    longDescription: 'We help founders and teams build SaaS products that feel coherent from the first release. That includes shaping the product architecture, user roles, account flows, billing setup, dashboards, and the core workflows that make the platform valuable to customers.',
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
    description: 'Connected workflows that reduce manual work, improve consistency, and make the business easier to run.',
    longDescription: 'We design automations around the way your team already works. That can mean lead routing, CRM updates, internal approvals, notification systems, reporting handoffs, or API-based workflows that connect tools which currently operate in silos.',
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
    description: 'Dashboards, reporting layers, and decision tools that turn scattered information into something clear and useful.',
    longDescription: 'We help businesses organize and surface the data they need to make better decisions. That may involve analytics dashboards, business reporting, operational visibility tools, or data pipelines that consolidate information from different systems into one cleaner view.',
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
