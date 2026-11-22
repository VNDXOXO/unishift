const features = [
  {
    icon: "▦",
    title: "Timetable-aware matching",
    description:
      "Use your university timetable and availability to identify working hours that may fit around your classes.",
  },
  {
    icon: "⌖",
    title: "Opportunities nearby",
    description:
      "Discover part-time roles in locations that work for your daily routine and travel preferences.",
  },
  {
    icon: "◷",
    title: "Flexible shifts",
    description:
      "Explore different working hours and job types that can fit around your academic commitments.",
  },
  {
    icon: "↗",
    title: "Build real experience",
    description:
      "Take steps towards financial independence, practical skills and future career opportunities.",
  },
];

export default function Features() {
  return (
    <section
      className="scroll-mt-[88px] bg-surface py-16 md:py-[86px]"
      id="features"
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        {/* Section header */}
        <div className="mx-auto mb-11 max-w-[650px] text-center">
          <div className="text-xs font-extrabold uppercase tracking-[1.5px] text-mint-dark">
            WHY UNISHIFT
          </div>
          <h2 className="my-3 font-[Manrope] text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.17] tracking-[-1.5px] text-navy">
            A better way to find your next shift
          </h2>
          <p className="text-[15px] leading-[1.7] text-muted">
            Finding a job shouldn&apos;t mean compromising your education.
            UniShift helps bring suitable opportunities and student schedules
            together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              className="rounded-[18px] border border-[#EDF0F5] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D8F0E7] hover:shadow-[0_18px_55px_rgba(23,27,96,.10)]"
              key={feature.title}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-[14px] bg-mint-pale text-xl">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-[Manrope] text-[17px] font-extrabold tracking-tight text-navy">
                {feature.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
