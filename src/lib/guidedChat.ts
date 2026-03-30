export type GuidedChatMessage = {
  role: 'user' | 'model';
  text: string;
};

export type GuidedLeadFormArgs = {
  projectType: string;
  projectStage: string;
  industry: string;
  mainGoal: string;
  budget: string;
  timeline: string;
  summary: string;
};

export type GuidedChatResponse = {
  text: string;
  quickReplies: string[];
  leadFormArgs: GuidedLeadFormArgs | null;
};

type FlowStep = {
  key: keyof Omit<GuidedLeadFormArgs, 'summary'>;
  prompt: string;
  quickReplies: string[];
};

const flowSteps: FlowStep[] = [
  {
    key: 'projectType',
    prompt: 'What needs to be built or fixed first?',
    quickReplies: ['Website or platform', 'AI workflow', 'Automation and reporting'],
  },
  {
    key: 'projectStage',
    prompt: 'Is this a new initiative, or something existing that is not performing well enough?',
    quickReplies: ['Brand new build', 'Improving existing', 'Still shaping scope'],
  },
  {
    key: 'industry',
    prompt: 'What kind of business is this for?',
    quickReplies: ['Startup', 'Service business', 'Commerce brand'],
  },
  {
    key: 'mainGoal',
    prompt: 'If this works well, what should improve most?',
    quickReplies: ['More qualified demand', 'Clearer product or buying flow', 'Less manual operational drag'],
  },
  {
    key: 'budget',
    prompt: 'Which budget range fits the work you have in mind?',
    quickReplies: ['Under $5k', '$5k-$15k', '$15k+'],
  },
  {
    key: 'timeline',
    prompt: 'What timeline are you working against?',
    quickReplies: ['As soon as possible', 'Within 4-6 weeks', 'Within this quarter'],
  },
];

function buildSummary(values: Record<string, string>) {
  return [
    `Project type: ${values.projectType}`,
    `Project stage: ${values.projectStage}`,
    `Industry: ${values.industry}`,
    `Main goal: ${values.mainGoal}`,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
  ].join(' | ');
}

export function advanceGuidedChat(
  messages: GuidedChatMessage[],
  messageText: string,
): GuidedChatResponse {
  const userMessages = [
    ...messages.filter((message) => message.role === 'user'),
    { role: 'user' as const, text: messageText },
  ];
  const answers = userMessages.map((message) => message.text.trim());
  const currentStepIndex = answers.length - 1;

  if (currentStepIndex < flowSteps.length - 1) {
    const nextStep = flowSteps[currentStepIndex + 1];
    return {
      text: nextStep.prompt,
      quickReplies: nextStep.quickReplies,
      leadFormArgs: null,
    };
  }

  const values = flowSteps.reduce<Record<string, string>>((accumulator, step, index) => {
    accumulator[step.key] = answers[index] || '';
    return accumulator;
  }, {});

  return {
    text: `Here is the brief summary so far: ${buildSummary(values)}. Add the best email for follow-up below and we will reply with the clearest next step.`,
    quickReplies: [],
    leadFormArgs: {
      projectType: values.projectType,
      projectStage: values.projectStage,
      industry: values.industry,
      mainGoal: values.mainGoal,
      budget: values.budget,
      timeline: values.timeline,
      summary: buildSummary(values),
    },
  };
}
