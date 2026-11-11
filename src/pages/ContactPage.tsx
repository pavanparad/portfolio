import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from 'lucide-react';

export interface ContactPageProps {
  playClickSound?: () => void;
}

interface CollaborationCategory {
  number: string;
  title: string;
  description: string;
  defaultProjectType: string;
}

interface ContactFormValues {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  details: string;
}

type FieldName = keyof ContactFormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const CONTACT_EMAIL = 'mr.pavancreation@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/mr.pavan_creation/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pavanparad';

const COLLABORATION_CATEGORIES: CollaborationCategory[] = [
  {
    number: '01',
    title: 'BRAND CAMPAIGNS',
    description: 'Promotional videos and creative campaigns for brands.',
    defaultProjectType: 'Brand Promotional Video',
  },
  {
    number: '02',
    title: 'CREATOR CONTENT',
    description: 'Video editing for content creators and influencers.',
    defaultProjectType: 'Creator Video Editing',
  },
  {
    number: '03',
    title: 'AGENCY COLLABORATIONS',
    description: 'Creative collaborations, internships and professional opportunities.',
    defaultProjectType: 'Agency Collaboration',
  },
  {
    number: '04',
    title: 'FREELANCE PROJECTS',
    description: 'Video editing and post-production projects.',
    defaultProjectType: 'Freelance Project',
  },
  {
    number: '05',
    title: 'EVENT FILMS',
    description: 'Event filmmaking, cinematography and visual coverage.',
    defaultProjectType: 'Event Filmmaking',
  },
  {
    number: '06',
    title: 'MOTION & CREATIVE WORK',
    description: 'Motion graphics, animation and experimental visual projects.',
    defaultProjectType: 'Motion Graphics',
  },
];

const PROJECT_TYPE_OPTIONS = [
  'Brand Promotional Video',
  'Creator Video Editing',
  'Agency Collaboration',
  'Internship Opportunity',
  'Freelance Project',
  'Event Filmmaking',
  'Motion Graphics',
  'Other',
];

const INITIAL_FORM: ContactFormValues = {
  fullName: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  details: '',
};

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case 'fullName':
      if (!trimmed) return 'Please enter your full name.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
      return undefined;
    case 'email':
      if (!trimmed) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return undefined;
    case 'projectType':
      if (!trimmed) return 'Please select a type of project.';
      return undefined;
    case 'details':
      if (!trimmed) return 'Please share a few details about your project.';
      if (trimmed.length < 10) {
        return 'Please add at least 10 characters so I can understand your idea.';
      }
      return undefined;
    default:
      return undefined;
  }
}

function validateForm(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};
  (['fullName', 'email', 'projectType', 'details'] as FieldName[]).forEach(
    (field) => {
      const error = validateField(field, values[field]);
      if (error) errors[field] = error;
    }
  );
  return errors;
}

