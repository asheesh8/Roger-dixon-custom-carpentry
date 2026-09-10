'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Phone } from 'lucide-react';

const EMAIL = 'rogerdixoncarpentry@gmail.com';
const PHONE_HREF = 'tel:+17866915247';

const JOBS = [
  'Trim & finishing',
  'Stairs & flooring',
  'Decks & porches',
  'Doors & windows',
  'Remodel or repair',
  'Not sure yet',
];

type State = { name: string; phone: string; email: string; job: string; note: string };
const EMPTY: State = { name: '', phone: '', email: '', job: JOBS[0], note: '' };

/**
 * Sends the enquiry through the visitor's own mail app, so the form works with
 * no backend and no third-party account. To capture leads server-side instead,
 * replace the body of `send` with a POST — everything else stays as it is.
 */
export default function LeadForm() {
  const [form, setForm] = useState<State>(EMPTY);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: event.target.value }));

  const hasName = form.name.trim().length > 1;
  const hasReply = form.phone.trim().length > 5 || form.email.includes('@');
  const valid = hasName && hasReply;

  const send = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setTouched(true);
    if (!valid) return;

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || '—'}`,
      `Email: ${form.email || '—'}`,
      `Job: ${form.job}`,
      '',
      form.note || '(no details added)',
    ].join('\n');

    window.location.href =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent(`Job enquiry — ${form.name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <output className="lead-done">
        <span className="lead-tick">
          <Check size={26} aria-hidden="true" />
        </span>
        <h3>That&rsquo;s on its way.</h3>
        <p>
          Your mail app should be open with the details filled in &mdash; press
          send and Roger will come back to you. In a hurry?
        </p>
        <a className="btn btn-gold" href={PHONE_HREF}>
          <Phone size={16} aria-hidden="true" /> Call 786-691-5247
        </a>
        <button
          type="button"
          className="lead-reset"
          onClick={() => {
            setForm(EMPTY);
            setTouched(false);
            setSent(false);
          }}
        >
          Send another
        </button>
      </output>
    );
  }

  return (
    <form className="lead-form" onSubmit={send} noValidate>
      <div className="field">
        <label htmlFor="lead-name">Your name</label>
        <input
          id="lead-name"
          name="name"
          autoComplete="name"
          placeholder="Who am I speaking to?"
          value={form.name}
          onChange={set('name')}
          aria-invalid={touched && !hasName}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="lead-phone">Phone</label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Best number"
            value={form.phone}
            onChange={set('phone')}
            aria-invalid={touched && !hasReply}
          />
        </div>
        <div className="field">
          <label htmlFor="lead-email">Email</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Optional"
            value={form.email}
            onChange={set('email')}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="lead-job">What&rsquo;s the job?</label>
        <select id="lead-job" name="job" value={form.job} onChange={set('job')}>
          {JOBS.map((job) => (
            <option key={job}>{job}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="lead-note">Tell Roger about it</label>
        <textarea
          id="lead-note"
          name="note"
          rows={4}
          placeholder="Rough size, the room, when you'd like it done…"
          value={form.note}
          onChange={set('note')}
        />
      </div>

      {touched && !valid && (
        <p className="field-error" role="alert">
          Leave a name and one way to reach you &mdash; a phone number or an
          email.
        </p>
      )}

      <button type="submit" className="btn btn-gold lead-submit">
        Send it to Roger <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="lead-small">
        Goes straight to {EMAIL}. No newsletter, no forms after this one.
      </p>
    </form>
  );
}
