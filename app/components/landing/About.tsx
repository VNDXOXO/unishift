export default function About() {
  return (
    <section
      className="scroll-mt-[88px] overflow-hidden bg-gradient-to-br from-[#171B60] to-[#252B7A] py-16 text-white md:py-[86px]"
      id="about"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-8 px-[22px] md:grid-cols-2 md:gap-16">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#80D9BE]">
            MORE THAN A PAYCHEQUE
          </div>
          <h2 className="my-3 font-[Manrope] text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.17] tracking-[-1.5px] text-white">
            Make your free time count.
          </h2>
          <p className="leading-[1.75] text-[#D3D6EC]">
            Part-time work can be a way to learn, grow and prepare for life
            after university. UniShift is designed to help you explore
            opportunities without losing sight of your studies.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {[
              "Earn while you study",
              "Develop practical skills",
              "Gain work experience",
              "Grow your confidence",
            ].map((benefit) => (
              <div
                className="flex items-center gap-2.5 text-[13px] text-[#F4F5FF]"
                key={benefit}
              >
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[rgba(88,191,165,.18)] font-extrabold text-[#80D9BE]">
                  ✓
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[22px] border border-white/15 bg-white/[.08] p-6">
          {[
            { label: "Your university life", value: "Comes first" },
            { label: "Class schedule", value: "Considered" },
            { label: "Work preferences", value: "Personalised" },
            {
              label: "Next opportunity",
              value: "Within reach ↗",
              highlight: true,
            },
          ].map((row, i, arr) => (
            <div
              className={`flex justify-between py-4 text-[13px] ${
                i < arr.length - 1 ? "border-b border-white/[.12]" : ""
              }`}
              key={row.label}
            >
              <span className="text-[#C4C8E4]">{row.label}</span>
              <b
                className={row.highlight ? "text-[#80D9BE]" : "text-white"}
              >
                {row.value}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
