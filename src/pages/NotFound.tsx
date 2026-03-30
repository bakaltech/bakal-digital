import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';

export default function NotFound() {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-brand-100/50 bg-soft p-8 sm:p-10 md:p-14 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">404</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-6">
            This page does not exist anymore.
          </h1>
          <p className="text-lg sm:text-xl text-brand-400 leading-relaxed max-w-2xl mx-auto mb-10">
            The link may be outdated, or the page may have moved. You can go back home, review the services, or use the quick brief if you already know what needs attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-100 bg-white text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Review Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={openChat}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-100 bg-white text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Open Quick Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
