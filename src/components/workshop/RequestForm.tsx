import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TELEGRAM_URL, WHATSAPP_URL } from "./contact";

const withoutControlCharacters = (message = "Remove control characters") =>
  z.string().refine((value) => !/[\p{Cc}\p{Cf}]/u.test(value), message);

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength, `Keep this under ${maxLength} characters`)
    .and(withoutControlCharacters());

export const workshopRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Enter your name")
    .max(100, "Keep your name under 100 characters")
    .and(withoutControlCharacters()),
  company: optionalText(120),
  teamSize: z
    .string()
    .trim()
    .min(1, "Enter your team size")
    .max(6, "Enter a valid team size")
    .regex(/^\d+$/, "Use a whole number")
    .refine((value) => Number(value) >= 1, "Team size must be at least 1"),
  preferredDate: optionalText(30),
  notes: optionalText(1000),
});

export type WorkshopRequest = z.infer<typeof workshopRequestSchema>;

export const buildWorkshopWhatsAppMessage = (request: WorkshopRequest) => {
  const lines = [
    "Hi! I'd like to book a Christmas macramé workshop.",
    `Name: ${request.name}`,
    request.company ? `Company: ${request.company}` : null,
    `Team size: ${request.teamSize}`,
    request.preferredDate ? `Preferred date: ${request.preferredDate}` : null,
    request.notes ? `Notes: ${request.notes}` : null,
  ];

  return lines.filter((line): line is string => Boolean(line)).join("\n");
};

const initialValues: WorkshopRequest = {
  name: "",
  company: "",
  teamSize: "",
  preferredDate: "",
  notes: "",
};

type FieldName = keyof WorkshopRequest;
type FieldErrors = Partial<Record<FieldName, string>>;

const RequestForm = () => {
  const [values, setValues] = useState<WorkshopRequest>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const teamSizeRef = useRef<HTMLInputElement>(null);
  const preferredDateRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const fieldRefs = {
    name: nameRef,
    company: companyRef,
    teamSize: teamSizeRef,
    preferredDate: preferredDateRef,
    notes: notesRef,
  };

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as FieldName;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = workshopRequestSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      const firstInvalidField = (Object.keys(fieldRefs) as FieldName[]).find((field) => nextErrors[field]);
      if (firstInvalidField) fieldRefs[firstInvalidField].current?.focus();
      return;
    }

    const confirmed = workshopRequestSchema.safeParse(result.data);
    if (!confirmed.success) return;

    const message = buildWorkshopWhatsAppMessage(confirmed.data);
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClassName =
    "mt-2 h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-foreground outline-none transition-[box-shadow] placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const errorProps = (field: FieldName) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-2xl text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="workshop-name" className="text-sm font-medium">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            ref={nameRef}
            id="workshop-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={updateField}
            className={inputClassName}
            {...errorProps("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-sm text-accent">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="workshop-company" className="text-sm font-medium">
            Company
          </label>
          <input
            ref={companyRef}
            id="workshop-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={values.company}
            onChange={updateField}
            className={inputClassName}
            {...errorProps("company")}
          />
          {errors.company && (
            <p id="company-error" role="alert" className="mt-2 text-sm text-accent">
              {errors.company}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="workshop-team-size" className="text-sm font-medium">
            Team size <span aria-hidden="true">*</span>
          </label>
          <input
            ref={teamSizeRef}
            id="workshop-team-size"
            name="teamSize"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={values.teamSize}
            onChange={updateField}
            className={inputClassName}
            {...errorProps("teamSize")}
          />
          {errors.teamSize && (
            <p id="teamSize-error" role="alert" className="mt-2 text-sm text-accent">
              {errors.teamSize}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="workshop-preferred-date" className="text-sm font-medium">
            Preferred date
          </label>
          <input
            ref={preferredDateRef}
            id="workshop-preferred-date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={updateField}
            className={inputClassName}
            {...errorProps("preferredDate")}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" role="alert" className="mt-2 text-sm text-accent">
              {errors.preferredDate}
            </p>
          )}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="workshop-notes" className="text-sm font-medium">
          Notes
        </label>
        <textarea
          ref={notesRef}
          id="workshop-notes"
          name="notes"
          rows={4}
          maxLength={1000}
          value={values.notes}
          onChange={updateField}
          className={`${inputClassName} h-auto resize-y`}
          {...errorProps("notes")}
        />
        {errors.notes && (
          <p id="notes-error" role="alert" className="mt-2 text-sm text-accent">
            {errors.notes}
          </p>
        )}
      </div>
      <div className="mt-7 text-center">
        <Button type="submit" variant="cta" size="lg">
          Send request via WhatsApp
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            or send via Telegram
          </a>
        </p>
      </div>
    </form>
  );
};

export default RequestForm;
