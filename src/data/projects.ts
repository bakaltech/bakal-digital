export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  repoUrl?: string;
  year?: string;
  role?: string;
  thumbnail: string;
  image: string;
  techStack: string[];
  challenge: string;
  solution: string;
  results: string;
  status?: 'concept' | 'launch';
  metricHighlights?: { label: string; value: string }[];
  launchFacts?: { label: string; value: string }[];
  features: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'acengeers',
    title: 'Acengeers Cleaning Experience',
    category: 'Web Experience',
    description:
      'A complete React website prototype for a Toronto cleaning brand, rebuilt to replace a weak one-page web presence with a clearer, more credible, conversion-focused customer experience.',
    liveUrl: 'https://bakaltech.github.io/acengeers-website/',
    repoUrl: 'https://github.com/bakaltech/acengeers-website',
    year: '2025',
    role: 'Solo designer & developer',
    thumbnail: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1600',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'EmailJS'],
    challenge:
      'The previous site was little more than a text block with weak structure, outdated presentation, no meaningful navigation, and no clear lead-capture path. The brand needed a website that could earn trust fast, explain the services clearly, and make inquiry feel easy.',
    solution:
      'We rebuilt the experience as a full 8-page React prototype with stronger information architecture, premium motion, clearer service detail pages, and a functional contact flow designed to move visitors from curiosity to quote request.',
    results:
      'The result is a far more credible first impression, a cleaner service journey, and a customer-facing website that feels modern, trustworthy, and ready to support real inbound growth.',
    status: 'launch',
    metricHighlights: [
      { label: 'Pages in the prototype', value: '8' },
      { label: 'Dedicated service routes', value: '4' },
      { label: 'Target LCP', value: '<1.5s' },
      { label: 'Responsive coverage', value: '100%' },
    ],
    launchFacts: [
      { label: 'Engagement', value: 'Solo design + development' },
      { label: 'Structure', value: '8-page React prototype' },
      { label: 'Contact flow', value: 'EmailJS + auto-reply' },
      { label: 'Deployment', value: 'GitHub Pages ready' },
    ],
    features: [
      {
        title: 'Trust-first homepage',
        description:
          'The homepage leads with a brighter hero, visible trust badges, stronger featured services, animated counters, testimonials, and a quote CTA that makes the site feel credible within seconds.',
      },
      {
        title: 'Full service architecture',
        description:
          'Instead of burying the offer inside one long page, the build uses a complete service listing plus four dedicated detail pages so visitors can understand scope, pricing cues, and next steps more clearly.',
      },
      {
        title: 'Interactive proof layer',
        description:
          'Background bubbles, testimonial motion, hover interactions, and scroll-triggered counters add polish and energy while still keeping the experience clean and on-brand.',
      },
      {
        title: 'Lead capture path',
        description:
          'A functional contact form with EmailJS, automatic reply behavior, and responsive navigation gives the prototype a realistic inquiry flow instead of ending at static visuals.',
      },
    ],
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI Ops',
    category: 'AI Systems',
    description: 'A concept direction for service teams that need AI-assisted intake, triage, and internal knowledge retrieval without losing brand control.',
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
    techStack: ['OpenAI', 'Next.js', 'PostgreSQL', 'Automation'],
    challenge: 'Growing teams often want faster response times and better internal visibility, but their existing intake process lives across forms, inboxes, and fragmented docs.',
    solution: 'We mapped a branded intake layer, a lightweight operations dashboard, and a retrieval workflow that keeps the human team in control while reducing repetitive work.',
    results: 'The outcome is a clearer service funnel, faster first-response handling, and a stronger foundation for future automation.',
    status: 'concept',
    features: [
      { title: 'Structured Intake', description: 'Collects better-fit project briefs without overwhelming prospects.' },
      { title: 'Knowledge Routing', description: 'Surfaces the right internal context for faster decision-making.' },
      { title: 'Operator Review', description: 'Keeps final approval and outreach firmly with the team.' }
    ]
  },
  {
    id: 'lumina-saas',
    title: 'Lumina Client Portal',
    category: 'SaaS',
    description: 'A premium portal concept for studios and consultants that want a more polished way to manage projects, approvals, and reporting.',
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    techStack: ['React', 'Realtime Sync', 'PostgreSQL', 'Stripe'],
    challenge: 'Many service businesses outgrow email and spreadsheets long before they have the time to invest in a polished client experience.',
    solution: 'We explored a portal experience built around approvals, milestones, reporting visibility, and premium communication touchpoints.',
    results: 'This direction helps position the business as more organized, more premium, and easier to work with from day one.',
    status: 'concept',
    features: [
      { title: 'Shared Timelines', description: 'Keeps both sides aligned on scope, milestones, and next actions.' },
      { title: 'Approval Flows', description: 'Reduces project drift with clean decision checkpoints.' },
      { title: 'Reporting Layer', description: 'Packages progress and outcomes into a client-friendly interface.' }
    ]
  },
  {
    id: 'velocity-ecommerce',
    title: 'Velocity Commerce',
    category: 'E-commerce',
    description: 'A high-performance storefront concept for premium brands that need faster pages, clearer storytelling, and fewer conversion leaks.',
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Shopify', 'Headless Frontend', 'Analytics', 'Performance'],
    challenge: 'Luxury and niche commerce brands often have strong products but lose trust through slow pages, generic templates, and a weak mobile experience.',
    solution: 'We outlined a headless commerce direction focused on editorial presentation, mobile speed, and a more confident path to purchase.',
    results: 'The result is a sharper brand impression, better merchandising control, and a storefront that is designed to convert without feeling generic.',
    status: 'concept',
    features: [
      { title: 'Editorial Product Pages', description: 'Combines storytelling and selling without clutter.' },
      { title: 'Mobile-first Checkout', description: 'Removes friction where most drop-off happens.' },
      { title: 'Performance Budgeting', description: 'Keeps the experience fast as content and campaigns grow.' }
    ]
  },
  {
    id: 'orbit-automation',
    title: 'Orbit Ops',
    category: 'Automation',
    description: 'An operations dashboard concept for teams that want visibility across workflows, automations, and delivery health in one place.',
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Node.js', 'Webhook Integrations', 'Dashboards', 'Automation'],
    challenge: 'Operational teams often automate in pieces, but lack a clean command view for failures, exceptions, and overall delivery health.',
    solution: 'We designed a single-pane operations layer that makes automation health visible, easier to debug, and easier to improve over time.',
    results: 'That creates a stronger operational rhythm, fewer surprises, and a better foundation for scaling service delivery.',
    status: 'concept',
    features: [
      { title: 'Workflow Visibility', description: 'Shows what is running, blocked, or failing in real time.' },
      { title: 'Exception Handling', description: 'Turns edge cases into manageable queues instead of hidden problems.' },
      { title: 'Performance Signals', description: 'Tracks throughput, delays, and operational drag.' }
    ]
  }
];
