import React from 'react';

export function PageContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function PageSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`py-12 sm:py-14 lg:py-18 ${className}`}>{children}</section>;
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  className = '',
}: {
  eyebrow: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.45rem] md:text-[3rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">{text}</p>
    </div>
  );
}

export function DarkPanel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`panel-dark ${className}`}>{children}</div>;
}

export function SoftPanel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`panel-dark-soft ${className}`}>{children}</div>;
}
