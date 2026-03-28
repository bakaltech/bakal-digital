import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenChat = () => {
    const event = new CustomEvent('open-chat');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-paper pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">Contact</p>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink mb-10 tracking-tight leading-[1.05]">
              Let's build something <br /> extraordinary.
            </h1>
            <p className="text-xl md:text-2xl text-brand-400 font-normal leading-relaxed max-w-2xl">
              Whether you need a custom AI integration, a scalable SaaS platform, or a high-performance e-commerce system, we're ready to help.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-12 md:space-y-16"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-10 md:mb-12 tracking-tight">Get in touch</h2>
              
              <div className="space-y-10 md:space-y-12">
                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-soft rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-ink group-hover:bg-ink group-hover:text-white transition-all duration-500 border border-brand-100/50">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1 tracking-tight">Email us</h3>
                    <p className="text-brand-400 mb-2 font-normal text-sm md:text-base">Our friendly team is here to help.</p>
                    <a href="mailto:hello@bakaldigital.com" className="text-lg font-semibold text-ink hover:text-accent transition-colors flex items-center gap-1 group/link">
                      hello@bakaldigital.com
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-soft rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-ink group-hover:bg-ink group-hover:text-white transition-all duration-500 border border-brand-100/50">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1 tracking-tight">Call us</h3>
                    <p className="text-brand-400 mb-2 font-normal text-sm md:text-base">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15551234567" className="text-lg font-semibold text-ink hover:text-accent transition-colors flex items-center gap-1 group/link">
                      +1 (555) 123-4567
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-soft rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-ink group-hover:bg-ink group-hover:text-white transition-all duration-500 border border-brand-100/50">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1 tracking-tight">Visit us</h3>
                    <p className="text-brand-400 mb-2 font-normal text-sm md:text-base">Come say hello at our office HQ.</p>
                    <address className="text-lg font-semibold text-ink not-italic leading-relaxed">
                      100 Innovation Drive<br />
                      San Francisco, CA 94105
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 md:pt-16 border-t border-brand-100">
              <h3 className="text-xl font-semibold text-ink mb-8 tracking-tight">Need immediate answers?</h3>
              <button
                onClick={handleOpenChat}
                className="group relative inline-flex items-center justify-center w-full px-8 py-5 text-lg font-bold rounded-full text-white bg-ink overflow-hidden transition-all shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  <MessageSquare className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Open AI Chat
                </span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-soft rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-brand-100/50 shadow-sm">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 md:py-20"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-paper rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4 tracking-tight">Message Sent</h3>
                  <p className="text-lg md:text-xl text-brand-400 font-normal">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-3">
                      <label htmlFor="name" className="block text-sm font-semibold text-ink ml-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 md:px-6 md:py-4 bg-paper border border-brand-100 rounded-2xl text-ink placeholder:text-brand-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-sm font-semibold text-ink ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 md:px-6 md:py-4 bg-paper border border-brand-100 rounded-2xl text-ink placeholder:text-brand-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-sm font-semibold text-ink ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 md:px-6 md:py-4 bg-paper border border-brand-100 rounded-2xl text-ink placeholder:text-brand-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-white bg-ink overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
