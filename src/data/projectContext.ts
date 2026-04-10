export const projectContext = {
  acengeers: {
    audience: 'Service businesses that need to look more credible online, explain their offers clearly, and convert local demand without relying on a generic website template.',
    pressurePoint: 'The category is crowded with lookalike cleaning sites, so trust, differentiation, and inquiry momentum often collapse before the visitor even reaches the form.',
    commercialOutcome: 'A more premium first impression, clearer service understanding, and a website that gives prospects enough confidence to request a quote sooner.',
  },
  'nexus-ai': {
    audience: 'Service businesses and operators handling high inbound volume, fragmented knowledge, and slow first-response handling.',
    pressurePoint: 'Lead intake, support, and internal context are spread across too many tools, so response quality drops as volume grows.',
    commercialOutcome: 'Better-fit leads, faster handling, and a cleaner handoff from conversation to action without sacrificing human control.',
  },
  'lumina-saas': {
    audience: 'Studios, consultants, and service teams that need a more premium and structured client experience.',
    pressurePoint: 'Client communication, approvals, and reporting are still happening in ways that feel manual, fragmented, and hard to scale.',
    commercialOutcome: 'A stronger client experience, clearer accountability, and a service model that looks more credible from the first interaction.',
  },
  'velocity-ecommerce': {
    audience: 'Premium and niche brands that need a storefront strong enough to support both trust and conversion.',
    pressurePoint: 'The products are strong, but the current storefront leaks trust through weak storytelling, slow performance, or a shaky mobile path.',
    commercialOutcome: 'Clearer product presentation, less drop-off on mobile, and a storefront that supports revenue without feeling generic.',
  },
  'orbit-automation': {
    audience: 'Operational teams running complex delivery, approval, or fulfillment workflows across multiple systems.',
    pressurePoint: 'Automation exists, but no one has a trustworthy view of failures, exceptions, and delivery health across the operation.',
    commercialOutcome: 'Fewer surprises, clearer workflow health, and an operating layer the team can actually trust as volume grows.',
  },
} as const;

export type ProjectContextId = keyof typeof projectContext;
