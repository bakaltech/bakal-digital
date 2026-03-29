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
    prompt: 'What are you trying to build or improve?',
    quickReplies: ['AI systems', 'Custom platform', 'Automation and reporting'],
  },
  {
    key: 'projectStage',
    prompt: 'Is this a new initiative, or an existing system that needs to perform better?',
    quickReplies: ['Brand new', 'Improving existing', 'Still defining it'],
  },
  {
    key: 'industry',
    prompt: 'What kind of business is this for?',
    quickReplies: ['Professional services', 'Commerce brand', 'Other business type'],
  },
  {
    key: 'mainGoal',
    prompt: 'What needs to improve most if this project works well?',
    quickReplies: ['More qualified demand', 'Clearer buying journey', 'Less manual operational drag'],
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
    text: `Here is the project summary so far: ${buildSummary(values)}. Add the best email for follow-up below and we will route the brief to the right next step.`,
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
