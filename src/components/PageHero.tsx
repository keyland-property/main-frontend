import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  id?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref = "/contact#consultation",
  id,
}: PageHeroProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-[calc(100svh-88px)] items-center overflow-hidden border-b border-[#dce5dc] bg-[#edf2ec] text-navy"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="flex flex-col items-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-terracotta sm:text-[10px]">
            <span className="h-px w-9 bg-terracotta" />
            {eyebrow}
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.04] tracking-[-0.035em] text-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-[700px] text-sm leading-7 text-muted sm:text-[15px]">
            {description}
          </p>
          <a
            href={actionHref}
            className="group mt-7 inline-flex min-h-12 items-center justify-center gap-4 border border-gold bg-gold px-6 py-3 text-[9px] font-medium uppercase tracking-[0.17em] text-navy shadow-[0_8px_22px_rgba(135,101,31,0.16)] transition-[background-color,box-shadow] hover:bg-[#c5a04b] hover:shadow-[0_12px_28px_rgba(135,101,31,0.23)]"
          >
            {actionLabel}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </a>
        </div>
      </div>
    </section>
  );
}
