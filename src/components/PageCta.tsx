import { ArrowUpRight } from "lucide-react";

interface PageCtaProps {
  eyebrow: string;
  heading: string;
  description: string;
  buttonLabel: string;
}

export default function PageCta({
  eyebrow,
  heading,
  description,
  buttonLabel,
}: PageCtaProps) {
  return (
    <section className="bg-[#f7f8f5] px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 overflow-hidden bg-navy px-6 py-10 sm:px-10 sm:py-14 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-16 lg:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[145px] -right-2 font-display text-[320px] font-normal leading-none text-white/[0.035] sm:-bottom-[210px] sm:right-6 sm:text-[420px]"
        >
          K
        </span>

        <div className="relative z-10 max-w-[760px] md:flex-1">
          <p className="mb-4 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e2c36d] sm:text-[10px]">
            <span className="h-px w-10 bg-[#e2c36d]" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px]">
            {heading}
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>
        </div>

        <a
          href="/contact#consultation"
          className="group relative z-10 inline-flex min-h-14 w-fit min-w-[220px] shrink-0 items-center justify-between gap-5 self-start border border-gold bg-gold px-6 py-4 text-[9px] font-medium uppercase tracking-[0.16em] text-navy shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-[background-color,border-color,box-shadow] hover:border-[#c5a04b] hover:bg-[#c5a04b] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] md:self-center"
        >
          {buttonLabel}
          <span className="grid h-8 w-8 place-items-center bg-navy/10">
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
