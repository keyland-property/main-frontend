import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock3, Globe2, ShieldCheck } from "lucide-react";
import { submitConsultation } from "../api/contentApi";

export default function ServiceConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      await submitConsultation({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        office: String(data.get("office") || ""),
        interest: String(data.get("interest") || ""),
        message: String(data.get("message") || ""),
      });
      form.reset();
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Your request could not be submitted. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="consultation" className="bg-[#f7f8f5] py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end lg:mb-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-terracotta">
              <span className="h-px w-8 bg-terracotta" />
              Send a message
            </p>
            <h2 className="max-w-[380px] font-display text-[38px] font-normal leading-[1.08] text-navy sm:text-[48px]">
              Begin the conversation.
            </h2>
          </div>
          <p className="max-w-[510px] text-sm leading-7 text-muted md:justify-self-end">
            Share a little about your property or plans. Our advisory team will be
            in touch to help you decide on the right next step.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid gap-x-7 sm:grid-cols-2">
              <label className="mb-5 block">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Full name</span>
                <input name="name" autoComplete="name" required placeholder="Your name" className="mt-1.5 block w-full border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors placeholder:text-[#68756c] focus:border-terracotta focus:ring-0" />
              </label>
              <label className="mb-5 block">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Email address</span>
                <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="mt-1.5 block w-full border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors placeholder:text-[#68756c] focus:border-terracotta focus:ring-0" />
              </label>
              <label className="mb-5 block">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Phone / WhatsApp</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+94 / +1" className="mt-1.5 block w-full border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors placeholder:text-[#68756c] focus:border-terracotta focus:ring-0" />
              </label>
              <label className="mb-5 block">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Preferred office</span>
                <select name="office" defaultValue="Colombo" className="mt-1.5 block w-full cursor-pointer border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors focus:border-terracotta focus:ring-0">
                  <option>Colombo</option>
                  <option>Toronto</option>
                  <option>Online meeting</option>
                </select>
              </label>
              <label className="mb-5 block sm:col-span-2">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Subject</span>
                <select name="interest" defaultValue="" required className="mt-1.5 block w-full cursor-pointer border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors focus:border-terracotta focus:ring-0">
                  <option value="" disabled>Select a service</option>
                  <option>Property development</option>
                  <option>Property management</option>
                  <option>Investment advisory</option>
                  <option>Property sales or rentals</option>
                  <option>Legal, title, or escrow coordination</option>
                </select>
              </label>
              <label className="mb-5 block sm:col-span-2">
                <span className="block text-[8px] font-medium uppercase leading-5 tracking-[0.19em] text-[#68756c]">Message</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="How can we help?"
                  className="mt-1.5 block min-h-[96px] w-full resize-y border-0 border-b border-[#dce5dc] bg-transparent px-0 py-2 text-xs font-light leading-relaxed text-ink outline-none transition-colors placeholder:text-[#68756c] focus:border-terracotta focus:ring-0"
                />
              </label>
            </div>

            {error && <p role="alert" className="mt-5 border-l-2 border-rose-600 bg-rose-50 p-3 text-sm text-rose-800">{error}</p>}
            {submitted && (
              <p role="status" className="mt-5 border-l-2 border-emerald-700 bg-emerald-50 p-3 text-sm text-emerald-800">
                Thank you. Your message has been received and our advisory team will be in touch.
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#dce5dc] pt-5">
              <p className="max-w-[260px] text-[10px] leading-5 text-muted">
                <ShieldCheck size={13} className="mr-1 inline text-terracotta" />
                Your information is shared with our advisory team for this enquiry.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex min-h-11 items-center gap-3 bg-gold px-6 py-3 text-[9px] font-medium uppercase tracking-[0.17em] text-navy transition-colors hover:bg-[#c5a04b] disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? "Sending message..." : "Send message"}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>

          <div className="relative min-h-[340px] overflow-hidden border border-[#dce5dc] bg-[#edf2ec] sm:min-h-[420px]">
            <iframe
              title="Map showing the Keyland Properties Colombo office"
              src="https://maps.google.com/maps?q=Level%204%2C%20Keyland%20House%2C%20Colombo%2003%2C%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.35]"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 border border-[#dce5dc] bg-[#f7f8f5]/95 px-4 py-3 shadow-sm">
              <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-terracotta">Visit Keyland</p>
              <p className="mt-1 font-display text-base text-navy">Colombo 03, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#dce5dc] pt-5 text-[10px] text-muted">
          <span className="inline-flex items-center gap-2"><Clock3 size={13} className="text-terracotta" /> Colombo · 9 AM–6 PM IST</span>
          <span className="inline-flex items-center gap-2"><Globe2 size={13} className="text-terracotta" /> Toronto desk by appointment</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 size={13} className="text-terracotta" /> Property and cross-border advisory</span>
        </div>
      </div>
    </section>
  );
}
