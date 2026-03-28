import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const AIAgent = lazy(() => import('./components/AIAgent'));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] bg-paper flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[10px] sm:text-xs text-brand-400 font-bold tracking-[0.35em] uppercase mb-4">Loading</p>
        <div className="w-16 h-16 mx-auto rounded-full border border-brand-100/60 border-t-accent animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </Layout>
      <Suspense fallback={null}>
        <AIAgent />
      </Suspense>
    </Router>
  );
}
