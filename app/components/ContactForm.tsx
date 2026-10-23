"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../content";

type Field = "name" | "email" | "organization" | "message";
type Errors = Partial<Record<Field, string>>;

function validate(data: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "That email looks incomplete. Check for a missing @ or domain.";
  if (data.message.trim().length < 10)
    errors.message = "Please add a short message (at least 10 characters).";
  return errors;
}

// No backend yet: composes a pre-filled email in the visitor's mail app.
// Swap handleSubmit for a server action or form service when one is chosen.
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const read = (form: HTMLFormElement): Record<Field, string> => {
    const fd = new FormData(form);
    return {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.currentTarget.form) return;
    const field = e.currentTarget.name as Field;
    const next = validate(read(e.currentTarget.form));
    setErrors((prev) => ({ ...prev, [field]: next[field] }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = read(form);
    const next = validate(data);
    setErrors(next);
    const firstInvalid = (Object.keys(next) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const subject = `Conversation request from ${data.name}${data.organization ? ` (${data.organization})` : ""}`;
    const body = `${data.message}\n\n${data.name}\n${data.email}${data.organization ? `\n${data.organization}` : ""}`;
    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setStatus("sent");
  };

  const fieldProps = (name: Field) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
    onBlur,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="f-name">Name *</label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          {errors.name && (
            <p id="f-name-err" className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email *</label>
          <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
          {errors.email && (
            <p id="f-email-err" className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-organization">Organization</label>
        <input type="text" autoComplete="organization" {...fieldProps("organization")} />
      </div>
      <div className="field">
        <label htmlFor="f-message">Message *</label>
        <textarea rows={4} required {...fieldProps("message")} />
        {errors.message && (
          <p id="f-message-err" className="field-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn btn--light">
          Send message
          <span aria-hidden="true">→</span>
        </button>
        <p className="footnote" aria-live="polite">
          {status === "sent"
            ? "Your email app should open with the message ready to send."
            : "* Required. Opens your email app with the message prefilled."}
        </p>
      </div>
    </form>
  );
}
