interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`${light ? "text-white" : "text-navy"} ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-4 inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.24em] ${light ? "text-[#e2c36d]" : "text-gold"}`}>
          <span className={`h-px w-8 ${light ? "bg-[#e2c36d]" : "bg-gold"}`} />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-normal leading-[1.12] tracking-[-0.025em] sm:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-sm leading-7 ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
