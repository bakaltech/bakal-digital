import React from 'react';

export default function Privacy() {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <div className="min-h-screen bg-paper pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Privacy Policy</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-8">How inquiry and site data are handled.</h1>
        <p className="text-lg sm:text-xl text-brand-400 leading-relaxed max-w-3xl mb-10">
          This page explains what we collect through the site, why it is collected, and how it is used when someone submits a project inquiry or project intake.
        </p>
        <div className="grid gap-5 text-base sm:text-lg text-brand-400 leading-relaxed">
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">What we collect</p>
            <p>When you submit a direct inquiry or project intake, we collect the details you provide so we can review the request, assess scope, and follow up.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">How it is used</p>
            <p>Inquiry details are used to understand your project, improve the intake flow, and continue the conversation when there is a relevant fit for the work.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">What we do not do</p>
            <p>We do not sell inquiry data or publish project details you share through the site.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Cookies and local storage</p>
            <p>The site may use essential cookies or local storage to remember consent choices and support the browsing experience. Optional analytics preferences are handled through the cookie banner.</p>
          </div>
          <div className="rounded-[1.75rem] border border-brand-100/50 bg-soft p-6 sm:p-7 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent mb-3">Removal requests</p>
            <p>If you want an inquiry removed, contact the team through the site and reference the email address used in the submission so the request can be matched correctly.</p>
          </div>
        </div>
        <div className="mt-12 rounded-[2rem] border border-brand-100/50 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Need a direct answer?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-ink text-white font-semibold hover:bg-accent transition-colors">
              Start a Project
            </a>
            <button type="button" onClick={openChat} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-100 bg-white text-ink font-semibold hover:border-accent hover:text-accent transition-colors">
              Open Project Intake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
