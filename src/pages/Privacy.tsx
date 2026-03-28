import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Privacy Policy</p>
        <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-8">How we handle inquiry data.</h1>
        <div className="space-y-8 text-lg text-brand-400 leading-relaxed">
          <p>When you submit a project inquiry or guided brief, we collect the details you provide so we can review the request and follow up.</p>
          <p>We do not sell inquiry data. We only use it to understand your project, improve the intake process, and continue the conversation if there is a fit.</p>
          <p>The site may use basic cookies or local storage to remember consent preferences and improve the browsing experience.</p>
          <p>If you want your inquiry removed, contact the team through the website and reference the email address used in your submission.</p>
        </div>
      </div>
    </div>
  );
}
