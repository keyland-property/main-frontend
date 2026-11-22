const steps = [
  {
    title: "Consultation & Strategy",
    description: "Clarify your goals, currency pathways, and property requirements with our Colombo or Toronto advisory team.",
  },
  {
    title: "Title Verification & Due Diligence",
    description: "Coordinate title-chain review, street-line confirmation, and relevant local authority checks.",
  },
  {
    title: "Execution & Turnkey Delivery",
    description: "Coordinate documentation, transaction milestones, handover, or development commencement.",
  },
  {
    title: "Governance & Ongoing Support",
    description: "Continue with property oversight, clear reporting, rental support, and periodic portfolio reviews.",
  },
];

export default function ExecutionProcess() {
  return (
    <section id="alliance" className="border-y border-[#dce5dc] bg-[#edf2ec] py-20 text-navy sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-terracotta">Bilateral execution protocol</p>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] sm:text-[42px]">From Cross-Border Inquiry to Clear Title</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            A practical four-step framework designed to bring structure and clarity to property transactions.
          </p>
        </div>
        <ol className="grid gap-px bg-[#dce5dc] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-[#f7f8f5] p-6 sm:p-7">
              <span className="font-display text-[25px] font-normal text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-[21px] font-normal leading-tight">{step.title}</h3>
              <p className="mt-3 text-xs leading-6 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