export const ContactPage: React.FC<ContactPageProps> = ({ playClickSound }) => {
  const prefersReducedMotion = useReducedMotion();

  const [values, setValues] = useState<ContactFormValues>(INITIAL_FORM);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'prepared' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [preparedMailto, setPreparedMailto] = useState<string>('');
  const [preparedBriefText, setPreparedBriefText] = useState<string>('');
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleFieldChange = (name: FieldName, nextValue: string) => {
    setValues((prev) => ({ ...prev, [name]: nextValue }));
    if (touched[name]) {
      const fieldError = validateField(name, nextValue);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleFieldBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSelectCollaborationCategory = (projectType: string) => {
    playClickSound?.();
    setValues((prev) => ({ ...prev, projectType }));
    setErrors((prev) => ({ ...prev, projectType: undefined }));
    const formEl = document.getElementById('project-inquiry-form');
    if (formEl) {
      formEl.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playClickSound?.();

    const validationErrors = validateForm(values);
    setTouched({
      fullName: true,
      email: true,
      company: true,
      projectType: true,
      budget: true,
      details: true,
    });
    setErrors(validationErrors);

    const firstInvalidKey = Object.keys(validationErrors)[0] as FieldName | undefined;
    if (firstInvalidKey) {
      const target = document.getElementById(`contact-${firstInvalidKey}`);
      target?.focus();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const subject = `[${values.projectType}] Project Inquiry from ${values.fullName.trim()}`;
    const briefLines = [
      'Hello Pavan,',
      '',
      'I would like to collaborate on a project.',
      '',
      `Full Name: ${values.fullName.trim()}`,
      `Email Address: ${values.email.trim()}`,
      values.company.trim() ? `Company / Brand: ${values.company.trim()}` : null,
      `Type of Project: ${values.projectType}`,
      values.budget.trim() ? `Estimated Budget: ${values.budget.trim()}` : null,
      '',
      'Project Details:',
      values.details.trim(),
    ]
      .filter((line): line is string => line !== null)
      .join('\n');

    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(briefLines)}`;

    try {
      await new Promise((resolve) => setTimeout(resolve, 350));

      setPreparedMailto(mailtoHref);
      setPreparedBriefText(briefLines);
      setStatus('prepared');

      // Launch user's email client with pre-filled draft
      const anchor = document.createElement('a');
      anchor.href = mailtoHref;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch {
      setPreparedMailto(mailtoHref);
      setPreparedBriefText(briefLines);
      setStatus('error');
      setErrorMessage(
        `Could not launch your default email app automatically. Please email ${CONTACT_EMAIL} directly or copy your brief below.`
      );
    }
  };

  const handleCopyBrief = async () => {
    playClickSound?.();
    try {
      await navigator.clipboard.writeText(preparedBriefText);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setErrorMessage(
        `Clipboard access was blocked by the browser. Please email ${CONTACT_EMAIL} directly.`
      );
      setStatus('error');
    }
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickSound?.();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const handleResetForm = () => {
    playClickSound?.();
    setValues(INITIAL_FORM);
    setTouched({});
    setErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  const inputBaseClass =
    'w-full px-4 py-3.5 rounded-xl bg-[#F6F1E9]/70 border text-sm font-sans text-[#17151B] placeholder:text-[#17151B]/40 focus:outline-none focus:ring-2 transition-all';

  const getFieldBorderClass = (field: FieldName) =>
    errors[field]
      ? 'border-red-500/70 focus:border-red-600 focus:ring-red-200'
      : 'border-[#17151B]/15 focus:border-[#17151B] focus:ring-[#DCCCF5]';

  return (
    <article className="relative bg-[#F5F0FA] text-[#17151B]">
      {/* ================================================================
          SECTION A — CONTACT HERO
      ================================================================ */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A45C]" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                  LET&apos;S CONNECT.
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#17151B] leading-[0.95]">
                  HAVE AN IDEA<span className="text-[#C9A45C]">?</span>
                </h1>

                <p className="font-serif italic font-semibold text-xl sm:text-2xl lg:text-3xl text-[#17151B]/90 tracking-tight">
                  LET&apos;S TURN IT INTO SOMETHING WORTH WATCHING.
                </p>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#17151B]/80 max-w-2xl leading-relaxed">
                Have a project in mind, a creative idea to explore or an opportunity to collaborate? I&apos;d love to hear about it.
              </p>

              <div className="pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    'Creative Collaboration — MR. PAVAN CREATION'
                  )}`}
                  onClick={() => playClickSound?.()}
                  data-cursor="EMAIL"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#17151B] text-[#F6F1E9] hover:bg-[#C9A45C] hover:text-[#17151B] font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md"
                >
                  <span>LET&apos;S TALK.</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Minimal Studio Slate Accent */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4"
            >
              <div className="rounded-2xl bg-[#17151B] text-[#F6F1E9] p-6 sm:p-7 border border-[#C9A45C]/30 space-y-5">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#C9A45C]">
                  <span>STUDIO DESK</span>
                  <span>PUNE, INDIA</span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-1.5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#DCCCF5]/70">
                    DIRECT EMAIL
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    onClick={() => playClickSound?.()}
                    className="inline-flex items-center gap-2 font-sans text-sm sm:text-base text-[#F6F1E9] hover:text-[#C9A45C] transition-colors break-all"
                  >
                    <span>{CONTACT_EMAIL}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>

                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/60 leading-relaxed">
                  CREATIVE VIDEO EDITOR &amp; VISUAL STORYTELLER
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION B — COLLABORATION OPPORTUNITIES
      ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#F6F1E9] border-y border-[#17151B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                  WHAT CAN WE CREATE TOGETHER?
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17151B]">
                OPEN TO CREATIVE{' '}
                <span className="font-serif italic font-semibold">
                  COLLABORATIONS.
                </span>
              </h2>
            </div>

            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#17151B]/60">
              SELECT TO PRE-FILL INQUIRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#17151B]/12">
            {COLLABORATION_CATEGORIES.map((category, idx) => (
              <motion.button
                key={category.number}
                type="button"
                onClick={() => handleSelectCollaborationCategory(category.defaultProjectType)}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group text-left p-6 sm:p-8 border-r border-b border-[#17151B]/12 bg-transparent hover:bg-[#DCCCF5]/35 transition-colors duration-300 flex flex-col justify-between gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#17151B]"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C9A45C] font-semibold">
                    {category.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#17151B]/35 group-hover:text-[#17151B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-wide text-[#17151B]">
                    {category.title}
                  </h3>
                  <p className="font-sans text-sm text-[#17151B]/75 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION C — CONTACT FORM
      ================================================================ */}
      <section id="project-inquiry-form" className="py-16 sm:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Form Prompt Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-px w-7 bg-[#C9A45C]" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                  HAVE SOMETHING IN MIND?
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17151B] leading-[1.05]">
                TELL ME ABOUT YOUR PROJECT.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#17151B]/75 leading-relaxed">
                Share the essentials below. Submitting compiles your brief and opens a pre-addressed email draft to{' '}
                <span className="font-medium text-[#17151B]">{CONTACT_EMAIL}</span> so you can review and send it directly.
              </p>

              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#17151B]/55 pt-2">
                * INDICATES REQUIRED FIELDS
              </p>
            </div>

            {/* Form Surface */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white/85 border border-[#17151B]/12 p-6 sm:p-10 shadow-sm">
                {status === 'prepared' ? (
                  <div className="space-y-6" role="status" aria-live="polite">
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-[#DCCCF5]/35 border border-[#BBA1E8]/60">
                      <CheckCircle2 className="w-6 h-6 text-[#17151B] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-[#17151B]">
                          EMAIL DRAFT PREPARED
                        </h3>
                        <p className="font-sans text-sm text-[#17151B]/80 leading-relaxed">
                          Your default email app was triggered with your brief addressed to{' '}
                          <span className="font-semibold text-[#17151B]">{CONTACT_EMAIL}</span>. Complete sending inside your email client — or copy your formatted brief below to paste manually.
                        </p>
                      </div>
                    </div>

                    <pre className="p-4 sm:p-5 rounded-xl bg-[#F6F1E9] border border-[#17151B]/12 text-xs sm:text-sm font-mono text-[#17151B]/85 whitespace-pre-wrap break-words leading-relaxed">
                      {preparedBriefText}
                    </pre>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={preparedMailto}
                        onClick={() => playClickSound?.()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17151B] text-[#F6F1E9] hover:bg-[#C9A45C] hover:text-[#17151B] font-mono text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>OPEN EMAIL APP</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#17151B]/20 bg-white hover:bg-[#DCCCF5]/35 text-[#17151B] font-mono text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer"
                      >
                        {copiedBrief ? (
                          <>
                            <Check className="w-4 h-4 text-[#C9A45C]" />
                            <span>BRIEF COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>COPY BRIEF</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-3 font-mono text-xs tracking-[0.14em] uppercase text-[#17151B]/65 hover:text-[#17151B] transition-colors cursor-pointer"
                      >
                        EDIT / NEW INQUIRY
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {status === 'error' && errorMessage && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                        <div className="space-y-2">
                          <p>{errorMessage}</p>
                          {preparedBriefText && (
                            <button
                              type="button"
                              onClick={handleCopyBrief}
                              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider underline"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              Copy Inquiry Brief
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-fullName"
                          className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                        >
                          Full Name <span className="text-[#C9A45C]">*</span>
                        </label>
                        <input
                          id="contact-fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          value={values.fullName}
                          onChange={(e) => handleFieldChange('fullName', e.target.value)}
                          onBlur={() => handleFieldBlur('fullName')}
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                          placeholder="Your full name"
                          className={`${inputBaseClass} ${getFieldBorderClass('fullName')}`}
                        />
                        {errors.fullName && (
                          <p
                            id="contact-fullName-error"
                            role="alert"
                            className="text-xs text-red-600 font-sans pt-0.5"
                          >
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                        >
                          Email Address <span className="text-[#C9A45C]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={values.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          onBlur={() => handleFieldBlur('email')}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          placeholder="you@example.com"
                          className={`${inputBaseClass} ${getFieldBorderClass('email')}`}
                        />
                        {errors.email && (
                          <p
                            id="contact-email-error"
                            role="alert"
                            className="text-xs text-red-600 font-sans pt-0.5"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company / Brand (Optional) */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-company"
                          className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                        >
                          Company / Brand{' '}
                          <span className="text-[#17151B]/50 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={values.company}
                          onChange={(e) => handleFieldChange('company', e.target.value)}
                          placeholder="Brand, channel or organisation"
                          className={`${inputBaseClass} ${getFieldBorderClass('company')}`}
                        />
                      </div>

                      {/* Type of Project */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-projectType"
                          className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                        >
                          Type of Project <span className="text-[#C9A45C]">*</span>
                        </label>
                        <select
                          id="contact-projectType"
                          name="projectType"
                          required
                          value={values.projectType}
                          onChange={(e) => handleFieldChange('projectType', e.target.value)}
                          onBlur={() => handleFieldBlur('projectType')}
                          aria-invalid={Boolean(errors.projectType)}
                          aria-describedby={
                            errors.projectType ? 'contact-projectType-error' : undefined
                          }
                          className={`${inputBaseClass} ${getFieldBorderClass('projectType')}`}
                        >
                          <option value="">Select type of project...</option>
                          {PROJECT_TYPE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p
                            id="contact-projectType-error"
                            role="alert"
                            className="text-xs text-red-600 font-sans pt-0.5"
                          >
                            {errors.projectType}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Estimated Budget (Optional) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-budget"
                        className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                      >
                        Estimated Budget{' '}
                        <span className="text-[#17151B]/50 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-budget"
                        name="budget"
                        type="text"
                        value={values.budget}
                        onChange={(e) => handleFieldChange('budget', e.target.value)}
                        placeholder="Optional — share an approximate range or write Flexible"
                        className={`${inputBaseClass} ${getFieldBorderClass('budget')}`}
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-details"
                        className="block font-mono text-xs tracking-[0.14em] uppercase text-[#17151B] font-medium"
                      >
                        Project Details <span className="text-[#C9A45C]">*</span>
                      </label>
                      <textarea
                        id="contact-details"
                        name="details"
                        required
                        rows={5}
                        value={values.details}
                        onChange={(e) => handleFieldChange('details', e.target.value)}
                        onBlur={() => handleFieldBlur('details')}
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={errors.details ? 'contact-details-error' : undefined}
                        placeholder="Tell me about the concept, deliverables, references or timeline..."
                        className={`${inputBaseClass} resize-y min-h-[130px] ${getFieldBorderClass(
                          'details'
                        )}`}
                      />
                      {errors.details && (
                        <p
                          id="contact-details-error"
                          role="alert"
                          className="text-xs text-red-600 font-sans pt-0.5"
                        >
                          {errors.details}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        aria-busy={status === 'submitting'}
                        data-cursor="SEND"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#17151B] text-[#F6F1E9] hover:bg-[#C9A45C] hover:text-[#17151B] disabled:opacity-60 font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>PREPARING EMAIL DRAFT...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <span className="font-mono text-[11px] tracking-[0.12em] text-[#17151B]/55">
                        OPENS DRAFT TO {CONTACT_EMAIL}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION D — DIRECT CONTACT DETAILS
      ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#F6F1E9] border-t border-[#17151B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
              <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                PREFER A DIRECT CONVERSATION?
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17151B]">
              OR REACH OUT DIRECTLY.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Email */}
            <div className="group relative md:col-span-2 lg:col-span-1 rounded-2xl bg-white/85 border border-[#17151B]/12 hover:border-[#C9A45C] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:bg-white">
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => playClickSound?.()}
                  aria-label={`Send email to ${CONTACT_EMAIL}`}
                  className="w-11 h-11 rounded-xl bg-[#DCCCF5]/45 border border-[#BBA1E8]/50 flex items-center justify-center text-[#17151B] group-hover:bg-[#17151B] group-hover:text-[#F6F1E9] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#17151B]/12 text-[10px] font-mono tracking-wider uppercase text-[#17151B]/70 hover:border-[#C9A45C] hover:text-[#17151B] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#C9A45C]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1.5">
                <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold">
                  EMAIL
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => playClickSound?.()}
                  data-cursor="EMAIL"
                  className="flex items-center justify-between gap-2 hover:text-[#6C41CE] transition-colors"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#17151B] break-all">
                    {CONTACT_EMAIL}
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#17151B]/45 group-hover:text-[#17151B] transition-colors" />
                </a>
              </div>
            </div>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound?.()}
              data-cursor="INSTA"
              className="group rounded-2xl bg-white/85 border border-[#17151B]/12 hover:border-[#C9A45C] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#DCCCF5]/45 border border-[#BBA1E8]/50 flex items-center justify-center text-[#17151B] group-hover:bg-[#17151B] group-hover:text-[#F6F1E9] transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#17151B]/40 group-hover:text-[#C9A45C] transition-colors" />
              </div>

              <div className="space-y-1.5">
                <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold">
                  INSTAGRAM
                </span>
                <span className="block font-display font-semibold text-base sm:text-lg text-[#17151B]">
                  @mr.pavan_creation
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound?.()}
              data-cursor="LINKEDIN"
              className="group rounded-2xl bg-white/85 border border-[#17151B]/12 hover:border-[#C9A45C] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#DCCCF5]/45 border border-[#BBA1E8]/50 flex items-center justify-center text-[#17151B] group-hover:bg-[#17151B] group-hover:text-[#F6F1E9] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#17151B]/40 group-hover:text-[#C9A45C] transition-colors" />
              </div>

              <div className="space-y-1.5">
                <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold">
                  LINKEDIN
                </span>
                <span className="block font-display font-semibold text-base sm:text-lg text-[#17151B]">
                  Pavan Parad
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION E — CLOSING STATEMENT
      ================================================================ */}
      <section className="py-20 sm:py-28 bg-[#17151B] text-[#F6F1E9] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F6F1E9] leading-[1.05]">
            GOOD IDEAS DESERVE{' '}
            <span className="font-serif italic font-semibold text-[#DCCCF5]">
              GREAT EXECUTION.
            </span>
          </h2>

          <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C9A45C]">
            HAVE SOMETHING IN MIND? LET&apos;S BRING IT TO LIFE.
          </p>

          <div className="pt-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                'Start a Conversation — MR. PAVAN CREATION'
              )}`}
              onClick={() => playClickSound?.()}
              data-cursor="EMAIL"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A45C] text-[#17151B] hover:bg-[#F6F1E9] font-mono text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg"
            >
              <span>START A CONVERSATION.</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ContactPage;
