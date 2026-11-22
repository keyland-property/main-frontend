import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";
import ServiceConsultation from "../components/ServiceConsultation";

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+94 11 234 5678",
    href: "tel:+94112345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@keylandproperties.lk",
    href: "mailto:info@keylandproperties.lk",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Colombo 03, Sri Lanka",
    href: "https://maps.google.com/?q=Level+4+Keyland+House+Colombo+03+Sri+Lanka",
  },
  {
    icon: Clock3,
    label: "Consultations",
    value: "Colombo · 9 AM–6 PM IST",
    href: "#consultation",
  },
];

const questions = [
  {
    question: "Can I enquire from overseas?",
    answer:
      "Yes. Keyland supports domestic and diaspora clients through its Colombo and Toronto advisory desks.",
  },
  {
    question: "What can I discuss with the team?",
    answer:
      "You can ask about property development, management, sales and rentals, investment advisory, or title and escrow coordination.",
  },
  {
    question: "How do I arrange a consultation?",
    answer:
      "Send a message using the form and choose Colombo, Toronto, or an online meeting. Toronto consultations are arranged by appointment.",
  },
];

export default function ContactPage() {
  return (
    <>
      <main id="home">
        <section className="bg-[#edf2ec]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-14 lg:py-24">
            <div className="flex flex-col items-center">
              <p className="mb-5 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-terracotta">
                <span className="h-px w-8 bg-terracotta" />
                Contact Keyland
              </p>
              <h1 className="max-w-[900px] font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.02] tracking-[-0.035em] text-navy">
                Let’s talk about
                <span className="block text-terracotta">what comes next.</span>
              </h1>
              <p className="mt-6 max-w-[700px] text-sm leading-7 text-muted sm:text-base">
                Tell us what you are looking for. Our Colombo and Toronto advisory
                team will help you explore your options and find a clear path forward.
              </p>
              <a
                href="#consultation"
                className="group mt-7 inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-[9px] font-medium uppercase tracking-[0.17em] text-navy transition-colors hover:bg-[#c5a04b]"
              >
                Send us a message
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Keyland contact information" className="border-y border-[#dce5dc] bg-[#f7f8f5]">
          <div className="mx-auto grid max-w-[1440px] divide-y divide-[#dce5dc] px-5 sm:px-8 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-14">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("https://") ? "_blank" : undefined}
                rel={href.startsWith("https://") ? "noreferrer" : undefined}
                className="group flex min-h-[112px] items-start gap-4 py-6 md:px-5 lg:px-6"
              >
                <Icon size={16} className="mt-1 shrink-0 text-terracotta" />
                <span className="min-w-0">
                  <span className="block text-[8px] font-medium uppercase tracking-[0.2em] text-[#68756c]">
                    {label}
                  </span>
                  <span className="mt-2 block font-display text-[17px] leading-snug text-navy transition-colors group-hover:text-terracotta">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <ServiceConsultation />

        <section className="bg-[#87651f] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-14">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/75">
                <span className="h-px w-8 bg-white/70" />
                Good to know
              </p>
              <h2 className="max-w-[300px] font-display text-[42px] font-normal leading-[1.05] sm:text-[50px]">
                A few helpful details
              </h2>
            </div>

            <div className="border-t border-white/30">
              {questions.map(({ question, answer }, index) => (
                <details key={question} className="group border-b border-white/30 py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-normal marker:content-none sm:text-2xl">
                    {question}
                    <span className="shrink-0 font-sans text-xl font-light transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="max-w-[680px] pt-4 text-xs leading-6 text-white/80">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
