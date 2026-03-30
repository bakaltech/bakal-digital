export interface ProofDemo {
  id: 'nexus-ai' | 'lumina-saas' | 'velocity-ecommerce' | 'orbit-automation';
  eyebrow: string;
  title: string;
  summary: string;
  whatItShows: string[];
}

export interface DeliveryStep {
  step: string;
  title: string;
  detail: string;
  artifact: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export const proofDemos: ProofDemo[] = [
  {
    id: 'nexus-ai',
    eyebrow: 'Working demo',
    title: 'AI intake and routing flow',
    summary:
      'Shows how a service business can qualify inbound demand, generate useful internal context, and keep final approval with the team.',
    whatItShows: ['Guided intake logic', 'Knowledge routing', 'Human review before action'],
  },
  {
    id: 'lumina-saas',
    eyebrow: 'Working demo',
    title: 'Client portal experience',
    summary:
      'Shows how a service or SaaS business can package milestones, approvals, and reporting into a cleaner customer-facing experience.',
    whatItShows: ['Shared milestones', 'Approval checkpoints', 'Reporting clarity'],
  },
  {
    id: 'velocity-ecommerce',
    eyebrow: 'Working demo',
    title: 'Commerce flow prototype',
    summary:
      'Shows how product storytelling, checkout structure, and performance signals can work together to support revenue instead of leaking trust.',
    whatItShows: ['Editorial product pages', 'Checkout pacing', 'Performance guardrails'],
  },
  {
    id: 'orbit-automation',
    eyebrow: 'Working demo',
    title: 'Operations visibility layer',
    summary:
      'Shows how workflow health, exceptions, and operational signals can be surfaced in one place instead of getting buried across disconnected tools.',
    whatItShows: ['Workflow visibility', 'Exception queues', 'Operational signals'],
  },
];

export const deliverySteps: DeliveryStep[] = [
  {
    step: '01',
    title: 'Diagnose the bottleneck',
    detail:
      'Review the current website, workflow, product layer, and operating constraints so the real problem is clear before anything is designed.',
    artifact: 'Audit and direction brief',
  },
  {
    step: '02',
    title: 'Define the build shape',
    detail:
      'Turn the bottleneck into a scoped product direction with the right screens, system logic, integrations, and delivery boundary.',
    artifact: 'Scope, structure, and key flows',
  },
  {
    step: '03',
    title: 'Design and implement',
    detail:
      'Move from UX and interface decisions into frontend, backend, and automation implementation without breaking the logic between them.',
    artifact: 'Working product or system',
  },
  {
    step: '04',
    title: 'Launch and refine',
    detail:
      'Ship with QA, handoff, and a practical follow-through plan so the system can keep improving under real use.',
    artifact: 'Launch plan and next actions',
  },
];

export const proofQuestions = [
  'Can this studio structure a real product or workflow instead of just making screens look polished?',
  'Can they connect business pressure points to a credible build direction?',
  'Can they show interface quality, systems thinking, and delivery discipline at the same time?',
  'Can they explain the work clearly, with real structure and real reasoning behind each decision?',
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: '30-50%',
    label: 'Faster intake and routing',
    detail: 'Typical target when replacing manual qualification, inbox sorting, or fragmented first-response handling.',
  },
  {
    value: '40-60%',
    label: 'Fewer manual steps',
    detail: 'Typical range when approvals, handoffs, reporting, or follow-up are moved into a better workflow layer.',
  },
  {
    value: '15-30%',
    label: 'Cleaner conversion path',
    detail: 'Common improvement target when the website, product story, or checkout flow is restructured around clearer action.',
  },
  {
    value: 'Weekly',
    label: 'Delivery visibility',
    detail: 'Every project is run with visible progress, milestones, and a clear next-step rhythm instead of black-box delivery.',
  },
];
