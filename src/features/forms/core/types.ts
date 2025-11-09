export type FormStepKind = 'single-choice' | 'contact';

export type FormOutcome = 'success' | 'reject';

export type FormOption = {
  label: string;
  value: string;
  description?: string;
  next?: string | FormOutcome;
};

export type ContactFieldType = 'text' | 'email' | 'tel' | 'number';

export type ContactField = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: ContactFieldType;
  autoComplete?: string;
};

type StepBase = {
  id: string;
  title: string;
  subtitle?: string;
  variable?: string;
};

export type SingleChoiceStep = StepBase & {
  kind: 'single-choice';
  options: FormOption[];
  defaultNext?: string | FormOutcome;
};

export type ContactStep = StepBase & {
  kind: 'contact';
  fields: ContactField[];
  submitLabel?: string;
  successRedirect?: string;
  optinType?: string;
};

export type FormStep = SingleChoiceStep | ContactStep;

export type FormWizardConfig = {
  id?: string;
  name?: string;
  steps: FormStep[];
  successRedirect?: string;
  rejectRedirect?: string;
};

export type FormAnswers = Record<string, unknown>;

export type FormLeadPayload = {
  answers: FormAnswers;
  eventId: string;
  contact: Record<string, string>;
  stepId: string;
  optinType?: string;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  searchParams?: string;
};

export type FormRejectPayload = {
  answers: FormAnswers;
  eventId: string;
  stepId: string;
  value?: string;
};


