import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!values.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-colors duration-200";
  const inputOk =
    "border-border/50 focus:border-primary/60 focus:ring-1 focus:ring-primary/30";
  const inputErr =
    "border-destructive/60 focus:border-destructive/80 focus:ring-1 focus:ring-destructive/30";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb orb-green w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-2xl relative z-10">
        {/* Header */}
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="scroll-reveal delay-100 card-glass p-8 rounded-2xl">
          {submitted ? (
            <div
              className="flex flex-col items-center gap-4 py-8 text-center"
              data-ocid="contact-success"
            >
              <CheckCircle2 className="w-14 h-14 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                We&apos;ll get back to you within 24 hours. In the meantime,
                feel free to explore our{" "}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary hover:underline font-medium"
                >
                  FAQ section
                </button>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-2 btn-neon-outline px-6 py-2 rounded-xl text-sm font-semibold"
                data-ocid="contact-reset"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact-form"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Trader"
                  autoComplete="name"
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                  data-ocid="contact-name"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@trading.com"
                  autoComplete="email"
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                  data-ocid="contact-email"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trading goals or any questions you have..."
                  className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-none`}
                  data-ocid="contact-message"
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                data-ocid="contact-submit"
                className="w-full btn-neon py-3.5 rounded-xl text-sm font-bold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
