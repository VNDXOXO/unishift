const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Tell us about your skills, interests, preferred locations and the kind of part-time work you're looking for.",
  },
  {
    number: "02",
    title: "Share your availability",
    description:
      "Add your university timetable and let the platform help identify potential free time for work.",
  },
  {
    number: "03",
    title: "Find your shift",
    description:
      "Explore suitable job opportunities, review the details and apply for the roles that interest you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="scroll-mt-[88px] py-16 md:py-[86px]"
      id="how-it-works"
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div className="mx-auto mb-11 max-w-[650px] text-center">
          <div className="text-xs font-extrabold uppercase tracking-[1.5px] text-mint-dark">
            GET STARTED IN THREE STEPS
          </div>
          <h2 className="my-3 font-[Manrope] text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.17] tracking-[-1.5px] text-navy">
            Your next opportunity is closer than you think
          </h2>
          <p className="text-[15px] leading-[1.7] text-muted">
            A simple process designed around the way university students plan
            their week.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              className="relative rounded-[18px] border border-line bg-white p-7"
              key={step.number}
            >
              <div className="mb-5 font-[Manrope] text-[35px] font-extrabold text-[#D4F0E6]">
                {step.number}
              </div>
              <h3 className="mb-2 font-[Manrope] text-lg font-extrabold tracking-tight text-navy">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
