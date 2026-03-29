import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Loader2, Maximize2, MessageSquare, Minimize2, Send, Sparkles, X } from 'lucide-react';

type ChatMessage = { role: 'user' | 'model'; text: string };
type LeadFormArgs = { projectType: string; projectStage: string; industry: string; mainGoal: string; budget: string; timeline: string; summary: string };
type ChatResponse = { text?: string; quickReplies?: string[]; leadFormArgs?: LeadFormArgs | null };

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm the Bakal project guide. I'll ask a few quick questions so our team can send you the right plan. What type of project are you looking for?" },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>(['AI Product', 'Custom Platform', 'Automation System']);
  const [leadFormArgs, setLeadFormArgs] = useState<LeadFormArgs | null>(null);
  const [leadFormStartedAt, setLeadFormStartedAt] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [websiteInput, setWebsiteInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = (event: Event) => {
      const customEvent = event as CustomEvent<{ query?: string }>;
      setIsOpen(true);
      setIsMinimized(false);
      if (customEvent.detail?.query) setInput(customEvent.detail.query);
    };

    window.addEventListener('open-chat', handleOpenChat as EventListener);
    return () => window.removeEventListener('open-chat', handleOpenChat as EventListener);
  }, []);

  const handleSend = async (textOverride?: string) => {
    const messageText = textOverride || input.trim();
    if (!messageText || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', text: messageText }]);
    if (!textOverride) setInput('');
    setIsLoading(true);
    setQuickReplies([]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, message: messageText }),
      });

      if (!response.ok) throw new Error(`Chat request failed with status ${response.status}`);

      const data = (await response.json()) as ChatResponse;
      const modelText = data.text || "I'm sorry, I couldn't process that. Could you try again?";

      if (data.leadFormArgs) {
        setLeadFormArgs(data.leadFormArgs);
        setLeadFormStartedAt(Date.now());
        setQuickReplies([]);
      } else {
        setQuickReplies(data.quickReplies || []);
      }

      setMessages((prev) => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: 'I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !leadFormArgs || !leadFormStartedAt) return;

    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, details: leadFormArgs, website: websiteInput, startedAt: leadFormStartedAt }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(data.error || `Lead submission failed with status ${response.status}`);

      setFormStatus('success');
      setMessages((prev) => [
        ...prev,
        { role: 'user', text: `Email provided: ${emailInput}` },
        { role: 'model', text: 'Perfect! I have securely sent your project brief and email to our team. One of our experts will reach out shortly with your tailored plan and next steps.' },
      ]);
      setLeadFormArgs(null);
      setLeadFormStartedAt(null);
      setEmailInput('');
      setWebsiteInput('');
    } catch (error) {
      console.error('Lead submit error:', error);
      setFormStatus('error');
      setFormError(error instanceof Error ? error.message : 'I collected your information, but the secure submission failed. Please try again in a moment.');
    }
  };

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ink text-white shadow-2xl flex items-center justify-center hover:bg-accent transition-colors pointer-events-auto"
          >
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`absolute bottom-3 right-3 sm:bottom-8 sm:right-8 glass rounded-2xl sm:rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden pointer-events-auto w-[calc(100vw-1.5rem)] sm:w-[400px] max-w-[400px] origin-bottom-right flex flex-col transition-[height] duration-300 ease-in-out ${isMinimized ? 'h-[80px]' : 'h-[420px] sm:h-[520px] max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-10rem)]'}`}
          >
            <div className="flex flex-col h-full w-full">
              <div className="p-4 sm:p-6 bg-ink text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">Bakal Guide</p>
                    <p className="text-sm font-medium opacity-70 hidden sm:block">Project Intake</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'} onClick={() => setIsMinimized(!isMinimized)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  <button type="button" aria-label="Close chat" onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 no-scrollbar min-h-0">
                    {messages.map((message, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-2xl text-sm leading-relaxed ${message.role === 'user' ? 'bg-accent text-white rounded-tr-sm sm:rounded-tr-none' : 'bg-soft text-ink rounded-tl-sm sm:rounded-tl-none border border-brand-100/50'}`}>
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && <div className="flex justify-start"><div className="bg-soft p-3 sm:p-4 rounded-2xl rounded-tl-sm sm:rounded-tl-none border border-brand-100/50"><Loader2 className="w-4 h-4 animate-spin text-accent" /></div></div>}
                  </div>

                  {leadFormArgs === null && (
                  <div className="px-4 sm:px-6 pb-2 flex flex-wrap gap-2 justify-start">
                      {quickReplies.map((reply) => (
                        <button key={reply} onClick={() => handleSend(reply)} disabled={isLoading} className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white border border-brand-100/50 text-xs font-semibold text-brand-400 hover:border-accent hover:text-accent transition-all whitespace-nowrap disabled:opacity-50">
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-4 sm:p-6 border-t border-brand-100/50 bg-white/50 shrink-0">
                    {leadFormArgs ? (
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="hidden" aria-hidden="true">
                          <label htmlFor="lead-website">Website</label>
                          <input id="lead-website" type="text" tabIndex={-1} autoComplete="off" value={websiteInput} onChange={(e) => setWebsiteInput(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="assistant-email" className="text-xs font-semibold uppercase tracking-wider text-brand-400">Your Best Email</label>
                          <input id="assistant-email" type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="hello@example.com" className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink text-sm shadow-sm" />
                        </div>
                        {formError && <p className="text-sm text-red-600">{formError}</p>}
                        <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-3 sm:py-4 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-ink transition-colors disabled:opacity-50 flex justify-center items-center">
                          {formStatus === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send My Tailored Plan'}
                        </button>
                      </form>
                    ) : (
                      <div className="relative flex items-center">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') void handleSend(); }} placeholder="Type your answer..." className="w-full pl-4 pr-12 sm:pl-6 sm:pr-14 py-3 sm:py-4 rounded-2xl bg-white border border-brand-100/50 focus:outline-none focus:border-accent transition-colors text-ink text-sm shadow-sm" />
                        <button onClick={() => void handleSend()} disabled={!input.trim() || isLoading} className="absolute right-2 p-2 sm:p-3 rounded-xl bg-ink text-white hover:bg-accent disabled:opacity-50 transition-all">
                          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
