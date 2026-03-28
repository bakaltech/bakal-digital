import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { services } from '../data/services';
import { AnalyticsChart } from '../components/ChartDemo';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-24 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 italic">Service Not Found</h1>
        <p className="text-slate-600 mb-8 font-light">The service you are looking for does not exist or has been moved.</p>
        <Link to="/services" className="inline-flex items-center text-brand-600 hover:text-brand-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center text-slate-600 hover:text-brand-600 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center mb-8 border border-brand-100 shadow-xl">
              {React.cloneElement(service.icon as React.ReactElement, { className: 'w-10 h-10 text-brand-600' })}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6 italic">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {service.longDescription}
            </p>
            
            <div className="mt-10">
              <button 
                onClick={() => {
                  const event = new CustomEvent('open-chat', { 
                    detail: { query: `I'm interested in your ${service.title} services. Can we discuss a potential project?` } 
                  });
                  window.dispatchEvent(event);
                }}
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-700 transition-colors inline-flex items-center shadow-lg shadow-brand-600/20"
              >
                Discuss Your Project
                <Zap className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent rounded-3xl blur-3xl -z-10" />
            {service.id === 'data-intelligence' ? (
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-display font-bold text-slate-900 italic">Live Performance</h3>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-brand-50 text-brand-600 text-[10px] font-bold rounded-full uppercase tracking-widest">Real-time</div>
                  </div>
                </div>
                <div className="h-[250px] md:h-[400px] w-full">
                  <AnalyticsChart />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Accuracy</p>
                    <p className="text-lg font-bold text-slate-900">99.8%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Latency</p>
                    <p className="text-lg font-bold text-slate-900">42ms</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Uptime</p>
                    <p className="text-lg font-bold text-slate-900">99.99%</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 italic">Key Benefits</h3>
                <ul className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-brand-600 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 leading-relaxed font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-200 pt-24 mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 italic">Comprehensive Features</h2>
            <p className="text-lg text-slate-600 font-light">Everything you need to build, scale, and succeed.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-brand-200 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4 border border-brand-100">
                  <span className="text-brand-600 font-bold font-mono text-sm">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-display font-bold text-slate-900 mb-2 italic">{feature}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Tailored implementation of {feature.toLowerCase()} to meet your specific business requirements and technical constraints.
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-200 pt-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 italic">Supported Technologies & Infrastructure</h2>
            <p className="text-lg text-slate-600 font-light">We leverage industry-leading tools to ensure your project's success.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:border-brand-600 hover:text-brand-600 transition-all cursor-default shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
