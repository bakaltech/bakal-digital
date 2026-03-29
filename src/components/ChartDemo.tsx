import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Bot, CheckCircle2, Clock3, CreditCard, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const analyticsData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

const operationsData = [
  { time: '09:00', active: 12, alerts: 2 },
  { time: '10:00', active: 18, alerts: 1 },
  { time: '11:00', active: 22, alerts: 3 },
  { time: '12:00', active: 26, alerts: 1 },
  { time: '13:00', active: 28, alerts: 0 },
  { time: '14:00', active: 31, alerts: 2 },
];

const chartTooltip = {
  contentStyle: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E8ED',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    fontSize: '12px',
  },
};

export function LuminaPortalDemo({ activeFeature }: { activeFeature: number }) {
  if (activeFeature === 1) {
    return (
      <div className="w-full h-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={analyticsData}>
            <defs>
              <linearGradient id="luminaValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0066CC" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#0066CC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8ED" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#86868B', fontSize: 10 }} dy={10} />
            <YAxis hide />
            <Tooltip {...chartTooltip} />
            <Area type="monotone" dataKey="value" stroke="#0066CC" strokeWidth={3} fillOpacity={1} fill="url(#luminaValue)" animationDuration={1400} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (activeFeature === 0) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Kickoff', state: 'Complete' },
            { label: 'Homepage review', state: 'Awaiting approval' },
            { label: 'Launch prep', state: 'Scheduled' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Milestone</p>
              <h4 className="text-lg font-semibold text-ink tracking-tight mb-2">{item.label}</h4>
              <p className="text-sm text-accent font-medium">{item.state}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Approval Center</p>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">A cleaner client checkpoint.</h3>
            <p className="text-brand-400 leading-relaxed">The portal keeps assets, decisions, and due dates in one calm place so reviews stop getting lost across email threads.</p>
          </div>
          <button type="button" className="px-5 py-3 rounded-full bg-ink text-white font-semibold">Approve Direction</button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Tasks complete', value: '18' },
          { label: 'Pending feedback', value: '3' },
          { label: 'This week', value: '92%' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Report</p>
            <h4 className="text-2xl font-semibold text-ink tracking-tight">{item.value}</h4>
            <p className="text-sm text-brand-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Reporting Layer</p>
        <p className="text-brand-400 leading-relaxed">This view packages delivery progress into something clients can quickly understand, which makes the whole service feel more premium and organized.</p>
      </div>
    </div>
  );
}

export function OrbitOpsDemo({ activeFeature }: { activeFeature: number }) {
  if (activeFeature === 0) {
    return (
      <div className="w-full h-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={operationsData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8ED" />
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#86868B', fontSize: 10 }} dy={10} />
            <YAxis hide />
            <Tooltip {...chartTooltip} />
            <Line type="monotone" dataKey="active" stroke="#0066CC" strokeWidth={3} dot={false} animationDuration={1200} />
            <Line type="monotone" dataKey="alerts" stroke="#1D1D1F" strokeWidth={2} dot={false} strokeDasharray="5 5" animationDuration={1500} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (activeFeature === 1) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-4">
        {[
          { queue: 'Payment sync failure', status: 'Needs review', owner: 'Ops lead' },
          { queue: 'CRM contact mismatch', status: 'Auto retried', owner: 'Automation layer' },
          { queue: 'Webhook delay', status: 'Resolved', owner: 'System' },
        ].map((item) => (
          <div key={item.queue} className="rounded-2xl bg-white border border-brand-100/50 p-5 grid md:grid-cols-[1fr_auto_auto] gap-3 items-center">
            <div>
              <p className="text-lg font-semibold text-ink tracking-tight">{item.queue}</p>
              <p className="text-sm text-brand-400 mt-1">Owner: {item.owner}</p>
            </div>
            <span className="px-3 py-2 rounded-full bg-soft text-sm font-medium text-ink">{item.status}</span>
            <button type="button" className="px-4 py-2 rounded-full border border-brand-100 text-sm font-medium text-ink">Inspect</button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Runs today', value: '248' },
          { label: 'Success rate', value: '98.7%' },
          { label: 'Avg delay', value: '1.4m' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Ops Signal</p>
            <h4 className="text-2xl font-semibold text-ink tracking-tight">{item.value}</h4>
            <p className="text-sm text-brand-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Performance signals</p>
          <p className="text-brand-400 leading-relaxed">The dashboard keeps operational drift visible before it becomes a delivery problem.</p>
        </div>
        <Workflow className="w-10 h-10 text-accent" />
      </div>
    </div>
  );
}

export function NexusAIOpsDemo({ activeFeature }: { activeFeature: number }) {
  if (activeFeature === 0) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
        <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-brand-400"><Sparkles className="w-4 h-4 text-accent" /> Guided intake</div>
          <div className="grid gap-3">
            {['Project type: AI-enabled client onboarding', 'Primary goal: reduce first-response time', 'Timeline: next 30 days'].map((item) => (
              <div key={item} className="rounded-xl bg-soft px-4 py-3 text-sm text-ink">{item}</div>
            ))}
          </div>
          <div className="flex justify-end">
            <button type="button" className="px-5 py-3 rounded-full bg-ink text-white text-sm font-semibold">Generate triage summary</button>
          </div>
        </div>
      </div>
    );
  }

  if (activeFeature === 1) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-4">
        {[
          { label: 'Matched playbook', value: 'AI intake + CRM routing' },
          { label: 'Suggested owner', value: 'Solutions lead' },
          { label: 'Priority', value: 'High-fit opportunity' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Knowledge routing</p>
            <h4 className="text-lg font-semibold text-ink tracking-tight">{item.value}</h4>
            <p className="text-sm text-brand-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
      <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Operator review</p>
          <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">Keep the human team in control.</h3>
          <p className="text-brand-400 leading-relaxed">The AI prepares the context and next-step recommendation, but approval and outreach still stay with the team.</p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="px-4 py-3 rounded-full border border-brand-100 text-sm font-medium text-ink">Revise</button>
          <button type="button" className="px-4 py-3 rounded-full bg-ink text-white text-sm font-medium">Approve</button>
        </div>
      </div>
    </div>
  );
}

export function VelocityCommerceDemo({ activeFeature }: { activeFeature: number }) {
  if (activeFeature === 0) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
        <div className="rounded-[2rem] bg-white border border-brand-100/50 p-5 flex items-center gap-5">
          <div className="w-24 h-28 rounded-[1.5rem] bg-gradient-to-br from-stone-200 to-stone-100 border border-brand-100/50" />
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Editorial PDP</p>
            <h3 className="text-2xl font-semibold text-ink tracking-tight mb-2">Signature Carryall</h3>
            <p className="text-brand-400 text-sm leading-relaxed mb-3">Premium product storytelling, cleaner hierarchy, and a calmer path to purchase.</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-ink">$280</span>
              <button type="button" className="px-4 py-2 rounded-full bg-ink text-white text-sm font-medium">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeFeature === 1) {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-4">
        {[
          { label: 'Cart', state: '1 item | $280' },
          { label: 'Delivery', state: 'Express selected' },
          { label: 'Payment', state: 'Apple Pay ready' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-ink tracking-tight">{item.label}</p>
              <p className="text-sm text-brand-400 mt-1">{item.state}</p>
            </div>
            <CreditCard className="w-5 h-5 text-accent" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center gap-5">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Load time', value: '1.2s' },
          { label: 'Drop-off', value: '-18%' },
          { label: 'Mobile score', value: '96' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white border border-brand-100/50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400 mb-2">Performance</p>
            <h4 className="text-2xl font-semibold text-ink tracking-tight">{item.value}</h4>
            <p className="text-sm text-brand-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] bg-white border border-brand-100/50 p-6 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Budget guardrail</p>
          <p className="text-brand-400 leading-relaxed">Performance budgets help the storefront stay fast even as campaigns, assets, and storytelling layers grow.</p>
        </div>
        <Clock3 className="w-10 h-10 text-accent" />
      </div>
    </div>
  );
}

export function ConceptDemoNote() {
  return (
    <div className="rounded-[2rem] border border-brand-100/50 bg-white p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-2xl bg-soft border border-brand-100/50 flex items-center justify-center text-accent shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What You Are Seeing</p>
          <p className="text-brand-400 leading-relaxed">
            This section is an interactive concept simulation built to show how the product or workflow could behave. It is intentionally tailored to the case study, but it is not presented as a live client system.
          </p>
        </div>
      </div>
    </div>
  );
}

