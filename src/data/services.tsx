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
}

export const services: Service[] = [
  {
    id: 'ai-development',
    icon: <Bot className="h-8 w-8 text-brand-500" />,
    title: 'AI Development',
    description: 'Integrate cutting-edge artificial intelligence into your products to automate tasks, generate content, and provide intelligent user experiences.',
    longDescription: 'Our AI Development services empower businesses to leverage the latest advancements in artificial intelligence. From custom language models to predictive analytics, we build intelligent systems that learn, adapt, and drive unprecedented efficiency across your operations.',
    features: [
      'Custom LLM Integration',
      'AI Chatbots & Assistants',
      'Predictive Analytics',
      'Automated Content Generation',
      'Computer Vision Systems',
      'Natural Language Processing'
    ],
    benefits: [
      'Reduce operational costs through intelligent automation',
      'Enhance customer experience with 24/7 AI support',
      'Make data-driven decisions with predictive insights',
      'Accelerate content creation and processing workflows'
    ],
    technologies: ['OpenAI', 'Anthropic', 'Google Cloud AI', 'Python', 'TensorFlow', 'PyTorch']
  },
  {
    id: 'custom-web-platforms',
    icon: <Globe className="h-8 w-8 text-brand-500" />,
    title: 'Custom Web Platforms',
    description: 'Build robust, scalable, and high-performance web applications tailored to your specific business needs and user requirements.',
    longDescription: 'We engineer custom web platforms designed for scale, security, and performance. Utilizing modern frameworks like React and Next.js, we deliver seamless digital experiences that engage users and drive business growth.',
    features: [
      'React & Next.js Development',
      'Progressive Web Apps (PWAs)',
      'API Design & Integration',
      'Performance Optimization',
      'Headless CMS Integration',
      'Real-time Data Synchronization'
    ],
    benefits: [
      'Deliver lightning-fast user experiences',
      'Scale effortlessly to handle high traffic volumes',
      'Ensure cross-platform compatibility and responsiveness',
      'Maintain high security and data protection standards'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Vercel', 'AWS', 'Netlify']
  },
  {
    id: 'ecommerce-systems',
    icon: <ShoppingCart className="h-8 w-8 text-brand-500" />,
    title: 'E-commerce Systems',
    description: 'Create seamless shopping experiences that drive conversions, manage inventory efficiently, and scale with your business growth.',
    longDescription: 'Our e-commerce solutions are built to maximize conversions and streamline operations. We develop custom storefronts and integrate robust backend systems to provide a flawless shopping experience from product discovery to checkout.',
    features: [
      'Custom Storefronts',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'Conversion Rate Optimization',
      'Subscription Billing',
      'Multi-currency & Localization'
    ],
    benefits: [
      'Increase sales with optimized checkout flows',
      'Manage complex product catalogs effortlessly',
      'Provide secure and reliable payment processing',
      'Gain actionable insights into customer purchasing behavior'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    id: 'saas-development',
    icon: <Cloud className="h-8 w-8 text-brand-500" />,
    title: 'SaaS Development',
    description: 'Develop comprehensive Software as a Service platforms with multi-tenant architectures, subscription billing, and secure data isolation.',
    longDescription: 'We build scalable, secure, and feature-rich SaaS platforms. Our expertise in multi-tenant architecture and subscription management ensures your software can grow seamlessly while providing a premium experience to your users.',
    features: [
      'Multi-tenant Architecture',
      'Subscription & Billing Systems',
      'User Authentication & Roles',
      'Scalable Cloud Infrastructure',
      'Automated Onboarding Flows',
      'Usage Analytics & Reporting'
    ],
    benefits: [
      'Accelerate time-to-market for your software product',
      'Ensure robust data isolation and security between tenants',
      'Simplify billing and subscription management',
      'Scale infrastructure dynamically based on demand'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Stripe', 'Auth0', 'Redis']
  },
  {
    id: 'automation-systems',
    icon: <Zap className="h-8 w-8 text-brand-500" />,
    title: 'Automation Systems',
    description: 'Streamline your business operations by automating repetitive tasks, connecting disparate systems, and reducing manual errors.',
    longDescription: 'Our automation systems connect your disparate tools and streamline complex workflows. By eliminating manual data entry and automating repetitive tasks, we free up your team to focus on high-value strategic initiatives.',
    features: [
      'Workflow Automation',
      'Third-party API Integrations',
      'Data Synchronization',
      'Custom Internal Tools',
      'Robotic Process Automation (RPA)',
      'Event-driven Architecture'
    ],
    benefits: [
      'Eliminate human error in repetitive processes',
      'Significantly reduce operational overhead',
      'Ensure real-time data consistency across platforms',
      'Improve employee satisfaction by removing tedious tasks'
    ],
    technologies: ['Zapier', 'Make.com', 'n8n', 'Python', 'Node.js', 'GitHub Actions']
  },
  {
    id: 'data-intelligence',
    icon: <BarChart className="h-8 w-8 text-brand-500" />,
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with custom dashboards, reporting tools, and advanced data visualization techniques.',
    longDescription: 'We turn your complex data into clear, actionable intelligence. Our custom dashboards and reporting tools provide real-time visibility into your key metrics, empowering you to make informed, strategic decisions.',
    features: [
      'Custom Analytics Dashboards',
      'Data Visualization',
      'Real-time Reporting',
      'Business Intelligence Tools',
      'Data Warehousing Integration',
      'Predictive Modeling'
    ],
    benefits: [
      'Gain real-time visibility into business performance',
      'Identify trends and opportunities quickly',
      'Democratize data access across your organization',
      'Make confident, data-backed strategic decisions'
    ],
    technologies: ['D3.js', 'Tableau', 'Power BI', 'BigQuery', 'Snowflake', 'Python']
  }
];
