export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  thumbnail: string;
  image: string;
  techStack: string[];
  challenge: string;
  solution: string;
  results: string;
  features: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    category: 'AI Systems',
    description: 'An enterprise-grade intelligence platform designed to automate complex decision-making workflows for Fortune 500 companies.',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Python', 'PyTorch', 'React', 'AWS SageMaker'],
    challenge: 'Large enterprises struggled with fragmented data silos and slow manual processing of complex regulatory documents, leading to significant operational bottlenecks.',
    solution: 'We architected a custom LLM-powered engine that ingest, classifies, and extracts actionable insights from millions of documents with 99.8% accuracy.',
    results: 'Reduced document processing time by 94% and saved an estimated $12M in annual operational costs for our primary launch partner.',
    features: [
      { title: 'Neural Extraction', description: 'Sub-second extraction of complex data points from unstructured text.' },
      { title: 'Strategic Insights', description: 'Automated trend analysis and predictive modeling for executive teams.' },
      { title: 'Enterprise Security', description: 'SOC2 compliant infrastructure with end-to-end encryption.' }
    ]
  },
  {
    id: 'lumina-saas',
    title: 'Lumina',
    category: 'SaaS',
    description: 'A high-performance collaborative workspace for global creative teams, focusing on sub-second latency and seamless real-time interaction.',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Next.js', 'WebSockets', 'Redis', 'PostgreSQL'],
    challenge: 'Existing collaboration tools suffered from high latency and poor synchronization when handling large-scale creative assets across distributed teams.',
    solution: 'We built a custom CRDT-based synchronization engine and a globally distributed edge network to ensure near-zero latency for users worldwide.',
    results: 'Achieved a 4.9/5 user satisfaction rating and successfully scaled to 500k+ active users within the first six months of launch.',
    features: [
      { title: 'Real-time Sync', description: 'Conflict-free replicated data types for seamless multi-user editing.' },
      { title: 'Edge Delivery', description: 'Global CDN integration for lightning-fast asset loading.' },
      { title: 'Advanced Analytics', description: 'Deep-dive metrics on team productivity and project velocity.' }
    ]
  },
  {
    id: 'velocity-ecommerce',
    title: 'Velocity',
    category: 'E-commerce',
    description: 'A headless e-commerce engine built for extreme speed and conversion, powering the next generation of luxury retail brands.',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Shopify Hydrogen', 'React', 'GraphQL', 'Vercel'],
    challenge: 'Traditional e-commerce platforms were too slow for high-end luxury brands, leading to high bounce rates and lost revenue during peak traffic events.',
    solution: 'We implemented a headless architecture using Shopify Hydrogen and Vercel, focusing on extreme performance and a bespoke, cinematic user experience.',
    results: 'Increased average order value by 35% and improved mobile conversion rates by 210% compared to the previous platform.',
    features: [
      { title: 'Headless Engine', description: 'Decoupled frontend for total creative freedom and maximum speed.' },
      { title: 'Cinematic UX', description: 'High-fidelity animations and transitions that mirror luxury brand values.' },
      { title: 'Smart Checkout', description: 'One-tap checkout optimized for mobile and high-value transactions.' }
    ]
  },
  {
    id: 'orbit-automation',
    title: 'Orbit',
    category: 'Automation',
    description: 'A strategic automation suite for logistics providers, integrating IoT data with predictive maintenance algorithms.',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    techStack: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
    challenge: 'Logistics companies faced massive downtime due to unpredictable equipment failure and lack of real-time visibility into their global supply chain.',
    solution: 'We developed an IoT-driven monitoring system that uses machine learning to predict equipment failure before it occurs, allowing for proactive maintenance.',
    results: 'Reduced equipment downtime by 42% and extended the lifespan of critical assets by an average of 3 years.',
    features: [
      { title: 'IoT Integration', description: 'Real-time data ingestion from thousands of sensors worldwide.' },
      { title: 'Predictive Ops', description: 'ML models that anticipate failures and optimize maintenance schedules.' },
      { title: 'Global Dashboard', description: 'Unified command center for real-time supply chain visibility.' }
    ]
  }
];
