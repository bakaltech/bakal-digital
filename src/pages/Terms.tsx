import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-paper pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Terms of Service</p>
        <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-8">Website use and inquiry terms.</h1>
        <div className="space-y-8 text-lg text-brand-400 leading-relaxed">
          <p>This website is provided for informational purposes and to help prospective clients understand the studio’s services and submit project inquiries.</p>
          <p>Submitting a form or guided brief does not create a client relationship or guarantee project acceptance.</p>
          <p>All content, design direction, and original written materials on this site remain the property of Bakal Digital unless otherwise noted.</p>
          <p>By using the site, you agree not to misuse forms, attempt unauthorized access, or submit misleading information.</p>
        </div>
      </div>
    </div>
  );
}
