import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Terms of Service</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-8">Website use and inquiry terms.</h1>
        <p className="text-lg sm:text-xl text-brand-400 leading-relaxed max-w-3xl mb-10">
          These terms explain what the site is for, what submitting an inquiry means, and the basic rules for using the site responsibly.
        </p>
        <div className="grid gap-5 text-base sm:text-lg text-brand-400 leading-relaxed">
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Site purpose</p>
            <p>This website is provided to help prospective clients understand the studio’s services, review concept work, and submit project inquiries.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Inquiry submissions</p>
            <p>Submitting a form or guided brief does not create a client relationship, reserve project time, or guarantee project acceptance.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Content ownership</p>
            <p>All original written material, design direction, interface work, and branded content on this site remain the property of Bakal Digital unless otherwise noted.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Acceptable use</p>
            <p>By using the site, you agree not to misuse forms, attempt unauthorized access, interfere with site behavior, or submit misleading information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
